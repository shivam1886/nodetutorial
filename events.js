const events = require('events')

const eventEmitter = new events.EventEmitter()

const ringWell = function(arg){
    console.log('Ring the well ' + arg)
}

eventEmitter.on('knowk',ringWell);
eventEmitter.emit('knowk','Hello World');
