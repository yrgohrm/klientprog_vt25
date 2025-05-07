import { reactive } from 'vue'

export const store = reactive({
  count: 0,
  increment(incr) {
      this.count += incr
  }
})
