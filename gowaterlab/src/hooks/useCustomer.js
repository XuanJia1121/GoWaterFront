import { apiLoginAction } from '@/http'
import { useStore } from "@/store/index";


export function login(data) {
    return apiLoginAction(JSON.stringify(data));
}

export function loginSuccess(data) {
    const customer = data;
    const myStore = useStore();
    myStore.customer = customer;
    myStore.isLogin = true;
}

export function logout() {
    const myStore = useStore();
    myStore.customer = {};
    myStore.isLogin = false;
    removeToken();
}

export function setToken(token) {
    sessionStorage.setItem('myToken', token);
}

export function removeToken() {
    sessionStorage.removeItem('myToken');
}
