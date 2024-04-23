export default function logger(reducer) {
    return function (preState,action,args) {
        console.group(action);
        console.log('Prev State',preState);
        console.log('Action Arguments',args);
        const nextState = reducer(preState,action,args);
        console.log('Next State',nextState);

        console.groupEnd();
        return nextState;
    }
}