const Item = require('../models/Items')
const mongoose = require('mongoose')


//get  all items
const getItems = async(req,res) =>
{
    const item = await Item.find({}).sort({createdAt: -1})
    res.status(200).json(item)
}

const getItem = async(req,res) =>
{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }
    const item = await Item.findById(id)

    if (!item)
    {
        res.status(400).json({msg:"No item found with this name"})
    }

    res.status(200).json(item)
}

// create Items
const createItem = async (req,res) => {
    const { name, category, quantity } = req.body
    let emptyFields = []
    if(!name)
    {
        emptyFields.push("Name")
    }
    if(!quantity)
    {
        emptyFields.push("Quantity")
    }
    if(emptyFields.length > 0)
    {
        return res.status(400).json({error:"Please fill in all the fields", emptyFields})
    }

    try{
        const item = await Item.create({name, category, quantity})
        res.status(200).json(item)
    } catch(error){
        res.status(400).json({error:error.message})
    }

}

const deleteItem = async (req,res) =>
{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }
    const item = await Item.findOneAndDelete({_id: id})
    
    if (!item)
    {
       return res.status(400).json({msg:"No item found with this name"})
    }

    res.status(200).json(item)
}

const updateItem = async (req,res) =>
{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }
    const item = Item.findOneAndUpdate({_id: id}, {
            ...req.body
    })
    
    if (!item)
    {
        res.status(400).json({msg:"No item found with this name"})
    }

    res.status(200).json(item)
}






module.exports = {
    createItem,
    getItem,
    getItems,
    deleteItem,
    updateItem

}