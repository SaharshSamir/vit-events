const initialState={
    token:localStorage.getItem("token"),
    isAuthenticated:false,
    isLoading: true,
    user:null
}
export const Auth=(state=initialState,action)=>{
    switch(action.type){
        default:
            return initialState;
    }
}