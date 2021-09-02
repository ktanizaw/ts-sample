<template>
<div>
  <Nav/>
  {{ state.item }}
  <!-- {{ store.state.counter }} -->
</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import Nav from '../components/Nav.vue'
// import { useStore } from 'vuex'

export default defineComponent({
  components: { Nav },
  setup() {
    // const store = useStore()
    const state = reactive({
      item: 1
    })
    return {
      state,
      // store,
      // increase: () => store.dispatch('increment'),
      // decrease: () => store.dispatch('increment')
    }
  }
})
</script>