const Todo = require(`../models/todo`)

const todoControllers = {
create: async (req,res) => {
  try {
      const todo = req.body.todo
      const description = req.body.description
      const responsible = req.body.responsible
      const dueData = req.body.dueData
      const done = req.body.done

      const newToDo = new Todo({
        todo : todo,
        description : description,
        responsible : responsible,
        dueData : dueData,
        done : done
      })
      await newToDo.save()
      res.status(201).json(newToDo)

    } catch (error) {
      return res.status(500).json ({msg:error.message})
    }

  },

get: async (req,res) => {
  try {
      const todos = await Todo.find({})

      res.json(todos.reverse())
    } catch (error) {
      return res.status(500).json({msg:error.message})
    }
  },

getById: async (req,res) => {
  try {
        const {id} = req.params
        const todo = await Todo.findById(id)

        res.json(todo)

    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
},

update: async (req,res) =>{
  try{
      const {id} = req.params
      const todo = req.body.todo
      const description = req.body.description
      const responsible = req.body.responsible
      const dueData = req.body.dueData
      const done = req.body.done

      await Todo.findByIdAndUpdate(id,{
        todo : todo,
        description : description,
        responsible : responsible,
        dueData : dueData,
        done : done
      })
      res.json({msg:'Updated'})
  }catch(error){
      console.error(error)
      return res.status(500).json({msg:error.message})
  }
},

delete: async (req,res)=>{
  try {
      const {id} = req.params
      await Todo.findByIdAndDelete(id)
      res.json({msg:'Deleted'})
  } catch (err) {
      console.error(err)
      return res.status(500).json({msg:err.message})
  }
},

}

module.exports = todoControllers
