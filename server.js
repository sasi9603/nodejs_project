// const fs=require("fs");
// const http=require("http");

// const server=http.createServer((req,res)=>{
//     // console.log(req.url);
    // res.writeHead(200,{"Content-Type":"text/html"});
    // const readHtml = fs.createReadStream(__dirname + "/index.html","utf8");
    // readHtml.pipe(res);
//     res.writeHead(200,{'Content-Type':'application/json'});
//     var users=[
//         {
//             name:"anu",
//             age:30,
//             company:"ibm",
//             salary:2000,
//             designation:"html developer",
//             doj:new Date().toString(),
//             location:"bang",
//             education:"btech",


//         },
//         {
//             name:"anu",
//             age:30,
//             company:"ibm",
//             salary:2000,
//             designation:"html developer",
//             doj:new Date().toString(),
//             location:"bang",
//             education:"btech",

//         }
        
//     ];
//     res.end(JSON.stringify(users));
// });
// const port = 4000;
// server.listen(port, err=>{
//     if(err) throw err;
//     console.log(`app is running on ${port}`);

// });

// const fs=require("fs");
// const http=require("http");
// const server=http.createServer((req,res)=>{
//     if(req.url ==="/home" || req.url=="/"){
//         res.writeHead(200,{"Content-Type":"text/html"});
//         fs.createReadStream(__dirname +"/index.html","utf8").pipe(res);
//     } else if(req.url == "/login"){
//         res.writeHead(200,{"Content-Type":"text/html"});
//         fs.createReadStream(__dirname+"/login.html","utf8").pipe(res);
//     }else if (req.url ==='/api/users'){
//         res.writeHead(200,{"Content-Type":"application/json"});
//         var users = [
//             {
//               name:"anu",
//               age:30,
//              company:"ibm",
//             salary:2000,
//              designation:"html developer",
//              doj:new Date().toString(),
//              location:"bang",
//              education:"btech",
//             }

//         ];
//         res.end(JSON.stringify(users))

//     }else{
//         res.writeHead(404,{"Content-Type":"text/html"});
//         fs.createReadStream(__dirname+"/pagenotfound.html","utf8").pipe(res);
//     }
// });
// const port =  process.env.PORT ||4000
//      server.listen(port, err=>{
//      if(err) throw err;
//    console.log(`app is running on ${port}`);

// });
const mongodb=require("mongodb").MongoClient;
const mongourl="mongodb://localhost:27017"
 const cloudMongoDBUrl="mongodbcloud your url username and your password";
mongodb.connect(cloudMongoDBUrl,{useUnifiedTopology:true},(err,db)=>{
    if(err) throw err;
    const dbName=db.db('fullstack');
    var users =[
        {
           objectid:"5de9d02ac3de298ed81de94f",
           id:6765060,
           number:6574,
           street:"Fourth",
           city:"gary",
           state:"IN",
        },
        {
           objectid:"5de9d0f2c3de298ed81deb4b",
           id:6765060,
           firstname:"Tomas",
           middle:"Diego",
           last:"ojeda",
           fullname:"Tomas Diego ojeda",
        }
    ];
    dbName.collection("users").insertMany(users,err =>{
        if(err)  throw err;
        console.log("database and collection inserted");
    });
});




















