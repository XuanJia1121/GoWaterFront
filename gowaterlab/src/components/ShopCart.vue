<template lang="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">Xuan Shop Lab</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a @click="toHomeFunction" class="nav-link active" aria-current="page" href="">Home</a></li>
                    </ul>
                </div>
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
                        <h5>數量:{{p.count}}</h5>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 class="mb-0">${{p.price * p.count}}</h5>
                    </div>
                    </div>
                </div>
                </div>
                <div class="card">
                <div class="card-body">
                    <button type="button" class="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
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
            toHomeFunction
        }

    }

}

</script>

<style lang="">
    
</style>