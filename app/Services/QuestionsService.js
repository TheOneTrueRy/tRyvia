import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"
import { trvia_api } from "./AxiosService.js"


class QuestionsService{
  selectAnswer(answer) {
    let correct = new Audio('../assets/sounds/correct-answer-tone.wav')
    let wrong = new Audio('../assets/sounds/wrong-answer-tone.wav')
    if(answer == appState.question.correct_answer){
      appState.score++
      Pop.toast('You got the right answer!', 'success', 'top-end', 3000, false)
      correct.play()
      this.getNewQuestion()
    }else{
      Pop.toast("Aw ya didn't get that one, maybe try again...", 'error', 'top-end', 3000, false)
      wrong.play()
    }
  }
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
    appState.emit('question')
  }

  getNewQuestion(){
    let currentQuestion = appState.questions.findIndex(q => q.id == appState.question.id)
    appState.questions.splice(currentQuestion, 1)
    if(appState.questions.length >= 1 || appState.question){
      this.getQuestion()
    }else{
      setHTML('centerpage', `<h1>You win!</h1>`)
    }
  }


}

export const questionsService = new QuestionsService()