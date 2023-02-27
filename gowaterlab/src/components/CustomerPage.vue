<template lang="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand">Xuan Shop Lab</a>
                <button @click="toHomeFunction" class="btn btn-primary" aria-current="page" href="">Home</button>
            </div>
    </nav>
    <section class="h-100" style="background-color: #eee ;">
        <div class="container h-100 py-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-10">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h3 class="fw-normal mb-0 text-black">個人資料</h3>
                    </div>
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Username：123</li>
                            <li class="list-group-item">Email：１２３４５</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row d-flex justify-content-center align-items-center h-100 mt-5">
                <div class="col-10">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h3 class="fw-normal mb-0 text-black">我的訂單</h3>
                    </div>
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li @click="" class="list-group-item btn btn-info">訂單1</li>
                        </ul>
                        <ul class="list-group list-group-flush">
                            <li @click="" class="list-group-item btn btn-info">訂單2</li>
                        </ul>
                        <ul class="list-group list-group-flush">
                            <li @click="" class="list-group-item btn btn-info">訂單3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="container h-100 py-5">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
            </table>
    </div>
</template>

<script>

import { useRouter } from "vue-router";

export default {

    setup() {

        //vue router
        const router = useRouter();
        //to Home Page
        const toHomeFunction = () => {
            router.push({ name: 'home' });
        }

        return {
            toHomeFunction,
        }

    }

}
</script>

<style scope></style>