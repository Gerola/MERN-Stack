const express = require('express')
const {
    createItem,
    getItem,
    getItems,
    deleteItem,
    updateItem
} = require('../controllers/inventoryController')

const router = express.Router()

router.get('/', getItems)

router.get('/:id', getItem)

router.post('/',createItem)

router.patch('/:id',updateItem)

router.delete('/:id',deleteItem)

module.exports = router