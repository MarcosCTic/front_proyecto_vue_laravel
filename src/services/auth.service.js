import { http } from "./http";

export default {
    loginConLaravel(credenciales){
        return http().post("/v1/auth/login", credenciales);
    },
    funRegistro(datos){
        return http().post("/v1/auth/register", datos);
    },
    getPerfil: function(){
        return http().get("/v1/auth/perfil");
    },
    salir:()=> {
        return http().post("/v1/auth/logout");
    }
}