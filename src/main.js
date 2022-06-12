import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import Antd, { DatePicker } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App).use(Antd);

app.use(createPinia());
app.use(router);

app.use(DatePicker);

app.mount("#app");
