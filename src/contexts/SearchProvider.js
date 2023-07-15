import React, { useContext, useReducer } from 'react'


const SearchContext=React.createContext()

export function useSearch(){
  return useContext(SearchContext)
}


export function SearchProvider({children}) {
  
  const INITIAL_STATE={
    city:undefined,
    date: [],
    counter: {
      adults: undefined,
      children: undefined,
      rooms: undefined
    }
  }
  
  const SearchReducer=(state,action)=>{
    switch(action.type){
      case "NEW_SEARCH":
        return action.payload;
      case "RESET_SEARCH":
        return INITIAL_STATE;
      default:
        return state    
    }
  }

  const [state,dispatch]=useReducer(SearchReducer,INITIAL_STATE)

  return (
    <SearchContext.Provider value={{
      city: state.city,
      date: state.date,
      counter: state.counter,
      dispatch
    }}>
      {children}
    </SearchContext.Provider>
  )
}
