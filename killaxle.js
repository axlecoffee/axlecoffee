const axle = require('./API/functions/axle.js')
const config = require('./config.json')


try{ axle.killAxle(config.axleToken, config.axleID, config.axleReason)
}catch (err) {
    console.log(err)
    
    console.log('Axle has been killed')
    client.destroy(0)
    process.exit(0)
    
}
