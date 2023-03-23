/*
Made by Aine
*/

let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://masgi.herokuapp.com/api/puisi1')
  let puisi = await url.json()
let hasil = `${puisi.data}

*By ${global.wm}*
`.trim()

  m.reply(hasil)
}
handler.help = ['puisi']
handler.tags = ['internet']
handler.command = /^puisi$/i
handler.limit = true

module.exports = handler
