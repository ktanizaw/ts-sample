<template>
  <div>
    <h1>Todo一覧</h1>
    <TodoList
      v-for="todo in state.todos"
      :todo="todo"
      :key="todo.id"
      @toggle="toggleTodo"
      @remove="removeTodo"
    />
    <AddTodo
      @add="addTodo"
    />
    {{ store.state }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@nuxtjs/composition-api'
import TodoList from '../../components/TodoList.vue'
import AddTodo from '../../components/AddTodo.vue'
import { mapMutations } from 'vuex'
import { useStore } from 'vuex';

interface Todo {
  id: number;
  title: string;
  contents: string;
  done: boolean;
  createdAt: Date;
}
interface State {
  todos: Todo[];
}

export default defineComponent({
  components: {
    TodoList,
    AddTodo
  },
  setup() {
console.log();
    const store = useStore()
    const state = reactive<State>({
      todos:[{
        id : 1,
        title : '初期表示タスク',
        contents: 'テストです。',
        done : false,
        createdAt : new Date()
      }],
    })
    const sortTodo = computed(() => state.todos.sort((a, b) => {
      return b.createdAt.getTime() - a.createdAt.getTime()
    }))
    const addTodo = (title: string, contents: string) => {
      let nextId = state.todos[state.todos.length - 1].id + 1
      let todos = {
        id: nextId,
        title,
        done: false,
        contents,
        createdAt: new Date()
      }

      state.todos.push(todos);
    }
    const removeTodo = (id: number) => {
      state.todos = state.todos.filter(todo => todo.id !== id)
    }

    const toggleTodo = (id: number) => {
      const todo = state.todos.find(todo => todo.id === id)
      if (!todo) return
      todo.done = !todo.done
    }
    return {
      store,
      state,
      sortTodo,
      addTodo,
      removeTodo,
      toggleTodo
    }
  }
})
</script>