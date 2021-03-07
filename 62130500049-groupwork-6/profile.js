const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
}

const app = Vue.createApp({
    data() {
        return {
            firstname: null,
            lastname: null,
            email: null,
            errors: null,
        }
    },
    methods: {
        checkForm() {
            this.errors = validate({
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
            },
                constraints)
            if (!this.errors) {
                alert("Registered successfully.")
            }
        }
    }
})

app.mount('#app')