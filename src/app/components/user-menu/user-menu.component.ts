import { Component, OnInit } from '@angular/core';
import { IRootState } from '../../reducers/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../services/user.service';

@Component({
  selector   : 'sw-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls  : [ './user-menu.component.scss' ],
})
export class UserMenuComponent implements OnInit {

  showUserMenu = false;

  constructor(private store: Store<IRootState>, private userService: UserService) {
  }

  ngOnInit() {

  }

  getName(): Observable<string> {
    return this.store.select((s: any) => s.user.name);
  }

  logout() {
    this.userService.logout();
  }

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }
}
