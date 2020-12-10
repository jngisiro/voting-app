import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Question } from '../models/question';
import { Vote } from '../models/vote';

@Injectable()
export class VoteService {
  constructor(private http: HttpClient) {}

  getAllAngularQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(
      'https://jn-voting-app.herokuapp.com/api/ng-questions'
    );
  }

  addVote(vote: Vote): Observable<Vote> {
    return this.http.post<Vote>(
      'https://jn-voting-app.herokuapp.com/api/add-vote',
      vote
    );
  }
}
