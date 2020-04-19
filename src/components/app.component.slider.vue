<template>
    <div class="slider__wrapper">
        <carousel :loop="true" :items="1" :navText="['','']" :autoplay="true">
            <div v-for="(value) in this.slides">
                <ul class="slider__list-info" v-if="value.textTitle">
                    <li class="slider__list-info-item slider__list-info-item_plashka">{{value.textTitle}}</li>
                    <li class="slider__list-info-item slider__list-info-item_textDescription">{{value.textDescription}}</li>
                    <li class="slider__list-info-item slider__list-info-item_textMini">{{value.textMini}}</li>
                </ul>
                <a :href="value.link" class="slider__link">
                    <img :src="value.src" class="slider__images"/>
                </a>
            </div>
            <template slot="prev"><span class="prev">prev</span></template>
            <template slot="next"><span class="next">next</span></template>
        </carousel>
    </div>
</template>
<script>
    import carousel from 'vue-owl-carousel';

    export default {
        name: 'Slider',
        components: {
            carousel
        },
        data() {
            return {
                slides: [
                    {
                        textTitle: 'Анимация',
                        textDescription: 'Подготовка спрайтов для анимации в unity',
                        textMini: 'Спрайты должны немного отличаться друг от друга, чтобы было заметно движение.',
                        src: require('@/assets/images/slide_1.jpg'),
                        link: "#"
                    },
                    {
                        text: '',
                        src: require('@/assets/images/slide_2.jpg'),
                        link: "#"
                    },
                    {
                        text: '',
                        src: require('@/assets/images/slide_3.jpg'),
                        link: "#"
                    },
                ]
            }
        }
    }
</script>