const Discord = require("discord.js");

const TOKEN = "Mzc3MDk5MTc1NzU1NjQ0OTI4.DOInPA.W18ioy4boQntnnJwzVI44haI8ds";
const PREFIX = "tc-";

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Shut up",
    "I Don't Know"
]

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready")
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "info":
            message.channel.sendMessage("**Sword Clan Development  Bot Coded and Made by lesterleal! SCD** `its not done but its almost` **Add me to your server Thank you** https://discordapp.com/api/oauth2/authorize?client_id=377099175755644928&scope=bot&permissions=1");
            break;
        case "help":
            message.channel.sendMessage("__**Sword Clan Development Bot made by lesterleal**__  commands: `technocorps,ts,as,scd,sa,vs,bie,scr,bhb,rtdf,sf,convect,raverius,ve,ha,vanquish,fear,lb,avian,soa,sn,ir,ariona,scc,vl,prefix,8ball` **DM LESTERLEAL IF YOU WANT TO ADD YOUR SWORD CLAN**");
            break;
        case "technocorps":
            message.channel.sendMessage("**TechnoCorps Founder Luke** https://www.roblox.com/groups/group.aspx?gid=1132404");
            break;   
            case "offupdate":
            message.channel.sendMessage("*@everyone i'm Offcially Offline for more Updates i will be Back when im coding with lesterleal*");
            break;    
        case "ts":
            message.channel.sendMessage("**TRANSCENDENCE STUDIOS FOUNDER TRANSCENDIUM** https://www.roblox.com/groups/group.aspx?gid=3360569");
            break;   
        case "as":
            message.channel.sendMessage("**AVARIAN SUPREMACY FOUNDER XiNuRho**https://www.roblox.com/My/Groups.aspx?gid=3069339 ");
            break;     
        case "scd":
            message.channel.sendMessage("**SWORD CLAN DEVELOPEMENT FOUNDER LESTERLEAL HOLDER THEDEADLYANONYMOUS**https://www.roblox.com/My/Groups.aspx?gid=3568529 ");
            break;     
        case "sa":
            message.channel.sendMessage("**SKILLED ASCENDANCY FOUNDER ASCENDANTWAY**https://www.roblox.com/My/Groups.aspx?gid=3356214 ");
            break;   
        case "vs":
            message.channel.sendMessage("**VORACIOUS SUPREMACY FOUNDER FRECIX**https://www.roblox.com/groups/group.aspx?gid=3559925 ");
            break; 
        case "bie":
            message.channel.sendMessage("**BLACK IMPERIUM ELITES FOUNDER THEDEADLYANONYMOUS**https://www.roblox.com/Groups/Group.aspx?gid=3541306 ");
            break; 
        case "scr":
            message.channel.sendMessage("**SKY CLAN OF ROBLOX FOUNDER INCENDING**https://www.roblox.com/My/Groups.aspx?gid=129425");
            break; 
        case "prefix":
            message.channel.sendMessage("**The Prefix is** `!`");
            break; 
        case "convect":
            message.channel.sendMessage("**CONVECT FOUNDER SEVERION**https://www.roblox.com/groups/group.aspx?gid=2944596");
            break; 
        case "sb":
            message.channel.sendMessage("**STORM BRIGADE FOUNDER DREZAX**https://www.roblox.com/groups/group.aspx?gid=927040");
            break;
        case "ve":
            message.channel.sendMessage("**VELOXICT EMPIRE FOUNDER CRUSHINGDEV**https://www.roblox.com/groups/group.aspx?gid=936982");
            break;
        case "bhb":
            message.channel.sendMessage("**BLACK HAWK BRIGADE FOUNDER TRANCENDIUM**https://www.roblox.com/groups/group.aspx?gid=814417");
            break;
        case "rtdf":
            message.channel.sendMessage("**=R.T.D.F= Founder XQUEENDESTINYX**https://www.roblox.com/groups/group.aspx?gid=856955");
            break; 
        case "sf":
            message.channel.sendMessage("**SKILLED FORCE SFNUMBAHONE**https://www.roblox.com/groups/group.aspx?gid=715274");
            break; 
        case "raverius":
            message.channel.sendMessage("**RAVERIUS FOUNDER AVURGE**https://www.roblox.com/groups/group.aspx?gid=3008224");
            break; 
        case "scc":
            message.channel.sendMessage("**SWORD CLAN COMMUNITY**https://www.roblox.com/groups/group.aspx?gid=3289751");
            break; 
        case "vl":
            message.channel.sendMessage("**VOLTERON LEGION FOUNDER FE4R_KINGZ**https://www.roblox.com/Groups/group.aspx?gid=3525847");
            break; 
        case "ariona":
            message.channel.sendMessage("**ARIONA FOUNDER SLOWW**https://www.roblox.com/Groups/group.aspx?gid=2524608");
            break; 
        case "ir":
            message.channel.sendMessage("**IMMORTAL RESURGENCE FOUNDER VALAS**https://www.roblox.com/Groups/group.aspx?gid=3487739");
            break; 
        case "sn":
            message.channel.sendMessage("**SPADE NATION FOUNDER KHLEAR**https://www.roblox.com/Groups/group.aspx?gid=3525668");
            break; 
        case "soa":
            message.channel.sendMessage("**SCRIMMAGE ORGANIZER ASSOCIATION FOUNDER LEEIQS**https://www.roblox.com/Groups/group.aspx?gid=3420056");
            break; 
        case "avian":
            message.channel.sendMessage("**A V I A N FOUNDER TWASED**https://www.roblox.com/Groups/group.aspx?gid=3008903");
            break; 
        case "vanquish":
            message.channel.sendMessage("**| VANQUISH | FOUNDER X7TH**https://www.roblox.com/Groups/group.aspx?gid=3438364");
            break; 
        case "fear":
            message.channel.sendMessage("**F.E.A.R FOUNDER ADORANZ_INFINITUM**https://www.roblox.com/Groups/group.aspx?gid=10248");
            break;
        case "ha":
            message.channel.sendMessage("**HAVOC ASCENDANCY FOUNDER XEGIC**https://www.roblox.com/Groups/group.aspx?gid=3314467");
            break; 
        case "lb":
            message.channel.sendMessage("**LEGION BAVARIAN FOUNDER INVISUSVELES**https://www.roblox.com/Groups/group.aspx?gid=1036263");
            break; 
            case "cl":
            message.channel.sendMessage("**CRYPTIC LEGION FOUNDER MRLAZERBIRD**https://www.roblox.com/groups/group.aspx?gid=1183607");
            break; 
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]); 
            else message.channel.sendMessage("Can't read that");
            break;
        default:
            message.channel.sendMessage("Invalid Command");        
    }
});

bot.login(TOKEN);