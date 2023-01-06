let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap kak Kanna tadi ketiduran😊* ')
}


handler.tags = ['main']
handler.command = /^(kannaon)$/i

handler.owner = true
handler.admin = true

export default handler