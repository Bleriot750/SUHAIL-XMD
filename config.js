const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237692247756";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
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
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_54_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NixcbiAgICAgICAgODgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDcxLFxuICAgICAgICAzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTksXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDM1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDksXG4gICAgICAgIDU3LFxuICAgICAgICA4MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDk5LFxuICAgICAgICA2MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDMwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY5LFxuICAgICAgICAzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNixcbiAgICAgICAgMTE4LFxuICAgICAgICA1NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY1hBZjA2NHhtWEFmelA0cWdlYlFEVlQ5TlZBWWFvOFVOenlXL2F4NDZtbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSG5HR3FodFlSUmlBNWtXczhpc2hnd1wiLFxuICBcInBob25lSWRcIjogXCIwMzRhZDIwMi04YTgxLTQ2YmYtOTQwMC04YTVmOTdiMDUzMjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgMTI0LFxuICAgICAgMjA5LFxuICAgICAgMzUsXG4gICAgICAxMzcsXG4gICAgICAxMTUsXG4gICAgICA3MyxcbiAgICAgIDE4OCxcbiAgICAgIDI0OSxcbiAgICAgIDE3NyxcbiAgICAgIDMwLFxuICAgICAgMTc4LFxuICAgICAgMzksXG4gICAgICAxNzQsXG4gICAgICAxMzAsXG4gICAgICAxMDQsXG4gICAgICAxMzksXG4gICAgICA3OCxcbiAgICAgIDY3LFxuICAgICAgMjQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgMTYxLFxuICAgICAgMTUxLFxuICAgICAgMTg1LFxuICAgICAgMzYsXG4gICAgICAyNTMsXG4gICAgICAxNzYsXG4gICAgICAxMDMsXG4gICAgICAyMTQsXG4gICAgICAxNjEsXG4gICAgICAyMzAsXG4gICAgICAxMDIsXG4gICAgICAxOTMsXG4gICAgICA1NixcbiAgICAgIDI3LFxuICAgICAgMjQ0LFxuICAgICAgMTA4LFxuICAgICAgMTY4LFxuICAgICAgMzcsXG4gICAgICAzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKVEpZQVRDOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjkyMjQ3NzU2Ojc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzcxMjU2MjU5Mzk4Mzo3NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJcVEvNE1JRUtXaTM3a0dHQmtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIklPcE5TekxLelBtajJvbitMb0UzZnZVZ3pQYXBUWTZYQXlsN0FlYjhVRlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOHpJMUg1UkJkenFEcEFQOWY4T2xPejNGRUFPVVR5cTRHRXZtdUlTM0tFbkJteWs5azBGaDRtMG1ZZFYyVDdEVEdYNGlFT0QxU2QrVExJa0ZYZUxwZ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU0Qwc3dqVE1xTWZXZUx1NUI1Mld6ajhybzBhTVNYM1g4YjBkSW1VVmNrcjRYcUJNWXRVSXZNNDRZZ0FBMGdDVC9wM0xBYS95T1FBVSttR3poWkVwaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjkyMjQ3NzU2Ojc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE3MTEyNzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFORThcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5FOC5qc29uIjogIntcImtleURhdGFcIjpcIk9NQWRmRDI3eFQzbWhxdnRpa0Q0YVBFZ0lzWWRaNlk2bzh4ZlpOUWNaTXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjE1NTg1NzkzMCxcImN1cnJlbnRJbmRleFwiOjE4LFwiZGV2aWNlSW5kZXhlc1wiOlsxNywxLDAsMTZdfSxcInRpbWVzdGFtcFwiOlwiMTczMTYyNDUyNDE0NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
