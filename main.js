const { Client } = require("discord.js-selfbot-v13");
const { joinVoiceChannel } = require("@discordjs/voice");
const express = require("express");
const axios = require("axios")
const client = new Client({
  checkUpdate: false,
});
const api = "https://favqs.com/api/qotd";

client.on("ready", (c) => {
  const guild = client.guilds.cache.get("953582097484877865");
  const channel = guild.channels.cache.get("953639900392075294");
  if (channel.isVoice()) {
    joinVoiceChannel({
      channelId: channel.id,
      guildId: guild.id,
      adapterCreator: guild.voiceAdapterCreator,
    });
    setTimeout(() => {
      joinVoiceChannel({
        channelId: channel.id,
        guildId: guild.id,
        adapterCreator: guild.voiceAdapterCreator,
      });
    }, 1000 * 60 * 15)
    console.log(`${client.user.username} ket noi roi do cmm?`)
  }
});
client.login('token')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function randomArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}