import '../index.css';
import { useEffect } from 'react'
import ItemForm from '../Components/ItemForm'
import InventoryExpand from '../Components/InventoryExpand';
import { useItemContext } from '../hooks/useItemscontext';

const MainPage = () => {

    const { items, dispatch } = useItemContext()

    useEffect(() => {
        const getItems = async () => {
            const response = await fetch('/inventory')
            const json = await response.json()
            
            if (response.ok) {
                dispatch({type: 'SET_ITEMS', payload: json})
            }
        }
        getItems()
    }, [])

    return (
        <div class='content_other'>
            <h1>Inventory</h1>
            <ItemForm/>
            <div>
                {items && items.map((item) => (
                    <InventoryExpand key={item._id} item={item} />
                ))} 
            </div>
        </div>

    )
}

export default MainPage