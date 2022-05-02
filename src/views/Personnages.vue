<template>
  <div class="haut_page">
<!--    <h1>{{$route.name}}</h1>-->
  </div>
  <div>
    <input type="text" v-model="search" placeholder="Rechercher dans la page">
  </div>


  <div style="display: flex; flex-wrap: wrap; width: 80%; height: 100%">
    <img v-if="[] === people" src="../../src/assets/loading.gif" height="200" width="200" style="margin: auto">
    <div class="user_card" v-for="character in searchPeople" :key="character">
      <div class="people_title">{{character.name}}</div>
      <PersoPop :persoData="character"/>
    </div>
  </div>
  <div class="pagination">
    <button  @click="prevPage()" :class="{ btn_none: !prevValue }">prev</button>
    <p style="margin: 0 1rem">Page : {{pageNumber}}</p>
    <button @click="nextPage()" :class="{ btn_none: !nextValue }">next</button>
  </div>
</template>
<!--<div class="infobox" :class="{activated_box: item.date_paiement !== null }">-->
<script>
import storeSwapi from '../store/store.swapi.js';
import PersoPop from '../components/PersoPop.vue';

export default {
  name: 'ListePersonnages',
  data() {
    return {
      people: [],
      pageNumber: 1,
      nextValue: true,
      prevValue: false,
      search: '',
    };
  },
  components: {
    PersoPop,
  },
  methods: {
    nextPage() {
      if (this.people.next) {
        this.pageNumber++;
        storeSwapi.getAllPeople(this.pageNumber).then(response => {
          this.people = response.data;
          this.prevValue = true;
        });
      }
      else {
        this.nextValue = false;
      }

    },
    prevPage() {
      if (this.pageNumber > 1) {
        this.pageNumber--;
        storeSwapi.getAllPeople(this.pageNumber).then(response => {
          this.people = response.data;
          this.nextValue = true;
        });
      }
      else {
        this.prevValue = false;
      }
    },
    setPopStatus() {
      this.PopStatus = !this.PopStatus;
    },

  },
  mounted() {
      storeSwapi.getAllPeople(this.pageNumber).then(response => {
        this.people = response.data;
      });
  },
  computed: {
    searchPeople() {
      if (this.search) {
        return this.people.results.filter(personnage => {
        return personnage.name.toLowerCase().includes(this.search.toLowerCase());
      });
      }
      else {
       return this.people.results;
      }
    },
  },



}
</script>
<style scoped>
.user_card{
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: max-content;
  margin: 1rem;
  justify-content: center;
  align-items: center;
  /*border: 1px solid #ccc;*/
  border-radius: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.28);
}
.people_title{
  font-weight: 700;
  color: #22603c;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 90%;
  background: #80ffd3;
  margin: 0.3rem;
  border-radius: 10px;
}
.under_infos_card{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.haut_page{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.pagination{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  margin: 0.3rem;
  border-radius: 10px;
}
.btn_none{
  background: #707070;
  color: #d0d0d0;
  cursor: not-allowed;
}
</style>