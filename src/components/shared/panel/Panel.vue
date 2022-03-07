
<template>

  <div class="painel">

    <p class="painel-titulo">{{ titulo }}</p>
    <slot class="painel-conteudo">
    </slot>
  </div>

</template>

<script>

export default {
   props: ['titulo']
}
</script>

<style>

ul {
  display: flex;
  grid-gap: 10px;
  flex-wrap: wrap;
}

li {
  overflow: hidden;
  list-style: none;
  border: 1px solid #f25f4c;
  width: 32%;
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
  font-family: Helvetica, sans-serif;
  text-align: center;
  font-size: 20px;
  line-height: 20px;
}

</style>