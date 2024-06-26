import html from "../core.js";
import { connect } from '../store.js'
import TodoItem from "./TodoItem.js";


function TodoList({ todos,filter, filters }) {
  // console.log(filters)
  // console.log(props);
    return html`
      <section class="main">
        <input
          id="toggle-all"
          class="toggle-all"
          type="checkbox"
          onchange="dispatch('TOGGLEALL',this.checked)"
          ${todos.every(filters.completed) && "checked"}
        />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          ${todos
            .filter(filters[filter])
            .map((todo, index) => TodoItem({ todo, index }))}
        </ul>
      </section>
    `;
}

export default connect()(TodoList);