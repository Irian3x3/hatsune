# Hatsune
Hatsune is a discord bot based on anime, built with discord.js.  
It is open source and you may use its code.

<img src="https://images-ext-1.discordapp.net/external/DAkTxNoHbbN8v6iHCLtYYiARWwb3Ct-WpX9HTgwlQlg/https/cdn.discordapp.com/avatars/773925538410135553/98b0ec7dc9aef1772116d312b8509394.png">

## Using the code
Clone the repository:
```bat
git clone https://github.com/Irian3x3/hatsune
```
Install the dependencies:
```bat
cd hatsune
npm install
```
Edit [config](config.js):
```js
class Config {
  token = 'YOUR-TOKEN-GOES-HERE'
  prefix = "BOT-PREFIX"
};

module.exports = Config;
```
Run the bot:
```bat
node .
```
If you followed the above steps correctly, you should have a running instance of Hatsune!
