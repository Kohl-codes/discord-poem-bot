const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Function to fetch a random poem
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

// Endpoint to get a random poem
app.get('/api/poem', async (req, res) => {
    const poem = await fetchRandomPoem();
    res.json({ poem });
});

// Start the server
app.listen(port, () => {
    console.log(`API server running on port ${port}`);
});
