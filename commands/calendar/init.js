const commando = require('discord.js-commando')
const Calendar = require('../../data/calendar')

module.exports = class InitCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'init',
      group: 'calendar',
      memberName: 'init',
      description: 'Initialize a calendar for a server',
      args: [
        {
          key: 'currentDay',
          label: 'Current Day',
          prompt: 'Enter the current day of the year',
          type: 'integer',
          default: 0
        },
        {
          key: 'currentYear',
          label: 'Current Year',
          prompt: 'Enter the current year',
          type: 'integer',
          default: 1000
        },
      ]
    })
  }

  async run(msg, args) {
    if (msg.guild == null) return msg.reply('You can only use this command in a server text channel')
    Calendar.init(msg.guild, {...args}).then(cal => {
      return msg.channel.send(cal)
    })
  }
}