import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import AddCard from '@/views/AddCard.vue'

VueRouter.ude(VueRouter)

const routes = [
    {
        path: '/Home',
        component: Home
    },
    {
        path: '/AddCard',
        component: AddCard
    }
]