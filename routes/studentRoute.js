const express = require('express');
const router = express.Router();
const student = require('../modals/studentModal')

router.get('/', async (req, res) => {
  try {
    const students = await student.find({})
    res.render('students', { students: students });
    console.log(students);
  } catch (error) {
    res.status(500).json({ error: "Can't connect to Server " })
  }
})

router.post('/', async (req, res) => {
  try {
    const { id, name, age, point } = req.body;
    const newStudent = new student({ id, name, age, point });
    await newStudent.save();
    res.status(201).json(newStudent);
    console.log(newStudent);
  } catch (error) {
    console.error(err);
    res.status(500).json({ error: "Can't connect to Server" });
  }
})

router.put('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const { id, name, age, point } = req.body;
    const updateStudent = await student.findByIdAndUpdate(_id, { id, name, age, point }, { new: true });
    res.json(updateStudent);
    console.log(updateStudent);
  } catch (error) {
    console.error(err);
    res.status(500).json({ error: "Can't connect to Server" });
  }
})
module.exports = router;