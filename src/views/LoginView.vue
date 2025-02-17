<template>
    <div>
        {{ usuario }}
        <h1>Login</h1>
        <label>Ingresar Correo:</label>
        <input type="email" v-model="usuario.email">
        <span>{{ errors.email }}</span>
        <br>
        <label>Ingresar Contraseña:</label>
        <input type="password" v-model="usuario.password">
        <span>{{ errors.password }}</span>
        <br>
        <input type="button" value="Ingresar" v-on:click="funIngresar()">
    </div>

</template>

<script setup>
import { ref } from "vue";
import axios from "axios"
import { useRouter, useRoute } from 'vue-router'
import authService from "@/services/auth.service";

// variables
//const correo = ref("micorreo@gmail.com");
//const clave = ref("miclave");
const usuario = ref({email: "", password: ""});
const errors = ref({})

const router = useRouter()

//metodos
async function funIngresar() {
    try {
    const { data } = await authService.loginConLaravel(usuario.value)
    console.log("CON INTERCEPTOR:", data)
    errors.value = {}
    
    localStorage.setItem("access_token", data.access_token);
    router.push("/about")
   
    
    } catch (error) {
        console.log(error.response.data)
        errors.value = error.response.data.errors
    }
    


    /*axios.post("http://127.0.0.1:8000/api/v1/auth/login", usuario.value).then(
        (res) => {
            console.log(res)

        }
    )*/
}
</script>