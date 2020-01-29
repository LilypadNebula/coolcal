const commando = require('discord.js-commando')
const Calendar = require('../../data/calendar')

module.exports = class SayCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'init',
      group: 'calendar',
      memberName: 'init',
      description: 'Initialize a calendar for a server',
    })
  }

  async run(msg) {
    const cal = new Calendar(msg.guild)
    return msg.reply('Calendar')
  }
}