const PlansSection = Vue.component('plans-section', {
    template: `
    <div class="p-5 hero is-white is-fullheight">
    <div class="columns is-centered hero-body">
        <div class="column is-10">
            <div class="hero-body is-background-primary p-b-30 ">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column has-text-centered is-8">
                            <h1>
                                <span class="is-size-2">EMPEZÁ A</span> <span class="is-primary-gradient">INTERBANKEAR</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns is-centered">
                <div class="column is-8">
                    <div class="card is-shadowless cards-plans">
                        <div class="column is-12 is-align-content-flex-center">
                            <div class="cards-plans-small">
                                <h1 class="title">
                                    <span class="is-size-5 is-block" style="margin-left: 20px;">GRATUITO<span class="is-size-5" style="float: right; margin-right: 20px; color:#A333F5">0$</span></span>

                                </h1>
                            </div>
                        </div>
                        <div class="card-content" style="padding: 0 !important">
                            <div class="content column is-12">
                                <div class="columns">
                                    <div class="column is-12-mobile is-12-tablet is-4-desktop body-table">
                                        <span class="icon-text">
                                            <span class="icon color-icon-table-check">
                                                <i class="fas fa-check"></i>
                                            </span>
                                            <span>Visualización de facturas y documentos</span>
                                        </span>
                                        <br>
                                    </div>
                                    <div class="column is-12-mobile is-12-tablet is-4-desktop body-table">
                                        <span class="icon-text">
                                            <span class="icon color-icon-table-check">
                                                <i class="fas fa-check"></i>
                                            </span>
                                            <span>Pago de servicios</span>
                                        </span>
                                    </div>
                                    <div class="column is-12-mobile is-12-tablet is-4-desktop body-table">
                                        <span class="icon-text">
                                            <span class="icon color-icon-table-check">
                                                <i class="fas fa-check"></i>
                                            </span>
                                            <span>Pago de impuestos</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="columns">
                                    <div class="column is-12-mobile is-12-tablet is-4-desktop body-table">
                                        <span class="icon-text">
                                            <span class="icon color-icon-table-check">
                                                <i class="fas fa-check"></i>
                                            </span>
                                            <span>Factura de crédito electrónica</span>
                                        </span>
                                    </div>
                                    <div class="column is-12-mobile is-12-tablet is-4-desktop body-table">
                                        <span class="icon-text">
                                            <span class="icon color-icon-table-check">
                                                <i class="fas fa-check"></i>
                                            </span>
                                            <span>E Cheq</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="columns is-variable is-12-mobile is-12-tablet is-3-desktop">
                    <div class="column">
                        <div class="card cards-plans" id="card-initial" style="z-index: 1">
                            <div class="column is-12 is-align-content-flex-center">
                                <div class="cards-plans-small">
                                    <h1 class="title">
                                        <span class="is-size-5 is-block" style="margin-left: 20px;">INICIAL</span>
                                    </h1>
                                </div>
                            </div>
                            <div class="card-content" style="padding: 0 !important">
                                <div class="content">
                                    <div class="column is-12 is-align-content-flex-center">
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
                                            <button id="btn-card-initial" class="button is-outlined color-primary">CONOCER MAS</button>
                                         </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card cards-plans">
                            <div class="column is-12 is-align-content-flex-center">
                                <div class="cards-plans-small">
                                    <h1 class="title">
                                        <span class="is-size-5 is-block" style="margin-left: 20px;">INTERMEDIO</span>
                                    </h1>
                                </div>
                            </div>
                            <div class="card-content" style="padding: 0 !important">
                                <div class="content">
                                    <div class="column is-12 is-align-content-flex-center">
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
                                            <button id="btn-card-initial" class="button is-outlined color-primary">CONOCER MAS</button>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card cards-plans" id="card-plus" style="z-index: 1">
                            <div class="column is-12 is-align-content-flex-center">
                                <div class="cards-plans-small">
                                    <h1 class="title">
                                        <span class="is-size-5 is-block" style="margin-left: 20px;">PLUS</span>
                                    </h1>
                                </div>
                            </div>
                            <div class="card-content" style="padding: 0 !important">
                                <div class="content">
                                    <div class="column is-12 is-align-content-flex-center">
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
                                            <button id="btn-card-initial" class="button is-outlined color-primary">CONOCER MAS</button>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
});