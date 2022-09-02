<template>
  <div>
    <div class="alert alert-success" role="alert">
      <div class="d-flex flex-column">
        <span
          ><b>{{ alerta.titulo }}</b></span
        >
        <span>{{ alerta.mensaje }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "AlertaCmpnt",
  computed: {
    ...mapState("alerta", ["alerta"]),
  },
};
</script>
<style scoped></style>
