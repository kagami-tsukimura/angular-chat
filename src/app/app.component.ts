import { Component } from '@angular/core';

import { Comment } from './class/comment';
import { User } from './class/user';

const CURRENT_USER: User = new User(1, 'Kagami');
const ANOTHER_USER: User = new User(2, 'Alice');

const COMMENTS: Comment[] = [
  new Comment(ANOTHER_USER, 'お疲れ！'),
  new Comment(ANOTHER_USER, '明日の夜に時間もらえる？'),
  new Comment(CURRENT_USER, 'お疲れさま！'),
  new Comment(CURRENT_USER, '了解！ いつもの場所に19時で良い？'),
  new Comment(ANOTHER_USER, '⭕'),
];

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  comments = COMMENTS;
  currentUser = CURRENT_USER;
  comment = '';

  addComment(comment: string): void {
    if (comment) {
      this.comments.push(new Comment(this.currentUser, comment));
    }
  }
}
