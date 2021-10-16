module.exports.config = {
	name: "on",
	version: "1.0.0",
	hasPermssion: 2,
	description: "bật bot",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("onbot",event.threadID, () =>process.enter(1))
