const TelegramBot = require('node-telegram-bot-api')

// const  express  = require("express");
// const  env  = require("process");
const token = '6770868959:AAHY16Ea5odSPbOrEi8vjvzMu1mT3jMCIOs'

const bot = new TelegramBot(token, { polling: true })

~
const home = JSON.stringify({
  resize_keyboard: true,
  keyboard: [
    [`🧶To'quv anjomlari`, `🎀Pardalar`],
    [`🫶🏻Go'zal Matolar`, `🧵Iplar🪡✂️`],
    [`💌Sochiqlar `, `🪢Gilamlar`],
  ],
})

//  bot.setMyCommands([{
//         command:'/start',
//         description:'Boshlash'
//     }])
// bot.on('message', async (msg) => {
//     const text=msg.text;
//     const chatId = msg.chat.id;

bot.onText(/\/start/, (msg) => {
  chatId = msg.chat.id
  option = {
    reply_to_message_id: msg.message_id,
    parse_mode: 'markdown',
    reply_markup: home,
  }
  bot.sendMessage(
    chatId,
    `🤗 Assalomu Aleykum xurmatli ${msg.from?.first_name}

           ☺️ Hush kelibsiz sizni ko'rganimizdan hursandmiz.
          
           😉 Bizni do'konimiz aynan siz uchun
          
           👇🏻Bizda :
           😍 Dilni quvontiradigan Sovg'alar🎁
           🫶🏻 Go'zal Matolar,
           🎀 Hush bichim Pardalar,
           🧶 To'quv anjomlari,
           🧵 Ipak tolali iplar ,
           💌 Sochiqlar 
          
           📊 Supper chegirmalar ,
           🚛 Yetkazib berish xizmatlarimiz mavjud😉 ,
           📦 Vilayatlar va Davlatlar uchun ham yetkazib berish mavjud
          
           Siz uchun kerakligini tanlang👇🏻:
                    
          `,
    option,
  )
})

// TOQUV ANJOMLARI

bot.on('message', (msg) => {
  chatId = msg.chat.id
  text = msg.text
  if (text == "🧶To'quv anjomlari") {
    bot.sendPhoto(chatId, './photo/toqish_v.jpg', {
      caption: `
      🧶To'quv anjomlari bo'limiga xush kelibsz 🤩
                
       Admin bilan boglanish uchun👇🏻
       @Universampryaja_Admin

       📞Telefon raqam👇🏻
        +998 93 336 88 33

       🧶Telegram Link
       https://t.me/pryajauniversam

      🧶Instagram Link
       https://www.instagram.com/universam_pryajaa/

       🚗Òzbekiston bo'yicha yetkazib berish xizmati bor
   `,
    })

    // bot.sendMessage( `🧶To'quv anjomlari bo'limi`, option)
  }
})
// PARDA
bot.on('message', (msg) => {
  chatId = msg.chat.id
  text = msg.text
  if (text == '🎀Pardalar') {
    bot.sendPhoto(chatId, './photo/parda_v.jpg', {
      caption: `🎀Pardalar bo'limiga xush kelibsz🤩
                
    👨‍💻 ADMIN 👇
    @egamqulova_sobira1

    📞Telefon raqam👇🏻
    ☎️ +998996557139

   🧶Telegram Link
    https://t.me/veronatextil ✅

    🌐Joylashuv 👇
    https://t.me/veronatextil/3855

    🚗Òzbekiston bo'yicha yetkazib berish xizmati bor
   `,
    })
  }
})
// bot.sendMessage( `🧶To'quv anjomlari bo'limi`, option)
/////////////////////////////////////////////////////////////////////////////
//mato

bot.on('message', (msg) => {
  chatId = msg.chat.id
  text = msg.text
  if (text == "🫶🏻Go'zal Matolar") {
    bot.sendPhoto(chatId, './photo/mato_v.jpg', {
      caption: `
    🫶🏻Go'zal Matolar bo'limiga xush kelibsz 🤩

        Admin:
        +998931908833   

        ✅Telegram Link
        t.me/universamgazlama

        🌐Joylashuv 👇
        https://maps.app.goo.gl/sd6KTnsSrEbrW3mv8

        🚗Òzbekiston bo'yicha yetkazib berish xizmati bor
        `,
    })
  }
})

////////////////////////////////////////////////////////////////////////////////////////

// IPLAR
bot.on('message', (msg) => {
  chatId = msg.chat.id
  text = msg.text
  if (text == '🧵Iplar🪡✂️') {
    bot.sendPhoto(chatId, './photo/ip_v.jpg', {
      caption: `
   🧵Iplar🪡✂️ va jihozlar bo'limiga xush kelibsz 🤩

   🧵Furnitura_Universam✂️🪡

   ✅Telegram Link
   https://t.me/furnitura_universam

   📞Telefon raqam👇🏻
   +998951233633

   Ish vaqti: 9:00 - 20:00 

   🌐Joylashuv 👇
   https://maps.app.goo.gl/EHY1V5HGq8a7m7QV6
   
   🚗Òzbekiston bo'yicha yetkazib berish xizmati bor
   `,
    })
  }
})

// ////////////////////////////////////////////////////////////////////////////////////

// SOCHIQLAR

bot.on('message', (msg) => {
  chatId = msg.chat.id
  text = msg.text

  if (text == '💌Sochiqlar') {
    bot.sendPhoto(chatId, './photo/sochiq_v.jpg', {
      caption: `
      💌Sochiqlar bo'limiga xush kelibsz 🤩
            
     Manzil: Yunsobod Tumani Universam Savdo Majmuasi

     📞Telefon raqam👇🏻
     +998931938833

     ✅Telegram Link
     https://t.me/universamsochiq

     Admin:
     @VeronaHomeAdmin

     🌐Joylashuv 👇
     https://maps.app.goo.gl/mnzLfNpfwjyUGeJs6

  🚗Òzbekiston bo'yicha yetkazib berish xizmati bor

`,
    })
  }
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// GILAM
bot.on('message', (msg) => {
  chatId = msg.chat.id
  text = msg.text
  if (text == '🪢Gilamlar') {
    bot.sendPhoto(chatId, './photo/gilam.jpg', {
      caption: `  
        🪢Gilamlar bo'limi

        📞Telefon raqam👇🏻
        +998998618882
     
        Admin
        @gilam998618882
        
        ✅Telegram Link
        https://t.me/universam_gilam
        
        🌐Joylashuv 👇
        https://t.me/universam_gilam/2020
        
        🚗Òzbekiston bo'yicha yetkazib berish xizmati bor
        `,
    })
  }
})

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded())

// app.listen(process.env['PORT'], process.env['HOST'], () => console.log('server 1010'),)
