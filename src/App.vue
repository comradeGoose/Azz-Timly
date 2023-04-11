<template>
  <v-app id="inspire" class="bg-grey-lighten-2 background-image">
    <TopMenu/>
    <router-view />
    <BottomMenu/>
  </v-app>
</template>

<script>
// if (this.$route.name === 'about')
import TopMenu from './components/TopMenu.vue'
import BottomMenu from './components/BottomMenu.vue'
export default {
  name: 'App',
  components: {
    TopMenu,
    BottomMenu
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
.background-image{
  /* background-color: rgb(100, 161, 171); */
  /* background-image: url('https://picsum.photos/1920/1080?random'); */
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="50" height="50"%3E%3Ctext x="-20" y="35" font-size="14" font-family="Roboto" fill="%23eeeeee" transform="rotate(-45)"%3Egoose%3C/text%3E%3C/svg%3E');
  /* background-image: url('https://cdn-icons-png.flaticon.com/512/9767/9767513.png'); */
  background-repeat: repeat;
  /* background-size: cover; */
}
</style>
