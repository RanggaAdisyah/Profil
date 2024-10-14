const { Elysia } = require('elysia');

const app = new Elysia();

app
  .get('/', (ctx) => {
    return ctx.sendFile('public/index.html');
  })
  .get('/styles.css', (ctx) => {
    return ctx.sendFile('public/styles.css');
  })
  .listen(3000, () => {
    console.log('Server running at http://localhost:3000');
  });
