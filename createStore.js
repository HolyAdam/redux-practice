export function createStore(rootReducer, initState) {

    let state = rootReducer(initState, {type: 'INIT'})
    const listeners = []

    return {
        // three methods: dispatch && subscribe && getState()
        dispatch(action) { 
            //  говорит что то изменить
            // action == { type: 'COUNTER_INCREMENT' }
            state = rootReducer(state, action)
            listeners.forEach(fn => fn())

        },
        subscribe(callback) {
            //  говорит что все слушатели которые слушают этот объект они должны что то поменять - привязка
            listeners.push(callback)
        },
        getState() {
            return state
        }
    }
}