import { Client } from "discord.js-selfbot-v13";

const client = new Client();

client.on("ready", async () => {
  console.log(`Logged in as ${client.user?.username}!`);

  const channel = client.channels.cache.get("Channel ID Here");
  if (!channel || !channel.isVoice()) throw new Error("Invalid given channel ID")

  await client.voice.joinChannel(channel, {
    selfDeaf: false,
    selfMute: false,
    selfVideo: false,
  })
  console.log(`Joined voice channel: ${channel.name}`);
});

client.login('Token Here')