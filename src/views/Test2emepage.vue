<template>
  <div class="haut_page">
    <h1 style="margin: 0 1rem">{{$route.name}}</h1>
  </div>

  <div style="display: flex; flex-wrap: wrap; width: 100%; height: 100%">
    <div class="user_card" v-for="character in people.results" :key="character">
        <div class="people_title">{{character.name}}</div>
      <div class="under_infos_card">
        <div>{{character.height/100}} m</div>
        <div>{{character.mass}} kg</div>
        <div>Naissance :{{character.birth_year}}</div>
      </div>
    </div>
  </div>
  <div class="pagination">
    <button  @click="prevPage()">prev</button>
    <p style="margin: 0 1rem">Page : {{pageNumber}}</p>
    <button @click="nextPage()">next</button>
  </div>
</template>
<!--<div class="infobox" :class="{activated_box: item.date_paiement !== null }">-->
<script>
import storeSwapi from '../store/store.swapi.js';

export default {
  name: 'StarWarsMachin',
  data() {
    return {
      people: [],
      pageNumber: 1
    };
  },
  components: {
  },
  methods: {
    nextPage() {
      if (this.people.next) {
        this.pageNumber++;
        storeSwapi.getAllPeople(this.pageNumber).then(response => {
          this.people = response.data;
        });
      }

    },
    prevPage() {
      if (this.pageNumber > 1) {
        this.pageNumber--;
        storeSwapi.getAllPeople(this.pageNumber).then(response => {
          this.people = response.data;
        });
      }
    },
  },
  mounted() {
      storeSwapi.getAllPeople(this.pageNumber).then(response => {
        this.people = response.data;
      });
  },
}
</script>
<style scoped>
.user_card{
  display: flex;
  flex-direction: column;
  width: 10rem;
  height: 10rem;
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
</style>