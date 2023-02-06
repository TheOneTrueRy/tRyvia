import { generateId } from "../Utils/generateId.js"


export class Question{
  constructor(data){
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
    this.id = generateId()
  }

  get QuestionTemplate(){
    return `
    
    `
  }
}