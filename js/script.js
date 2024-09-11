const {
    createApp
} = Vue;

createApp({
    code() {
        return {
            url: 'file_api.php',
        };
    },
    mounted() {
        this.getCode();
    },
    methods: {
        getCode() {
            axios.get(this.url).then((resp) => {
                console.log(resp.code);
            });
        }
    }
}).mount('#app');