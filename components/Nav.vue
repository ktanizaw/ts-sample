<template>
  <div>
    <header>
      <div>
        <div>
          <h1>
            <nuxt-link to="/">Topページ</nuxt-link>
          </h1>
          <div>
            <!-- TODO: ハンバーガーメニュー実装 -->
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <nuxt-link to="/shop">ショップリスト</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/todo">Todoリスト</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/"></nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Nav',
  setup() {
    return {}
  },
})
</script>