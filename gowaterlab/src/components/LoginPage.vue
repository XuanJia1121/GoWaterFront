<template>

    <section class="vh-100" style="background-color: rgb(152, 186, 214);">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-xl-5">
                    <div class="card" style="border-radius: 1rem;">
                        <div class="loginPage row g-0">
                            <div class="col-md-6 col-lg-10 d-flex align-items-center">
                                <div class="card-body p-4 p-lg-5 text-black">
                                    <form>
                                        <div class="d-flex align-items-center mb-3 pb-1">
                                            <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                                        </div>
                                        <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">使用者登入
                                        </h5>
                                        <div class="form-outline mb-4">
                                            <input v-model="loginDto.username" type="email" class="form-control form-control-lg" />
                                            <label class="form-label mt-1">使用者名稱</label>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <input v-model="loginDto.password" type="password" class="form-control form-control-lg" />
                                            <label class="form-label mt-1">密碼</label>
                                        </div>
                                        <p v-if="loginMsg" class="mb-5 pb-lg-2 text-danger">{{ loginMsg }}</p>
                                        <div class="pt-1 mb-4">
                                            <button @click="loginFunction" class="btn btn-dark btn-lg btn-block" type="button">登入</button>
                                        </div>
                                        <a href="#!" class="small text-muted">Please Please</a>
                                        <a href="#!" class="small text-muted">Please Please</a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>

import { useStore } from "@/store/index";
import { reactive, ref } from 'vue'
import { useRouter } from "vue-router";
import { login } from "../hooks/useCustomer"

export default {

    setup() {

        const myStore = useStore();
        const loginDto = reactive({ username: '', password: '' });
        const loginMsg = ref('');
        const vueRouter = useRouter(); //vue router
        const toHomeFunction = () => {vueRouter.push({ name: 'home' });} //to cart page

        const loginFunction = () => {
            if (!loginValid()) return;
            alert(123);
            login(loginDto)
                .then(res => {
                    alert(123);
                })
                .catch(err => {
                    //login fail and set msg
                    loginMsg.value = err.response.data;
                })
        }

        const loginValid = () => {
            if (isEmpty(loginDto.username) || isEmpty(loginDto.password)) {
                loginMsg.value = "使用者名稱和密碼為必填"
                return false;
            } else {
                return true;
            }
        }

        function isEmpty(str) {
            return (!str || str.length === 0);
        }

        return {
            toHomeFunction,
            loginFunction,
            loginDto,
            loginMsg,
        }

    }
}
</script>

<style scoped>



</style>