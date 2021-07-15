<template>
  <h1>Student Information</h1>
  <div class="students">
    <StudentCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src

import StudentCard from '@/components/StudentCard.vue'
//import NewCard from '@/components/newCard.vue'
import StudentService from '@/services/StudentService.js'

export default {
  name: 'StudentList',
  components: {
    StudentCard
    // NewCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    StudentService.getStudents()
      .then((response) => {
        this.events = response.data
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.students {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
