require('./bootstrap');
window.Vue = require('vue').default;
import Multiselect from 'vue-multiselect';
Vue.component('multiselect', Multiselect);
import App from './components/App.vue';
import router from './router.js';

const app = new Vue({
    el: '#app',
    router,
    components: {
        'app': App
    }
});
