<template lang="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand">Xuan Shop Lab</a>
                <button @click="toHomeFunction" class="btn btn-primary" aria-current="page" href="">Home</button>
            </div>
    </nav>

    <section class="h-100" style="background-color: #eee;">
        <div class="container h-100 py-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-10">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
                    </div>
                    <div v-for="p in mystore.getCart" class="card rounded-3 mb-4">
                        <div class="card-body p-4">
                            <div class="row d-flex justify-content-between align-items-center">
                                <div class="col-md-2 col-lg-2 col-xl-2">
                                    <img
                                    src="@/assets/logo.png"
                                    class="img-fluid rounded-3" alt="Cotton T-shirt">
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-3">
                                    <p class="lead fw-normal mb-2">{{p.name}}</p>
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                    <h5>數量：{{p.count}}</h5>
                                </div>
                                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h5 class="mb-0 text-primary">${{p.price * p.count}}</h5>
                                </div>
                                <button @click="removeFromCart(p.id)" class="btn btn-light"><span class="text-danger font-weight-bold">移除</span></button>
                            </div>
                        </div>
                    </div>
                    <div v-if="mystore.totalMoney > 0" class="card">
                        <div class="card-body">
                            <button @click="addOrder(mystore.getCart)" type="button" class="btn btn-warning btn-block btn-lg">Proceed to Pay-Total：$
                                <span class="text-danger">{{mystore.totalMoney}}</span>
                            </button>
                        </div>
                    </div>
                    <div v-else class="card">
                        <div class="card-body">
                            <button type="button" class="btn btn-danger btn-block btn-lg">Cart is Empty</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { useRouter } from "vue-router";
import { useStore } from "@/store/index";
import { removeFromCart } from '../hooks/useProduct'
import { addOrder } from '../hooks/useCustomer'

export default {
    
    setup(){

        //mystore
        const mystore = useStore();
        //vue router
        const router = useRouter();
        //to Home Page
        const toHomeFunction = ()=> {
            router.push({name:'home'});
        }
        
        return {
            mystore,
            removeFromCart,
            toHomeFunction,
            addOrder
        }

    }

}

</script>

<style lang="">
    
</style>