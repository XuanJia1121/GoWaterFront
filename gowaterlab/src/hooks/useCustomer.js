import { useStore } from "@/store/index";
import { apiLoginAction , allOrders , addOrderAction } from '@/http'
import { useRouter } from "vue-router";

export function login(data){
    return apiLoginAction(JSON.stringify(data));
}

export function logout() {
    removeToken();
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
        const response = await allOrders(JSON.stringify(myStore.customer));
        myStore.orders = (JSON.parse(response.data));
        resolve();
    })
}

export function addOrder(order){
    const myStore = useStore();
    return new Promise(async(resolve, reject)=>{
        const orderData = {
            cid:myStore.customer.cid,
            details:JSON.stringify(order)
        }
        console.log(orderData);
        const response = await addOrderAction(JSON.stringify(orderData));
        myStore.cart = [];
        initOrders();
        resolve(response);
    })
}