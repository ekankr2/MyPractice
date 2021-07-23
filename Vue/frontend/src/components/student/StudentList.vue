<template>
  <div>
    <h3>학생 목록</h3>
    <table border="1">
      <tr>
        <th align="center" width="100">학생번호</th>
        <th align="center" width="100">이름</th>
        <th align="center" width="100">학년</th>
        <th align="center" width="100">성적</th>
        <th align="center" width="100">등록일자</th>
      </tr>
      <tr v-if="!students || (Array.isArray(students) && students.length === 0)">
        <td colspan="4">
          현재 등록된 학생이 없습니다!
        </td>
      </tr>
      <tr v-else v-for="student in students" :key="student.studentNo">
        <td align="center">{{ student.studentNo }}</td>
        <td align="center">{{ student.name }}</td>
        <td align="center">{{ student.studentGrade }}</td>
        <td align="center">{{ student.grades }}</td>
        <td align="center">{{ student.regDate }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "StudentList",
  props: {
    students: {
      type: Array,
    }
  }
}
</script>

<style scoped>

</style>