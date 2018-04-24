import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question/question.service';
import { Question } from '../../../models/question';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit {
  questions: Question[];

  constructor(public questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions()
      .subscribe(questions => this.questions = questions);
  }

  deleteQuestion(question_id: string): void {
    this.questionService.deleteQuestion(question_id)
      .subscribe(() => {
        console.log('test');
        this.getQuestions();
      });
  }

}
