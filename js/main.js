
const { createApp } = Vue
createApp({
    data() {
        return {
            createMail: "https://flynn.boolean.careers/exercises/api/random/mail",
            mailList: [],


        }
    },
    methods: {

    },
    mounted() {
        for (let i = 0; i <= 10; i++) {
            axios.get(this.createMail).then((risposta) =>{
                this.mailList.push(risposta.data.response);
            })
        }
          
            


    }

}).mount('#app')
