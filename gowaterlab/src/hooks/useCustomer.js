import { useStore } from "@/store/index";
import { apiLoginAction } from '@/http'

export function login(data){
    return apiLoginAction(JSON.stringify(data));
}

export function setToken(token) {
    sessionStorage.setItem('myToken', token);
}

export function removeToken() {
    sessionStorage.removeItem('myToken');
}