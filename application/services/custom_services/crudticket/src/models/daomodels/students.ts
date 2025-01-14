
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const studentsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   email: { type: String }
})

const studentsModel = mongoose.model('students', studentsSchema, 'students');
export default studentsModel;
