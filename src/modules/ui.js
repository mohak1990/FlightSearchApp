import actions from "../constants/actions"

const uiReducer = (state = "", action) => {
  switch (action.type) {

    case actions.SET_MODAL:
      return {...state, isModalOpen: action.payload}
    default:
      return state
  }
}

//--------------------actions---------------------//

export const setModal = payload => ({
  type: actions.SET_MODAL,
  payload
})

export default uiReducer
