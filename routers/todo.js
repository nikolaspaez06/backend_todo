const express = require(`express`)
const router = express.Router()
const todoControllers = require('../controllers/todo')

router.get(`/`, todoControllers.get)
router.get('/:id', todoControllers.getById)
router.post('/create', todoControllers.create)
router.patch('/update/:id', todoControllers.update)
router.delete('/delete/:id',todoControllers.delete)

module.exports = router


