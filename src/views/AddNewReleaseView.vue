<template>
  <section>
    <h2>Nova Atualização</h2>
    <ReleaseForm />
  </section>
</template>

<script>
import ReleaseForm from "@/components/ReleaseForm.vue";

export default {
  name: "AddNewReleaseView",
  components: {
    ReleaseForm,
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin: 20px 0px 20px 0px;
  color: #04aa6d;
  font-size: 1.5rem;
}
</style>
