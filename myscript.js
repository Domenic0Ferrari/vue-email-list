// Generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const app = Vue.createApp({
        data() {
            return{
                emailList: [],
            }    
        },
        methods: {
            createRandomEmail(){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((serverResponse) => {
                    this.emailList.push(serverResponse.data.response)
                }),
                console.log(this.emailList);
            },
        },
        mounted() {
            for (let i = 0; i < 10; i++) {
                this.createRandomEmail();
            }
        },
    }
);

app.mount('.app');