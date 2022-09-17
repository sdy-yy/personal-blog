import ajax from "@/api/index.js";
import "@/mock/index.js";

export async function hometype() {
    return await ajax.get("/api/home/img");
}


