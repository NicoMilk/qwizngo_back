import * as Mongoose from 'mongoose';

export const DonequizRef = 'DonequizRef';
export const DonequizSchema = new Mongoose.Schema({
  quizz_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'Quizz', required: true },
  user_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  score: { type: Number, required: true },
});

export interface Donequiz extends Mongoose.Document {
  quizz_id: Mongoose.Schema.Types.ObjectId;
  user_id: Mongoose.Schema.Types.ObjectId;
  score: Number;
}
