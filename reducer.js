import storage from "./util/storage.js";

const init = {
    todos : storage.get(),
    filter : 'all',
    filters : {
        all : () => true,
        active : todo => !todo.completed,
        completed : todo => todo.completed
    }
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
    },
    TOGGLEALL({todos},completed){
        todos.forEach(todo => todo.completed = completed);
        storage.set(todos);
    },
    DESTROY({todos},index){
        todos.splice(index,1);
        storage.set(todos);
    },
    switchFilter(state,filter){
        state.filter = filter;
    },
    clearCompleted(state){
        state.todos = state.todos.filter(state.filters.active);
        storage.set(state.todos);
    },
    startEdit(state,index)
    {
        state.editIndex = index;
    },
    endEdit(state,title){
        if (state.editIndex !== null) {
            if (title) {
                state.todos[state.editIndex].title = title;
                storage.set(state.todos);
            }
            else
            {
                this.DESTROY(state,state.editIndex);
            }
            state.editIndex = null;
            
        }
    },
    cancelEdit(state){
        state.editIndex = null;
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