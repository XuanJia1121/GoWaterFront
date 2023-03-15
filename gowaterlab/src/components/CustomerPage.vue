<template lang="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <button @click="toHomeFunction" class="btn btn-primary" aria-current="page" href="">Xuan Shop Lab</button>
                <button @click="logoutFunction" class="btn btn-info" aria-current="page" href="">Logout</button>
            </div>
    </nav>
    <section class="h-100" style="background-color: #eee ;">
        <div class="container h-100 py-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-10">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h3 class="fw-normal mb-0 text-black">個人資料</h3>
                    </div>
                    <div class="card" style="width: 25rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Username：{{myStore.customer.username}}</li>
                            <li class="list-group-item">Email：{{myStore.customer.email}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row d-flex justify-content-center align-items-center h-100 mt-5">
                <div class="col-10">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h3 class="fw-normal mb-0 text-black">我的訂單</h3>
                    </div>
                    <div v-if="myStore.orders.length > 0" class="card" style="width: 25rem;">
                        <ul v-for="(order,index) in myStore.orders.length" class="list-group list-group-flush">
                            <li @click="showOrderDetail(index)" class="list-group-item btn btn-info">訂單{{index + 1}}</li>
                        </ul>
                    </div>
                    <div v-else>
                        <h5 class="text-danger">No Order</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div v-if="orderDetail.detail.length > 0" class="container h-100 py-5">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">商品名稱</th>
                    <th scope="col">數量</th>
                    <th scope="col">價格</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="p in orderDetail.detail">
                    <td>{{p.name}}</td>
                    <td>{{p.count}}</td>
                    <td>$ {{p.price}}</td>
                </tr>
            </tbody>
            </table>
    </div>
</template>

<script>

import { useRouter } from "vue-router";
import { useStore } from "@/store";
import { onBeforeMount , reactive } from "vue";
import { initOrders , logout } from '../hooks/useCustomer'

export default {

    setup() {

        //orders
        let orderDetail = reactive({detail:[]});
        //store
        const myStore = useStore();
        //vue router
        const router = useRouter();
        //to Home Page
        const toHomeFunction = () => {
            router.push({ name: 'home' });
        }
        //show order detail
        const showOrderDetail = (index) => {
            orderDetail.detail = (JSON.parse(myStore.orders[index].details));
        }
        //logout
        const logoutFunction = () => {
            logout();
            toHomeFunction()
        }

        onBeforeMount(async () => {
            await initOrders();
        })

        return {
            myStore,
            toHomeFunction,
            showOrderDetail,
            orderDetail,
            logoutFunction
        }

    }

}
</script>

<style scope></style>