let fs = require('fs') 
let chalk = require('chalk')
let waifu = JSON.parse(fs.readFileSync('./media/waifu.json'))

owner = [
  ['6288980303928'], // global owner 0
  ['6283123636152'], // global owner 1
  ['6288980304002'], // global owner 2
  ['6288980303928', 'Itsuka Indra', true] // global owner 3
]

owner2 = [
'6288980303928', // global owner 1
'6288980303928', // global owner 2
'6283123636152' // global owner 3
]

apilolhuman = ['a243d5d9b0d811b81d63e6cf', '8e66d0934cf741bfd2182c16', '8e66d0934cf741bfd2182c16', '2e0da1f78d1721134b21816d', '902c3bc9d8c08b0dcf8f5373', '808693688ecc695293359089', '85faf717d0545d14074659ad']
lolkey = pickRandom(apilolhuman) // ganti apikeylu disini klo nggak yaudah cara gantinya gini pickRandom(apilolhuman) ganti ke 'apikeylu' sama kek dibawah
viokey = 'beta' // gausah diganti kont
malesin = 'apikeylu' // mau apikeynya?? bilang ke agus

mods = [] // Want some help?
prems = [] // Premium user has unlimited limit
APIs = {
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  bcil: 'https://75.119.137.248:21587',
  neoxr: 'https://api.neoxr.eu.org',
  zeks: 'https://api.zeks.me',
  ana: 'https://anabotofc.herokuapp.com',
  gimez: 'https://masgimenz.my.id',
  melcanz: 'https://melcanz.com',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  restapi: 'https://x-restapi.herokuapp.com',
  violetics : 'https://violetics.pw',
  lol: 'https://api.lolhuman.xyz',
  males : 'https://malesin.xyz'
}
APIKeys = {
  'https://api.xteam.xyz': 'apikeyaine',
  'https://anabotofc.herokuapp.com': 'AnaBot',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.neoxr.eu.org/': 'jVEMyB2ITJ',
  'https://api.lolhuman.xyz': 'SadTeams',
  'https://api.zeks.me': 'apikeyaine',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'melcantik',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://x-restapi.herokuapp.com': 'BETA',
  'https://violetics.pw': 'beta'
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = '© 𝙀𝙡𝙖𝙞𝙣𝙖 𝙈𝙖𝙞𝙙'
  var sticker_author = '𝙄𝙩𝙨𝙪𝙠𝙖 𝙄𝙣𝙙𝙧𝙖'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

global.img = pickRandom(waifu)
global.dtu = 'ᴅᴏɴᴀᴛᴇ'
global.urlnya = "https://chandra-xd.github.io/trakteer.me"

// Sticker WM
packname = sticker_name
author = sticker_author
wm = `Jangan lupa donasi kak\nSaweria: https://saweria.co/roy2023\nTrakteer: https://trakteer.id/pnggilajacn`
wm2 = `© 𝙀𝙡𝙖𝙞𝙣𝙖 𝘽𝙤𝙩𝙯`
jepang = '私はアニメが好きです'

Intervalmsg = 900
multiplier = 100
rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
