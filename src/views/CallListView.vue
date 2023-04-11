<template>
  <v-main>
    <CallList />
  </v-main>
</template>

<script>
import CallList from '../components/CallList.vue'

export default {
  name: 'CallListView',

  components: {
    CallList
  }
}
</script>

<style scoped>

.my-app-bar {
  display: flex;
  justify-content: center;
}
</style>
