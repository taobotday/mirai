module.exports.config = {
	name: "off",
	version: "1.0.0",
	hasPermssion: 2,
	description: "tắt Bot",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Bye Bitch ✅",event.threadID, () =>process.exit(0))
