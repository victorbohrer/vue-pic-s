<template>
  <div class="main-box">

    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/cadastro">Cadastro</router-link></li>
        <li><router-link to="/contato">Contato</router-link></li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>


<script>

export default {
    
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

input {
  width: 40%;
  padding: 10px;
}

nav {
  margin-bottom: 70px;
}

a {
  font-size: 24px;
  color: white;
  font-family: Helvetica, sans-serif;
  text-decoration: none;
}

</style>
