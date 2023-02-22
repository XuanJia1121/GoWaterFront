<template>
    <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white" style="border-radius: 1rem;">
                        <div class="card-body p-5 text-center">
                            <div class="mb-md-5 mt-md-4 pb-5">
                                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                                <p class="text-white-50 mb-5">Please enter your login and password!</p>

                                <div class="form-outline form-white mb-4">
                                    <input v-model="loginDto.username" type="email" id="typeEmailX"
                                        class="form-control form-control-lg" />
                                    <label class="form-label mt-2" for="typeEmailX">Username</label>
                                </div>

                                <div class="form-outline form-white mb-4">
                                    <input v-model="loginDto.password" type="password" id="typePasswordX"
                                        class="form-control form-control-lg" />
                                    <label class="form-label mt-2" for="typePasswordX">Password</label>
                                </div>

                                <div class="form-outline form-white mb-1">
                                    <label class="form-label text-danger">{{ loginMsg }}</label>
                                </div>

                                <div class="d-grid gap-2">
                                    <button @click="loginFunction" class="btn btn-outline-light"
                                        type="button">Login</button>
                                    <button class="btn btn-outline-light" type="button">Login with google</button>
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
import { storeToRefs } from "pinia";
import { reactive, ref } from 'vue'

export default {

    setup() {

        const loginDto = reactive({ username: '', password: '' });
        //login ret msg
        const loginMsg = ref('');
        //all store
        const myStore = useStore();
        //action
        const { loginAction, setJwtToken } = myStore;

        const loginFunction = () => {
            if (!loginValid()) return;
            loginAction(loginDto)
                .then(res => {
                    //login success and set token
                    setJwtToken(res.data);
                    myStore.$patch({ isLogin: true });
                    loginMsg.value = '';
                    console.log(myStore.isLogin);
                })
                .catch(err => {
                    //login fail and set msg
                    loginMsg.value = err.response.data;
                    console.log(err);
                })
        }

        const loginValid = () => {
            if (isEmpty(loginDto.username) || isEmpty(loginDto.password)) {
                loginMsg.value = "使用者名稱和帳號為必填"
                return false;
            } else {
                return true;
            }
        }

        function isEmpty(str) {
            return (!str || str.length === 0);
        }
        

        return {
            loginFunction,
            loginDto,
            loginMsg
        }

    }
}
</script>

<style scoped>
.gradient-custom {
    /* fallback for old browsers */
    background: #6a11cb;

    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
}

</style>