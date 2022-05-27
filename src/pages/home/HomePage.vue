<template>
  <div>
    <section class="container">
      <base-container></base-container>
    </section>
    <section class="description">
      <base-description></base-description>
    </section>
    <section class="proyect">
      <base-proyect></base-proyect>
    </section>
  </div>
</template>

<script>
import BaseContainer from "../../components/ui/BaseContainer.vue";
import BaseDescription from "../../components/ui/BaseDescription.vue";
export default {
  components: {
    BaseContainer,
    BaseDescription,
  },
};
</script>

<style scoped>
@media only screen and (min-width: 481px) {
  .container {
    display: flex;
  }
}

@media only screen and (max-width: 1000px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}

.description {
  margin-top: 12rem;
  margin-bottom: 5rem;
  padding: 0 10rem;
}

.proyect {
  padding: 0 10rem;
  background-color: rgb(185, 31, 185);
}
</style>
