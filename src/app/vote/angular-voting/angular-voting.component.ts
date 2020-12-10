import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VoteService } from '../service/vote.service';
import { Question } from '../models/question';
import { Vote } from '../models/vote';

@Component({
  selector: 'angular-voting',
  templateUrl: './angular-voting.component.html',
  styleUrls: ['./angular-voting.component.scss'],
})
export class AngularVotingComponent implements OnInit {
  title = 'Angular Framework Voting Form!';
  subtitle = 'Please read the questions carefully and vote';

  questions: Question[] = [];

  constructor(private voteService: VoteService, private router: Router) {}

  ngOnInit(): void {
    this.voteService.getAllAngularQuestions().subscribe(
      (qtns) => (this.questions = qtns),
      (err) => console.log(err)
    );
  }

  submitVote(form, event): void {
    event.preventDefault();

    let vote: Vote = {
      technologyName: 'Angular 9.x',
      requirements: Number.parseInt(form.question1 ? form.question1 : 3),
      spa: Number.parseInt(form.question2 ? form.question2 : 3),
      otherPlatforms: Number.parseInt(form.question3 ? form.question3 : 3),
      solution: Number.parseInt(form.question4 ? form.question4 : 3),
      speedAndPerformance: Number.parseInt(form.question5 ? form.question5 : 3),
    };

    this.voteService.addVote(vote).subscribe(
      (vote) => this.router.navigate(['/vote/thank-you']),
      (err) => console.log(err)
    );
  }
}
