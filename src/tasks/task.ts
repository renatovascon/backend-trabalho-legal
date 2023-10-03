import { Document } from "mongoose";

export class Task extends Document {
    nome: string
    end: string;
    cidade: string;
    cep: Number;
    valor: Number;
    completed: boolean;
}