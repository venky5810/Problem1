import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { UserAPIService } from '../Services/users.api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userAPIService: UserAPIService,
    private router: Router) { }

  usersList: User[];

  ngOnInit() {
    this.userAPIService.getUsersList()
      .subscribe((response) => {
        console.log(response);
        
        let apiResponse: User[] = response.data;
        apiResponse = apiResponse.sort(this.sortUsers);

        this.usersList = apiResponse;
      });
  }

  sortUsers(user1: User, user2: User) {
    return (user1.first_name > user2.first_name) ? 1 : -1
  }


  navigateToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }

}
