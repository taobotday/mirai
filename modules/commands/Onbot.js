module.exports.config = {
	name: "on",
	version: "1.0.0",
	hasPermssion: 2,
	description: "Bật Bot.",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("onbot",event.threadID, () =>process.enter(1))
