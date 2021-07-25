import {
    ADD_TODO,
    FETCH_STUDENT_LIST,
    FETCH_PRODUCT,
    FETCH_PRODUCT_LIST,

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
}