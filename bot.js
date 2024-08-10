const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');
require('dotenv').config();
const axios = require('axios');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.DISCORD_CLIENT_ID;
const guildId = process.env.DISCORD_GUILD_ID;

const MAX_CHAR_LIMIT = 2000; // Maximum number of characters for a Discord message

async function fetchRandomPoem() {
    try {
        const response = await axios.get('https://poetrydb.org/random/1');
        const poem = response.data[0];
        return `${poem.title} by ${poem.author}\n\n${poem.lines.join('\n')}`;
    } catch (error) {
        console.error('Error fetching poem:', error);
        return 'Sorry, I couldn\'t fetch a poem right now.';
    }
}

client.once('ready', () => {
    console.log('Bot is online!');
    // Register commands
    const rest = new REST({ version: '10' }).setToken(token);
    (async () => {
        try {
            console.log('Started refreshing application (/) commands.');
            await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
                body: [
                    {
                        name: 'poem',
                        description: 'Get a random poem',
                    },
                ],
            });
            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error('Error reloading commands:', error);
        }
    })();
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'poem') {
        try {
            let randomPoem = await fetchRandomPoem();

            // Truncate if the poem exceeds the character limit
            if (randomPoem.length > MAX_CHAR_LIMIT) {
                randomPoem = randomPoem.substring(0, MAX_CHAR_LIMIT - 3) + '...';
            }

            await interaction.reply(randomPoem);
        } catch (error) {
            console.error('Error handling interaction:', error);
            await interaction.reply('An error occurred while fetching the poem.');
        }
    }
});

client.login(token);
