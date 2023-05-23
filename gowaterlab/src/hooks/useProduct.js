import { useStore } from "@/store/index";
import { allProductAction } from '@/http'

export async function initProducts() {
    const res = await allProductAction();
    const myStore = useStore();
    myStore.products = JSON.parse(res.data.value);
}

