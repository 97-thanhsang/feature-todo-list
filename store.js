import { createStore } from "./core.js";
import reducer from "./reducer.js";

const { attach,connect,dispatch } = createStore(reducer);

// biến gobal
window.dispatch = dispatch;

// lấy ra để có thể sử dụng khi import file này
export { attach,connect }