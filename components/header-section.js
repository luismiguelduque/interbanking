const HeaderSection = Vue.component('header-section', {
    template: `
        <div class="hero-head">
            <nav class="navbar is-transparent is-spaced" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="./index.html">
                            <img src="./img/logo.png" class="mt-2" alt="Logo Interbanking" height="30">
                        </a>
                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarTopMain">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div class="navbar-menu" id="navbarTopMain">
                        <div class="navbar-start margin-center">
                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-item has-text-weight-semibold">
                                    Soluciones
                                </a>
                                <div class="navbar-dropdown">
                                    <a href="./banca-digital.html" class="navbar-item">
                                        Banca digital
                                    </a>
                                    <a href="./pagos-y-cobranzas.html" class="navbar-item">
                                        Pagos y cobranzas
                                    </a>
                                    <a href="./facturacion-electronica.html" class="navbar-item">
                                        Facturación electrónica
                                    </a>
                                    <a href="./recibo-de-sueldo-digital.html" class="navbar-item">
                                        Recibo de sueldo digital
                                    </a>
                                </div>
                            </div>
                            <a href="./planes.html" class="navbar-item has-text-weight-semibold">Planes</a>
                            <a href="./sobre-nosotros.html" class="navbar-item has-text-weight-semibold">Quiénes somos</a>
                        </div>
                        <div class="navbar-end">
                            <div class="navbar-item">
                                <a href="#" class="button-link is-primary">
                                    Solicitar
                                </a>
                            </div>
                            <div class="navbar-item">
                                <a href="#" class="button is-primary">
                                    Ingresá
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    `
});