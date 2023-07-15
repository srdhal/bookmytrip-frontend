import React, { useContext, useEffect, useReducer } from 'react'


const AuthContext=React.createContext()

export function useAuthContext(){
  return useContext(AuthContext)
}


export function AuthProvider({children}) {
  
  const INITIAL_STATE={
    user: localStorage.getItem("user")!="undefined"?JSON.parse(localStorage.getItem("user")) : null,
    loading: false,
    error: null
  }
  
  const AuthReducer=(state,action)=>{
    switch(action.type){
      case "LOGIN_START":
        return {
            user: null,
            loading: true,
            error: null,
        }
      case "LOGIN_SUCCESS":
        return {
            user: action.payload,
            loading:false,
            error:null
        }
      case "LOGIN_FAILURE":
        return {
            user: null,
            loading:false,
            error:action.payload
        } 
      case "LOGOUT":
        return {
            user: null,
            loading:false,
            error:null
        }  
      default:
        return state    
    }
  }

  const [state,dispatch]=useReducer(AuthReducer,INITIAL_STATE)
  
  useEffect(()=>{
     localStorage.setItem("user",JSON.stringify(state.user))
  },[state.user])

  return (
    <AuthContext.Provider value={{
      user: state.user,
      loading: state.loading,
      error: state.error,
      dispatch
    }}>
      {children}
    </AuthContext.Provider>
  )
}
