import storage from "./util/storage.js";

const init = {
    todos : storage.get()
}

const actions = {
    ADD({todos},title){
        if (title) {            
            todos.push({title,completed:false});
            storage.set(todos);
        }
    },
    TOGGLE({todos},index){
        const todo = todos[index];
        todo.completed = !todo.completed;
        storage.set(todos);
    }
}

export default function reducer(state = init,action,args){
    actions[action] && actions[action](state,...args);
    // trả về state mới --> logic
    // switch (action) {          
    //     case 'ADD':
    //         const [title] = args;
    //         return {
    //           ...state,
    //           todos: [...state.todos, {
    //             title,
    //             completed : false
    //           }],
    //         };
    //     default:
    //         return state;
    // }
    return state;
}