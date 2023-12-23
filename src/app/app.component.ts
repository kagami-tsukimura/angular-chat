import { Component } from '@angular/core';

import { Comment } from './class/comment';

const COMMENTS: Comment[] = [
  { name: 'Kagami', message: 'お疲れ！' },
  { name: 'Kagami', message: '明日の夜空いてる？' },
  { name: 'Alice', message: 'お疲れ！' },
];

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  comments = COMMENTS;
}
