import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js"
import { trvia_api } from "./AxiosService.js"


class QuestionsService{
  constructor(){

  }
  async getQuestions() {
    const res = await trvia_api.get('api.php?amount=20')
    const triviaQuestions = res.data.results.map(q => new Question(q))
    appState.questions = triviaQuestions
  }

  getQuestion(){
    let randomQuestion = appState.questions[Math.floor(Math.random() * appState.questions.length)]
    appState.question = randomQuestion
  }

  getNewQuestion(){
    let currentQuestion = appState.questions.findIndex(q => q.id == appState.question.id)
    appState.questions.splice(currentQuestion, 1)
    this.getQuestion()
  }


}

export const questionsService = new QuestionsService()