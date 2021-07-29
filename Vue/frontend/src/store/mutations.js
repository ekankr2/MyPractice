import {
    ADD_TODO,
    FETCH_STUDENT_LIST,
    FETCH_PRODUCT,
    FETCH_PRODUCT_LIST,

    SUCCESS_GEN_RAND_NUM,
    FAIL_GEN_RAND_NUM,
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
    // 스프링 랜덤 데이터 통신
    [SUCCESS_GEN_RAND_NUM] (state, payload) {
        console.log('payload = ' + payload)
        state.randomFromSpring = payload
    },
    [FAIL_GEN_RAND_NUM] () {
        console.log('통신 에러!')
    },
}