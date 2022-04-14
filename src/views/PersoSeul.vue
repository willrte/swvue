<template>
  <div class="haut_page">
    <input type="number" id="id_perso" v-model="persoNb">
    <button @click="getPerso">Get Perso</button>
  </div>
  <div v-if="perso && persoNb && persoNb!==0" class="card_perso">
    <div>
      {{ perso.name }}
    </div>
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
  <div v-else-if="persoNb">
    <img src="../../src/assets/loading.gif" height="200" width="200" style="margin-top: 2rem">
  </div>
  <div>
    <h1>{{ErrorMessage}}</h1>
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
      ErrorMessage: null
    };
  },
  components: {},
  methods: {
    getPerso() {
      if (this.persoNb <=0 || this.persoNb > 82) {
        this.ErrorMessage = "L'ID doit être un nombre entier positif inférieur ou égal à 82";
      } else {
        this.ErrorMessage = null;
        storeSwapi.getPerso(this.persoNb).then(response => {
          this.perso = response.data;
        });
      }
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
    }
  }
}
</script>
<style scoped>

</style>