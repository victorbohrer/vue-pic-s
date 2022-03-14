<!-- alurapic/src/components/cadastro/Cadastro.vue -->

<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <form>
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off">
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off">
        <imagem-responsiva/>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off"></textarea>
      </div>

      <div class="">
        <my-btn rotulo="GRAVAR"/>
        <router-link to="/"><my-btn rotulo="VOLTAR"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ImagemResponsiva from '../shared/responsive-image/responsiveImage.vue'
import Button from '../shared/button/Button.vue';

export default {

  components: {

    'imagem-responsiva': ImagemResponsiva, 
    'my-btn': Button
  }
}

</script>
<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 40%;
    font-size: inherit;
    border-radius: 5px;
  }
  textarea {
    resize: none;
  }

  .centralizado {
    text-align: center;
  }

  label {
    color: #ff8906;
    font-family: Helvetica, sans-serif;
    font-size: 20px;
    text-transform: uppercase;
  }

</style>