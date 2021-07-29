import {
    ADD_TODO,
    FETCH_STUDENT_LIST,
    FETCH_PRODUCT,
    FETCH_PRODUCT_LIST,
    // randomNum
    SUCCESS_GEN_RAND_NUM,
    FAIL_GEN_RAND_NUM
} from './mutation-types'

import axios from 'axios'

export default {
    addTodo (context, payload) {
        context.commit(ADD_TODO, payload)
    },
    save ({ state }) {
        const data = {
            todoItems: state.todoItems,
            nextTodoId: state.nextTodoId
        }

        // DB 대신 임시적으로 사용하고 있음
        localStorage.setItem('todo-app-data', JSON.stringify(data))
    },
    fetchStudentList ({ commit }) {
        return axios.get(`http://localhost:7777/vuestudent/grades`)
            .then((res) => {
                commit(FETCH_STUDENT_LIST, res.data)
            })
    },
    // Product
    fetchProductList ({ commit }) {
        return axios.get(`http://localhost:7777/vueproduct/lists`)
            .then((res) => {
                commit(FETCH_PRODUCT_LIST, res.data)
            })
    },
    fetchProduct ({ commit }, productNo) {
        return axios.get(`http://localhost:7777/vueproduct/${productNo}`)
            .then((res) => {
                commit(FETCH_PRODUCT, res.data)
            })
    },
    // Spring과 랜덤 데이터 통신
    generateRandomNumber ({ commit }) {
        console.log(commit)

        // axios.get: GET 요청
        // axios.post: POST 요청
        // 특정 URL로 GET 혹은 POST, 그 외의 요청을 보낼 수 있음
        // 보내고 넘겨 받은 데이터는 .then((res)) 절로 수신함
        // .catch((res)) 절은 오류가 발생했을 경우임
        // 어찌 되었든 응답받은 데이터는 res가 가지고 있음
        axios.get(`http://localhost:7777/random`)
            .then((res) => {
                commit(SUCCESS_GEN_RAND_NUM, parseInt(res.data.randNumber))
            })
            .catch((res) => {
                commit(FAIL_GEN_RAND_NUM, res)
            })
    },
}