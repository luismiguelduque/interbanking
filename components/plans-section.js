const PlansSection = Vue.component("plans-section", {
    template: `<section class="hero is-medium">
    <div class="hero-body">
        <div class="container has-text-centered">
            <div class="columns is-centered">
                <div class="column has-text-centered is-8">
                    <h2>
                        EMPEZÁ A 
                    </h2>
                    <h1 class="is-primary-gradient fs-xs-30">
                        INTERBANKEAR
                    </h1>
                </div>
            </div>
            <div class="columns is-centered">
                <div class="column is-8">
                    <div class="card rb-card cards-plans">
                        <div class="cards-plans-title">
                            <p class="title">
                                <span class="is-size-5 is-block">GRATUITO</span><span class="is-size-5 is-primary-gradient">$0</span>
                            </p>
                        </div>
                        <div class="card-content p-x-40 items-list">
                            <div class="icon-text">
                                <p class="grey is-small-text">
                                    <span class="icon color-icon-table-check">
                                        <i class="fas fa-check"></i>
                                    </span>
                                    Visualización de facturas y documentos
                                </p>
                            </div>
                            <div class="icon-text">
                                <p class="grey is-small-text">
                                    <span class="icon color-icon-table-check">
                                        <i class="fas fa-check"></i>
                                    </span>
                                    Pago de servicios
                                </p>
                            </div>
                            <div class="icon-text">
                                <p class="grey is-small-text">
                                    <span class="icon color-icon-table-check">
                                        <i class="fas fa-check"></i>
                                    </span>
                                    Pago de impuestos
                                </p>
                            </div>
                            <div class="icon-text">
                                <p class="grey is-small-text">
                                    <span class="icon color-icon-table-check">
                                        <i class="fas fa-check"></i>
                                    </span>
                                    Factura de crédito electrónica
                                </p>
                            </div>
                            <div class="icon-text">
                                <p class="grey is-small-text">
                                    <span class="icon color-icon-table-check">
                                        <i class="fas fa-check"></i>
                                    </span>
                                    E Cheq
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns is-centered is-multiline">
                <div class="column is-12-mobile is-8-tablet-only is-4-desktop">
                    <div class="card rb-card cards-plans">
                        <div class="cards-plans-title">
                            <p class="title">
                                <span class="is-size-5 is-block">INICIAL</span>
                            </p>
                        </div>
                        <div class="card-content">
                            <table class="table is-striped body-table">
                                <tr class="borderless-table">
                                    <td class="borderless-table">
                                        <span class="is-pulled-left">
                                            Bancos
                                        </span>
                                        <span class="is-pulled-right has-text-weight-bold">
                                            2
                                        </span>
                                    </td>
                                </tr>
                                <tr class="borderless-table">
                                    <td class="borderless-table">
                                        <span class="is-pulled-left">
                                        Cuentas debito
                                        </span>
                                        <span class="is-pulled-right has-text-weight-bold">
                                            6
                                        </span>
                                    </td>
                                </tr>
                                <tr class="borderless-table">
                                    <td class="borderless-table">
                                        <span class="is-pulled-left">
                                            Cuentas crédito
                                        </span>
                                        <span class="is-pulled-right has-text-weight-bold">
                                            Ilimitadas
                                        </span>
                                    </td>
                                </tr>
                                <tr class="borderless-table">
                                    <td class="borderless-table">
                                        <span class="is-pulled-left has-text-weight-bold">
                                            Tipos de transferencias
                                        </span><br>
                                        <small class="is-pulled-left is-size-7">
                                            (Propias, proveedores, terceros)
                                        </small>
                                    </td>
                                </tr>
                                <tr class="borderless-table">
                                    <td class="borderless-table">
                                        <span class="is-pulled-left">
                                            Montos por transferencia
                                        </span>
                                        <span class="is-pulled-right has-text-weight-bold">
                                            $400.000
                                        </span>
                                    </td>
                                </tr>
                                <tr class="borderless-table">
                                    <td class="borderless-table">
                                        <span class="is-pulled-left has-text-weight-bold">
                                            Transferencias
                                        </span><br>
                                        <small class="is-pulled-left is-size-7">
                                            Propias, proveedores, terceros
                                        </small>
                                        <small class="is-pulled-right has-text-weight-bold">
                                            150
                                        </small><br>
                                        <small class="is-size-7 is-pulled-left">
                                            Sueldos
                                        </small>
                                        <small class="is-pulled-right has-text-weight-bold">
                                            300
                                        </small>
                                    </td>
                                </tr>
                            </table>
                            <center>
                                <a href="./planes.html" class="button is-outlined btn-card-initial color-primary">CONOCER MAS</a>
                            </center>
                        </div>
                    </div>
                </div>
                <div class="column is-12-mobile is-8-tablet-only is-4-desktop">
                    <div class="card rb-card cards-plans">
                        <div class="cards-plans-title">
                            <p class="title">
                                <span class="is-size-5 is-block">INTERMEDIO</span>
                            </p>
                        </div>
                        <div class="card-content">
                            <table class="table is-striped body-table">
                                <tr class="borderless-table">
                                    <td class="borderless-table">
                                        <span class="is-pulled-left">
                                            Bancos
                                        </span>
                                        <span class="is-pulled-right has-text-weight-bold">
                                            3
                                        </span>
                                    </td>
                                </tr>
                                <tr class="borderless-table">
                                    <td class="borderless-table">
                                        <span class="is-pulled-left">
                                        Cuentas debito
                                        </span>
                                        <span class="is-pulled-right has-text-weight-bold">
                                            9
                                        </span>
                                    </td>
                                </tr>
                                <tr class="borderless-table">
                                    <td class="borderless-table">
                                        <span class="is-pulled-left">
                                            Cuentas crédito
                                        </span>
                                        <span class="is-pulled-right has-text-weight-bold">
                                            Ilimitadas
                                        </span>
                                    </td>
                                </tr>
                                <tr class="borderless-table">
                                    <td class="borderless-table">
                                        <span class="is-pulled-left has-text-weight-bold">
                                            Tipos de transferencias
                                        </span><br>
                                        <small class="is-pulled-left is-size-7">
                                            (Propias, proveedores, terceros, judiciales, sueldos)
                                        </small>
                                    </td>
                                </tr>
                                <tr class="borderless-table">
                                    <td class="borderless-table">
                                        <span class="is-pulled-left">
                                            Montos por transferencia
                                        </span>
                                        <span class="is-pulled-right has-text-weight-bold" style="color: #A333F5">
                                            Ilimitado
                                        </span>
                                    </td>
                                </tr>
                                <tr class="borderless-table">
                                    <td class="borderless-table">
                                        <span class="is-pulled-left has-text-weight-bold">
                                            Transferencias
                                        </span><br>
                                        <small class="is-size-7 is-pulled-left">
                                            Propias, proveedores, terceros
                                        </small>
                                        <small class="is-pulled-right has-text-weight-bold" style="color: #A333F5;">
                                            Ilimitado
                                        </small><br>
                                        <small class="is-size-7 is-pulled-left">
                                            Sueldos
                                        </small>
                                        <small class="is-pulled-right has-text-weight-bold" style="color: #A333F5">
                                            Ilimitado
                                        </smal>
                                    </td>
                                </tr>
                            </table>
                            <center>
                                <a href="./planes.html" class="button is-outlined btn-card-initial color-primary">CONOCER MAS</a>
                            </center>
                        </div>
                    </div>
                </div>
                <div class="column is-12-mobile is-8-tablet-only is-4-desktop">
                    <div class="card rb-card cards-plans">
                        <div class="cards-plans-title">
                            <p class="title">
                                <span class="is-size-5 is-block">PLUS</span>
                            </p>
                        </div>
                        <div class="card-content">
                            <table class="table is-striped body-table">
                                <tr class="borderless-table">
                                    <td class="borderless-table">
                                        <span class="is-pulled-left">
                                            Bancos
                                        </span>
                                        <span class="is-pulled-right has-text-weight-bold" style="color: #5E26CE;">
                                            Ilimitado
                                        </span>
                                    </td>
                                </tr>
                                <tr class="borderless-table">
                                    <td class="borderless-table">
                                        <span class="is-pulled-left">
                                        Cuentas debito
                                        </span>
                                        <span class="is-pulled-right has-text-weight-bold" style="color: #5E26CE;">
                                            Ilimitado
                                        </span>
                                    </td>
                                </tr>
                                <tr class="borderless-table">
                                    <td class="borderless-table">
                                        <span class="is-pulled-left">
                                            Cuentas crédito
                                        </span>
                                        <span class="is-pulled-right has-text-weight-bold">
                                            Ilimitadas
                                        </span>
                                    </td>
                                </tr>
                                <tr class="borderless-table">
                                    <td class="borderless-table">
                                        <span class="is-pulled-left has-text-weight-bold">
                                            Tipos de transferencias
                                        </span><br>
                                        <small class="is-pulled-left is-size-7">
                                            (Propias, proveedores, terceros, judiciales, sueldos)
                                        </small>
                                    </td>
                                </tr>
                                <tr class="borderless-table">
                                    <td class="borderless-table">
                                        <span class="is-pulled-left">
                                            Montos por transferencia
                                        </span>
                                        <span class="is-pulled-right has-text-weight-bold">
                                            Ilimitado
                                        </span>
                                    </td>
                                </tr>
                                <tr class="borderless-table">
                                    <td class="borderless-table">
                                        <span class="is-pulled-left has-text-weight-bold">
                                            Transferencias
                                        </span><br>
                                        <small class="is-pulled-left is-size-7">
                                            Propias, proveedores, terceros
                                        </small>
                                        <small class="is-pulled-right has-text-weight-bold">
                                            Ilimitado
                                        </small><br>
                                        <small class="is-pulled-left is-size-7">
                                            Sueldos
                                        </small>
                                        <small class="is-pulled-right has-text-weight-bold">
                                            Ilimitado
                                        </small>
                                    </td>
                                </tr>
                            </table>
                            <center>
                                <a href="./planes.html" class="button is-outlined btn-card-initial color-primary">CONOCER MAS</a>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    `,
});
