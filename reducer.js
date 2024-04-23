const init = {
    todos : [
        {
            title : 'Learn Javascript',
            completed : false,
        },
        {
            title : 'Learn HTML CSS',
            completed : true
        }
    ]
}

const actions = {
    ADD({todos},title){
        todos.push({title,completed:false})
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