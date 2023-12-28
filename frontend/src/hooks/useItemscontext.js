import { ItemContext } from "../context/itemcontext";
import { useContext } from "react";

export const useItemContext = () =>
{
    const context = useContext(ItemContext)
    
    if (!context)
    {
        throw Error("Use Item context")
    }
    
    return context
}