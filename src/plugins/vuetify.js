import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#00B1BC',
				secondary: '#06685C',
				accent: '#000000',
				error: '#FF5252',
				info: '#575F6E',
				success: '#4CAF50',
				warning: '#FFC107',
			},
		},
	},
	icons: {
		iconfont: 'mdi', // default is 'mdi'
	},
	options: {
		customProperties: true,
	},
});
