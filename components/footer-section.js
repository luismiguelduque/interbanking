const FooterSection = Vue.component('footer-section', {
    template: `
        <footer>
            <div class="columns is-multiline is-centered">
                <div class="column is-9">
                    <img src="img/logo-negativo.png" alt="Agencia de acceso a la información pública">
                </div>
            </div>
            <div class="columns is-multiline is-centered p-b-50">
                <div class="column is-3">
                    <a href="./seguridad.html">Seguridad</a>
                    <a href="./defensa-y-proteccion-al-consumidor.html">Defensa y Protección al consumidor</a>
                    <a href="./aviso-legal.html">Aviso Legal</a>
                    <a href="./proteccion-de-datos-personales.html">Protección de datos personales</a>
                </div>
                <div class="column is-3">
                    <p class="bold">Contactá a nuestro equipo</p class="bold">
                    <p>(54-11) 5554-2999</p>
                    <p>(54-11) 3987-2999</p>
                </div>
                <div class="column is-3">
                    <p class="bold">Seguinos</p>
                    <div class="social-media">
                        <a href="https://twitter.com/interbanking" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/interbanking/" target="_blank">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.instagram.com/interbanking/?hl=es-la" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="columns is-multiline">
                <div class="column is-12 has-text-centered is-black">
                    <p class="copyright">
                        INTERBANKING S.A.- Cecilia Grierson 255, Piso 3, CP C1107CPE, Tel: 54.11.5554-2999 | C.A.B.A, Buenos Aires, Argentina ©2021
                    </p>
                </div>
                <div class="column is-12 has-text-centered is-white footer-qr-img">
                    <img src="img/footer-qr.png" alt="Agencia de acceso a la información pública">
                </div>
            </div>
        </footer>
    `
});