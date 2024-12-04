import Student from "../models/studentModel.js";

const createStudent = async (req, res) => {
  try {
    const { IDCard, name, email, phone, classId } = req.body;

    if (!IDCard || !name || !email || !phone || !classId) {
      return res.status(400).json({ message: "All required field" });
    }
    const studentData = new Student({
      IDCard,
      name,
      email,
      phone,
      classId,
    });

    await studentData.save();
    res
      .status(201)
      .json({ message: "student create successfully", studentData });
  } catch (error) {
    res.status(500).json({ message: "Error create student" });
  }
};

const getAll = async (req, res) => {
  try {
    const students = await Student.find();
    return res
      .status(200)
      .json({ message: "Get all student successfully", students });
  } catch (error) {
    res.status(500).json({ message: "Error get all student" });
  }
};
const getById = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Student.findById(studentId);
    return res.status(200).json({ message: "Get by id successfully", student });
  } catch {
    res.status(500).json({ message: "Error get by id " });
  }
};
const updateStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const studentData = req.body;
    const studentUpdate = await Student.findByIdAndUpdate(
      studentId,
      studentData,
      { new: true, runValidators: true }
    );
    if (!studentUpdate) {
      return res.status(404).json({ message: "data not found" });
    }
    return res
      .status(200)
      .json({ message: "update successfully", studentUpdate });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const studentDelete = await Student.findByIdAndDelete(studentId);
    return res
      .status(200)
      .json({ message: "Delete successfully", studentDelete });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error delete data" });
  }
};

export default { createStudent, getAll, getById, updateStudent, deleteStudent };
