const initialState = {
    cards: [
        {id: 1, title: 'Alex', body: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to...'},
        {id: 2, title: 'Willma', body: '...demonstrate the visual form of a document or a typeface without relying on meaningful content.'},
        {id: 3, title: 'Jonas', body: 'Lorem ipsum may be used as a placeholder before final copy is available.'}
    ],
    users: []
}

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'DELETE_CARD':
            let newCard = state.cards.filter((card) => {
                return action.id !== card.id
            })
            return {
                ...state,
                cards: newCard
            }
        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload
            }
            
        default:
            return state;
    }
}

export default rootReducer;