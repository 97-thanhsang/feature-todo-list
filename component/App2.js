import html from "../core.js";
import Header from "./header.js";
import Footer from "./Footer.js";
import TodoList from "./TodoList.js";

function App() {
    return html`
    <section class="todoapp">
        ${Header()}
        ${TodoList()}
        ${Footer()}
    </section>
    `;
}

export default App;