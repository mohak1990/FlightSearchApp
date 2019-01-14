import axios from 'axios';

const uiReducer = (state = "", action) => {
  switch (action.type) {

    case 'SET_MODAL':
      return {...state, isModalOpen: action.payload}
    default:
      return state
  }
}

//--------------------actions---------------------//

export const setModal = payload => ({
  type: 'SET_MODAL',
  payload
})

export default uiReducer
