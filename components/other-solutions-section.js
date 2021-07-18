const OtherSolutionsSection = Vue.component("other-solutions-section", {
    template: `
            <section class="hero is-halfheight is-light">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns has-text-centered">
                            <div class="column is-three-fifths is-offset-one-fifth">
                                <h2>
                                    <span class="is-size-3 is-block">Otras soluciones</span>
                                </h2>
                                <p class="is-size-6 p-t-30">Simplificá la distribución, firma, seguimiento, recolección y guardado de los recibos de sueldo del personal</p>
                            </div>
                        </div>
                        <div class="columns m-t-60">
                            <div class="column is-6">
                                <div class="card rb-card single-card is-pink">
                                    <div class="card-content has-text-left">
                                        <h3 class="has-text-dark">Banca digital</h3>
                                        <a href="/banca-digital" class="is-link is-primary is-uppercase" role="button"> Conocer más</a>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-6">
                                <div class="card rb-card single-card is-orange">
                                    <div class="card-content has-text-left">
                                        <h3 class="has-text-dark">Pagos y cobranzas</h3>
                                        <a href="/pagos-y-cobranzas" class="is-link is-primary is-uppercase" role="button"> Conocer más</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    `,
});
