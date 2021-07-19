const OtherSolutionsSection = Vue.component("other-solutions-section", {
    template: `
            <section class="hero is-halfheight is-white">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns has-text-centered">
                            <div class="column is-three-fifths is-offset-one-fifth">
                                <h2>
                                    <span class="is-size-3 is-block">Otras soluciones</span>
                                </h2>
                            </div>
                        </div>
                        <div class="columns m-t-60">
                            <div class="column is-6">
                                <div v-bind:class="item1.class">
                                    <div class="card-content has-text-left">
                                        <h3 class="has-text-dark">{{ item1.text }}</h3>
                                        <a v-bind:href="item1.url" class="button-link is-primary arrow" role="button"> Conocer más</a>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-6">
                                <div v-bind:class="item2.class">
                                    <div class="card-content has-text-left">
                                        <h3 class="has-text-dark">{{ item2.text }}</h3>
                                        <a v-bind:href="item2.url" class="button-link is-primary arrow" role="button"> Conocer más</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    `,
    props: {
        item1: Object,
        item2: Object,
    },
});
