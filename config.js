const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vafy50bB4hdZV9YAAn2r";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vafy50bB4hdZV9YAAn2r" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SHADOWHACKERSBOT" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349137924240";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_15_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI3LFxuICAgICAgICAzMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDcyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTIsXG4gICAgICAgIDk1LFxuICAgICAgICA0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA3MixcbiAgICAgICAgOTUsXG4gICAgICAgIDExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwLFxuICAgICAgICAzNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDk5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMCxcbiAgICAgICAgMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI2LFxuICAgICAgICA0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDQyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgwLFxuICAgICAgICA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDExLFxuICAgICAgICA4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm0xRVVZV1lHcVJVZHNEeklVTTVlNDFsZ3NqODA0bUN5cnBDS3NvTEgvaG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZWSVBLM2J5Um5TbU5leDRCWTUzaUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDQ4NWVhMzAtY2I1Mi00YTFhLWJmYzMtMGE0NTI5NzAwZTIxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MyxcbiAgICAgIDM3LFxuICAgICAgMTQzLFxuICAgICAgMTkxLFxuICAgICAgMTA2LFxuICAgICAgMTg4LFxuICAgICAgMzksXG4gICAgICAyNDksXG4gICAgICAxLFxuICAgICAgMTYxLFxuICAgICAgMjE1LFxuICAgICAgMTAzLFxuICAgICAgMTU2LFxuICAgICAgOTUsXG4gICAgICA1LFxuICAgICAgMTYxLFxuICAgICAgMTg1LFxuICAgICAgMTksXG4gICAgICAxMjcsXG4gICAgICAxMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTQsXG4gICAgICA2NyxcbiAgICAgIDE2NCxcbiAgICAgIDE5MCxcbiAgICAgIDEyLFxuICAgICAgMjM4LFxuICAgICAgOTIsXG4gICAgICAxNjYsXG4gICAgICAxMDAsXG4gICAgICAxNTgsXG4gICAgICAzMyxcbiAgICAgIDYwLFxuICAgICAgMTAxLFxuICAgICAgMTgzLFxuICAgICAgMTc4LFxuICAgICAgNDcsXG4gICAgICA2NSxcbiAgICAgIDE0MCxcbiAgICAgIDIzNyxcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUNVpHOFNZWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzNzkyNDI0MDo3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuGXqeGRjuGXneGRjsaz4Zew4Zed4ZGM4ZSVXCIsXG4gICAgXCJsaWRcIjogXCIxMDQ3ODQ3NTMzNDg4NTA6NzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT09QczU0QkVLN1N6cmtHR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQRU1TNzN6akJHRHBWTGpyUy9yZVBTRHI1S2hkMDQ3Mm9UdGYrYzNtWm5jPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhnUm5wZk5mN1pWYmVlR2V4bTY1a3UzZEwxRjhDU3MxeUM3a2JQQjV6Zmk0NFFpNGF1dlNYSXlwR205VlFEa1d4RUNQd3o1OEJDc0h1UFRXTlhiZ0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVpc3Nza0ViUUVzeXZoMlZXNGIrT3U2OGhSUG05N2Foa0gyLyt6R3VVbnVudnRmcENOeFhDMUw4V0FGWUN6ZWpsbHpuMVVCTnl0THREMjFteEZraUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzc5MjQyNDA6NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTQzODkwMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Shadow",
  ownername:process.env.OWNER_NAME|| "SHADOWHACKERS-lab",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
