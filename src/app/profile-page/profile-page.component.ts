import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router , ParamMap} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import {ProfileDataService} from '../profile-data.service'
import { JsonPipe } from '@angular/common';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  profileDataLocal = [];
  profileDataLocalCompany = [];
  profileDataLocalAddress = [];
  profileDataLocalGeo = [];
  firebaseData$: Observable<any>;
  firebaseDataCompany$: Observable<any>;
  firebaseDataAddress$: Observable<any>;
  firebaseDataGeo$: Observable<any>;
  public userId ;
  isShow = false;
 
  constructor(private route:ActivatedRoute,
    private _profileDataServiceService:ProfileDataService,
    private db: AngularFireDatabase,private router : Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = parseInt(params.get('id'));
      this.userId  = id ; 
    
      this.firebaseData$ = this.db.object(`/users/${this.userId}`).valueChanges();
      this.firebaseData$.subscribe(data => {
         this.profileDataLocal = data;
      })

      this.firebaseDataCompany$ = this.db.object(`/users/${this.userId}/company`).valueChanges();
      this.firebaseDataCompany$.subscribe(data => {
        this.profileDataLocalCompany = data;
      })

      this.firebaseDataAddress$ = this.db.object(`/users/${this.userId}/address`).valueChanges();
      this.firebaseDataAddress$.subscribe(data => {
        this.profileDataLocalAddress = data;
      })

      this.firebaseDataGeo$ = this.db.object(`/users/${this.userId}/address/geo`).valueChanges();
      this.firebaseDataGeo$.subscribe(data => {
        this.profileDataLocalGeo = data;
      })

  });

}

toggleDisplay() {
  
  this.isShow = !this.isShow;
}

signOut(){
  this.router.navigate(['/name-list']);
}

}


