const initialState={
    test:"test"
}
export const test=(state=initialState,action)=>{
    switch(action.type){
        default:
            return initialState;
    }
}