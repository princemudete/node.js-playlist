// TEMPLATE ENGINES
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.get('/profile/:name', function(req, res) {
    var data = { age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing'] };
    res.render('profile', { person: req.params.name, data: data });
});

app.listen(3000);


// EXPRESS ROUTE PARAMS
// var express = require('express');
// var app = express();

// app.get('/', function(req, res) {
//     res.send('This is the homepage');
// });

// app.get('/contact', function(req, res) {
//     res.send('This is the contact page');
// });

// app.get('/profile/:name', function(req, res) {
//     res.send('You requested to see a profile with the name of ' + req.params.name);
// });

// app.listen(3000);


// PIPE STREAMS
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, res) {
//     console.log('request was made: ' + req.url);
//     // BASIC ROUTING
//     if (req.url === '/home' || req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     } else if (req.url === '/contact') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         fs.createReadStream(__dirname + '/contact.html').pipe(res);
//     } else if (req.url === '/api/ninjas') {
//         var ninjas = [{ name: 'ryu', age: 29 }, { name: 'yoshi', age: 32 }];
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(ninjas));
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         fs.createReadStream(__dirname + '/404.html').pipe(res);
    // } 
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.end('feed me popcorn');

    // SERVING JSON DATA
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // var myObj = {
    //     name: 'Ryu',
    //     job: 'Ninja',
    //     age: 29
    // };
    // res.end(JSON.stringify(myObj));
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // myReadStream.pipe(res);
// }); 

// server.listen(3000, '127.0.0.1');
// console.log('yo dawgs, now listening to port 3000');


// READABLE STREAMS 
// var http = require('http');
// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

// myReadStream.on('data', function(chunk) {
//     console.log('new chunk received:');
//     myWriteStream.write(chunk);
    // console.log(chunk);
// });


// CREATING A SERVER
// var http = require('http');

// var server = http.createServer(function(req, res) {
//     console.log('request was made: ' + req.url);
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end("Hey ninjas");
// });

// server.listen(3000, '127.0.0.1');
// console.log('yo dawgs, now listening to port 3000');


// CREATING AND REMOVING DIRECTORIES
// var fs = require('fs');

// fs.mkdirSync('stuff'); 
// fs.rmdirSync('stuff');

// fs.mkdir('stuff', function() {
//     fs.readFile('readMe.txt', 'utf8', function(err, data) {
//         fs.writeFile('./stuff/writeMe.txt', data);
//     });
// });

// Fixed version (Callback)
// fs.mkdir('stuff', function(err) {
//   if (err && err.code !== 'EEXIST') throw err; // ignore if folder already exists

//   fs.readFile('readMe.txt', 'utf8', function(err, data) {
//     if (err) throw err;

//     fs.writeFile('./stuff/writeMe.txt', data, function(err) {
//       if (err) throw err;
//       console.log('File written successfully!');
//     });
//   });
// });


// fs.unlink('./stuff/writeMe.txt', function() {
//     fs.rmdir('stuff');
// });

// fs.unlink('./stuff/writeMe.txt', (err) => {
//     // Ignore error if file doesn't exist
//     if (err && err.code !== 'ENOENT') throw err;

//     fs.rmdir('stuff', { recursive: true }, (err) => {
//         if (err) throw err;
//         console.log('Folder removed!');
//     });
// });


// READING AND WRITING FILES
// var fs = require('fs');

// fs.readFile('readme.txt', 'utf8', function(err, data) {
//     fs.writeFile('writeme.txt', data);
//     // console.log(data);
// });

// console.log("test");

// var readMe = fs.readFileSync("readme.txt", 'utf8');
// fs.writeFileSync("writeme.txt", readMe);
// console.log(readMe);

//code


// Event Emitter
// var events = require('events');
// var util = require('util');

// var Person = function(name) {
//     this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// var james = new Person('james');
// var mary = new Person('mary');
// var ryu = new Person('ryu');
// var people = [james, mary, ryu];

// people.forEach(function(person) {
//     person.on('speak', function(msg) {
//         console.log(person.name + ' said: ' + msg);
//     });
// });

// james.emit('speak', 'hey dudes');
// mary.emit('speak', 'hello world');
// ryu.emit('speak', 'I want a curry');


// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(msg) {
//     console.log(msg);
// });

// myEmitter.emit('someEvent', 'the event was emitted');

// MODULE PATTERNS
// var stuff = require('./stuff');

// console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
// console.log(stuff.adder(5, 6));
// console.log(stuff.adder(stuff.pi, 5));

// var time = 0;

// var timer = setInterval(function() {
//     time += 2;
//     console.log(time + ' seconds have passed');
//     if (time > 5) {
//         clearInterval(timer);
//     }
// }, 2000);

// console.log(__dirname);
// console.log(__filename);

//normal function statement
// function sayHi() {
//     console.log('hi');
// }
// sayHi();

// function callFunction(fun) {
//     fun();
// }

// //function expression
// var sayBye = function() {
//     console.log('bye');
// };

// callFunction(sayBye);