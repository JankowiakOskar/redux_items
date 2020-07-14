const initState = {
  items: [
    {id: '1', title: 'Book', content: 'Stories about religions'},
    {id: '2', title: 'Bootle water', content: 'Bootle with sparkling water'},
    {id: '3', title: 'Shoes', content: 'New shoes for running'}
  ]
}

const itemsReducer = (state = initState, action) => {
  if(action.type === 'DELETE_ITEM') {
    return {
      items: state.items.filter(item => item.id !== action.id)
    }
  }
  return state;
}


export default itemsReducer