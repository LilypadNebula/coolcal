const Datastore = require('nedb')
const Calendar = require('./calendar')
const db = new Datastore({ filename: './data/months.db', autoload: true });

module.exports.new = (guild_id, name, days, order) => {
  return new Promise((resolve, reject) => {
    Calendar.exists(guild_id).then(exists => {
      if (!exists) resolve('You must initialize a calendar for this server first')
      db.insert({guild_id, name, days, order}, function (err, doc){
        if (err) throw 'Error on creating month: ' + err
        resolve(`Month ${name} created for your calendar`)
      })
    })
  })
}