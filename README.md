<p align="center"><a href="https://discord.com" target="_blank"><img src="https://www.svgrepo.com/show/353655/discord-icon.svg" width="200" alt="Discord Logo"></a></p>

<p align="center">
<a href="https://img.shields.io/github/languages/top/Kohl-codes/discord-poem-bot"><img src="https://img.shields.io/github/languages/top/Kohl-codes/discord-poem-bot" alt="Top Language"></a>
<a href="https://img.shields.io/github/languages/count/Kohl-codes/discord-poem-bot"><img src="https://img.shields.io/github/languages/count/Kohl-codes/discord-poem-bot" alt="Languages Used"></a>
<a href="https://img.shields.io/github/last-commit/Kohl-codes/discord-poem-bot"><img src="https://img.shields.io/github/last-commit/Kohl-codes/discord-poem-bot" alt="Last Commit"></a>
<a href="https://img.shields.io/github/license/Kohl-codes/discord-poem-bot"><img src="https://img.shields.io/github/license/Kohl-codes/discord-poem-bot" alt="License"></a>
</p>

# **Discord Poem Bot**

Welcome to **Mr. Poem**, your go-to Discord bot for a touch of classical literature. Mr. Poem fetches and sends random poems directly to your server using simple commands.

## **How to Use**

1. **Invite Mr. Poem to Your Server**:
   [Click here to invite Mr. Poem](https://discord.com/oauth2/authorize?client_id=1271447378809061408&permissions=277025462272&integration_type=0&scope=applications.commands+bot)

2. **Commands**:
   - `/poem` - Fetches and displays a random classical poem.

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

    DISCORD_TOKEN=your-discord-bot-token
    DISCORD_CLIENT_ID=your-discord-client-id
    DISCORD_GUILD_ID=your-discord-guild-id


4. Start the bot

    ```bash
    node bot.js
    ```

## Commands

- /poem - Fetches and displays a random poem.

## Contributing

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

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
For questions or feedback, please open an issue on the GitHub repository or contact me directly at mikaorador@gmail.com.

### How to Customize

- **Replace Placeholder Text:** Replace `your-discord-bot-token`, `your-discord-client-id`, and `your-discord-guild-id` with your actual values in the `.env` section.
- **Update Contact Information:** Replace the email address with your actual contact email or modify the contact method as needed.
- **Add or Remove Sections:** Feel free to add any additional sections that might be relevant to your project, such as FAQs or acknowledgments.

Feel free to modify this template according to your project’s specific needs!
