/**
 * Imports
 */
const multilingualGreetings = require('./message_db');

const generateGreeting = () => {
    const msgId = Math.floor(Math.random()*multilingualGreetings.length)
    console.log(multilingualGreetings[msgId])
}

generateGreeting()
