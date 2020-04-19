<template>
    <div class="news__wrapper">
        <div class="news__header">
            <h3 class="news__title">Новости</h3>
            <span @click="allNews" class="news__link-all" v-if="!visibleAllNews">Все новости</span>
        </div>
        <div class="news__item">
            <div class="news" v-for="(item, index) in this.getStatePublicNews" :class="item.typeNews">
                <a :href="item.linkNews" class="news__link">
                    <span class="news__number">{{index + 1}}</span>
                    <img :src="item.newsSrc" class="news__images"/>
                </a>
            </div>
        </div>
        <button @click="moreNews" class="news__btn-more" v-if="!visibleAllNews">Показать еще</button>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex';
    export default {
        name: 'News',
        data() {
            return {
                quantityNews: 2, //Количество публикуемых новостей за раз
                visibleAllNews: false
            }
        },
        computed: {
            ...mapGetters(['getStatePublicNews', 'getStateAllNews'])
        },
        mounted() {
            this.$store.dispatch('actNews', this.quantityNews); //Запишем в массив arrNewsPublic новости которые показываем сразу
        },
        methods: {
           ...mapActions(['actNews']),
            //Кнопка Показать еще
            moreNews() {
                let countNews = this.quantityNews += 3; //При клике будем показывать на три новости больше
                this.$store.dispatch('actNews', countNews);
                //Скрыть кнопку если все новости показаны
                if (this.getStatePublicNews.length === this.getStateAllNews.length) {
                    this.visibleAllNews = true;
                }
            },
            //Кнопка Все новости
            allNews() {
               let count = 0;
               for (let i = 0; i < this.getStateAllNews.length; i++) {
                   count++
               }
                this.$store.dispatch('actNews', count);
                this.visibleAllNews = true;
            }
        }

    }
</script>