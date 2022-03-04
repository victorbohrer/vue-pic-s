<template>
  <div>
    <h1>{{titulo}}</h1>

    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>
</div>

  
</template>


<script>

export default {

  data() {

    return {
      titulo: 'Lorem ipsum',
      fotos: []
    }
  },
  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
    .then(res => res.json(), err => console.log(err))
    .then(fotos => this.fotos = fotos)
  }
}

</script>



<style>

ul {
  display: flex;
}

img {
  width: 100%;
}

</style>
