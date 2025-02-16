const mineflayer = require('mineflayer');

// Configura il bot con i tuoi dati
const bot = mineflayer.createBot({
  host: 'mc.hypixel.net', // Cambia con l'IP del server
  username: 'tuo_bot',  // Cambia con il nome del bot
  password: 'tua_password',
  auth: 'mojang' // Se è un account Mojang
});

bot.on('login', () => {
  console.log(`Bot connesso come ${bot.username}`);
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  console.log(`${username}: ${message}`);
  bot.chat(`Hai detto: ${message}`);
});
