import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  constructor(private router: Router) {}

  goToTask() {
    this.router.navigate(['/']);
  }

  editClient(event: Event) {
    event.stopPropagation();
  }

  deleteClient(event: Event) {
    event.stopPropagation();
  }
}
