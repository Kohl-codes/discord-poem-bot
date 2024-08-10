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
            console.error(error);
        }
    })();
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'poem') {
        let randomPoem = await fetchRandomPoem();
        
        // Truncate if the poem exceeds 2000 characters
        if (randomPoem.length > 2000) {
            randomPoem = randomPoem.substring(0, 2000) + '...';
        }

        await interaction.reply(randomPoem);
    }
});

client.login(token);
