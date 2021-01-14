import Vue from './vue'
import App from './App.vue'
import router from './router'


new Vue({
    data() {
        return {
            id: "432984728397",
            holder: "The name",
            vendor: "bitcoin",
            number: "XXXXYYYYZZZZFFFF",
            validMonth: "12",
            validDay: "5"
        }
    },


    router,
    render: h => h(App)
}).$mount('#app')