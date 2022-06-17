import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import VueI18n from 'vue-i18n';
import router from 'vue-router';
import locales from './locales/locales';

Vue.use(VueI18n);

// const messages = {
// 	en: {
// 		message: {
// 			value: 'This is an example of content translation.',
// 		},
// 	},
// 	be: {
// 		message: {
// 			value: 'Гэта прыклад перакладу змесціва.',
// 		},
// 	},
// 	da: {
// 		message: {
// 			value: 'Dette er et eksempel på oversættelse af indhold.',
// 		},
// 	},
// 	hr: {
// 		message: {
// 			value: 'Ovo je primjer prevođenja sadržaja.',
// 		},
// 	},
// };

const i18n = new VueI18n({
	locale: 'tw',
	fallbackLocale: 'tw',
	messages: locales,
});

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
	i18n,
}).$mount('#app');
