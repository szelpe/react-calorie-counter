import HttpClient from "../utils/HttpClient";
import config from "../config";

let httpClient = new HttpClient(config.baseUrl);

export default {
    get,
    save
}

async function get() {
    return await httpClient.get('/foods');
}

async function save(food) {
    return await httpClient.post('/foods', food);
}
