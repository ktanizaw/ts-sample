<template>
  <div>
    <NuxtLink :to="`/todo/${todo.id}`">{{ todo.title }}</NuxtLink>
    <input type="checkbox" :value="todo.done" @change="toggle">
    <div>{{ todo.createdAt }}</div>
      <div>
    <button @click="remove">削除</button>
  </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
interface Todo {
  id: number;
  title: string;
  done: boolean;
  createdAt: Date;
}

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>
    }
  },
  emits: ['toggle', 'remove'],
  setup(props, context) {
    const toggle = () => {
      context.emit('toggle', props.todo.id)
    }

    const remove = () => {
      context.emit('remove', props.todo.id)
    }

    return {
      toggle,
      remove
    }
  },
})
</script>
