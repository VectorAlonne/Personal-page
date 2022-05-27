<template>
  <div class="container">
    <div class="right-column">
      <div>
        <h1 class="sub-title">Especialización</h1>
        <p class="description-text">
          Me especializo en la creacion de paginas web y aplicacion de
          dispositivos Moviles, aunque no tengo problemas a la hora de crear
          paginas o aplicaciones completas, prefiero enfocarme en el apartado
          visual de estas.
        </p>
      </div>
      <svg-right class="right"></svg-right>
    </div>
    <div class="left-column">
      <svg-left class="left"></svg-left>
      <div>
        <h1 class="sub-title">Estudios</h1>
        <p class="description-text">
          Mis estudios varian entre el uso de HTML, CSS y JavaScript, ademas de
          cosas mas especificas dentro de las 3 mensionadas, como Vue.js, Vuex,
          Tailwind, Bootstrap e IonicVue, ademas realice cursos con FrontEnd y
          poseo certificados que lo comprueba.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.right-column,
.left-column {
  display: flex;
}

@media only screen and (min-width: 481px) {
  .container {
    display: flex;
    flex-flow: column;
  }
  .sub-title {
    font-size: 55px;
    color: #3d008d;
  }
  .description-text {
    color: #f391e3;
    font-size: 24px;
  }
  .right,
  .left {
    margin-left: 100px;
    margin-right: 100px;
  }
}

@media only screen and (max-width: 1000px) {
  .container {
    display: flex;
  }
  .sub-title {
    font-size: 30px;
  }
  .description-text {
    font-size: 20px;
  }
  .right,
  .left {
    display: none;
  }
}

@media only screen and (max-width: 750px) {
  .sub-title {
    font-size: 24px;
  }
  .description-text {
    font-size: 16px;
  }
}
</style>
