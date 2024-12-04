import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    IDCard: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        default: "Anonymous"
    },
    phone: {type: Number, required: true},
    classId: { type: mongoose.Schema.Types.ObjectID, ref: 'class' }

}, {
	timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);

export default Student;