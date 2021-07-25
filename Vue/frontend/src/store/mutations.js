import {
    ADD_TODO,
    FETCH_STUDENT_LIST,
    FETCH_PRODUCT,
    FETCH_PRODUCT_LIST
} from "./mutation-types";

export default {
    [ADD_TODO] (state, payload) {
        const { content } = payload
        state.todoitems.push({ id: state.nextTodoId, content, done: false})
        state.nextTodoId++
    },
    [FETCH_STUDENT_LIST] (state, students) {
        state.students = students
    },
    // Product
    [FETCH_PRODUCT_LIST] (state,products) {
        state.products = products;
    },
    [FETCH_PRODUCT] (state, product) {
        state.product = product
    },
}