const Discord = require('discord.js');
const PastebinAPI = require('pastebin-js');
const bot = new Discord.Client();
const pastebin = new PastebinAPI('c0433c6e1f136b822e5f467af732319c');
var cantsend = [];
var canTimerResetKey = true;
var twoaccounts = [];
var threeaccounts = [];

bot.on('message', (message) => {
	try{
	if (message.content === '!help') {
		
		message.reply('\n- !gen fortnite - generate a fortnite account\n- !gen hulu - generate a hulu account\n- !gen spotify - generate a spotify account\n- !gen roblox - generate a roblox account\n- !gen uplay - generate an uplay account\n- !gen minecraft - generate a minecraft account\n- !gen grammarly - generate a grammarly account\n- !gen dominos - generate a dominos(US) account\n- !gen pizzahut - generate a pizzahut(CA) account\n- !gen netflix - generate a netflix account\n- !gen crunchyroll - generate a crunchyroll account\n- !gen apple - generate an apple giftcard\n- !gen netflix - generate a netflix account\n- !gen amazon - generate an amazon giftcard\n- !help - this nigger\n- !claim [key] - if you have key special cupcakes only\n');
		
	} 
	
	if (message.content.startsWith("!gen")) {
		
		var sender = message.author;
		
		if (cantsend.includes(message.member.user.tag)) {
			
			message.reply("Only 1 account per 90s is permitted on this server. If you are a Customer, this timer is reduced to 30s and you get 2 accounts.");
			return;
			
		}
				
			var cooldown = 90000;
			var twotimes = false;
			if (message.member.roles.find("name", "Customer")) {

    				cooldown = 30000;
    				twotimes = true;

			}
			if (message.member.roles.find("name", "Developer & Semi-Owner")) {

    				cooldown = 0;
    				twotimes = true;
    				
			}
			if (twoaccounts.includes(message.member.user.tag)) {
				
				twotimes = true;
				var index = twoaccounts.indexOf(message.member.user.tag);
    			if (index > -1) {
      				twoaccounts.splice(index, 1);
    			}
    			
			}
			if (threeaccounts.includes(message.member.user.tag)) {
				
				twotimes = true;
				cooldown = 10000;
				var index = threeaccounts.indexOf(message.member.user.tag);
    			if (index > -1) {
      				threeaccounts.splice(index, 1);
    			}
    			
			}
			
			if (message.content.split(" ")[1] === "fortnite") {
				
					if (message.member.roles.find("name", "Customer")) {

    					cooldown = 30000;
    					twotimes = true;

					}
					
					pastebin.getPaste('NyJJre2a').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Fortnite account: " + accounts[Math.floor(Math.random() * accounts.length)]);
							if (twotimes)
								sender.send("Fortnite account: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, cooldown);
			}
			if (message.content.split(" ")[1] === "hulu") {
					pastebin.getPaste('9JK7yJgz').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Hulu account: " + accounts[Math.floor(Math.random() * accounts.length)]);
							if (twotimes)
								sender.send("Hulu account: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, cooldown);
			}
			if (message.content.split(" ")[1] === "spotify") {
					pastebin.getPaste('kaSSPzxa').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Spotify account: " + accounts[Math.floor(Math.random() * accounts.length)]);
							if (twotimes)
								sender.send("Spotify account: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, cooldown);
			}
			if (message.content.split(" ")[1] === "uplay") {
					pastebin.getPaste('0y5USruz').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Uplay account: " + accounts[Math.floor(Math.random() * accounts.length)]);
							if (twotimes)
								sender.send("Uplay account: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, cooldown);
			}
			if (message.content.split(" ")[1] === "roblox") {
					pastebin.getPaste('4LE40hyW').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Roblox account: " + accounts[Math.floor(Math.random() * accounts.length)]);
							if (twotimes)
								sender.send("Roblox account: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, cooldown);
			}
			if (message.content.split(" ")[1] === "minecraft") {
					pastebin.getPaste('zn4Hiiyx').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Minecraft account: " + accounts[Math.floor(Math.random() * accounts.length)]);
							if (twotimes)
								sender.send("Minecraft account: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, cooldown);
			}
			if (message.content.split(" ")[1] === "grammarly") {
					pastebin.getPaste('M88Yq58i').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Grammarly account: " + accounts[Math.floor(Math.random() * accounts.length)]);
							if (twotimes)
								sender.send("Grammarly account: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, cooldown);
			}
			if (message.content.split(" ")[1] === "dominos") {
					pastebin.getPaste('vwFDLwuD').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Dominos(US) account: " + accounts[Math.floor(Math.random() * accounts.length)]);
							if (twotimes)
								sender.send("Dominos(US) account: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, cooldown);
			}
			if (message.content.split(" ")[1] === "pizzahut") {
					pastebin.getPaste('SVCbdY7g').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Pizzahut(CA) account: " + accounts[Math.floor(Math.random() * accounts.length)]);
							if (twotimes)
								sender.send("Pizzahut(CA) account: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, cooldown);
			}
			if (message.content.split(" ")[1] === "netflix") {
					pastebin.getPaste('M88Yq58i').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Netflix account: " + accounts[Math.floor(Math.random() * accounts.length)]);
							if (twotimes)
								sender.send("Netflix account: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, cooldown);
			}
			if (message.content.split(" ")[1] === "crunchyroll") {
					pastebin.getPaste('M88Yq58i').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Crunchyroll account: " + accounts[Math.floor(Math.random() * accounts.length)]);
							if (twotimes)
								sender.send("Crunchyroll account: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, cooldown);
			}
			if (message.content.split(" ")[1] === "apple") {
				
					pastebin.getPaste('8FtziJwJ').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Apple gift card: " + accounts[Math.floor(Math.random() * accounts.length)]);
							if (twotimes)
								sender.send("Apple gift card: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, cooldown);
				
			}
			if (message.content.split(" ")[1] === "amazon") {
				
					pastebin.getPaste('8cwJfEXR').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Amazon gift card: " + accounts[Math.floor(Math.random() * accounts.length)]);
							if (twotimes)
								sender.send("Amazon gift card: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, cooldown);
				
			}
			
			
				
	}
	
	/*if (message.content == '!credits')
		message.reply('NULLED: PolygonNL DISCORD: PolygonNL#4921 BLACKHAT DEV WILL DO ANY JOB FOR THE RIGHT PRICE LEGAL OR ILLEGAL, 150+ WPM TYPESPEED FAST JOBS.');
	if (message.content.startsWith('!claim')) {
		
		var key = message.content.split(" ")[1];
		
		if (key === '	') {
			
			if (!(canTimerResetKey)) {
				
				message.reply('This key is on cooldown.');
				return;
				
			}
			
			message.reply('Congratulations. You have claimed a Timer Reset key. This key will be avaliable for anyone to use again in 360s.');
			canTimerResetKey = false;
			var index = cantsend.indexOf(message.member.user.tag);
    		if (index > -1) {
      			cantsend.splice(index, 1);
    		}
			setTimeout(function(){canTimerResetKey=true;},360000);
			return;
			
		}
		
		if (key === '777') {
			
			if (cantsend.includes(message.member.user.tag)) {
			
				message.reply("You must be off of gen and gamble cooldown to roll.");
				return;
			
			}
			
			var no = Math.random();
			
			if (no < 0.5) {
				
				message.reply("Unlucky, you lost the roll. You're on cooldown from gambling and genning for 600 seconds.");
				cantsend.push(message.member.user.tag);
				setTimeout(function(){	 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }},600000);
				return;
				
			}
			
			cantsend = [];
			message.reply("Lucky, you won. The entire servers gen timers just got reset.");
			
		}
		
		if (key === '6') {
				
				if (cantsend.includes(message.member.user.tag)) {
				
					message.reply("You must be off of gen and gamble cooldown to roll.");
					return;
				
				}
				
				var no = Math.random();
				
				if (no < 0.16) {
					
					message.reply("You rolled a die and got 1. Very unlucky- set your cooldown to 180s.");
					cantsend.push(message.member.user.tag);
					setTimeout(function(){	 var index = cantsend.indexOf(message.member.user.tag);
    				 	 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }},180000);
					return;
					
				}
				
				if (no > 0.16 && no < 0.32) {
					
					message.reply("You rolled a die and got 2. Unlucky- set your cooldown to 90s.");
					cantsend.push(message.member.user.tag);
					setTimeout(function(){	 var index = cantsend.indexOf(message.member.user.tag);
    				 	 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }},90000);
					return;
				}
				
				if (no > 0.32 && no < 0.48) {
					
					message.reply("You rolled a die and got 3. Broke even- set your cooldown to 25s.");
					cantsend.push(message.member.user.tag);
					setTimeout(function(){	 var index = cantsend.indexOf(message.member.user.tag);
    				 	 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }},25000);
					return;
					
				}
				
				if (no > 0.48 && no < 0.64) {
					
					message.reply("You rolled a die and got 4. Broke even- set your cooldown to 20s.");
					cantsend.push(message.member.user.tag);
					setTimeout(function(){	 var index = cantsend.indexOf(message.member.user.tag);
    				 	 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }},20000);
					return;
				}
				
				if (no > 0.79 && no < 0.9) {
					
					message.reply("You rolled a die and got 5. Lucky- on your next gen, you get two accounts.");
					twoaccounts.push(message.member.user.tag);
					
				}
				
				if (no > 0.9) {
					
					message.reply("You rolled a die and got 6. Very lucky- on your next gen, you get two accounts and a 10 second cooldown for your next roll.");
					threeaccounts.push(message.member.user.tag);
					
				}
				
		}
		
	}*/
	if (message.content.startsWith('!DEV INPUT:')) {
		
	}
}
catch (error) {
	
	
}
});
bot.login('NTAxOTQzMTYzOTkzMTk0NTA2.Dqgwbg.h2kHwmpBuucnRrAHMA1Ukzqj2Jo');
