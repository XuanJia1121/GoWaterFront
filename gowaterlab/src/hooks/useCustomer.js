import { useStore } from "@/store/index";
import { apiLoginAction , allOrders } from '@/http'

export function login(data){
    return apiLoginAction(JSON.stringify(data));
}

export function setToken(token) {
    sessionStorage.setItem('myToken', token);
}

export function removeToken() {
    sessionStorage.removeItem('myToken');
}

export function initOrders(){
    const myStore = useStore();
    return new Promise(async(resolve, reject)=>{
        const response = await allOrders(myStore.customer);
        myStore.orders = (JSON.parse(response.data));
        resolve();
      })
}