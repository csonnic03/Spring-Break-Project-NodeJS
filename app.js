const tmi = require('tmi.js');

const options = {
    options: {
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'Synaxarion',
        password: 'oauth:an9ohfqj74p4f5uq7cqfg5u3tcdgjl',
    },
    channels: ['cosmicpegasus34'],
};
const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    client.action('cosmicpegasus34', 'Hello, Synaxarion has connected');
});

client.on('chat', (channel, user, message, self, uptime) => {
    if(message === '!game') {
        client.action('cosmicpegasus34', 'CosmicPegasus34 is playing Fortnite!');
    }
    /*if(channel === '!uptime') {
        client.action('cosmicpegasus34', `cosmicpegasus34 has been streaming for ${uptime['uptime']}`)
    }*/
    for(i=0;i<=1; i++){
        client.action('cosmicpegasus34', `Hello ${user['display-name']}`);
    }

});