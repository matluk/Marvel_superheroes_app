
const AppReducer = (state, action) => {
    switch(action.type){
        case "ADD_ITEM_TO_FAVORITES":
            return{
                ...state,
                favorites: [action.payload, ...state.favorites]
            };
        case "REMOVE_ITEM_FROM_FAVORITES":
            return {
                ...state,
                favorites: state.favorites.filter(item => item.id !== action.payload)
            };


        default:
            return state;
    }
}

export default AppReducer;