<template>
  <div class="main-box">
    <h1>{{ titulo }}</h1>

    <input type="search" @input="filtro = $event.target.value" placeholder="Filtre por parte do titulo">

    <ul>
        <li v-for="foto of fotosComFiltro" :key="foto">
            <my-panel :titulo="foto.titulo">
              <responsiveimg :url="foto.url" :titulo="foto.titulo" />
            </my-panel>
        </li>
    </ul>
  </div>
</template>


<script>
import Panel from '../shared/panel/Panel.vue';
import responsiveImage from '../shared/responsive-image/responsiveImage.vue'

export default {

    components: {
      'my-panel': Panel ,
      'responsiveimg': responsiveImage 
    },

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
