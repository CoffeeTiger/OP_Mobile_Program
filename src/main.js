import {createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router/router';
import i18n from './i18n'
/* use vant */
import 'vant/lib/index.css'
import {Toast, Button, NavBar, Icon, Cell, CellGroup, Collapse, CollapseItem, Progress, Tab, Tabs, DropdownMenu, DropdownItem, Uploader, Field} from 'vant'; 

import VueClipboard from 'vue-clipboard2'


createApp(App).use(VueAxios, axios).use(router).use(i18n).use(Toast).use(Button).use(NavBar).use(Icon).use(Cell).use(CellGroup).use(VueClipboard).use(Collapse).use(CollapseItem).use(Progress).use(Tab).use(Tabs).use(DropdownMenu).use(DropdownItem).use(Uploader).use(Field).mount('#app')

/* app.config.globalProperties.$http = () => {
	return 'www.open.io'
} */
/* app.config.$url = 'openpublish.io' */

import {
  Locale
} from 'vant'
import enUS from 'vant/es/locale/lang/en-US'
Locale.use('en-US', enUS)

window.addEventListener('focusout', function () {
  var ua = navigator.userAgent.toLowerCase();
  if(/iphone|ipad|ipod/.test(ua)) {
    /* window.scrollTo(0, 0) */
    document.body.scrollTop = oldScrollTop;
    document.documentElement.scrollTop = oldScrollTop;
    /* console.info('i am ios') */
  }
})
function getScrollTop(){
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop){
        scrollTop=document.documentElement.scrollTop;
    }else if(document.body){
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
}
var oldScrollTop = getScrollTop() || 0;

document.addEventListener('touchstart', function(event) {
	if (event.touches.length > 1) {
		event.preventDefault()
	}
})
document.addEventListener('gesturestart', function(event) {
	event.preventDefault()
})
