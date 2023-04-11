<template>
  <div>
    <v-navigation-drawer class="bg-error" v-model="drawer" temporary>
      <v-container fluid>
        <v-card class="pa-2">
          <!-- <div class="d-flex align-center justify-space-around">
          </div> -->
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar color="info" size="x-large" image="https://picsum.photos/1920/1080?random">
                <v-icon icon="mdi-account-circle">
                  <span class="text-h5">{{ username[0] }}</span>
                </v-icon>
              </v-avatar>
              <h3>{{ username }}</h3>
              <p class="text-caption mt-1">
                id: {{ id }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn rounded variant="text" to="/edit-account">
                <v-icon>mdi-account-edit-outline</v-icon>
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn class="bg-error" rounded variant="text">
                <v-icon>mdi-logout</v-icon>
                Log out
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-container>
      <template v-slot:append>
        <div class="pa-2 text-center">
          <h6>Time your life with Timely!</h6>
          <h6>Copyright © 2022-{{ new Date().getFullYear() }} Comrade Goose</h6>
          <!-- <v-btn block class="text-error">
              Logout
            </v-btn> -->
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random"> <!--3840/2160 -->
      <v-app-bar-nav-icon icon="mdi-account-circle" aria-controls="warning" @click="drawer = !drawer"
        class="bg-error"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <!-- <h1>Azz</h1> -->
        <!-- <h3>Timely</h3> -->
      </v-toolbar-title>
      <template v-slot:append>
        <v-btn v-if="(this.$route.name === 'call-list')" class="bg-error" icon="mdi-bell-plus"
          @click="handleClick"></v-btn>
        <v-btn v-if="(this.$route.name === 'user')" class="bg-error" icon="mdi-arrow-left-bold" to="/users"
          @click="handleClick"></v-btn>
        <v-btn v-if="(this.$route.name === 'users')" class="bg-error" icon="mdi-account-plus"></v-btn>
        <!-- <v-btn v-if="(this.$route.name === 'event-log')" class="bg-error" icon="mdi-reload"
          @click="reloadEventList"></v-btn> -->
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import eventBus from '../eventBus.js'
// if (this.$route.name === 'about')
// sessionStorage.setItem('','')
// sessionStorage.getItem('')
// import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      drawer: null,
      id: localStorage.getItem('azz_id'),
      username: localStorage.getItem('azz_username')
    }
  },
  computed: {
    // ...mapGetters(['calls'])
  },
  methods: {
    handleClick () {
      eventBus.emit('addItem', {
        data: {
          id: Date.now(),
          play: false,
          music_name: '',
          week_days: [],
          time_start: '',
          time_end: '',
          date_edit: '',
          user_edit: ''
        }
      })
    },
    reloadEventList () {
      eventBus.emit('reloadEventList', {
        data: {}
      })
    }
  }
}
</script>

<style scoped>
.v-btn-log {
  margin-right: 10px;
}</style>
