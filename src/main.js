import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "./axiosConfig";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import "github-markdown-css";

Vue.use(mavonEditor);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
