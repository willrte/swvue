import axios from 'axios';


let storeSwapi = {
    getAllPeople(pagenb) {
        return axios.get('https://swapi.dev/api/people/?page=' + pagenb);
    },
    getPeople(id) {
        return axios.get(`https://swapi.dev/api/people/${id}/`);
    },
    getAllPlanets() {
        return axios.get('https://swapi.dev/api/planets/');
    },
    getPlanet(id) {
        return axios.get(`https://swapi.dev/api/planets/${id}/`);
    },
    getNextPage(url) {
        return axios.get(url);
    },
}
export default storeSwapi;