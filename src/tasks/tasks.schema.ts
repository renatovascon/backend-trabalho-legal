import * as mongoose from 'mongoose'

export const TaskSchema = new mongoose.Schema({
    nome: String,
    end: String,
    cidade: String,
    cep: Number,
    valor: Number,
    completed: Boolean,
})