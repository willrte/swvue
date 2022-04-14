<template>
  <div class="haut_page">
    <!--    <h1>{{$route.name}}</h1>-->
  </div>
  <input type="number" id="id_perso" v-model="persoNb">
  <div v-if="perso" class="card_perso">
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
        <div v-if="planetPerso">Homeworld :{{ planetPerso }}</div>
        <div v-else>
          <img src="../../src/assets/loading.gif" height="30" width="30">
        </div>
    </div>

  </div>
  <div v-else>
    <img src="../../src/assets/loading.gif" height="200" width="200" style="margin-top: 2rem">
  </div>

  {{ perso }}
</template>
<script>
import storeSwapi from '../store/store.swapi.js';

export default {
  name: 'PersoSeul',
  data() {
    return {
      persa: null,
      perso: null,
      persoNb: 1,
      planetPerso: null,
    };
  },
  components: {},
  methods: {},
  mounted() {
    storeSwapi.getPerso(this.persoNb).then(response => {
      this.perso = response.data;
    });
  },
  watch: {
    persoNb: function () {
      storeSwapi.getPerso(this.persoNb).then(response => {
        this.perso = response.data;
      });
    },
    perso: function () {
      let planetId = this.perso.homeworld.split('/')[5];
      storeSwapi.getPlanet(planetId).then(response => {
        this.planetPerso = response.data.name;
      });
    },
  },
}
</script>
<style scoped>

</style>