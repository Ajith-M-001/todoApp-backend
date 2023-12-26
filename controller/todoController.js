import todoModel from "../model/todoModel.js";

export const addTodo = async (req, res) => {
  try {
    const todo = req.body;

    const newTodo = new todoModel(todo);
    await newTodo.save();
    res.status(201).json({ message: "Todo created " });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const allTodos = await todoModel.find();
    res.status(200).json(allTodos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = req.body;
    const updatedTodo = await todoModel.findByIdAndUpdate(id, todo, {
      new: true,
    });
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await todoModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Todo deleted Sucessfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const toggleTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { done } = req.body;
    const updatedTodo = await todoModel.findByIdAndUpdate(
      id,
      { done },
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
