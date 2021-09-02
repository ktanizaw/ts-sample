<template>
<div>
  <div>
    <span>タイトル</span>
  <input type="text" v-model="state.inputTitle" />
  </div>
  <div>
    <span>内容</span>
    <input type="textarea" v-model="state.inputContents" style="height:40px;">
  </div>
  <button @click="submit" :disabled="state.hasError">追加</button>
  <p v-if="state.hasError" class="error">10文字以内にしてください。</p>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from '@vue/composition-api'

interface State {
  inputTitle: string;
  inputContents: string;
  hasError: boolean;
}
export default defineComponent({
  emits: ['add'],
  setup (_, context) {
    const state = reactive<State>({
      inputTitle: '',
      inputContents: '',
      hasError: false
    })

    const submit = () => {
      context.emit('add', state.inputTitle, state.inputContents)
      state.inputTitle = ''
      state.inputContents = ''
    }

    watchEffect(() => {
      if (state.inputTitle.length > 10) {
        state.hasError = true
      } else {
        state.hasError = false
      }
    })

    return {
      state,
      submit
    }
  }
})
</script>

<style scoped>
.error {
  color: red;
}
</style>