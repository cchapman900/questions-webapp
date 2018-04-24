import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Question} from '../../../models/question';
import {Location} from '@angular/common';
import {QuestionService} from '../../../services/question/question.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';




@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  private question_id: string;
  question$: Observable<Question>;
  question: Question;
  errorMessage: string;

  trackByFn(index, item) {
    return index; // or item.id
  }

  constructor(private questionService: QuestionService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.getQuestion();
    // This doesn't seem like the best way to have to use the Observable
    this.question$.subscribe((question) => this.question = question);


  }

  getQuestion() {
    this.question$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.question_id = params.get('question_id');
        return this.questionService.getQuestion(params.get('question_id'));
      });
  }

  addDistractor() {
    this.question.distractors.push('');
  }

  removeDistractor(index: number) {
    this.question.distractors.splice(index, 1);
  }

  updateQuestion() {
    // TODO: Update to reactive Validator
    if (this.question.question === '') {
      this.errorMessage = 'Question cannot be empty';
    } else if (this.question.answer === '') {
      this.errorMessage = 'Answer cannot be empty';
    } else if (!this.noneEmpty(this.question.distractors || this.question.distractors.length < 1)) {
      this.errorMessage = 'Distractors cannot be empty';
    } else {
      this.questionService.updateQuestion(this.question)
        .subscribe(
          (question) => {
            this.question = question;
            this.goBack();
          },
          (error) => this.errorMessage
        );
    }
  }

  deleteQuestion() {
    // TODO: Add alert to verify intention of deletion
    this.questionService.deleteQuestion(this.question_id)
      .subscribe(() => {
        this.goBack();
      });
  }

  goBack() {
    this.location.back();
  }

  private noneEmpty(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '') {
        return false;
      }
    }
    return true;
  }

}
