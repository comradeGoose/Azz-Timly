<template>
  <v-expansion-panel class="mx-auto my-panel">
    <v-expansion-panel-title color="error">
      <v-col cols="auto">
        <v-icon>mdi-identifier</v-icon>
        {{ id }}
      </v-col>
      <v-col cols="auto">
        <v-icon v-if="admin_status" color="">mdi-account-star</v-icon>
        <v-icon v-else>mdi-account</v-icon>
        {{ username }}
      </v-col>
      <template v-slot:actions="{ expanded }">
        <v-icon :color="!expanded ? '' : ''" :icon="expanded ? 'mdi-pencil' : 'mdi-check'"></v-icon>
      </template>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <!-- <v-row justify="space-around" no-gutters> -->
      <v-text-field v-model="id" label="id" type="text" readonly></v-text-field>
      <!-- <v-col cols="3"> -->
      <v-text-field v-model="username" label="Username" type="text" readonly></v-text-field>
      <!-- </v-col> -->
      <v-text-field v-model="login" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'" name="input-10-1" label="Change login" hint="At least 8 characters" counter
        @click:append="show2 = !show2"></v-text-field>
      <!-- <v-col cols="3"> -->
      <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Change password"
        hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
      <!-- </v-col> -->
      <!-- <v-col cols="3"> -->
      <v-checkbox v-model="admin_status" label="is Admin" color="error" hide-details></v-checkbox>
      <!-- </v-col> -->
      <v-divider></v-divider>
      <v-col cols="auto"><v-btn block color="success">save</v-btn></v-col>
      <!-- <v-col cols="auto"><v-btn block color="error">delete user</v-btn></v-col> -->
      <v-col cols="auto">
        <v-dialog v-model="dialog" persistent width="auto">
          <template v-slot:activator="{ props }">
            <v-btn color="error" v-bind="props" block>
              delete user
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h6">
              Delete user!
            </v-card-title>
            <v-card-text>Are you sure you want to delete {{ username }}?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="success" variant="text" @click="dialog = false">
                Disagree
              </v-btn>
              <v-btn color="success" variant="text" @click="dialog = false">
                Agree
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script>
export default {
  name: 'UseR',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      dialog: false,
      show1: false,
      show2: false,
      id: this.user.id,
      username: this.user.username,
      login: '',
      password: '',
      admin_status: this.user.admin_status,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don`t match')
      }
    }
  }
}
</script>

<style scoped>
.my-panel {
  max-width: 1000px;
  margin-bottom: 5px;
}
</style>
