import fs from 'fs';
const handler = async (m, {conn, args}) => {
  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
      title: 'لينك الجروب',
      body: 'WL8MES 𝐵𝛩𝑇',
      previewType: 0, thumbnail: fs.readFileSync('./Menu.jpg'),
      sourceUrl: `https://chat.whatsapp.com/JTCHY4m8xkVFW8QGkgnIGZ`}}});
};
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^لينك|link(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;