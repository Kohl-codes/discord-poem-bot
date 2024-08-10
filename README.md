<p align="center"><a href="https://discord.com" target="_blank"><img src="https://camo.githubusercontent.com/3e7d1de789499a54fb12ba6eb032e4204d081a8bb4eac0a196d917fd36329b1a/68747470733a2f2f7669676e657474652e77696b69612e6e6f636f6f6b69652e6e65742f7468652d6d696e6572732d686176656e2d70726f6a6563742f696d616765732f642f64642f446973636f72642e706e672f7265766973696f6e2f6c61746573743f63623d3230313730333038303333353436" width="200" alt="Discord Logo"></a></p>

<p align="center">
<a href="https://img.shields.io/github/languages/top/Kohl-codes/discord-poem-bot"><img src="https://img.shields.io/github/languages/top/Kohl-codes/discord-poem-bot" alt="Top Language"></a>
<a href="https://img.shields.io/github/languages/count/Kohl-codes/discord-poem-bot"><img src="https://img.shields.io/github/languages/count/Kohl-codes/discord-poem-bot" alt="Languages Used"></a>
<a href="https://img.shields.io/github/last-commit/Kohl-codes/discord-poem-bot"><img src="https://img.shields.io/github/last-commit/Kohl-codes/discord-poem-bot" alt="Last Commit"></a>
<a href="https://img.shields.io/github/license/Kohl-codes/discord-poem-bot"><img src="https://img.shields.io/github/license/Kohl-codes/discord-poem-bot" alt="License"></a>
</p>

# Discord Poem Bot

A Discord bot that fetches and sends random poems in response to commands. Built using [discord.js](https://discord.js.org/) and [PoetryDB API](https://poetrydb.org/).

## Languages Used

- JavaScript
- Node.js

## Dependencies

- [discord.js](https://discord.js.org/) - The library used to interact with the Discord API.
- [axios](https://axios-http.com/) - Promise-based HTTP client for making requests to the PoetryDB API.
- [dotenv](https://www.npmjs.com/package/dotenv) - Loads environment variables from a `.env` file.

## Features

- Responds to the `/poem` command with a random poem.
- Fetches poems from the PoetryDB API.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- A Discord bot token (from the [Discord Developer Portal](https://discord.com/developers/applications))
- A PoetryDB API key (optional, as the endpoint used does not require authentication)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Kohl-codes/discord-poem-bot.git
cd discord-poem-bot
```


2. Install dependencies

```bash
npm install
```

3. Create a .env file

In the root of the project, create a .env file and add your Discord bot token:

```
DISCORD_TOKEN=your-discord-bot-token
DISCORD_CLIENT_ID=your-discord-client-id
DISCORD_GUILD_ID=your-discord-guild-id
```

4. Start the bot

```bash
node bot.js
```

##Commands

- /poem - Fetches and displays a random poem.

##Contributing

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to the branch

```bash
git push origin feature/your-feature
```

5. Create a pull request

Visit the repository on GitHub and open a pull request.

##License
This project is licensed under the MIT License - see the LICENSE file for details.

##Contact
For questions or feedback, please open an issue on the GitHub repository or contact me directly at mikaorador@gmail.com.

### How to Customize

- **Replace Placeholder Text:** Replace `your-discord-bot-token`, `your-discord-client-id`, and `your-discord-guild-id` with your actual values in the `.env` section.
- **Update Contact Information:** Replace the email address with your actual contact email or modify the contact method as needed.
- **Add or Remove Sections:** Feel free to add any additional sections that might be relevant to your project, such as FAQs or acknowledgments.

Feel free to modify this template according to your project’s specific needs!
