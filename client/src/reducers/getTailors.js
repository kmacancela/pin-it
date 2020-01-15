const getTailorsReducer = (state = null, action) => {
  switch(action.type) {
    case 'GET_TAILORS':
      return(
        fetch("http://localhost:3000/messages")
        .then(r => r.json())
        .then(messages => console.log(messages))
      )
    default:
      return state
  }
}
export default getTailorsReducer
