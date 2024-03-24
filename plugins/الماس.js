
let handler = async (m, {conn, usedPrefix}) => {

    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ 
المستخدم مفقود من قاعدة البيانات الخاصة بي`
    conn.reply(m.chat, `
┌───⊷ *التوازن* ⊶
▢ *📌الاسم* : _@${who.split('@')[0]}_
▢ *نقودك 💷* : _${user.money}_
▢ *اكسبي* : _المجموع ${user.exp}_
└──────────────

*ملحوظه :* 
يمكنك شراء 💷نقودك باستخدام الطلبات
❏ *${usedPrefix}buy <cantidad>*
❏ *${usedPrefix}buyall*`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['شراء-النقود', 'نقودي', 'money', 'النقود'] 

export default handler
