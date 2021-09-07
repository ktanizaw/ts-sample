export const state = () => ({
  list: [{
    id: 1,
    name: 'リスト１'
  }],
  todoCounter: 0
})
export const actions = {
  todoIncrement(context) {
    context.commit("todoIncrement")
  }
}
export const mutations = {
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
  }
}