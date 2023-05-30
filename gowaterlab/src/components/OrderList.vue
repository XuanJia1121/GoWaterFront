<template>
    <section class="h-100 gradient-custom">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-10 col-xl-8">
                    <div class="card" style="border-radius: 10px;">
                        <div class="card-header px-4 py-5">
                            <h5 class="text-muted mb-0">Thanks for your Order, <span style="color: #a8729a;">{{myStore.customer.username}}</span>!
                            </h5>
                        </div>
                        <div class="card-body p-4">
                            <div v-for="myOrder in myStore.orders" :key="myOrder" class="card shadow-0 border mb-4">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <img src="../assets/logo.png"
                                                class="img-fluid" alt="Phone">
                                        </div>
                                        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p class="text-muted mb-0">訂單編號:{{myOrder.id}}</p>
                                        </div>
                                        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p class="text-muted mb-0 small">商品數量:{{JSON.parse(myOrder.cart).length}}</p>
                                        </div>
                                        <div class="col-md-5 text-center d-flex justify-content-center align-items-center">
                                            <p v-for="p in JSON.parse(myOrder.cart)" :key="p" class="text-muted mb-0 small">
                                                {{p.pname}}:{{p.quantity}}、
                                            </p>
                                        </div>
                                        <div class="col-md-1 text-center d-flex justify-content-center align-items-center">
                                            <p class="text-muted mb-0 small">${{myOrder.price}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer border-0 px-4 py-5"
                            style="background-color: #a8729a; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
                            <button @click="toHomePageFunction" class="btn btn-white">Back To Home</button>
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
import { onMounted , reactive , onBeforeMount } from "vue";
import { logout , getOrders } from "../hooks/useCustomer"

export default {

    setup() {

        const myStore = useStore(); //all store
        const router = useRouter(); //vue router
        const toHomePageFunction = () => router.push({ name: 'home' }); //to home Page

        onBeforeMount(async()=>{
            getOrders(myStore.customer.cid);
        })


        return {
            myStore,
            toHomePageFunction
        };

    }

}
</script>

<style scoped>

</style>