import { generateId } from "../Utils/generateId.js"


export class Question{
  constructor(data){
    this.question = data.question
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
    this.id = generateId()
  }

  get QuestionTemplateMultiple(){
    return /*html*/`
    <div class="col-8 offset-2">
    <div id="ui" class="row justify-content-center">
      <div class="col-8 my-3">
        <div class="card">
          <div class="card-body text-center py-5 elevation-1">
            <h3>${this.question}</h3>
          </div>
        </div>
      </div>
      <div class="col-5 my-3">
        <div class="card selectable" onclick="app.questionsController.selectAnswer('${this.incorrect_answers[0]}')">
          <div class="card-body text-center elevation-1">
            <h4>"${this.incorrect_answers[0]}"</h4>
          </div>
        </div>
      </div>
      <div class="col-5 my-3">
        <div id="'${this.correct_answer}'" class="card selectable" onclick="app.questionsController.selectAnswer('${this.correct_answer}')">
          <div class="card-body text-center elevation-1">
            <h4>"${this.correct_answer}"</h4>
          </div>
        </div>
      </div>
      <div class="col-5 my-3">
        <div class="card selectable" onclick="app.questionsController.selectAnswer('${this.incorrect_answers[1]}')">
          <div class="card-body text-center elevation-1">
            <h4>"${this.incorrect_answers[1]}"</h4>
          </div>
        </div>
      </div>
      <div class="col-5 my-3">
        <div class="card selectable" onclick="app.questionsController.selectAnswer('${this.incorrect_answers[2]}')">
          <div class="card-body text-center elevation-1">
            <h4>"${this.incorrect_answers[2]}"</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
  }

  get QuestionTemplateBoolean(){
    return /*html*/`
    <div class="col-8 offset-2">
    <div id="ui" class="row justify-content-center">
      <div class="col-8 my-3">
        <div class="card">
          <div class="card-body text-center py-5 elevation-1">
            <h3>${this.question}</h3>
          </div>
        </div>
      </div>
      <div class="col-5 my-3">
        <div class="card selectable" onclick="app.questionsController.selectAnswer('${this.incorrect_answers[0]}')">
          <div class="card-body text-center elevation-1">
            <h4>"${this.incorrect_answers[0]}"</h4>
          </div>
        </div>
      </div>
      <div class="col-5 my-3">
        <div id="'${this.correct_answer}'" class="card selectable" onclick="app.questionsController.selectAnswer('${this.correct_answer}')">
          <div class="card-body text-center elevation-1">
            <h4>"${this.correct_answer}"</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
  }
}