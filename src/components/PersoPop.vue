<template>
  <div v-if="perso && showSelf" class="row_part">
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
  <button v-on:click="showSelf = !showSelf" style="margin-bottom: 1vh">
    {{ showSelf ? 'Cacher' : 'Afficher' }}
  </button>
</template>

<script>
import storeSwapi from '../store/store.swapi.js';

export default {
  name: 'PersoSeul',
  data() {
    return {
      perso: this.persoData,
      persoNb: null,
      planetPerso: null,
      showSelf: false,
    };
  },
  props: {
    persoData: []
  },
  components: {},
  methods: {},
  mounted() {
    this.persoNb = this.perso.url.split('/')[5];
    let planetId = this.perso.homeworld.split('/')[5];
    storeSwapi.getPlanet(planetId).then(response => {
      this.planetPerso = response.data.name;
    });
  },
  watch: {}
}
</script>

<style scoped>
.partDesc {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.row_part{
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  background-color: #2c3e50;
  color: white;
  padding: 0.5rem;
  border-radius: 5px;
  margin-bottom: 5rem;
}
</style>