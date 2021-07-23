import {
    ADD_TODO,
    FETCH_STUDENT_LIST,
} from "./mutation-types";

export default {
    [ADD_TODO] (state, payload) {
        const { content } = payload
        state.todoitems.push({ id: state.nextTodoId, content, done: false})
        state.nextTodoId++
    },
    [FETCH_STUDENT_LIST] (state, students) {
        state.students = students
    }
}