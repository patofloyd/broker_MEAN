// Require modules
var m = {};
[
  "express",
  "path",
  "serve-favicon",
  "cookie-parser",
  "body-parser",
  "gulp",
  "mongresto"
].forEach(function(x){
  // store required modules in m
  m[x.replace(/\W/g,'')] = require(x);
});

// Standard Express boiler plate code
var app = m.express();
//app.use(favicon(__dirname + '/www/favicon.ico'));
app.use(m.bodyparser.json());
app.use(m.bodyparser.urlencoded({ extended: false }));
app.use(m.cookieparser());
app.use(m.express.static(m.path.join(__dirname, 'www')));

function funcX (moongose) {
  return [function (req, res){
    var property = moongose.model('Home');
    // console.log("params", req.query);
    property.find(req.query).count().exec(function(err,data){
      res.json(data);
      // console.log(data);
    });
    

  }];
}

var options = {
  // The MongoDB database to connect to
  dbName: "broker",
  customRoutes: [
  {
    path: "objekt-count",
    method: "get",
    controller: funcX


  }
  ]
};

// start mongresto
m.mongresto.init(app, options);
// start gulp LESS watch
require('./gulpfile.js');
m.gulp.start('watch');

// Route everything "else" (not "/api/**/*") to angular (in html5mode)
app.get('*', function (req, res) {
  res.sendFile('index.html', {root: './www'});
});



// Start up
var port = 3000;
app.listen(port, function(){
  console.log("Express server listening on port " + port);
});