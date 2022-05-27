<template>
  <div class="containers">
    <div class="box-container">
      <div class="lanes">
        <div class="lane">
          <article>
            <div>
              <h1>Mis Proyectos</h1>
              <p>Proyectos en curso, aplicaciones y paginas</p>
            </div>
          </article>
          <a href="https://github.com/VectorAlonne" target="_blank">
            <div class="a-text">Mira mi trabajo</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box-container {
  height: 80%;
  background-color: #3d008d;
}

.lanes {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
}

.lane {
  width: 100%;
}

.a-text:hover {
  background-color: rgb(139, 23, 139);
  color: rgb(182, 127, 26);
}

@media only screen and (min-width: 481px) {
  .containers {
    height: 900px;
    display: flex;
    justify-content: center;
    flex-flow: column;
  }

  .box-container {
    height: 80%;
    background-color: #3d008d;
  }

  h1 {
    margin: 0;
    font-size: 50px;
    color: rgb(230, 161, 32);
    letter-spacing: -0.03em;
  }

  p {
    font-size: 30px;
    color: rgb(230, 161, 32);
    letter-spacing: 0.02em;
  }

  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-size: 25px;
  }

  .a-text {
    background-color: rgb(185, 31, 185);
    color: rgb(230, 161, 32);
    width: 30%;
    height: 3rem;
    align-items: center;
    justify-content: center;
    display: flex;
    letter-spacing: 0.03em;
  }
}

@media only screen and (max-width: 1000px) {
  .containers {
    height: 750px;
    display: flex;
    justify-content: center;
    flex-flow: column;
  }

  .box-container {
    height: 60%;
    background-color: #3d008d;
  }

  h1 {
    font-size: 30px;
  }
  p {
    font-size: 24px;
  }
  a {
    font-size: 20px;
  }
}

@media only screen and (max-width: 750px) {
  .containers {
    height: 600px;
    display: flex;
    justify-content: center;
    flex-flow: column;
  }

  .box-container {
    height: 50%;
    background-color: #3d008d;
  }

  h1 {
    font-size: 24px;
  }
  p {
    font-size: 20px;
  }
  a {
    font-size: 16px;
  }
}
</style>
