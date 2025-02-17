<template>
  <div class="about">
    <h1>{{perfil}}</h1>
  </div>
</template>
<script setup>
import { ref} from "vue";
import authService from "@/services/auth.service";

const perfil = ref(null)
 async function funPerfil (){
  const {data} = await authService.getPerfil();
  perfil.value = data
 }

funPerfil()

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
