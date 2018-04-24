import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Question } from '../../models/question';

@Injectable()
export class QuestionService {
  private questionsUrl = 'https://zzch3oyp2b.execute-api.us-east-1.amazonaws.com/dev/questions';

  constructor(private http: HttpClient) { }

  getQuestions (): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl)
      .pipe(
        catchError(this.handleError('getQuestions', []))
      );
  }

  getQuestion (question_id: string): Observable<Question> {
    return this.http.get<Question>(this.questionsUrl + '/' + question_id);
  }

  updateQuestion (question: Question): Observable<Question> {
    return this.http.put<Question>(this.questionsUrl + '/' + question._id, question)
      .pipe(
        tap(_ => console.log('Update question')),
        catchError(this.handleError<any>('updateQuestion', []))
      );
  }

  deleteQuestion (question_id: string): Observable<Question> {
    return this.http.delete<Question>(this.questionsUrl + '/' + question_id);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
