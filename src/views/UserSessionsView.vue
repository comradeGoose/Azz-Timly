<template>
  <v-main>
    <UserSessions />
  </v-main>
</template>

<script>
import UserSessions from '../components/UserSessions.vue'

export default {
  name: 'UserSessionsView',
  components: {
    UserSessions
  }
}
</script>
