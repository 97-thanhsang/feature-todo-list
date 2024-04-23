const init = {
    cars : ['BMW']
}

export default function reducer(state = init,action,args){
    // trả về state mới --> logic
    switch (action) {    
        case 'ADD':
            const [newCar] = args;
            return {
                ...state,
                cars: [...state.cars,newCar]
            }
        default:
            return state;
    }
}