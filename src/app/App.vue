<template>
    <div>
        <div class="contenedor container-fluid">
            <div class="filaRegistro row">
                <div class="colRegistro col-lg">
                    <div class="tituloRegisto row">
                        <h3 class="titReg">Inscríbete</h3>
                    </div>
                    <div class="descripcionRegistro row">
                        <p class="desc">Si tienes las ganas de compartir tus conocimientos, exponerlos a los asistentes o simplemente participar de las charlas como oyente</p>
                    </div>
                    <div class="checkAsistir row">
                        <div class="col-lg-6">
                            <div class="boton btn-group btn-group-toggle ">
                                <label class="oyente btn btn-outline-primary">
                                    <input type="radio" name="options" id="oyente" autocomplete="off">Quiero asistir como oyente
                                </label>
                                <label class="expositor btn btn-outline-primary">
                                    <input type="radio" name="options" id="expositor" autocomplete="off">Quiero dar una charla
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="formulario row">
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" id="nombre" placeholder="¿Cuál es tu nombre?">
                                </div>
                                <div class="form-group">
                                    <label>Apellido</label>
                                    <input type="text" class="form-control" id="apellido" placeholder="¿Cuál es tu apellido?">
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="¿Cuál es tu email?">
                                </div>
                                <div class="form-group">
                                    <label>Teléfono móvil</label>
                                    <input type="number" class="form-control" id="movil" placeholder="¿Cuál es tu número móvil?">
                                </div>
                                <button type="submit" class="btnEnviar btn btn-primary btn-block">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>