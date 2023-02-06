import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";

function _drawQuestion(){

}

export class QuestionsController{
  constructor(){
    this.getQuestions()
  }

  async getQuestions(){
    await questionsService.getQuestions()
    console.log(appState.questions)
  }

  startGame(){
    
  }
}