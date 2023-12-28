import '../index.css'
import { useItemContext } from '../hooks/useItemscontext'


const InventoryExpand = ({ item }) =>  {
    const { dispatch } = useItemContext()
    const handleClick = async () => {
        const response = await fetch('/inventory/' + item._id, 
        {
            method: "DELETE"
        })
        const json = await response.json()

        if(response.ok)
        {
            dispatch({type:'DELETE_ITEM', payload: json})
        }
    }
    
    if(item.category === 'Food')
    {

        return (
            <div>
                <div className='food'>
                        <h4>Name of Item: {item.name}</h4>
                        <p>Category: {item.category}</p>
                        <p>Number of Item: {item.quantity}</p>            
                        <span onClick={handleClick} className='delete_button'>Delete</span>
                </div>
                <br></br>
            </div>
        )
    }
    else if (item.category === 'Construction')
    {
        return (
            <div>
                <div className='construction'>
                <h4>Name of Item: {item.name}</h4>
                <p>Category: {item.category}</p>
                <p>Number of Item: {item.quantity}</p>
                <span onClick={handleClick} className='delete_button'>Delete</span>
                </div>
                <br></br>
            </div>
        )
    }
    
    else if (item.category === 'Home')
    {
        return (
            <div>
                <div className ='home'>
                <h4>Name of Item: {item.name}</h4>
                <p>Category: {item.category}</p>
                <p>Number of Item: {item.quantity}</p>
                <span onClick={handleClick} className='delete_button'>Delete</span>
                </div>
                <br></br>
            </div>
        )
    }
    
    else if (item.category === 'Clothing')
    {
        return (
            <div>
                <div className ='clothing'>
                <h4>Name of Item: {item.name}</h4>
                <p>Category: {item.category}</p>
                <p>Number of Item: {item.quantity}</p>
                <span onClick={handleClick} className='delete_button'>Delete</span>
                </div>
                <br></br>
            </div>
        )
    }
    
    else if (item.category === 'Other')
    {
        return (
            <div>
                <div className='other'>
                <h4>Name of Item: {item.name}</h4>
                <p>Category: {item.category}</p>
                <p>Number of Item: {item.quantity}</p>
                <span onClick={handleClick} className='delete_button'>Delete</span>
                </div>
                <br></br>
            </div>
        )
    }
    
}



export default InventoryExpand