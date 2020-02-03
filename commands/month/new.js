const commando = require('discord.js-commando')
const Month = require('../../data/month')

module.exports = class NewMonthCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'newmonth',
      group: 'month',
      memberName: 'newmonth',
      description: 'Add a new month to a calendar',
      args: [
        {
          key: 'name',
          label: 'Name of Month',
          prompt: 'Enter the name of the month',
          type: 'string'
        },
        {
          key: 'days',
          label: 'Number of Days',
          prompt: 'Enter the number of days in the month',
          type: 'integer'
        },
        {
          key: 'order',
          label: 'Position of the month in a year',
          prompt: 'Enter the number this month holds in a year, e.g January would be 1, February would be 2',
          type: 'integer'
        }
      ]
    })
  }

  async run(msg, args) {
    if (msg.guild == null) return msg.reply('You can only use this command in a server text channel')
    Month.new(msg.guild.id, args.name, args.days, args.order).then(month => {
      return msg.channel.send(month)
    })
  }
}