<template>
  <v-container fluid>
    <v-alert v-if="call_list.length === 0"
    type="error"
    title="Call list"
    text="Call list is empty!"
    closable
    icon="mdi-bell-off"
  ></v-alert>
    <v-row v-else justify="center" align="center" wrap>
      <v-col v-for="(call, i) in call_list" :key="call" cols="12" sm="6" md="4" lg="3" min-width="400">
        <Call
        v-bind:call="call"
        v-bind:index="i"
        @deleteCall="deleteCall"
        @setPlay="setPlay"
        @updateMusicName="updateMusicName"
        @updateTimeStart="updateTimeStart"
        @updateTimeEnd="updateTimeEnd"
        @updateWeekDays="updateWeekDays"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import eventBus from '../eventBus.js'
import axios from 'axios'
import Call from '../components/Call.vue'

export default {
  //   const newCall = {
  //     id: Date.now(),
  //     play: false,
  //     music_name: '',
  //     week_days: [],
  //     time_start: '',
  //     time_end: ''
  //   }
  name: 'CallList',

  components: {
    Call
  },
  data () {
    return {
      call_list: []
    }
    // music_list: ['0', '1', '2', '3', '4', '5'],
  },
  created () {
    eventBus.on('addItem', ({ data }) => {
      this.call_list.push(data)
      this.push_calls()
    })
  },
  computed: {
  },
  methods: {
    push_calls: function () {
      axios.post('/set_call_list', {
        call_list: this.call_list
      })
        .then((response) => {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    deleteCall: function (id) {
      this.call_list = this.call_list.filter(t => t.id !== id)
      this.push_calls()
    },
    setPlay: function (id) {
      // setTimeout(() => { f }, 2000)
      this.call_list = this.call_list.map(t => t.id === id ? { ...t, play: !t.play } : t)
      this.push_calls()
    },
    updateMusicName: function (id, newValue) {
      this.call_list = this.call_list.map(t => t.id === id ? { ...t, music_name: newValue } : t)
      this.push_calls()
    },
    updateTimeStart: function (id, newValue) {
      this.call_list = this.call_list.map(t => t.id === id ? { ...t, time_start: newValue } : t)
      this.push_calls()
    },
    updateTimeEnd: function (id, newValue) {
      this.call_list = this.call_list.map(t => t.id === id ? { ...t, time_end: newValue } : t)
      this.push_calls()
    },
    updateWeekDays: function (id, newValue) {
      this.call_list = this.call_list.map(t => t.id === id ? { ...t, week_days: newValue } : t)
      this.push_calls()
    }
  },
  mounted () {
    axios.get('/get_call_list')
      .then((response) => {
        console.log(response.data)
        if (response.data == null) {
          this.calls = []
        } else {
          this.calls = response.data
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
