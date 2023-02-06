import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";


export class QuestionsController{
  constructor(){

  }

  async getQuestions(){
    await questionsService.getQuestions()
    console.log(appState.questions)
  }
}