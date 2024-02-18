
const TelegramApi = require('node-telegram-bot-api')

const token = '6540988566:AAHIHXy02YHfWQwhw6kwrEIHj_QCa5Wrsbg'

const bot = new TelegramApi(token, {polling: true})





const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Начать использование'}
    ])
    
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
        const html =`<strong>Привет ${msg.from.first_name}, желаешь создать анкету?</strong>`
    
        if (text === '/start') { 
            return bot.sendMessage(chatId, html, {
                parse_mode: 'HTML',
                reply_markup: {
                    keyboard:[
                        [
                           {
                            text: 'Да',
                            callback_data:'1'
                           },
                           {
                            text:'Нет',
                            callback_data:'1'
                        }
                        ]
                        
                    ],
                    
                    resize_keyboard: true
                    
                }
            }, 
                 
         )
        }
        
        return(bot.sendMessage(chatId, 'Я тебя не понимаю'))
    })

}
start()