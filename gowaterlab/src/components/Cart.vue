<template>
    <div class="all">

        <div class="card mt-5">
            <div class="row">
                <div class="col-md-8 cart">
                    <div class="title">
                        <div class="row">
                            <div class="col">
                                <h4><b>購物車</b></h4>
                            </div>
                            <div class="col align-self-center text-right text-muted">{{myStore.cart.length}}項商品</div>
                        </div>
                    </div>
                    <div class="row border-top border-bottom">
                        <div v-for="product in myStore.cart" :key="product.pid" class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="../assets/logo.png"></div>
                            <div class="col">
                                <div class="row">{{product.pname}}</div>
                            </div>
                            <div class="col">
                                <h5 class="m-auto">{{product.quantity}}</h5>
                            </div>
                            <div class="col">${{product.quantity * product.price}}</div>
                        </div>
                    </div>
                    <div class="back-to-shop"><a class="btn btn-info" @click="toHomePageFunction">&leftarrow;</a><span
                            class="text-muted"></span></div>
                </div>
                <div class="col-md-4 summary">
                    <div>
                        <h5><b>總計</b></h5>
                    </div>
                    <hr>
                    <form>
                        <p>所有商品</p>
                        <select>
                            <option v-for="product in myStore.cart" :key="product.pid" class="text-muted">{{product.pname}}--${{product.quantity * product.price}}</option>
                        </select>
                    </form>
                    <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
                        <div class="col">TOTAL PRICE</div>
                        <div class="col text-right">${{ myStore.cartTotal }}</div>
                    </div>
                    <button @click="checkOut" class="btn">結帳</button>
                </div>
            </div>
        </div>

    </div>
</template>


<script>

import { useRouter } from "vue-router";
import { useStore } from "@/store/index";
import { addOrder , resetCart } from "../hooks/useCustomer"

export default {

    setup() {

        const router = useRouter(); //vue router
        const toHomePageFunction = () => router.push({ name: 'home' }); //to home Page
        const myStore = useStore(); //pinia store

        const checkOut = () => {
            let cart = myStore.cart;
            const order = {
                cid:myStore.customer.cid,
                cart:JSON.stringify(cart),
                price:myStore.cartTotal
            }
            console.log(order);
            addOrder(order).then(res => {
                if (res.data.statuscode === '200') {
                    resetCart();
                    alert(res.data.value);
                } else {
                    alert(res.data.value);
                }
            })
        }

        return {
            myStore,
            checkOut,
            toHomePageFunction
        }

    }

}

</script>

<style scoped>

body {
    background: #a38f8f !important;
    min-height: 100vh;
    vertical-align: middle;
    display: flex;
    font-family: sans-serif;
    font-size: 0.8rem;
    font-weight: bold;
}

.title {
    margin-bottom: 5vh;
}

.card {
    margin: auto;
    max-width: 950px;
    width: 90%;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1rem;
    border: transparent;
}

@media(max-width:767px) {
    .card {
        margin: 3vh auto;
    }
}

.cart {
    background-color: #fff;
    padding: 4vh 5vh;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
}

@media(max-width:767px) {
    .cart {
        padding: 4vh;
        border-bottom-left-radius: unset;
        border-top-right-radius: 1rem;
    }
}

.summary {
    background-color: #ddd;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 4vh;
    color: rgb(65, 65, 65);
}

@media(max-width:767px) {
    .summary {
        border-top-right-radius: unset;
        border-bottom-left-radius: 1rem;
    }
}

.summary .col-2 {
    padding: 0;
}

.summary .col-10 {
    padding: 0;
}

.row {
    margin: 0;
}

.title b {
    font-size: 1.5rem;
}

.main {
    margin: 0;
    padding: 2vh 0;
    width: 100%;
}

.col-2,
.col {
    padding: 0 1vh;
}

a {
    padding: 0 1vh;
}

.close {
    margin-left: auto;
    font-size: 0.7rem;
}

img {
    width: 3.5rem;
}

.back-to-shop {
    margin-top: 4.5rem;
}

h5 {
    margin-top: 4vh;
}

hr {
    margin-top: 1.25rem;
}

form {
    padding: 2vh 0;
}

select {
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1.5vh 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
}

input {
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
}

input:focus::-webkit-input-placeholder {
    color: transparent;
}

.btn {
    background-color: #000;
    border-color: #000;
    color: white;
    width: 100%;
    font-size: 0.7rem;
    margin-top: 4vh;
    padding: 1vh;
    border-radius: 0;
}

.btn:focus {
    box-shadow: none;
    outline: none;
    box-shadow: none;
    color: white;
    -webkit-box-shadow: none;
    -webkit-user-select: none;
    transition: none;
}

.btn:hover {
    color: white;
}

a {
    color: black;
}

a:hover {
    color: black;
    text-decoration: none;
}

#code {
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0.253), rgba(255, 255, 255, 0.185)), url("https://img.icons8.com/small/16/000000/long-arrow-right.png");
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: center;
}</style>