
const Discord = require('discord.js');


exports.run = async (client, message, args) => {
    let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
   const ss = message.guild.channels.cache.filter(c => c.type === 'category');
  var kate = ss.size.toString().replace(/ /g, " ") 
var ts = kate.match(/([0-9])/g) 
kate = kate.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
kate = kate.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:0_:743108341445689475>`,
    '1': `<a:1_:743108339625361429>`,
    '2': `<a:2_:743108341462597708>`,
    '3': `<a:3_:743109727348588658>`,
    '4': `<a:4_:743108341487632425>`,                       
    '5': `<a:5_:743108341718450247>`,
    '6': `<a:6_:743108341810593822>`,
    '7': `<a:7_:743108528201269378>`,
    '8': `<a:8_:743108530315329608>`,
    '9': `<a:9_:743108529518542891>`}[d];
 }) 
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  var metinkanal = message.guild.channels.cache.size.toString().replace(/ /g, " ") 
var ts = metinkanal.match(/([0-9])/g) 
metinkanal = metinkanal.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
metinkanal = metinkanal.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:0_:743108341445689475>`,
    '1': `<a:1_:743108339625361429>`,
    '2': `<a:2_:743108341462597708>`,
    '3': `<a:3_:743109727348588658>`,
    '4': `<a:4_:743108341487632425>`,                       
    '5': `<a:5_:743108341718450247>`,
    '6': `<a:6_:743108341810593822>`,
    '7': `<a:7_:743108528201269378>`,
    '8': `<a:8_:743108530315329608>`,
    '9': `<a:9_:743108529518542891>`}[d];
 }) 
}
  
  
  
  
  
   const s = message.guild.channels.cache.filter(c => c.type === 'voice');
  var seskanal = s.size.toString().replace(/ /g, " ") 
var ts = seskanal.match(/([0-9])/g) 
seskanal = seskanal.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
seskanal = seskanal.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:0_:743108341445689475>`,
    '1': `<a:1_:743108339625361429>`,
    '2': `<a:2_:743108341462597708>`,
    '3': `<a:3_:743109727348588658>`,
    '4': `<a:4_:743108341487632425>`,                       
    '5': `<a:5_:743108341718450247>`,
    '6': `<a:6_:743108341810593822>`,
    '7': `<a:7_:743108528201269378>`,
    '8': `<a:8_:743108530315329608>`,
    '9': `<a:9_:743108529518542891>`}[d];
 }) 
}
  
    let count = 0 
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;

    var sessay?? = count.toString().replace(/ /g, " ") 
var ts = sessay??.match(/([0-9])/g) 
sessay?? = sessay??.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
sessay?? = sessay??.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:0_:743108341445689475>`,
    '1': `<a:1_:743108339625361429>`,
    '2': `<a:2_:743108341462597708>`,
    '3': `<a:3_:743109727348588658>`,
    '4': `<a:4_:743108341487632425>`,                       
    '5': `<a:5_:743108341718450247>`,
    '6': `<a:6_:743108341810593822>`,
    '7': `<a:7_:743108528201269378>`,
    '8': `<a:8_:743108530315329608>`,
    '9': `<a:9_:743108529518542891>`}[d];
 }) 
}
  
  
  

  var toplamsay?? = message.guild.members.cache.size.toString().replace(/ /g, " ") 
var ts = toplamsay??.match(/([0-9])/g) 
toplamsay?? = toplamsay??.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
toplamsay?? = toplamsay??.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:0_:743108341445689475>`,
    '1': `<a:1_:743108339625361429>`,
    '2': `<a:2_:743108341462597708>`,
    '3': `<a:3_:743109727348588658>`,
    '4': `<a:4_:743108341487632425>`,                       
    '5': `<a:5_:743108341718450247>`,
    '6': `<a:6_:743108341810593822>`,
    '7': `<a:7_:743108528201269378>`,
    '8': `<a:8_:743108530315329608>`,
    '9': `<a:9_:743108529518542891>`}[d];
 }) 
}
let b??lge = {
            "us-central": "Amerika :flag_us:",
            "us-east": "Do??u Amerika :flag_us:",
            "us-south": "G??ney Amerika :flag_us:",
            "us-west": "Bat?? Amerika :flag_us:",
            "eu-west": "Bat?? Avrupa :flag_eu:",
            "eu-central": "Avrupa :flag_eu:",
            "singapore": "Singapur :flag_sg:",
            "london": "Londra :flag_gb:",
            "japan": "Japonya :flag_jp:",
            "russia": "Rusya :flag_ru:",
            "hongkong": "Hong Kong :flag_hk:",
            "brazil": "Brezilya :flag_br:",
            "singapore": "Singapur :flag_sg:",
            "sydney": "Sidney :flag_au:",
            "southafrica": "G??ney Afrika :flag_za:",
            "europe": "Avrupa :flag_eu:"
    }
if(b??lge) {
  
const o?? = new Discord.MessageEmbed()
.setTitle(`${message.guild.name} Adl?? Sunucunun Bilgileri.`)
.setDescription(`**<a:alevtacc:726390324347404328> Sunucunun Kurucusu: <@${message.guild.owner.id}> \n Sunucu Sahibinin ??D'Si: ${message.guild.owner.id} \n\n\n :bust_in_silhouette: Sunucudaki Ki??i Say??s??: ${toplamsay??} \n <:sesli:743115452841984043> Seslideki Ki??i Say??s??: ${sessay??} \n <:sesli:743115452841984043> Sesli Kanal Say??s??: ${seskanal} \n <:kanal:743121546574561383> Toplam Kanal Say??s??: ${metinkanal} \n <:katekori:743123865105858661> Toplam Kategori Say??s??: ${kate} \n :earth_asia: Sunucnun B??lgesi: ${b??lge[message.guild.region]} \n <a:boooooost:715166983439646800> Sunucu Takviye(Boost) Seviyesi Say??s??: ${message.guild.premiumTier}/3 \n <a:boooooost:715166983439646800> Sunucu Takive(Boost) Say??s??: ${message.guild.premiumSubscriptionCount} \n\n\n <:domda:709739242594631690> ??evrimi??i : ${message.guild.members.cache.filter(o => o.presence.status === 'online').size} \n <:ris:719162225486594098> Rahats??z Etmeyin : ${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size} \n <:domda5:709739242972250183> Bo??ta: ${message.guild.members.cache.filter(i => i.presence.status === 'idle').size} \n <:domda3:709739242972250124> G??r??nmez/??evrimd?????? : ${message.guild.members.cache.filter(off => off.presence.status === 'offline').size} \n <a:dcbc:715166983359954964> Botlar : ${botlar}**`)
  message.channel.send(o??)
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-bilgi","sb"],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: "Bot Sahibine ??zel Komut."
};