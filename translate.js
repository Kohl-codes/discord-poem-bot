const { Translate } = require('@google-cloud/translate').v2;
const translate = new Translate();

async function translateText(text, targetLanguage) {
    try {
        const [translation] = await translate.translate(text, targetLanguage);
        return translation;
    } catch (error) {
        console.error('Error translating text:', error);
        return text;
    }
}

module.exports = translateText;
