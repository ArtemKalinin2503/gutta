<template>
    <div>
        <div class="footer__wrapper">
            <div class="footer">
                <div class="footer__item">
                    <div class="footer__section">
                        <div class="header__logo">
                            <a href="#" class="header__logo-link">Logotype</a>
                        </div>
                        <div class="footer__address">
                            <p class="footer__address-text">г. Москва, метро Бауманская, <br> ул. Бауманская, дом 44</p>
                        </div>
                    </div>
                    <div class="footer__section">
                        <p class="footer__phone">+7 000 000 00 00</p>
                    </div>
                </div>
                <div class="footer__item">
                    <div class="footer__section">
                        <nav class="footer__nav">
                            <ul class="footer__nav-list">
                                <li class="footer__nav-item" v-for="(item) in footerNav">
                                    <a :href="item.link" class="footer__nav-link">{{item.name}}</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="footer__section footer__section_middle">
                        <div class="footer__section">
                            <div class="footer__social-wrapper">
                                <p class="footer__social-text">Мы в соц. сетях</p>
                                <ul class="footer__social-list">
                                    <li class="footer__social-item" v-for="(item) in social">
                                        <a :href="item.link" class="footer__social-link">
                                            <img :src="item.src" class="footer__social-icon"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer__section">
                            <p class="footer__form-title">Подписка на новости</p>
                            <div class="footer__form-wrapper">
                                <form class="footer__form" @submit.prevent="onSubmitFooter">
                                    <p class="footer__form-error">{{errorFooter}}</p>
                                    <input type="text"
                                           class="footer__form-input"
                                           placeholder="example@mail.com"
                                           v-model="emailFooter"
                                           :class="errorFooter.length ? 'footer__form-input_error' : ''"
                                    >
                                    <input type="submit" class="footer__form-submit" value="Ок"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cooperaite__wrapper">
            <div class="cooperaite">
                <div class="cooperaite__section">
                    <p class="cooperaite__text">© ООО «Глобус», 2016 — 2019</p>
                </div>
                <div class="cooperaite__section cooperaite__section_middle">
                    <a href="#" class="cooperaite__link">Политика конфиденциальности</a>
                    <a href="#" class="cooperaite__link">Cookies</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
                emailFooter: "",
                errorFooter: "",
                footerNav: [
                    {
                        name: "О компании",
                        link: "#"
                    },
                    {
                        name: "Партнёрская программа",
                        link: "#"
                    },
                    {
                        name: "Реклама",
                        link: "#"
                    },
                    {
                        name: "Пресс-центр",
                        link: "#"
                    },
                    {
                        name: "Вакансии",
                        link: "#"
                    },
                    {
                        name: "Помощь",
                        link: "#"
                    },
                    {
                        name: "Правила",
                        link: "#"
                    }
                ],
                social: [
                    {
                        link: "#",
                        src: require('@/assets/images/facebook-letter-logo.svg'),
                    },
                    {
                        link: "#",
                        src: require('@/assets/images/odnoklassniki.svg'),
                    },
                    {
                        link: "#",
                        src: require('@/assets/images/instagram-logo.svg'),
                    }
                ]
            }
        },
        methods: {
            onSubmitFooter() {
                //Проверка заполнения почты
                if (!this.emailFooter.length) {
                    this.errorFooter = "Заполните поле";
                } else {
                    this.errorFooter = "";
                }
            }
        }
    }
</script>