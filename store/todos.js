export const state = () => ({
  todos: {}
})

export const mutations = {
  getTodos(state, payload) {
    state.todos = payload;
  }
}