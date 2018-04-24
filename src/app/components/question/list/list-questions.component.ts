import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question/question.service';
import { Question } from '../../../models/question';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit {
  questions: Question[];
  page: number;

  constructor(public questionService: QuestionService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe((params: ParamMap) => {
        this.page = +params.get('page') || 1;
      });
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions(this.page)
      .subscribe(questions => this.questions = questions);
  }

  deleteQuestion(question_id: string): void {
    this.questionService.deleteQuestion(question_id)
      .subscribe(() => {
        this.getQuestions();
      });
  }

  previousPage() {
    if (this.page > 1) {
      this.page -= 1;
      this.router.navigate(['/questions'], {queryParams: {page: this.page}});
      this.getQuestions();
    }
  }

  nextPage() {
    if (this.questions.length > 0) {
      this.page += 1;
      this.router.navigate(['/questions'], {queryParams: {page: this.page}});
      this.getQuestions();
    }
  }

}
