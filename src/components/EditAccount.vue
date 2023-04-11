<template>
  <!-- <div>
    <h1>id: {{ id }}</h1>
    <h1>username: {{ username }}</h1>
  </div> -->
  <v-container fluid>
    <v-card class="mx-auto" :max-width="1000">
      <br>
      <v-card-text class="py-0">
        <v-row align="center" no-gutters>
          <v-col cols="mx-auto" class="text-center">
            <v-avatar color="info" size="125" image="https://picsum.photos/1920/1080?random">
              <v-icon icon="mdi-account-circle">
                <span class="text-h5">{{ username[0] }}</span>
              </v-icon>
            </v-avatar>
          </v-col>
        </v-row>
        <v-row align="center" no-gutters>
          <v-col class="text-center text-h2" cols="mx-auto">
            {{ username }}
          </v-col>
        </v-row>
        <v-row align="center" no-gutters>
          <v-col class="text-center" cols="mx-auto">
            <v-icon icon="mdi-identifier" size="18" color="error" class="me-1 pb-1"></v-icon>
          {{ id }}
          </v-col>
        </v-row>
      </v-card-text>

      <div class="d-flex py-3 justify-space-between">
      </div>

      <v-expand-transition>
      <div v-if="expand">
        <div class="py-2">
        </div>
        <v-list class="bg-transparent">
          <v-list-item>
            <v-text-field v-model="login" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'" name="input-10-1" label="Change login" hint="At least 5 characters" counter
        @click:append="show2 = !show2"></v-text-field>
      <!-- <v-col cols="3"> -->
      <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Change password"
        hint="At least 5 characters" counter @click:append="show1 = !show1"></v-text-field>
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>

      <v-divider></v-divider>
      <v-card-actions>
        <v-btn block color="error" @click="expand = !expand">
          {{ !expand ? 'Edit' : !(login && password) ? 'Hide' : (login.length >= 5 && password.length >= 5) ? 'Save' : 'Hide' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'EditAccount',
  data () {
    return {
      id: localStorage.getItem('azz_id'),
      username: localStorage.getItem('azz_username'),
      login: null,
      password: null,
      expand: false,
      show1: false,
      show2: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 5 || 'Min 5 characters',
        emailMatch: () => ('The email and password you entered don`t match')
      }
    }
  }
}
</script>
