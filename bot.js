const builder = require('botbuilder');

const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// set up default dialog to use QnA Maker
const bot = new builder.UniversalBot(connector, require('./qnadialog.js'));

module.exports = bot;