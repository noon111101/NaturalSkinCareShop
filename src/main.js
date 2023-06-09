import Vue from 'vue'
import App from './App.vue'
import router  from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VeeValidate from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ElementUI from 'element-ui'
import Icon from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/main.css';
library.add(faHatWizard)
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
Vue.use(Icon);
/* add icons to the library */
library.add(faUserSecret)
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faMagnifyingGlass,
  faBagShopping,
  faEarthOceania,
  faThumbsUp,
  faShareFromSquare,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
// import { SemiSelect } from '@element-plus/icons-vue';
import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

Vue.use(VueSweetalert2);
library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt,faMagnifyingGlass,faBagShopping,faEarthOceania,faThumbsUp,faShareFromSquare,faMessage);
Vue.config.productionTip = false;
Vue.use(ElementUI, { locale })

Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.bundle';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

ElementUI.Dropdown.methods.hide = function hide() {
  var _this2 = this;

  if (!this.triggerElm || this.triggerElm.disabled) return;
  this.removeTabindex();
  if (this.tabindex >= 0) {
    this.resetTabindex(this.triggerElm);
  }
  clearTimeout(this.timeout);
  this.timeout = setTimeout(function () {
    _this2.visible = false;
  }, this.trigger === 'click' ? 0 : this.hideTimeout);
}


new Vue({
  router, render: h => h(App)
}).$mount('#app');
