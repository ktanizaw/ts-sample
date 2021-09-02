<template>
<div>
  <h1>店舗情報</h1>
  <div></div>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  components: { },
  setup() {
    const state = reactive({
      shops: [
        {
          id: 1,
          title: '美味しい和食屋',
          summary: '優しい夫婦経営の店舗'
        },
        {
          id: 2,
          title: 'きたなシュラン店',
          summary: 'きたなシュランに認定された店'
        },
        {
          id :3,
          title: '小汚い中華屋',
          summary: '店主の汗が中華鍋に入る様子が見える'
        }
      ],
    })

    return {
      state
    }
  }
})
</script>