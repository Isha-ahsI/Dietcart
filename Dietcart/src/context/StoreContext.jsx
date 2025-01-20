import { createContext } from "react";
// import StoreContextProvider from "../../../Frontend/src/context/StoreContext";
import { subplan_list } from "../../../Dietcart/src/assets/assets.js";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{
const contextValue={
    subplan_list
}
return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
)
}

export default StoreContextProvider