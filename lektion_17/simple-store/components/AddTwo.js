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
    <input type="button" @click="store.increment(2)" value="add two">
  </div>`,
}