import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserDetails } from 'src/app/core/models/users.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  host: {
    class: 'rounded border d-block container py-3 my-3 d-flex flex-column align-items-center bg-dark'
  }
})
export class UserCardComponent implements OnInit {
  @Input() public userDetails: UserDetails;
  @Output() public readonly deleteUser: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
