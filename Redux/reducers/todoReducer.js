import { ADD_TODO, DELETE_TODO } from '../actions/types';


const initialState = {
    todoList: [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item'
        }
    ]
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: state.todoList.concat({
                    id: Math.random().toString(),
                    title: action.data
                })
            }
        case DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(t => t.id !== action.key)
            }
        default:
            return state;
    }
}


export default todoReducer