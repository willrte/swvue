<template>
  <h1>{{$route.name}}</h1>
  <div>Rentrez un nombre</div>
  <input v-model="number" type="number" />
  <div>le nombre est : {{pairimpair}}</div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      number: 0,
      pairimpair: "",
    }
  },
  components: {

  },
  methods: {
    isPair: function(mysterynumber) {
      if (mysterynumber % 2 == 0) {
        this.pairimpair = "pair";
      } else {
        this.pairimpair = "impair";
      }
    }
  },
  watch: {
    number: function() {
      this.isPair(this.number);
    }
  },
}
</script>