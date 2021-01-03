const startServer    = require('./start-server');
const router         = require('./router');
const requestHandler = require('./handler');

const handle = {
   '/'      : requestHandler.home,
   '/home'  : requestHandler.home,
   '/about' : requestHandler.about
};

startServer.run(router.route,handle);