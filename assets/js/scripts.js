new Vue({
    el: '#app',
    data () {
        return {
            infos: null,
            blogs: []
        }
    },
    mounted () {
        axios
            .get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
            .then(response => (this.infos = response.data.feed.entry))
    },
    methods: {
        changeLayout() {
            const body = document.body;
            body.classList.toggle('light');
        },
        additionalInfo(id) {
            const ShowMoreEl = document.querySelector('#'+id);
            ShowMoreEl.classList.add('active');
        },
        closeInfos(id) {
            const Elements = document.querySelector('#'+id);
            Elements.classList.remove('active');
        }
    },
})