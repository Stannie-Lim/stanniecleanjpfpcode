const port = process.env.PORT || 3000;
const { app, syncAndSeed } = require('./app');

syncAndSeed().then(() => app.listen(port, ()=> console.log(`listening on port ${port}`)));
