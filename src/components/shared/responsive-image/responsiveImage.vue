<template>
    <img :src="url" :alt="titulo">
</template>

<script>
export default {

    props: ['url', 'titulo']

}
</script>

<style>
img {
  width: 100%;
  height: 100%;
  border-top: 1px solid #f25f4c;
  -webkit-user-drag: none;
}
</style>