<template>
  <div class="haut_page">
    <input type="number" id="id_perso" v-model="persoNb" @keyup.enter="getPerso"> &nbsp;
    <button @click="getPerso">Get Perso</button>
  </div>
  <div v-if="perso && persoNb && persoNb!==0" style="display: flex; flex-direction: column;
  justify-content: center; align-items: center">

    <div class="infos_perso">
      <h2 style="color: #42afb9">
        {{ perso.name }}
      </h2>
      <div>
        {{ perso.height / 100 }} m
      </div>
      <div>
        {{ perso.mass }} kg
      </div>
      <div>
        Couleur de cheuveux : {{ perso.hair_color }}
      </div>
      <div>
        Année de naissance : {{ perso.birth_year }}
      </div>
      <div>
        Genre : {{ perso.gender }}
      </div>
      <div>
        <div v-if="planetPerso">Planète : {{ planetPerso }}</div>
        <div v-else>
          <img src="../../src/assets/loading.gif" height="30" width="30">
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: row; justify-content: space-around;">
    <div class="infos_perso">
      <div v-if="filmsPerso.length > 0" style="margin-top: 1rem; font-size: 20px; color: #80ffd3">
        <div class="inside_title">Films :</div>
        <div style="font-size: 15px; color: white; font-weight: normal" v-for="film in filmsPerso" :key="film">
          {{ film }}
        </div>
      </div>
    </div>
      <div class="infos_perso">
        <div v-if="vehiclesPerso.length > 0" style="margin-top: 1rem; font-size: 20px; color: #80ffd3">
          <div class="inside_title">Véhicules :</div>
          <div style="font-size: 15px; color: white; font-weight: normal" v-for="vehicle in vehiclesPerso" :key="vehicle">
            {{ vehicle }}
          </div>
        </div>
        <div v-else style=" display: flex; flex-direction: row; align-items: center;" >
          <div style="font-size: 15px; color: white; font-weight: normal">
            Aucun véhicule utilisé
          </div>
        </div>
      </div>
      <div class="infos_perso">
        <div v-if="vaisseauxPerso.length > 0" style="margin-top: 1rem; font-size: 20px; color: #80ffd3">
          <div class="inside_title">Vaisseaux :</div>
          <div style="font-size: 15px; color: white; font-weight: normal" v-for="vaisseau in vaisseauxPerso" :key="vaisseau">
            {{ vaisseau }}
          </div>
        </div>
        <div v-else>
          <div style="font-size: 15px; color: white; font-weight: normal">
            Aucun vaisseau utilisé
          </div>
        </div>
      </div>
    </div>
  </div>


  <div v-else-if="persoNb">
    <img src="../../src/assets/loading.gif" height="200" width="200" style="margin-top: 2rem">
  </div>
  <div>
    <h1>{{ ErrorMessage }}</h1>
  </div>
</template>
<script>
import storeSwapi from '../store/store.swapi.js';

export default {
  name: 'PersoSeul',
  data() {
    return {
      perso: null,
      persoNb: null,
      planetPerso: null,
      filmsPerso: null,
      vehiclesPerso: [],
      vaisseauxPerso: [],
      ErrorMessage: null
    };
  },
  components: {},
  methods: {
    getPerso() {
      if (this.persoNb <= 0 || this.persoNb > 82) {
        this.ErrorMessage = "L'ID doit être un nombre entier positif inférieur ou égal à 82";
      } else {
        this.ErrorMessage = null;
        storeSwapi.getPerso(this.persoNb).then(response => {
          this.perso = response.data;
        });
      }
    },
    getPersoFilms(){
      let filmsId = this.perso.films;
      this.filmsPerso = [];
      filmsId.forEach(film => {
        let filmId = film.split('/')[5];
        storeSwapi.getFilm(filmId).then(response => {
          this.filmsPerso.push(response.data.title);
        });
      });
    },
    getPersoVehicles(){
      let vehiclesId = this.perso.vehicles;
      this.vehiclesPerso = [];
      vehiclesId.forEach(vehicle => {
        let vehicleId = vehicle.split('/')[5];
        storeSwapi.getVehicle(vehicleId).then(response => {
          this.vehiclesPerso.push(response.data.name);
        });
      });
    },
    getPersoStarships(){
      let starshipsId = this.perso.starships;
      this.vaisseauxPerso = [];
      starshipsId.forEach(starship => {
        let starshipId = starship.split('/')[5];
        storeSwapi.getStarship(starshipId).then(response => {
          this.vaisseauxPerso.push(response.data.name);
        });
      });
    },
  },
  mounted() {
  },
  watch: {

    perso() {
      let planetId = this.perso.homeworld.split('/')[5];
      storeSwapi.getPlanet(planetId).then(response => {
        this.planetPerso = response.data.name;
      });
      this.getPersoFilms()
      this.getPersoVehicles()
      this.getPersoStarships()
    }
  }
}
</script>
<style scoped>
.infos_perso {
  display: flex;
  width: max-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  background-color: #292f3a;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
}
.inside_title{
  margin-bottom: 1rem;
}
</style>