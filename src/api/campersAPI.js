import axios from "axios";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

const axiosInstance = axios.create({
    baseURL: API_URL,
});

async function getAll() {
    return axiosInstance.get("/");
}

async function getFiltering({ filters = {}, page = 1, limit = 4 }) {
    const params = new URLSearchParams();
    for (const key in filters) {
        if (Object.prototype.hasOwnProperty.call(filters, key)) {
            params.append(key, filters[key]);
        }
    }
    params.append("page", page);
    params.append("limit", limit);

    return axiosInstance.get("/", { params });
}

export default {
    getAll,
    getFiltering,
};
