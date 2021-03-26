require('dotenv').config();
const tmi = require('tmi.js');
doChatClears = true;

const client = new tmi.client({
    options: {debug: true},
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: process.env.TWITCHUSER,
        password: process.env.OAUTH
    },
    channels: [process.env.TWITCH_USERNAME]
});
client.connect();

client.on('message', (channel, tags, message, self) => {
    if(self) return;
    console.log(channel, tags, message, self);
})
client.on('connected', (address, port) => {
    client.action('cosmicpegasus34', 'Hello, Synaxarion has connected');
});

client.on('chat', (channel, user, message, self, tags, subscriber, name) => {
    if(self) return;
    const game = (res, body, callback) => {
        client.action('cosmicpegasus34', 'CosmicPegasus34 is streaming Just Chatting!');
    }
    setInterval(()=>{game()}, 420000);
    console.log(channel, message, tags, self);

    const clear = (res, body, callback) => {
        client.clear(channel);
    }
    setInterval(() => {clear()}, 500000);
});