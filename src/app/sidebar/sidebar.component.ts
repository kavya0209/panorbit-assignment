import { Component, OnInit } from '@angular/core';
import {ProfileDataService} from '../profile-data.service'
import {ActivatedRoute , Router , ParamMap} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { JsonPipe } from '@angular/common';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public userId;
  firebaseData$: Observable<any>;
  profileDataLocal = [];
  constructor(private route:ActivatedRoute,
    private _profileDataServiceService:ProfileDataService,
    private db: AngularFireDatabase,
    private router : Router) { }

  ngOnInit() {
  
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = parseInt(params.get('id'));
      this.userId  = id ; 
      this.firebaseData$ = this.db.object(`/users/${this.userId}`).valueChanges();
      this.firebaseData$.subscribe(data => {
         this.profileDataLocal = data;
      })
    });

  }

  goProfileNav(check){
    
    if(check == 1){
      this.router.navigate(['/profile',  this.userId]);
    }   
 
    if(check == 2){
      this.router.navigate(['/posts',  this.userId]);
    }   
   
    if(check == 3){
      this.router.navigate(['/gallery',  this.userId]);
    }   

    if(check == 4){
      this.router.navigate(['/toDo',  this.userId]);
    }   

  }

}
