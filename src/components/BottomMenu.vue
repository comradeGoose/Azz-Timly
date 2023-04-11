<template>
  <v-footer app>
    <v-layout class="overflow-visible" style="height: 56px;">
      <v-bottom-navigation bg-color="error">
        <v-btn to="/call-list">
          <v-icon>mdi-bell-outline</v-icon>
          <span>Calls</span>
        </v-btn>
        <v-btn to="/settings">
          <v-icon>mdi-cog-outline</v-icon>
          <span>Settings</span>
        </v-btn>
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props">
              <v-icon>mdi-post-outline</v-icon>
              <span>Log</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item class="text-center" v-for="(item, index) in items" :key="index" :value="index" :to="item.ref">
              <v-icon>{{ item.icon }}</v-icon> <span>
                <h6>{{ item.title }}</h6>
              </span>
            </v-list-item>
          </v-list>
        </v-menu>
        <!-- <v-btn v-if="true" to="/event-log">
                <v-icon>mdi-calendar-text</v-icon>
                <span>Event</span>
            </v-btn>
            <v-btn v-if="true" to="/user-sessions">
                <v-icon>mdi-account-group-outline</v-icon>
                <span>Session</span>
            </v-btn> -->
      </v-bottom-navigation>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          ref: '/event-log',
          icon: 'mdi-calendar-text',
          title: 'Events'
        },
        {
          ref: '/user-sessions',
          icon: 'mdi-account-group-outline',
          title: 'Sessions'
        },
        {
          ref: '/users',
          icon: 'mdi-badge-account-alert-outline',
          title: 'Users'
        }
      ]
    }
  }
}
</script>

<style scoped>
.v-footer {
  padding: 0;
  margin: 0;
}
</style>
