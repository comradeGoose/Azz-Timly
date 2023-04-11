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
          Admin
        </th>
        <th class="text-left bg-error">
          Edit
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user">
        <td>{{ user.id }}</td>
        <td>{{ user.username }}</td>
        <td>
          <v-icon v-if="user.admin_status" color="amber">mdi-account-star</v-icon>
          <v-icon v-else color="error">mdi-account</v-icon></td>
        <td>
          <v-btn v-if="!user.admin_status" color="error" icon="mdi-pencil" variant="text"></v-btn>
          <v-btn v-else color="grey" icon="mdi-pencil" variant="text" disabled></v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  name: 'UserS',
  components: {
  },
  data () {
    return {
      users: [
        {
          id: 0,
          username: 'goose',
          login: 'goose',
          admin_status: true
        },
        {
          id: 1,
          username: 'ch',
          login: 'ch',
          admin_status: false
        }
      ]
    }
  }
}
</script>
