import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawQuestion(){
  if(appState.question){
    if(appState.question.type == 'multiple'){
      setHTML('centerpage', appState.question.QuestionTemplateMultiple)
    }else if(appState.question.type == 'boolean'){
      setHTML('centerpage', appState.question.QuestionTemplateBoolean)
    }
  }else{
    setHTML('centerpage', `<h1 class="text-center text-light myText">You win!</h1>`)
  }
}

export class QuestionsController{
  constructor(){
    this.getQuestions()
    appState.on('question', _drawQuestion)
  }

  async getQuestions(){
    await questionsService.getQuestions()
    console.log(appState.questions)
  }

  startGame(){
    questionsService.getQuestion()
    setHTML('top', '')
  }

  selectAnswer(answer){
    questionsService.selectAnswer(answer)
  }
}