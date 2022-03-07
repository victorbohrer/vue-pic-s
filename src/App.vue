<template>
  <div class="main-box">
    <h1 class="mt-5">{{titulo}}</h1>

    <ul>
      <li v-for="foto of fotos" :key="foto">
        <p>
          {{foto.titulo}}
        </p>
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>
</div>

  
</template>


<script>

export default {

  data() {

    return {
      titulo: 'Photos app',
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

body {
  background-color: #0f0e17;
}

.main-box {
  margin: 0 auto;
  width: 80%;
}

h1 {
  color: #ff8906;
  font-family:Helvetica, sans-serif;
  text-align: center;
  margin-bottom: 50px;
  font-size: 40px;
}

ul {
  display: flex;
  grid-gap: 10px;
}

li {
  overflow: hidden;
  list-style: none;
  border: 1px solid #f25f4c;
  width: 33%;
  border-radius: 5px;
  height: auto;
}

img {
  width: 100%;
  height: 100%;
  border-top: 1px solid #f25f4c;
}

p {
  color: #e53170;
  font-family:Helvetica, sans-serif;
  text-align: center;
  font-size: 20px;
  line-height: 20px;
}

</style>
