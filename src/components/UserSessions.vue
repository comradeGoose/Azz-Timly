<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left bg-error">
          id
        </th>
        <th class="text-left bg-error">
          Username
        </th>
        <th class="text-left bg-error">
          Token
        </th>
        <th class="text-left bg-error">
          Time
        </th>
        <th class="text-left bg-error">
          Disable
        </th>
      </tr>
    </thead>
    <tbody v-if="sessions.length !== 0">
      <tr v-for="session in sessions" :key="session">
        <td>{{ session.id }}</td>
        <td>{{ session.username }}</td>
        <td>{{ session.token }}</td>
        <td>{{ session.time }}</td>
        <td><v-btn color="error" icon="mdi-account-off" variant="text"></v-btn></td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      sessions: [
        {
          id: 'goose',
          username: 'goose',
          token: 'goose',
          time: '4'
        },
        {
          id: 'user',
          username: 'user',
          token: 'user',
          time: '2'
        }
      ]
    }
  },
  methods: {
    get_sessions () {
      axios.get('/get_sessions')
        .then((response) => {
          console.log(response.data)
          if (response.data == null) {
            this.sessions = []
          } else {
            this.sessions = response.data
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  mounted () {
    this.get_sessions()
  }
}
</script>
