<template>
  <v-main>
    <v-container fluid>
      <v-card class="mx-auto" :max-width="1000">
        <p class="text-h5 text-center font-weight-black bg-error">Volume</p>
        <v-card-item :min-height="100">
          <div class="d-flex flex-column volume-slider">
            <div class="text-error">
              <v-slider color="error" prepend-icon="mdi-volume-high" v-model="volume" :thumb-size="20"
                thumb-label="always" step="10" show-ticks="always" max="100">
              </v-slider>
            </div>
          </div>
        </v-card-item>
      </v-card>
      <v-card class="mx-auto" :max-width="1000">
        <p class="text-h5 text-center font-weight-black bg-error">File</p>
        <v-card-item class="file">
          <v-file-input class="text-error my-file-input" :rules="rules" accept="audio/mp3" label="File input" variant="underlined"
            prepend-icon="mdi-music-clef-treble" show-size counter>
          </v-file-input>
          <div class="d-flex justify-center align-baseline" style="gap: 1rem">
            <v-btn class="bg-error" size="x-large" :loading="loading[2]" :disabled="loading[2]"
              prepend-icon="mdi-cloud-upload" @click="load(2)">
              Upload
            </v-btn>
          </div>
        </v-card-item>
        <v-card-item>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title>Audio files</v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-table>
                  <thead>
                    <tr>
                      <th class="text-left">
                        File
                      </th>
                      <th class="text-left">
                        Date / Time Upload
                      </th>
                      <th class="text-left">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="file in files" :key="file.file">
                      <td>{{ file.name }}</td>
                      <td>{{ file.date_upload }}</td>
                      <td>
                        <v-btn class="bg-error" icon="mdi-delete-forever" variant="text"></v-btn>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-item>
      </v-card>
      <v-card class="mx-auto" :max-width="1000" :disabled="isActiveSongPlaybackRange">
        <p class="text-h5 text-center font-weight-black bg-error">Song Playback Range</p>
        <v-card-item>
          <v-checkbox v-model="ex4" :indeterminate="isActiveSongPlaybackRange" label="Selecting the interval for playing a melody" color="error" hide-details>
          </v-checkbox>
        </v-card-item>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    isActiveSongPlaybackRange: true,
    files: [
      {
        name: 'file_0.mp3',
        date_upload: '19.03.2023 / 19:00'
      },
      {
        name: 'file_1.mp3',
        date_upload: '19.03.2023 / 19:00'
      },
      {
        name: 'file_2.mp3',
        date_upload: '19.03.2023 / 19:00'
      }
    ],
    loading: [],
    volume: 30,
    ex4: false,
    rules: [
      value => {
        return !value || !value.length || value[0].size < 30000000 || 'Максимальный размер аудиофайла не должен привышать 30 MB!'
      }
    ]
  }),
  methods: {
    load (i) {
      this.loading[i] = true
      setTimeout(() => (this.loading[i] = false), 3000)
    }
  }
}
</script>

<style scoped>
.v-card {
  margin-bottom: 15px;
}

.volume-slider {
  margin-top: 30px;
  padding-right: 15px;
}

.my-file-input {
  padding-right: 30px;
}

.v-card-item {
  min-height: 50px;
}

.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}

@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@-o-keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}</style>
