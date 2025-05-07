import { store } from '../store/index.js';

export default {
  data() {
    return {
      store
    };
  },
  template: `
  <div>
    {{store.count}}
    <input type="button" @click="store.increment(1)" value="add one">
  </div>`,
}