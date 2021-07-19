const FaqSection = Vue.component('faq-section', {
    template: `
        <section class="hero is-light">
            <br><br>
            <div v-if="page!='seguridad'" class="hero-body is-background-primary  p-b-30 ">
                <div class="container has-text-centered">
                    <h1 v-if="page=='faq'"><span class="is-primary-gradient">¿TENÉS DUDAS?</span></h1>
                    <h2 v-if="page=='otros'" class="h2">Preguntas frecuentes</h2>
                </div>
            </div>
            <div class="columns is-centered">
                <div class="column is-8">
                    <div v-for="item in items">
                        <button class="accordion"><b>{{ item.title }}</b></button>
                        <div class="panel" v-html="item.content"></div>
                    </div>
                </div>
            </div>
            <div v-if="page!='seguridad' && page!='faq'" class="columns is-centered">
                <div class="column is-6 has-text-centered">
                    <a href="preguntas-frecuentes.html" class="button is-small is-primary">Ver mas</a>
                </div>
            </div>
            <br><br>
        </section>
    `,
    props: {
        items: Array,
        page: String,
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
                    //acc[i].style.borderRadius = "10px 10px 10px 10px";
                    panel.style.padding = "0px 20px";
                } else {
                    panel.style.maxHeight = panel.scrollHeight+40 + "px";
                    //acc[i].style.borderRadius = "10px 10px 0px 0px";
                    panel.style.padding = "20px 20px";
                }
            });
        }

    },
});