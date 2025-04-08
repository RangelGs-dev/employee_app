<!-- <template>
  <main id="sample">
    <Editor
      api-key="en8nx3ar3628qe3gtpidg46gctbzvsx607xs446d0sgko2wc"
      :init="{
        plugins: 'lists link image table code help wordcount',
        menubar: 'file format',
        toolbar:
          'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | outdent indent',
        statusbar: false,
      }"
      v-model="content"
    />

    {{ content }}
  </main>
</template>

<script setup>
import { ref, watch } from "vue";
import Editor from "@tinymce/tinymce-vue";

const content = ref("");

watch(content, (newValue) => {
  console.log("Novo conteúdo:", newValue);
});
console.log(content);
</script> -->
<template>
  <main id="sample">
    <Editor v-model="content" :init="config" />
  </main>
</template>

<script>
// api-key="en8nx3ar3628qe3gtpidg46gctbzvsx607xs446d0sgko2wc"
import Editor from "@tinymce/tinymce-vue";
import "tinymce/tinymce";
import "tinymce/themes/silver/theme";
import "tinymce/icons/default";

import "tinymce/plugins/link";
import "tinymce/plugins/table";
import "tinymce/plugins/image";
import "tinymce/plugins/code";

export default {
  components: {
    Editor,
  },
  data() {
    return {
      content: "",
      config: {
        license_key: "gpl",
        plugins: "lists link image table code wordcount",
        menubar: "file format",
        toolbar:
          "undo redo | bold italic | alignleft aligncenter alignright alignjustify | outdent indent",
        statusbar: false,
        promotion: false,
        width: "400px",
        base_url: "/tinymce/",
      },
    };
  },
  watch: {
    content(newValue) {
      this.$emit("update-content", newValue);
    },
  },
};
</script>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  #sample {
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 400px;
  }
}
</style>
