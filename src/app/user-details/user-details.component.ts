import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Models/User';
import { UserAPIService } from '../Services/users.api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router:Router,
    private userAPIService: UserAPIService) { }

  user: User;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      let id = +param.get('id');
      console.log('id - ' + id);
      this.userAPIService.getUserById(id)
        .subscribe((response: any) => {
          this.user = response.data;
        });

    });
  }

  backToList() {
    this.router.navigate(['/home']);
  }

}
