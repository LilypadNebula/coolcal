const Datastore = require('nedb')
const db = new Datastore({ filename: './data/calendars.db', autoload: true });
db.ensureIndex({fieldName: 'guild_id', unique: true})

module.exports.init = function(guild, calInfo){
  const guild_id = guild.id

  return new Promise((resolve, reject) => {
    db.find({guild_id}, function(err, docs){
      if (err) throw `Error on find: ${err.message}`
      if (docs.length < 1){
        console.log('Found None')
        db.insert({guild_id, ...calInfo}, function(err, doc){
          if (err) throw `Error on insert: ${err.message}`
          resolve('Calendar initialized')
        })
      }
      else {
        console.log('Found 1')
        resolve('Your calendar has already been initialized')
      }
    })

  })
}

module.exports.exists = function(guild_id){
  return new Promise((resolve, reject) => {
    db.find({guild_id}, function(err, docs){
      if (err) throw `Error on find: ${err.message}`
      if (docs.length < 1){
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}
