<template>
    <div class="formSubscription__wrapper" :class="validateForm ? 'formSubscription__wrapper_form-done' : ''">
        <h3 class="formSubscription__title" v-if="!validateForm">Подпишитесь на рассылку</h3>
        <form class="formSubscription__form" v-on:submit.prevent="onSubmit" v-if="!validateForm">
            <div class="formSubscription__form-item">
                <div class="formSubscription__wrapper-input">
                    <label id="name" class="formSubscription__label">
                        <p v-if="!errorName.length" class="formSubscription__label-text">Имя</p>
                        <p class="formSubscription__error"

                        >
                            {{errorName}}
                        </p>
                        <input type="text" v-model="name" class="formSubscription__input" placeholder="Имя" :class="errorName.length ? 'formSubscription__input_error' : ''"/>
                    </label>
                </div>
                <div class="formSubscription__wrapper-input">
                    <p class="formSubscription__error"

                    >
                        {{errorEmail}}
                    </p>
                    <input type="text" v-model="email" class="formSubscription__input" placeholder="example@mail.com" :class="errorEmail.length ? 'formSubscription__input_error' : ''"/>
                </div>
            </div>
            <div class="formSubscription__form-item">
                <div class="formSubscription__wrapper-textarea">
                    <p class="formSubscription__error"

                    >
                        {{errorComments}}
                    </p>
                    <textarea
                        placeholder="Комментарии"
                        class="formSubscription__textarea"
                        v-model="comments"
                        :class="errorComments.length ? 'formSubscription__input_error' : ''">
                    </textarea>
                </div>
            </div>
            <div class="formSubscription__wrapper-submit">
                <input type="submit" value="Подписаться" class="formSubscription__submit">
            </div>
        </form>
        <div v-if="validateForm" class="formSubscription__posted">
            <h3 class="formSubscription__posted-title">Благодарим за подписку!</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormSubscription',
        data() {
            return {
                name: "", // Поле имени
                email: "", // Поле почты
                comments: "", // Поле комментариев
                validateForm: false, // Валидность формы
                errorName: "",
                errorEmail: "",
                errorComments: "",
            }
        },
        methods: {
            onSubmit() {
                //Валидация имени (на содержание цифры или пустого поля)
                let validInp = /^[0-9]+$/;
                if (validInp.test(this.name)) {
                    this.errorName = "Цифры в имени не допустимы";
                } else {
                    this.errorName = "";
                }
                if (!this.name.length) {
                    this.errorName = "Заполните поле";
                }
                //Валидаця почты
                let pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
                if (this.email.search(pattern) === 0) {
                    this.errorEmail = "";
                } else {
                    this.errorEmail = "Email заполнен не верно";
                }
                if (!this.email.length) {
                    this.errorEmail = "Заполните поле";
                }
                //Валидация Комментариев на заполенение
                if (!this.comments.length) {
                    this.errorComments = "Заполните поле";
                } else {
                    this.errorComments = "";
                }
                //Проверка на валидность данных
                if (this.errorName.length || this.errorEmail.length || this.errorComments.length) {
                    this.validateForm = false;
                } else {
                    this.validateForm = true;
                }
            }
        }
    }
</script>