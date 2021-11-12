const { Message, Client } = require("discord.js");

module.exports = {
    name: "help",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.channel.send({content: client.commands.map(x => x.name).join(' |')});
    },
};
