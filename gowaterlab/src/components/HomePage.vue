<template lang="">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand">Xuan Shop Lab</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a @click="toHomeFunction" class="nav-link active" aria-current="page">Home</a></li>
                    </ul>
                    <form class="d-flex">
                        <button @click="toCartFunction" class="btn btn-outline-dark" type="button">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        <!-- Header-->
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Vue 商城</h1>
                    <p class="lead fw-normal text-white-50 mb-0">FrontEnd : Vue3 + Pinia</p>
                    <p class="lead fw-normal text-white-50 mb-0">BackEnd : SpringBoot + SpringSecurity</p>
                </div>
            </div>
        </header>
        <!-- Section-->
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div v-for="p in myStore.getAllProduct" class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="@/assets/logo.png" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">{{p.name}}</h5>
                                    <h5 class="mt-2 text-warning">{{p.description}}</h5>
                                </div>
                            </div>
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product price-->
                                    <h4 class="text-danger">${{p.price}}</h4>
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div @click="addTocart(p)" class="text-center"><button class="btn btn-outline-dark mt-auto">加入購物車</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer-->
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; My Lab 2023</p></div>
        </footer>
        <h3>{{products}}</h3>
</template>

<script>

import { useRouter } from "vue-router";
import { useStore } from "@/store/index";
import { onBeforeMount } from "vue";

export default {

    setup() {

        //all store
        const myStore = useStore();
        //action
        const { allProducts , addTocart } = myStore;
        //vue router
        const router = useRouter();
        //to cart page 
        const toCartFunction = () => {
            router.push({ name: 'cart' });
        }
        //to home Page
        const toHomeFunction = () => {
            router.push({ name: 'home' });
        }
        //add to cart


        onBeforeMount(async () => {
            await allProducts();
        })

        return {
            myStore,
            toHomeFunction,
            toCartFunction,
            addTocart
        }

    }

}

</script>

<style scoped></style>