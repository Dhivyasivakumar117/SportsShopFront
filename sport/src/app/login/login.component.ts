import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
     
    constructor(private loginService: LoginService,private router: Router) { }
    ngOnInit(): void {
      //throw new Error('Method not implemented.');
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
        this.router.navigate(['/module']);
      }
      goto(){
          this.router.navigate(['/registration']);
      }
}
