const FaqSection = Vue.component('faq-section', {
    template: `
        <div>
            <div class="columns is-centered">
                <div class="column is-6  has-text-centered">
                    <h3 v-if="!isPage" class="h3">Preguntas frecuentes</h3>
                    <h2 v-else class="h2">¿TENÉS DUDAS?</h2>
                </div>
            </div>
            <div class="columns is-centered">
                <div class="column is-8">
                    <div v-for="item in items">
                        <button class="accordion">{{ item.title }}</button>
                        <div class="panel">
                            {{ item.content }}
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="!isPage" class="columns is-centered">
                <div class="column is-6 has-text-centered">
                    <a href="preguntas-frecuentes.html" class="button is-small is-primary">Ver mas</a>
                </div>
            </div>
        </div>
    `,
    props: {
        items: Array,
        isPage: Boolean,
    },
    mounted(){
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                    //panel.style.padding = "0px 0px 0px 0px";
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                    //panel.style.padding = "15px 15px 15px 15px";
                }
            });
        }

    },
});