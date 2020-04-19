<template>
    <div id="app" class="app__wrapper">
        <Header></Header>
        <Slider></Slider>
        <About></About>
        <News></News>
        <FormSubscription></FormSubscription>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/app.component.header.vue';
    import Slider from './components/app.component.slider.vue';
    import About from './components/app.component.about';
    import News from "./components/app.component.news";
    import FormSubscription from "./components/app.component.formSubscription";
    import Footer from "./components/app.component.footer";
    import Vue from "vue";

    export default {
        name: 'App',
        components: {
            News,
            Header,
            Slider,
            About,
            FormSubscription,
            Footer
        },
    }
</script>

