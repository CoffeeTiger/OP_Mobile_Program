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
  // langLocal = 'en-us'
  
  let na = navigator.language
  if (na.indexOf('en') !== -1) {
  	langLocal = 'en-us'
  } else if(na.indexOf('zh') !== -1){
  	langLocal = 'zh'
  } else {
	langLocal = 'en-us'
  }
  
}

const i18n = new createI18n({
    locale: langLocal,
	fallbackLocale: 'en-us', 
    messages: messages
})

export default i18n

 
