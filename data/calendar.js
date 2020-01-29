const Datastore = require('nedb')
const db = new Datastore({ filename: './data/calendars.db', autoload: true });

module.exports.init = function(guild, calInfo){

  return new Promise((resolve, reject) => {
    db.find({guild}, function(err, docs){
      if (err) throw `Error on find: ${err.message}`
      if (docs.length < 1){
        console.log('Found None')
        db.insert({guild, ...calInfo}, function(err, doc){
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

