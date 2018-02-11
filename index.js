const path = require('path');
const Koa = require('koa');
const render = require('koa-ejs');

const app = new Koa();

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: false
});

app.use(function(ctx, next) {
  ctx.state = ctx.state || {};
  ctx.state.ip = ctx.ip;
  return next();
});

app.use(async function(ctx) {
  const audio = [{
    name: 'aaa111',
    singer: 'bbb111',
    src: '/ccc111'
  }, {
    name: 'aaa222',
    singer: 'bbb222',
    src: '/cccc222'
  }];
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