<template>
  <div class="right-side">
    <div class="text-container">
      <h1 class="name">Mi nombre es<br />Lucas Vargas</h1>
      <p class="welcome-text">
        Bienvenidos, si continuan por esta pagina les conatare asecta de mi y mi
        esperiencia en este mundo.
      </p>
    </div>
    <line-svg class="sideline"></line-svg>
  </div>
  <div class="left-side">
    <div>
      <square-svg class="svg"></square-svg>
      <img class="photo" src="../../../public/img/BaseImage.jpg" alt="">
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.right-side,
.left-side {
  height: 650px;
}

@media only screen and (min-width: 481px) {
  .right-side {
    padding: 0 10rem;
    width: 70%;
    background-color: rgb(185, 31, 185);
  }
  .text-container {
    position: absolute;
    width: 40%;
    margin-top: 5rem;
    color: rgb(230, 161, 32);
  }

  .name {
    font-size: 50px;
  }

  .welcome-text {
    font-size: 30px;
  }

  .left-side {
    margin: 0;
    width: 30%;
    background-color: rgb(82, 14, 82);
  }

  .svg {
    position: absolute;
    margin-left: -20rem;
    margin-top: 1rem;
    z-index: 1;
  }

  .photo {
    width: 300px;
    height: 350px;
    position: relative;
    margin-left: -9.5rem;
    margin-top: 9.5rem;
    z-index: 1;
  }

  .sideline {
    position: absolute;
    margin-left: -12rem;
    margin-top: 4rem;
  }
}

@media only screen and (max-width: 1000px) {
  .right-side {
    width: 100%;
  }
  .text-container {
    width: 75%;
    text-align: center;
  }

  .name {
    font-size: 40px;
  }

  .welcome-text {
    font-size: 25px;
  }
  .left-side {
    width: 100%;
  }
  .svg {
    margin-left: 10rem;
    margin-top: -6.1rem;
  }
  .photo {
    margin-left: 20rem;
  }
  .sideline {
    display: none;
  }
}

@media only screen and (max-width: 750px) {
  .name {
    font-size: 30px;
  }
  .welcome-text {
    font-size: 18px;
  }
  .svg {
    margin-left: 8rem;
    margin-top: -6.1rem;
  }
  .photo {
    margin-left: 18rem;
  }
}
</style>
