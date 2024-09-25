<template>
  <section>
    <h2>Inclua um novo link</h2>
    <LinkForm />
  </section>
</template>

<script>
import LinkForm from "@/components/LinkForm.vue";
export default {
  name: "AddCardLinkView",
  components: {
    LinkForm,
  },
};
</script>
<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
  color: #04aa6d;
}
</style>
