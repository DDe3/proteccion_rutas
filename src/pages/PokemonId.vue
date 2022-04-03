<template>
  <h1>POKEMON ID</h1>
</template>

<script>
export default {
  created() {
    console.log("El token es: ");
    console.log(this.token);
    this.token = "ASDASD";
    console.log("El token actualizado es: ");
    console.log(this.token);
  },
};
</script>

<style>
</style>