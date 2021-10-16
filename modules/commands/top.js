module.exports.config = {
	name: "top",
	version: "1.0.6",
	hasPermssion: 0,
	description: "Xem các cấp độ của người dùng",
	commandCategory: "1",
	usages: "[money/level]",
	cooldowns: 5
};

module.exports.run = async ({ event, api, args, Currencies, Users }) => {
    const { threadID, messageID } = event;
	if (args[1] && isNaN(args[1]) || parseInt(args[1]) <= 0) return api.sendMessage("thông tin độ dài list phải là một con số và không dưới 0", event.threadID, event.messageID);
	var option = parseInt(args[1] || 10);
	var data, msg = "";
	var fs = require("fs-extra");
	var request = require("request");  // Covernt exp to level
    function expToLevel(point) {
	if (point < 0) return 0;
	return Math.floor((Math.sqrt(1 + (4 * point) / 3) + 1) / 2);
    }
    //level	
		if (args[0] == "level") { 
    let all = await Currencies.getAll(['userID', 'exp']);
				all.sort((a, b) => b.exp - a.exp);
				let num = 0;
	             let msg = {
					body: 'Top 10 người dùng có level cao nhất!',					
				}
				for (var i = 0; i < 10; i++) {		       	//thay vào số line cần check		 
					let level = expToLevel(all[i].exp);
					var _0xce87=["\x6E\x61\x6D\x65","\x75\x73\x65\x72\x49\x44","\x67\x65\x74\x44\x61\x74\x61"];var name=( await Users[_0xce87[2]](all[i][_0xce87[1]]))[_0xce87[0]]    
  
					num += 1;
					msg.body += '\n' + num + '. ' + name + ' - cấp ' + level;}
					 console.log(msg.body)
                    api.sendMessage(msg, event.threadID, event.messageID)
		}
	
 if (args[0] == "money") { 
    let all = await Currencies.getAll(['userID', 'money']);
				all.sort((a, b) => b.money - a.money);
				let num = 0;
	             let msg = {
					body: 'Top 10 người dùng giàu nhất!',
					
				}
				for (var i = 0; i < 10; i++) {               //thay vào số line cần check	
					let level = all[i].money;
			
					var _0x5873=["\x6E\x61\x6D\x65","\x75\x73\x65\x72\x49\x44","\x67\x65\x74\x44\x61\x74\x61"];var name=( await Users[_0x5873[2]](all[i][_0x5873[1]]))[_0x5873[0]]
                    
					num += 1;
					msg.body += '\n' + num + '. ' + name + ': ' + level + "$";}
                    console.log(msg.body)
                    api.sendMessage(msg, event.threadID, event.messageID)
		}
}
