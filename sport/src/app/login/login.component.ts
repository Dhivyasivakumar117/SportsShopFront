import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Login } from '../class/Login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    login : Login = new Login();
    submitted : boolean = false;
     
    constructor(private loginService: LoginService,private router: Router, public dialog: MatDialog) { }
    ngOnInit(): void {
      }
      save() {
        this.loginService.login(this.login).subscribe(
        data=> {
            console.log(data);
            this.gotoList();
          },
        error=> {
           console.log(error)
          }
        )
      }
      onSubmit() {
      this.submitted = true;
      this.save();    
      }
      gotoList() {
        this.router.navigate(['/viewProduct']);
      }
      goto(){
          this.router.navigate(['/registration']);
      }
}