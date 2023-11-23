import http from "./http-api";

const getAll = () => {
    return http.get("/all");
};

const CountriesService = {
    getAll,

};

export default CountriesService;
