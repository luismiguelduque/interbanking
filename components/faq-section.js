const FaqSection = Vue.component('faq-section', {
    template: `
        <div>
            FAQ section
            <div v-for="item in items">
                <div>{{ item.question }}</div>
                <div>{{ item.answer }}</div>
            </div>
        </div>
    `,
    props: {
        items: Array,
    }
});