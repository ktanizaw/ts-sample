<template>
<div>
  <h1>ショップリスト</h1>
  <ul v-for="shop in state.shops" :key="shop.id">
    <nuxt-link :to="'/shop/' + shop.id">
      タイトル：{{ shop.title }}
    </nuxt-link>
    <p>
      内容：{{ shop.summary }}
    </p>
  </ul>
  <div>{{ state.shop }}</div>
  <div>{{ hello }}</div>
  <div>{{ hoge }}</div>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
// import { mapMutations } from 'vuex'

export default defineComponent({
  components: { },
  setup() {
    const state: object = reactive({
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
      // shop: computed(() => {
      //   return this.$store.state.shops.list
      // })
    })

    let hello: string = "Hello";
    const hoge = "Hoge";

    return {
      state,
      hello,
      hoge
    }
  }
})
</script>