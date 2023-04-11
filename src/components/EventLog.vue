<template>
  <v-card class="">
    <v-card-title>
      <div class="text-center">
        <v-btn variant="text" icon="mdi-chevron-double-left" @click="previousYear"></v-btn>
      <v-btn variant="text" icon="mdi-chevron-left" @click="previousMonth"></v-btn>
      {{ currentMonth }}
      <v-btn variant="text" icon="mdi-chevron-right" @click="nextMonth"></v-btn>
      <v-btn variant="text" icon="mdi-chevron-double-right" @click="nextYear"></v-btn>
      </div>
    </v-card-title>
    <!-- <template v-slot:subtitle>
      {{ currentDate }}
    </template> -->
    <v-table>
      <thead class="">
        <tr>
          <th class="text-center bg-error" v-for="day in daysOfWeek" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="week in weeksOfMonth" :key="week">
          <td v-for="day in week" :key="day" class="text-center">
            <v-btn variant="text" icon :class="{
               'bg-success': isCurrentDate(new Date(day)),
               'bg-grey text-muted': day === '' ,
               'bg-error': isIncludedDate(`${new Date(day).getDate()}.${new Date(day).getMonth()}.${new Date(day).getFullYear()}`),
               'bg-warning': isSelectedDate(new Date(day))
              }" :disabled="day === ''"
            @click="selectDate(new Date(day)), showEvent(new Date(day))"
            >
            <div v-if="day !== ''">{{new Date(day).getDate()}}</div>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <v-card-actions class="bg-error">
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  data () {
    return {
      currentDate: new Date(),
      visible_month: new Date(),
      selectedDate: null,
      daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      weeksOfMonth: [],
      eventDays: ['15.3.2023', '20.3.2023', '30.3.2023', '15.4.2023']
    }
  },
  computed: {
    currentMonth () {
      return this.visible_month.toLocaleString('default', { month: 'long', year: 'numeric' })
    }
  },
  created () {
    const year = this.visible_month.getFullYear()
    const month = this.visible_month.getMonth()
    this.weeksOfMonth = this.getWeeksOfMonth(year, month)
  },
  methods: {
    isIncludedDate (dateString) {
      console.log(dateString)
      console.log(this.eventDays.includes(dateString))
      return this.eventDays.includes(dateString)
    },
    previousMonth () {
      const year = this.visible_month.getFullYear()
      const month = this.visible_month.getMonth()
      this.visible_month = new Date(year, month - 1, 1)
      this.weeksOfMonth = this.getWeeksOfMonth(this.visible_month.getFullYear(), this.visible_month.getMonth())
    },
    previousYear () {
      const year = this.visible_month.getFullYear()
      const month = this.visible_month.getMonth()
      this.visible_month = new Date(year - 1, month, 1)
      this.weeksOfMonth = this.getWeeksOfMonth(this.visible_month.getFullYear(), this.visible_month.getMonth())
    },
    nextMonth () {
      const year = this.visible_month.getFullYear()
      const month = this.visible_month.getMonth()
      this.visible_month = new Date(year, month + 1, 1)
      this.weeksOfMonth = this.getWeeksOfMonth(this.visible_month.getFullYear(), this.visible_month.getMonth())
    },
    nextYear () {
      const year = this.visible_month.getFullYear()
      const month = this.visible_month.getMonth()
      this.visible_month = new Date(year + 1, month, 1)
      this.weeksOfMonth = this.getWeeksOfMonth(this.visible_month.getFullYear(), this.visible_month.getMonth())
    },
    getWeeksOfMonth (year, month) {
      const firstDayOfMonth = new Date(year, month, 1)
      // const lastDayOfMonth = new Date(year, month + 1, 0)
      const weeksOfMonth = []
      let week = []
      let day = new Date(firstDayOfMonth)

      // Add empty cells for days before the first day of the month
      for (let i = 1; i < (day.getDay() === 0 ? 7 : day.getDay()); i++) {
        week.push('')
      }
      // Add cells for each day of the month
      for (day of this.daysInMonth(year, month)) {
        week.push(new Date(day.getFullYear(), day.getMonth(), day.getDate()))
        console.log(new Date(day.getFullYear(), day.getMonth(), day.getDate()))

        if (day.getDay() === 0) {
          // Add completed week to weeks array
          weeksOfMonth.push(week)
          // Reset week array for next week
          week = []
        }
      }

      // Add empty cells for days after the last day of the month
      for (let i = day.getDay(); i < 7 && day.getDay() !== 0; i++) {
        week.push('')
      }

      // Add completed week to weeks array
      weeksOfMonth.push(week)

      return weeksOfMonth
    },
    daysInMonth (year, month) {
      const firstDayOfMonth = new Date(year, month, 1)
      const lastDayOfMonth = new Date(year, month + 1, 0)
      const days = []

      for (let i = firstDayOfMonth.getDate(); i <= lastDayOfMonth.getDate(); i++) {
        days.push(new Date(year, month, i))
      }

      return days
    },
    isCurrentDate (date) {
      const year = this.currentDate.getFullYear()
      const month = this.currentDate.getMonth()
      const day = this.currentDate.getDate()
      return date.getTime() === new Date(year, month, day).getTime()
    },
    isSelectedDate (date) {
      if (!this.selectedDate) {
        return false
      }
      return date.getDate() === this.selectedDate
    },
    selectDate (date) {
      if (this.selectedDate && this.selectedDate === date.getDate()) {
        this.selectedDate = null
      } else {
        this.selectedDate = date.getDate()
        // console.log(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}.json`)
      }
    },
    showEvent (date) {
      if (this.isIncludedDate(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`)) {
        alert(date.getDate() + '/\n    ' + date.getMonth() + '/\n        ' + date.getFullYear() + '.json')
        // alert(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}.json`)
        // console.log(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}.json`)
      }
    }
  }
}
</script>

<style scoped>
.v-table .v-table__wrapper table tbody tr td {
  height: 70px;
  padding: 0;
}
</style>
