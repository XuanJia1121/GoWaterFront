import { apiLoginAction , allOrderAction , addOrderAction } from '@/http'
import { useStore } from "@/store/index";

//登入
export function login(data) {
    return apiLoginAction(data);
}

//登入成功
export function loginSuccess(data) {
    const customer = data;
    const myStore = useStore();
    myStore.customer = customer;
    myStore.isLogin = true;
    setToken(customer.token);
}

//登出
export function logout() {
    const myStore = useStore();
    myStore.customer = {};
    myStore.isLogin = false;
    removeToken();
}

//訂單
export function getOrders(cid) {
    const myStore = useStore();
    const orderRes =  allOrderAction(cid);
    orderRes.then(res => {
        if (res.data.statuscode === '200') {
            myStore.orders = JSON.parse(res.data.value);
            console.log(myStore.orders);
            console.log('get order success');
        } else {
            console.log('get order fail');
        }
    })
}

//新增訂單
export function addOrder(order) {
    return addOrderAction(order);
}

//清空購物車
export function resetCart() {
    const myStore = useStore();
    myStore.cart = [];
}

export function setToken(token) {
    sessionStorage.setItem('myToken', token);
}

export function removeToken() {
    sessionStorage.removeItem('myToken');
}
