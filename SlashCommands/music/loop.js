const player = require("../../client/player");
const { QueueRepeatMode } = require("discord-player");
const { Client, CommandInteraction } = require('discord.js')

module.exports = {
    name: "loop",
    description: "Sets loop mode",
    options: [
        {
            name: "mode",
            type: "INTEGER",
            description: "Loop type",
            required: true,
            choices: [
                {
                    name: "Off",
                    value: QueueRepeatMode.OFF
                },
                {
                    name: "Track",
                    value: QueueRepeatMode.TRACK
                },
                {
                    name: "Queue",
                    value: QueueRepeatMode.QUEUE
                },
                {
                    name: "Autoplay",
                    value: QueueRepeatMode.AUTOPLAY
                }
            ]
        }
    ],
    /** 
    * @param {Client} client 
    * @param {CommandInteraction} interaction 
    * @param {String[]} args 
    */
   run: async (client, interaction, args) => {
       const queue = player.getQueue(interaction.guildId);
       if(!queue || !queue.playing) return void interaction.followUp({ content: "❌ | No music is being played!" });
       const loopMode = interaction.options.get("mode").value;
       const success = queue.setRepeatMode(loopMode);
       const mode = loopMode === QueueRepeatMode.TRACK ? "🔂" : loopMode === QueueRepeatMode.QUEUE ? "🔁" : "▶";
       return void interaction.followUp({ content: success ? `${mode} | Updated loop mode!` : "❌ | Could not update loop mode!" });
    }
}
