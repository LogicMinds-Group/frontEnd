import { Component } from '@angular/core';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css']
})
export class ForumListComponent {

  isAddQuestion = true


  changeIsAddQuestion(){
    this.isAddQuestion = !this.isAddQuestion
  }

}
