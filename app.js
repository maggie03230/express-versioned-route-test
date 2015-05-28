'use strict';

var fs = require('fs');
var path = require('path');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');

var rootPath =__dirname;

var app = express();

// app config
app.set('root', rootPath);

//cors config
var whitelist = ['localhost'];
var corsOpts = {
  origin: function(origin, callback) {
    if (origin) {
      var originIsWhitelisted = false;
      for (var i = 0, len = whitelist.length; i < len; i++) {
        originIsWhitelisted = origin.indexOf(whitelist[i]) !== -1;
        if (originIsWhitelisted) break;
      }
      callback(null, originIsWhitelisted);
    }
    else {
      callback(null, true);
    }
  },
  methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
  credentials: true
};
app.use(cors(corsOpts));

//bodyParser config
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//morgan
app.use(morgan('dev'));

//walk controllers & routes
var controllers = {};

var walk = function(path, callback, folderFile) {
  fs.readdirSync(path).forEach(function(file) {
    var newPath = path + '/' + file;
    var stat = fs.statSync(newPath);
    if (stat.isFile()) {
      if (/(.*)\.(js$)/.test(file)) {
        if (callback) {
          callback(folderFile, file, newPath)
        } else {
          require(newPath);
        }
      }
    } else if (stat.isDirectory()) {
      walk(newPath, callback, file);
    }
  });
};
// var v1 = express.Router();
// var v2 = express.Router();
// v1.use('/user', express.Router()
//   .get('/:id', findUser));
 
// v2.use('/user', express.Router()
//   .get('/:id', findUser2));
 
// app.use('/v1', v1);
// app.use('/v2', v2);
// app.use('/', v2); // Set the default version to latest.
// 

var versions = ['v1_1', 'v1_3', 'v2_1'];

var routers = {};
versions.forEach(function(version) {
  //Set every attr in routers to be a router object;
  routers[version] = express.Router();
});
walk(path.join(rootPath, 'controllers'), function (version, file, path) {
  var ctrlName = file.split('.')[0];
  if(!controllers[ctrlName]) {
    controllers[ctrlName] = {};
  }
  controllers[ctrlName][version] = require(path)(app);
});

walk(path.join(rootPath, 'routes'), function (version, file, path) {
  var routeName = file.split('.')[0];
  var ctrl;
  if (controllers[routeName]) {
    ctrl = controllers[routeName];
  }
  require(path)(routers[version], ctrl);
});

app.use('/',routers['v1_1']);
versions.forEach(function(version) {
  app.use(version, routers[version]);
  // console.log(routers[version]);
});



app.listen(3003);
console.log('server is listening 3003.');
