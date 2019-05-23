var logger = require('./logger');
logger.log('message');

const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener

emitter.on('MessageLogged', function(){
    console.log('Register a listener');
});

//event raise
emitter.emit('MessageLogged');






