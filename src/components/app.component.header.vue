<template>
    <div>
        <div class="header__block header__block__color">
            <div class="header__section">
                <div class="header__info">
                    <a href="#" class="header__info-link">Режим работы</a>
                    <a href="#" class="header__info-link">Правила посещения</a>
                </div>
            </div>
        </div>
        <div class="header__wrapper" ref="headerMain">
            <!--Mobile nav block-->
            <div class="header__mobile" v-if="showMobileNav">
                <div class="header__mobile-section">
                    <nav >
                        <ul class="header__mobile-list">
                            <li class="header__mobile-item" v-for="(value, index) in this.navigation">
                                <a :href="value.href" class="header__mobile-link" ref="mobileItem" @click="mobileItemClick(index)">{{value.name}}</a>
                                <ul class="header__mobile-submenu" ref="mobileSubmenu">
                                    <li class="header__mobile-submenu-item" v-for="(item) in value.submenu">
                                        <a :href="item.link" class="header__mobile-submenu-link">{{item.name}}</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="header__mobile-section">
                    <div class="header__mobile-enter">
                        <a href="#" class="header__mobile-enter-link">Вход</a>
                        <a href="#" class="header__mobile-enter-link">Регистрация</a>
                    </div>
                    <div class="header__mobile-info">
                        <a href="#" class="header__mobile-info-link">Режим работы</a>
                        <a href="#" class="header__mobile-info-link">Правила посещения</a>
                    </div>
                </div>
            </div>
            <!--Main block Desktop-->
            <div class="header__section header__section_main">
                <div class="header__logo">
                    <a href="#" class="header__logo-link">Logotype</a>
                </div>
                <nav class="header__nav">
                    <ul class="header__nav-list">
                        <li class="header__nav-item" v-for="(value, index) in this.navigation">
                            <a :href="value.href" class="header__nav-link" ref="navLink" @mouseover="activeLink(index)">{{value.name}}</a>
                            <div class="header__dropdown" @mouseover="activeLink(index)" @mouseout="visibleSubmenu"></div>
                            <ul class="header__nav-submenu" ref="navSubmenu" @mouseover="activeLink(index)">
                                <li class="header__nav-submen-item" v-for="(item) in value.submenu">
                                    <a :href="item.link">{{item.name}}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div class="header__btn-wrapper">
                    <button class="header__btn-showNaw" @click="visibleNavMobile" :class="showMobileNav ? 'menuMobileActive' : 'menuMobileNoActive'"></button>
                </div>
                <div class="header__enter">
                    <a href="#" class="header__enter-link">Регистрация</a>
                    <a href="#" class="header__enter-link">Вход</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions, mapState} from 'vuex';

    export default {
        name: 'Header',
        //Props
        props: {
            msg: String
        },
        //Локальный объект
        data() {
            return {
                showDropdown: false,
                showMobileNav: false,
                navigation: [
                    {
                        name: 'Меню',
                        href: '#',
                        submenu: [
                            {
                                name: "Меню 1",
                                link: "#"
                            },
                            {
                                name: "Меню 1",
                                link: "#"
                            },
                            {
                                name: "Меню 1",
                                link: "#"
                            }
                        ]
                    },
                    {
                        name: 'Меню',
                        href: '#',
                        submenu: [
                            {
                                name: "Меню 2",
                                link: "#"
                            },
                            {
                                name: "Меню 2",
                                link: "#"
                            },
                            {
                                name: "Меню 2",
                                link: "#"
                            }
                        ]
                    },
                    {
                        name: 'Меню',
                        href: '#',
                        submenu: [
                            {
                                name: "Меню 3",
                                link: "#"
                            },
                            {
                                name: "Меню 3",
                                link: "#"
                            },
                            {
                                name: "Меню 3",
                                link: "#"
                            }
                        ]
                    },
                    {
                        name: 'Меню',
                        href: '#',
                        submenu: [
                            {
                                name: "Меню 4",
                                link: "#"
                            },
                            {
                                name: "Меню 4",
                                link: "#"
                            },
                            {
                                name: "Меню 4",
                                link: "#"
                            }
                        ]
                    },
                    {
                        name: 'Меню',
                        href: '#',
                        submenu: [
                            {
                                name: "Меню 5",
                                link: "#"
                            },
                            {
                                name: "Меню 5",
                                link: "#"
                            },
                            {
                                name: "Меню 5",
                                link: "#"
                            }
                        ]
                    },
                    {
                        name: 'Меню',
                        href: '#',
                        submenu: [
                            {
                                name: "Меню 6",
                                link: "#"
                            },
                            {
                                name: "Меню 6",
                                link: "#"
                            },
                            {
                                name: "Меню 6",
                                link: "#"
                            }
                        ]
                    }
                ]
            }
        },
        //Отработает раньше всех
        computed: {
            ...mapGetters(['getCount']),
            ...mapState(['count']),

        },
        //Сработает при загрузке компонента
        mounted() {
            console.log(this.count)
        },
        //Для скролла
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },
        //Methods
        methods: {
            ...mapActions(['actIncrement']),
            //Для подсветки активного меню навигации
            activeLink(index) {
                let navLinkActive = this.$refs.navLink[index];
                let allLink = document.getElementsByClassName('header__nav-link');
                for(let i = 0; i < allLink.length; i++) {
                    allLink[i].classList.remove("header__nav-link_active");
                }
                navLinkActive.classList.add("header__nav-link_active");
            },
            visibleSubmenu() {
                let allLink = document.getElementsByClassName('header__nav-link');
                for(let i = 0; i < allLink.length; i++) {
                    allLink[i].classList.remove("header__nav-link_active");
                }
            },
            //Для аккардеона в мобильном меню
            mobileItemClick(index) {
                let mobileSubmenu = this.$refs.mobileSubmenu[index];
                mobileSubmenu.classList.toggle('active');
            },
            //Бургер
            visibleNavMobile() {
                this.showMobileNav = !this.showMobileNav;
                if (this.showMobileNav) {
                    document.querySelector('body').style.overflow="hidden";
                } else {
                    document.querySelector('body').style.overflow="auto";
                }
            },
            handleScroll (event) {
                let scroll = window.pageYOffset; //Скролл
                let headerPostion = this.$refs.headerMain.getBoundingClientRect().top; //Кординаты блока
                let header = this.$refs.headerMain;
                if (scroll > headerPostion) {
                    header.classList.add("stiky");
                } else  {
                    header.classList.remove("stiky");
                }
            }

        }
    }
</script>

