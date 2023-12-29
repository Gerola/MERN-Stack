import {  useState } from 'react'
import { useItemContext } from '../hooks/useItemscontext';
import '../index.css';

const ItemForm = () =>
{
    const { dispatch } = useItemContext() 
    const [name, setname] = useState('') 
    const [quantity ,setquantity] = useState('')
    const [category ,setcategory] = useState('Other')
    const [errors ,seterrors] = useState(null)
    const [emptyFields,setFields] = useState([])
    const submitData = async (e) =>
    {
        e.preventDefault()
        const item = { name, category, quantity }
        const response = await fetch('/inventory',
        {   
            method:'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()
        if(!response.ok)
        {
            seterrors(json.errors)
            setFields(json.emptyFields)
        }
        else
        {
            setname('')
            setquantity('')
            seterrors(null)
            console.log(errors);
            setFields([])
            dispatch({type:'CREATE_ITEM',payload: json})
        }
    }

    return(
        <form onSubmit={submitData} className='form_outline'>
            <h2>Add a New Item</h2>
            <label class='form_values'>Name of Item:</label>
            <input
                placeholder='Name'
                type='text'
                onChange={(e) => setname(e.target.value)}
                value ={name}
                style={{marginLeft: 8, borderRadius: 5, boxShadow:'none'}}
                className={emptyFields.includes('Name') ? 'error': ''}
            />
            <label class='form_one'>Category:</label>
            <select name='category_selected' id='category_selected' value={category} style={{borderRadius: 5, boxShadow:'none'}} onChange={(e) => setcategory(e.target.value)}>
                <option value="Food">Food</option>
                <option value="Construction">Construction</option>
                <option value="Home">Home</option>
                <option value="Clothing">Clothing</option>
                <option value="Other">Other</option>
            </select>
            <label class='form_two'>Quantity of Item:</label>
            <input
                placeholder='Number of Items'
                style={{borderRadius: 5, boxShadow:'none'}}
                type='number'
                onChange={(e) => setquantity(e.target.value)}
                className={emptyFields.includes('Quantity') ? 'error': ''}
                value ={quantity}
            />
        <button class='add_item'>
            Add New Item
        </button>
        <div>
            <span
                className={emptyFields.length > 0 ? 'error_pop': 'hidden'}
            >Please fill in the highlighted fields</span>
        </div>
        </form>
    )

}

export default ItemForm