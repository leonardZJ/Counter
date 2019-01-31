<template>
  <div>
    <p>clicked:{{ count }}times，count 是 {{ evenOrOdd }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>  
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'

export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
  },
  methods: {
    ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
  }
}
</script>

<style>

</style>
