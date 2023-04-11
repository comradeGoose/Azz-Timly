<template>
  <v-card class="mx-auto" max-width="368">
    <v-card-item class="title-card text-error">
    </v-card-item>
    <v-card-item>
      <v-select v-model="music_name" label="Мелодия" :items="music_list" variant="underlined" clearable @update:modelValue="updateMusicName(id, music_name)"></v-select>
    </v-card-item>
    <!-- <v-card-item>
            <template v-slot:subtitle>
              <v-row>
                <v-col cols="5">
                  Начало мелодии {{ Math.floor(song_range[0] / 60) }}:{{ song_range[0] % 60 }}
                </v-col>
                <v-divider></v-divider>
                <v-col cols="5">
                  Конец мелодии {{ Math.floor(song_range[1] / 60) }}:{{ song_range[1] % 60 }}{{ }}
                </v-col>
              </v-row>
            </template>
          </v-card-item>
          <v-range-slider v-model="song_range" :max="song_duration" step="1"></v-range-slider> -->
    <v-card-item>
      <v-row>
        <v-col cols="5">
          <v-text-field label="Начало урока" v-model="time_start" type="time" variant="underlined" @update:modelValue="updateTimeStart(id, time_start)"></v-text-field>
        </v-col>
        <v-col class="arrow">
          <v-icon>mdi-ray-start-arrow</v-icon>
        </v-col>
        <v-col cols="5">
          <v-text-field label="Конец урока" v-model="time_end" type="time" variant="underlined" @update:modelValue="updateTimeEnd(id, time_end)"></v-text-field>
        </v-col>
      </v-row>
    </v-card-item>
    <v-card-item>
      <v-row>
        <v-col>
          <v-checkbox v-model="week_days" label="Пн" color="error" value="1" hide-details @update:modelValue="updateWeekDays(id, week_days)"></v-checkbox>
          <v-checkbox v-model="week_days" label="Чт" color="error" value="4" hide-details @update:modelValue="updateWeekDays(id, week_days)"></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox v-model="week_days" label="Вт" color="error" value="2" hide-details @update:modelValue="updateWeekDays(id, week_days)"></v-checkbox>
          <v-checkbox v-model="week_days" label="Пт" color="error" value="5" hide-details @update:modelValue="updateWeekDays(id, week_days)"></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox v-model="week_days" label="Ср" color="error" value="3" hide-details @update:modelValue="updateWeekDays(id, week_days)"></v-checkbox>
          <v-checkbox v-model="week_days" label="Сб" color="error" value="6" hide-details @update:modelValue="updateWeekDays(id, week_days)"></v-checkbox>
        </v-col>
      </v-row>
    </v-card-item>
    <v-divider></v-divider>
    <v-card-actions>
      <v-container class="my-container">
        <v-row justify="space-between" align="center">
          <v-col cols="auto">
            <v-btn color="error" icon="mdi-bell-remove" size="large" @click="deleteCall(id)"></v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn density="compact" color="error" variant="text" icon="mdi-alert-circle-outline"
              @click="reveal = true"></v-btn>
          </v-col>
          <v-col cols="auto">
            <v-switch v-model="play" hide-details color="success" inset @update:modelValue="setPlay(id)"></v-switch>
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions>

    <v-expand-transition>
      <v-card v-if="reveal" class="v-card--reveal" style="height: 100%;">
        <v-card-text class="pb-0 text-caption">
          <p>
            <v-icon>mdi-identifier</v-icon>
            {{ id }}
          </p>
          <v-divider></v-divider>
          <p>
            <v-icon>mdi-calendar-clock</v-icon>
            {{ date_edit }} <!-- .toLocaleDateString('ru-RU', options) -->
          </p>
          <v-divider></v-divider>
          <p>
            <v-icon>mdi-account</v-icon>
            {{ user_edit }}
          </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn variant="text" color="error" @click="reveal = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'CalL',
  props: {
    call: {
      type: Object,
      required: true
    },
    index: Number
  },
  data () {
    return {
      // options: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric' },
      reveal: false,
      music_list: ['0', '1', '2', '3', '4', '5'],
      id: this.call.id,
      play: this.call.play,
      music_name: this.call.music_name,
      week_days: this.call.week_days,
      time_start: this.call.time_start,
      time_end: this.call.time_end,
      date_edit: this.call.date_edit,
      user_edit: this.call.user_edit
    }
  },
  methods: {
    deleteCall (id) {
      this.$emit('deleteCall', id)
    },
    setPlay (id) {
      this.$emit('setPlay', id)
    },
    updateMusicName (id, newValue) {
      this.$emit('updateMusicName', id, newValue)
    },
    updateTimeStart (id, newValue) {
      this.$emit('updateTimeStart', id, newValue)
    },
    updateTimeEnd (id, newValue) {
      this.$emit('updateTimeEnd', id, newValue)
    },
    updateWeekDays (id, newValue) {
      this.$emit('updateWeekDays', id, newValue)
    }

  }
}
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

.color-card {
  /* background-color: #ffffff00; */
}

.my-container {
  padding-top: 0;
  padding-bottom: 0;
}

.v-card-actions {
  padding-top: 0;
  padding-bottom: 0;
}

.v-card-item {
  padding-top: 0;
  padding-bottom: 0;
}

.title-card {
  padding-top: 15px;
  padding-bottom: 5px;
}

.v-selection-control {
  justify-content: flex-end;
  padding-right: 15px;
}

.arrow {
  display: flex;
  align-items: center;
}
</style>
