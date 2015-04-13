var logger = require('koa-logger');
var router = require('koa-router');
var parse = require('co-body');
var views = require('koa-views');
var koa = require('koa');
var app = koa();

//console.log(app.env)

app.use(logger());
app.use(views( __dirname + '/public' ));

app.use(router(app));

app.get(/.*/, index );

function *index(next) {
	yield this.render('index');
}

// listen
app.listen(3000);
console.log('listening on port 3000');