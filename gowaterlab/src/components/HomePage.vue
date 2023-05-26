<template lang="">
      
         <!-- Navigation-->
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <i class="bi bi-4-circle-fill fa-2x mx-3 ps-1">LAB</i>
                </a>
                <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="me-3">
                    <div class="form-white input-group" style="width: 250px;">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    </div>
                </form>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a @click="toCartPageFunction" class="nav-link">購物車</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">我的訂單</a>
                    </li>
                </ul>
                <ul v-if="!myStore.isLogin" class="navbar-nav d-flex flex-row ms-auto me-3">
                   <button @click="toLoginPageFunction" class="btn btn-danger">登入</button>
                </ul>
                <ul v-else class="navbar-nav d-flex flex-row ms-auto me-3">
                   <h5 class="text-danger m-auto">歡迎光臨，{{myStore.customer.username}}</h5>
                </ul>
                <ul v-if="myStore.isLogin" class="navbar-nav d-flex flex-row ms-auto me-3">
                   <button @click="logoutToHome" class="btn btn-info">登出</button>
                </ul>
                </div>
            </div>
        </nav>
        <!-- Header-->
        <header class="jom py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        <!-- Section-->
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div v-for="product in myStore.products" class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="../assets/logo.png" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">{{product.pname}}</h5>
                                    <!-- Product price-->
                                    ${{product.price}}
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center">
                                    <button @click="addProductToCart(product)" class="btn btn-outline-dark mt-auto">加入購物車</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer-->
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">CopyRight &copy; xuan's vue lab 2023</p></div>
        </footer>

</template>

<script>

import { useRouter } from "vue-router";
import { useStore } from "@/store/index";
import { initProducts , addProductToCart } from '../hooks/useProduct'
import { onMounted , reactive , onBeforeMount } from "vue";
import { logout , getOrders } from "../hooks/useCustomer"

export default {

    setup() {

        const myStore = useStore(); //all store
        const router = useRouter(); //vue router
        const toHomePageFunction = () => router.push({ name: 'home' }); //to home Page
        const toLoginPageFunction = () => router.push({ name: 'login' }); //to home Page
        const toCartPageFunction = () => router.push({ name: 'cart' }); //to home Page

        //init products
        onBeforeMount(async () => {
          await initProducts();
          console.log(myStore.customer.cid);
          getOrders(myStore.customer.cid).then(res => {
            console.log(res);
          })
        })

        const logoutToHome = () => {
            logout();
            toHomePageFunction();
        }

        return {
            myStore,
            toHomePageFunction,
            toLoginPageFunction,
            toCartPageFunction,
            logoutToHome,
            addProductToCart
        }

    }

}

</script>

<style scoped>
.form-white.input-group>.form-control:focus {
    border-color: #fff;
    box-shadow: inset 0 0 0 1px #fff;
}

.navbar-dark .navbar-nav .nav-link {
    color: #fff;
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:focus {
    color: rgba(255, 255, 255, 0.75);
}

.jom {
    background-color: rgb(152, 186, 214);
}

</style>