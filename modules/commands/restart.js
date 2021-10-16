module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	description: "Khởi Động Lại Bot",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Đợi tao khởi động lại nhá!",event.threadID, () =>process.exit(1))
