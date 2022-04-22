import { createI18n } from 'vue-i18n'

const messages = {
  'en-uk': require('./assets/i18n/en-uk'),
  'en-us': require('./assets/i18n/en-us'),
  'zh': require('./assets/i18n/zh'),
}

let langLocal = localStorage.getItem('lang')
if(!(langLocal == undefined || langLocal==null ||langLocal=='' )){
  console.info('--------lang='+ langLocal +'-------')
} else {
  langLocal = 'en-us'
}

const i18n = new createI18n({
    locale: langLocal,
	fallbackLocale: 'en-us', 
    messages: messages
})

export default i18n

 
