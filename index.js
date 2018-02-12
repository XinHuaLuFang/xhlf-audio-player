const path = require('path');
const Koa = require('koa');
const render = require('koa-ejs');

const src = require('./config').src;
const walk = require('./walk');

const app = new Koa();

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: false
});

app.use(async function(ctx) {
  const audio = walk(src);
  await ctx.render('body', {
    audio
  });
});

app.listen(3000, () => {
  console.log('open http://localhost:3000');
});

app.on('error', function(err) {
  console.log(err.stack);
});