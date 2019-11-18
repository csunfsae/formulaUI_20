import io from 'socket.io-client';

const socket = io('https://api.matadormotorsports.racing/');


function subscribeToGPS(cb) {
    socket.on('location', data=> cb(null, data));
    
}

export { subscribeToGPS };
