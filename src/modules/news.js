export default {
    state : {
        //Массив всех новостей
        arrNews: [
            {
                id: 1,
                newsSrc: require('@/assets/images/img_1.jpg'),
                linkNews: "#",
                typeNews: "small"
            },
            {
                id: 2,
                newsSrc: require('@/assets/images/img_2.jpg'),
                linkNews: "#",
                typeNews: "small"
            },
            {
                id: 3,
                newsSrc: require('@/assets/images/img_3.jpg'),
                linkNews: "#",
                typeNews: "big"
            },
            {
                id: 4,
                newsSrc: require('@/assets/images/img_1.jpg'),
                linkNews: "#",
                typeNews: "small"
            },
            {
                id: 5,
                newsSrc: require('@/assets/images/img_2.jpg'),
                linkNews: "#",
                typeNews: "small"
            },
            {
                id: 6,
                newsSrc: require('@/assets/images/img_3.jpg'),
                linkNews: "#",
                typeNews: "big"
            },
            {
                id: 7,
                newsSrc: require('@/assets/images/img_1.jpg'),
                linkNews: "#",
                typeNews: "small"
            },
            {
                id: 8,
                newsSrc: require('@/assets/images/img_2.jpg'),
                linkNews: "#",
                typeNews: "small"
            }
        ],
        //Массив публикуемых Новостей
        arrNewsPublic: []
    },
    //Getters
    getters: {
        getStatePublicNews(state) {
            return state.arrNewsPublic;
        },
        getStateAllNews(state) {
            return state.arrNews;
        }
    },
    //Mutations
    mutations: {
        mutNews(state, payload) {
            state.arrNewsPublic = payload;
        }
    },
    //Actions
    actions: {
        //Action для вывода новостей (будет принимать количество выводимых новостей)
        actNews({commit, state}, payload) {
            let publicNews = [];
            for (let i = 0; i < state.arrNews.length; i++) {
                if ( i <= payload) {
                    publicNews.push(state.arrNews[i]);
                    commit('mutNews', publicNews);
                }
            }
        }
    },
};