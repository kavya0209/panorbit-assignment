import { Component, OnInit } from '@angular/core';
import {ProfileDataService} from '../profile-data.service'
import {Observable} from 'rxjs/Observable';
import {Router , ActivatedRoute , ParamMap} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  profileData$ =[];
  profileDataLocal = [];
  constructor(private _profileDataServiceService:ProfileDataService,
    private route:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    
  this._profileDataServiceService.getDatat().subscribe(data => {
     this.profileDataLocal = data;
  })
}

goProfile(id){
 
  let employeeId = id -1 ;
  this.router.navigate(['/profile', employeeId]);
}
}




