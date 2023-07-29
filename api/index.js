const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/Users.js");
const Place = require("./models/Places.js")
const bcrypt = require("bcrypt");
const ImageDownloader = require("image-downloader");
const multer = require('multer');
const fs = require('fs');
const Vehicle = require('./models/Vehicles.js');
const Package = require('./models/Packages.js');
const Booking = require('./models/Bookings.js');
const datefns = require("date-fns");

const bcryptSalt = bcrypt.genSaltSync(10);
delete mongoose.connection.models['Place'];
const app = express();
app.use(cors({credentials: true}));
app.use(express.json());
app.use('/uploads', express.static(__dirname+'/uploads'));

app.use(bodyParser.urlencoded({
    extended: true,
}));

mongoose.connect('mongodb+srv://anirudhsuma2003:xFLRhMBktwqTGpCB@cluster0.s0cm9xh.mongodb.net/?retryWrites=true&w=majority');



app.get("/test", (req, res)=>{
    res.json("test-ok");
});

app.post("/signup", async(req, res)=>{
    const {name, email, password, gender} = req.body;
    try {
        const myUser = await User.create({
            name: name,
            email: email,
            password: bcrypt.hashSync(password, bcryptSalt),
            gender: gender
        });
        res.json(myUser);
    } catch (err) {
        res.status(422).json(err);
    }
});

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
  

app.post("/login", async (req, res)=>{
    const {email, password} = req.body;
    myUserFound = await User.findOne({email});
   
      localStorage.setItem('email', email);
      console.log("in login: "+localStorage.getItem('email'));
    if (myUserFound) {
        const passOk = bcrypt.compareSync(password, myUserFound?.password);
        console.log(passOk);
        if (passOk) {
            res.status(201).json({message: "Password correct", user: myUserFound});
            localStorage.setItem('id', myUserFound?._id);
            
        }
        else{
            res.status(422).json({message: "Password wrong"})
        }
    }
    else{
        res.json({message: "User not found"});
    }
})

app.get("/profile", (req, res)=>{
    const {token} = req.cookies;
    console.log(token);
    if (token) {
        jwt.verify(token, jwtSecret, {}, async(err, user)=>{
            if (err) {
                throw err;
            } 
            console.log("user: "+user);
            req.app.locals.userDoc = await User.findById(user.id);
            res.json(userDoc); 
        })
    }
        else {
            res.json(null);
        }
    
})

app.post("/logout", (req, res)=>{
    localStorage.removeItem('email');
    res.cookie("token", '').json(true);
})



app.post("/upload-by-link", async(req, res)=>{
    const {link} = req.body;
    const newName = new Date().getDate() + "-"+new Date().getMonth()+ "-"+new Date().getFullYear()+ "-"+new Date().getTime()+".jpg";
    await ImageDownloader.image({
        url: link,
        dest: __dirname + '/uploads/' + newName,
    }).then(({ filename }) => {
        console.log('Saved to', filename); // saved to /path/to/dest/image.jpg
      })
      .catch((err) => console.error(err));
    res.json(newName);
})

const photosMiddleware = multer({dest: 'uploads'});

app.post("/upload", photosMiddleware.array('photos', 100), (req, res)=>{
    const uploadedFiles = [];
    for (let i = 0; i < req.files.length; i++) {
     const {path, originalname} = req.files[i];
     const parts = originalname.split('.');
     const newPath = path + '.' + parts[parts.length-1];
     fs.renameSync(path, newPath);
     uploadedFiles.push(newPath.replace("uploads", ""));
    }
    res.json(uploadedFiles);
})

app.post("/save-places", async(req, res,)=>{ 
    const {owner, title, address, addPhotos, description, checkIn, checkOut, price} = req.body;
    console.log(addPhotos);
    console.log(typeof(addPhotos[0]));
    const email = localStorage.getItem('email');
    console.log("In add place: "+email);
    const UserFound = await User.findOne({email});
    const id = UserFound?._id;


    console.log("Id: "+id);
            const placeDoc =   Place.create(({
                owner: id,
                title: title,
                address: address,
                description: description,
                photos: addPhotos,
                checkIn: checkIn,
                checkOut: checkOut, 
                price: price,
            }))
            res.json(id);     
    });

app.post("/save-vehicles", async(req, res,)=>{ 
    const {owner, driverName, vehicleName, addPhotos, description, seats, vehicleType, price} = req.body;
    console.log(vehicleName);
    console.log(typeof(addPhotos[0]));
    const email = localStorage.getItem('email');
    console.log("In add place: "+email);
    const UserFound = await User.findOne({email});
    const id = UserFound?._id;


    console.log("Id: "+id);
            const vehicleDoc =   Vehicle.create(({
                owner: owner,
                driverName: driverName,
                VehicleName: vehicleName,
                description: description,
                photos: addPhotos,
                seats: seats, 
                price: price,
                vehicleType: vehicleType,
            }))
            console.log({vehicleName});
            res.json(id);     
    });

app.post("/save-packages", async(req, res,)=>{ 
    const {owner, places, photos, description, price, days, title} = req.body;
    const email = localStorage.getItem('email');
    console.log("In add place: "+email);
    const UserFound = await User.findOne({email});
    const id = UserFound?._id;


    console.log("Id: "+id);
            const packageDoc =   Package.create(({
                owner: owner,
                title: title,
                description: description,
                days: days,
                price: price,
                photos: photos,
                places: places,
            }))
            res.json(id);     
    });

    app.get("/places", async(req, res)=>{
        const places = await Place.find();
        res.json(places);
    })

    app.get("/vehicles", async(req, res)=>{
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    })

    app.get("/packages", async(req, res)=>{
        const packages = await Package.find();
        res.json(packages);
    })

    app.post("/bookings", async(req, res)=>{
        
        const {customer, PackageId, VehicleId, PlaceId, startDate, endDate, what, price} = req.body;
        console.log({customer, PackageId, VehicleId, PlaceId, startDate, endDate, what, price});
        const email = localStorage.getItem('email');
        console.log(email);
        const myuser = await User.findOne({'email': email});
        console.log("user: "+myuser);
        const id = myuser._id;
        console.log("id: "+id);
        const doc = await Booking.create({
            customer: id,
            PackageId: PackageId,
            VehicleId: VehicleId,
            PlaceId: PlaceId,
            startDate: startDate,
            endDate: endDate,
            what: what,
        });
        res.json(doc);
    })

    app.get("/bookings", async(req, res)=>{
        const email = localStorage.getItem('email');
        console.log(email);
        const myuser = await User.findOne({'email': email});
        console.log("user: "+myuser);
        const id = myuser._id;
        console.log("id: "+id);
        const vehicles = await Booking.find({customer: id, what: "vehicle"}).populate('VehicleId');
        const places = await Booking.find({customer: id, what: "place"}).populate('PlaceId')
        const packages = await Booking.find({customer: id, what: "package"}).populate('PackageId');

        
        res.json({places: places, vehicles: vehicles, packages: packages});
    })




app.listen(4000);