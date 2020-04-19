<template>
    <div class="about__wrapper">
        <div class="about__company-wrapper" v-for="(value) in this.getCompany">
            <div class="about__title-wrapper">
                <a :href="value.linkAbout" class="about__title">{{value.title}}</a>
            </div>
            <div class="about__description-wrapper">
                <p class="about__description">{{value.description}}</p>
                <div class="about__btn-more-wrapper">
                    <p class="about__btn-more" @click="moreAbout = true" v-if="!moreAbout">Подробнее</p>
                </div>
                <div class="about__full"
                     v-for="(value) in value.fullDescription"
                     :class="moreAbout ? 'about__full_activeAbout' : ''"
                >
                    <p>{{value.news}}</p>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'About',
        data() {
            return {
                moreAbout: false,
            }
        },
        computed: {
            ...mapGetters(['getCompany'])
        },
        mounted() {
            console.log(this.getCompany)
        }
    }
</script>