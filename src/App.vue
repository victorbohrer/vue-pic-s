<template>
  <div class="main-box">
    <h1>{{ titulo }}</h1>

    <input type="search" v-on:input="filtro = $event.target.value" placeholder="Filtre por parte do titulo">

    <ul>
        <li v-for="foto of fotosComFiltro" :key="foto">
            <my-panel :titulo="foto.titulo">
                <img :src="foto.url" :alt="foto.titulo">
            </my-panel>
        </li>
    </ul>
  </div>
</template>


<script>
import Panel from './components/shared/panel/Panel.vue';

export default {

    components: {'my-panel': Panel },

  data() {
    return {
      titulo: "Photos app",
      fotos: [],
      filtro:''
    }
  },

  computed: {

    fotosComFiltro() {
      if(this.filtro) {

        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));

      } else {
        return this.fotos
      }
    }

  },

  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then(
        (res) => res.json(),
        (err) => console.log(err)
      )
      .then((fotos) => (this.fotos = fotos));
  },
};
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
  font-family: Helvetica, sans-serif;
  text-align: center;
  margin-bottom: 50px;
  font-size: 40px;
  text-transform: uppercase;
}

input {
  width: 40%;
  padding: 10px;
}

</style>
