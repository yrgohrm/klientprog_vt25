<script setup>
import { useCounterStore } from '@/stores/counter';
import { mapStores } from 'pinia';
</script>

<template>
  <div>
    <input type="button" @click="counterStore.increment" value="incr">
    {{ counterStore.counter }}
  </div>
</template>

<script>
export default {
  computed: {
    ...mapStores(useCounterStore)
  }
}
</script>

<style scoped>
div {
  background-color: aliceblue;
}
</style>
