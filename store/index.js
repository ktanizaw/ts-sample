export const state = () => ({
  counter: 0,
  todoCounter: 0
})
// export const actions = {
//   increment({ commit }) {
//     commit('increment')
//   }
// }
export const mutations = {
  increment(state) {
    state.counter++
  },
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
  todoIncrement(state) {
    state.todoCounter++
  }
}