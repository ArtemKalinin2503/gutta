import Vue from "vue";
import Vuex from 'vuex'; //npm install vuex --save
import newsStore from '../modules/news';

Vue.use(Vuex);

//Основной store
export default new Vuex.Store({
    modules: {
      news: newsStore
    },
    //Data
    state: {
        count: 1,
        company: [
            {
                title: "О Компании",
                linkAbout: "#",
                description: "Что-то более продвинутое делается с помощью покадровой анимации — когда для разных состояний объекта (стоит, идет, в прыжке, атакует) создается несколько спрайтов (двумерное изображение), которые сменяют друг друга с определенным интервалом.",
                fullDescription: [
                    {
                        news: "Lorem Ipsum - это текст-часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латиer, в шаблонах которых используется Lorem Ipsum."
                    },
                    {
                        news: "Lorem Ipsum - это текст-часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латиer, в шаблонах которых используется Lorem Ipsum."
                    }
                ]
            }
        ]
    },
    //Actions
    actions: {

    },
    //Mutations
    mutations: {

    },
    //Getters
    getters: {
        getCompany(state) {
            return state.company;
        }
    }
})