<template>
  <div id="board">
    <h2>학생들 성적표</h2>
    <student-list :students="students"></student-list>

  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import StudentList from "../components/student/StudentList";
export default {
  name: 'StudentListPage',
  components: {
    StudentList,

  },
  computed: {
    ...mapState(['students'])
  },
  mounted () {
    this.fetchStudentList()
  },
  methods: {
    ...mapActions(['fetchStudentList'])
  }
}
</script>