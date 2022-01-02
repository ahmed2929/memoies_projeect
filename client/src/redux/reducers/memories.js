 const reducer= (state = [], action) => {
    switch (action.type) {
        case 'MEMORIES_FETCH_SUCCESS':
        return [... action.payload];
        case 'MEMORY_ADD_SUCCESS':
            console.log("action.payload",action.payload);
        return [...state, action.payload.newMemory];
        case 'MEMORY_Edited_SUCCESS':
        return state.map(memory => {
            if (memory._id === action.payload._id) {
                return {
                    ...action.payload,
                    edited: true
                };
            }
            return memory;
        })
        case 'MEMORY_DELETE_SUCCESS':
        return state.filter(memory => memory._id !== action.payload._id);

        
        default:
        return state;
    }
}



export default reducer;