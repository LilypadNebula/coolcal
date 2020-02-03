const commando = require('discord.js-commando')

class MonthListArgumentType extends commando.ArgumentType {
  constructor(client) {
    super(client, 'monthlist')
  }

  validate(val) {
    return typeof val === 'string' && val.split(',').length > 0
  }

  parse(val) {
    return val.split(',').map(month => {
      return month.trim()[0].toUpperCase() + month.trim().slice(1)
    })
  }
}

module.exports = MonthListArgumentType