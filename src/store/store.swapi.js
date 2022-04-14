import axios from 'axios';


let storeSwapi = {
    getAllPeople(pagenb) {
        return axios.get('https://swapi.dev/api/people/?page=' + pagenb);
    },
    getPerso(id) {
        return axios.get('https://swapi.dev/api/people/' + id);
    },
    getNextPage(url) {
        return axios.get(url);
    },
    getPlanet(id) {
        return axios.get('https://swapi.dev/api/planets/' + id);
    },
}
export default storeSwapi;