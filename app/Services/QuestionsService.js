import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js"
import { trvia_api } from "./AxiosService.js"


class QuestionsService{
  async getQuestions() {
    const res = await trvia_api.get('api.php?amount=20')
    const triviaQuestions = res.data.map(q => new Question(q))
    appState.questions = triviaQuestions
  }
  constructor(){

  }


}

export const questionsService = new QuestionsService()