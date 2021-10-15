const player = require("../../client/player");

module.exports = {
    name: "skip",
    description: "skip the current song",
    run: async (client, interaction, args) => {
        const queue = player.getQueue(interaction.guildId);
        if (!queue?.playing)
            return interaction.followUp({
                content: "No music is currently being played",
            });

        await queue.skip();

        interaction.followUp({ content: "Skipped the current track!" });
    },
};
