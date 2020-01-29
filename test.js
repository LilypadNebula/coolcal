const calendar = require('./data/calendar')

const temp = calendar.init('123')

temp.then(data => console.log(data))