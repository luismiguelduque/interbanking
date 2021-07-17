const HeaderSection = Vue.component('header-section', {
    template: `
        <div class="hero-head">
            <nav class="navbar is-transparent is-spaced" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/index.html">
                            <img src="./img/logo.png" class="mt-2" alt="Logo Interbanking" height="30">
                        </a>
                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarTopMain">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div class="navbar-menu" id="navbarTopMain">
                        <div class="navbar-end margin-center">
                            <a href="#" class="navbar-item has-text-weight-semibold">Soluciones</a>
                            <a href="#" class="navbar-item has-text-weight-semibold">Planes</a>
                            <a href="#" class="navbar-item has-text-weight-semibold">Quiénes somos</a>
                        </div>
                        <div class="navbar-item">
                            <a href="https://aldi.github.io/awesome-bulma-templates/templates/login/login.html" class="">
                                Solicitar
                            </a>
                        </div>
                        <div class="navbar-item">
                            <a href="https://aldi.github.io/awesome-bulma-templates/templates/login/login.html" class="button is-primary">
                                Ingresá
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    `
});