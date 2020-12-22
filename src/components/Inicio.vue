<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Inicio',
  data () {
    return {
      msg: 'Bienvenido'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

.hello {
  position: absolute;
  margin-top: 10%;
  margin-left: 42%;
}

</style>
