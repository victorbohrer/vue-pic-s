
<template>

  <div class="painel">

    <p class="painel-titulo" @click="visible = !visible">{{ titulo }}</p>
	<transition name="panel-fade">
		<div v-show="visible">
			<slot>
			</slot>
		</div>
	</transition>
  </div>

</template>

<script>

export default {
   props: ['titulo'],

   data() {
	   return {
		   visible: true
	   }
   }
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
  -webkit-user-drag: none;
}

p {
  color: #e53170;
  font-family: Helvetica, sans-serif;
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  cursor: pointer;
}

.panel-fade-enter, .panel-fade-leave-active {
	opacity: 0;
}

.panel-fade-enter-active, .panel-fade-leave-active {
	transition: opacity 0.3s;
}	

</style>