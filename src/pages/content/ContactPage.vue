<template>
  <section class="contact">
    <base-contact></base-contact>
  </section>
</template>

<script>
import BaseContact from "../../components/ui/BaseContact.vue";

export default {
  components: {
    BaseContact,
  },
};
</script>

<style scoped>
.contact {
  height: 700px;
  background-color: rgb(185, 31, 185);
}
</style>
