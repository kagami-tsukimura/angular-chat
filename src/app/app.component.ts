import { Component } from '@angular/core';

import { Comment } from './class/comment';
import { User } from './class/user';

const CURRENT_USER: User = new User(1, 'Kagami');
const ANOTHER_USER: User = new User(2, 'Alice');

const COMMENTS: Comment[] = [
  new Comment(CURRENT_USER, 'test: 初期表示'),
  new Comment(ANOTHER_USER, `test: I'm ${ANOTHER_USER.name}`),
  new Comment(CURRENT_USER, `test: I'm ${CURRENT_USER.name}`),
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
