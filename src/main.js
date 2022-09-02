// import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";

import "./registerServiceWorker";

import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//https://larainfo.com/blogs/how-to-install-bootstrap-5-in-vue-3
// import "bootstrap/dist/js/bootstrap.js";

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount("#app");

createApp(App).use(router).use(store).mount("#app");
