import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router , ParamMap} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import {ProfileDataService} from '../profile-data.service'
import { JsonPipe } from '@angular/common';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  
  profileDataLocal = [];
  firebaseData$: Observable<any>;
  public userId ;

  constructor(private route:ActivatedRoute,
    private _profileDataServiceService:ProfileDataService,
    private db: AngularFireDatabase) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = parseInt(params.get('id'));
      this.userId  = id ; 
      console.log(this.userId + "profile component");
      this.firebaseData$ = this.db.object(`/users/${this.userId}`).valueChanges();
     
     this.firebaseData$.subscribe(data => {
         this.profileDataLocal = data;
         console.log(this.profileDataLocal);
         
      })
  });

}

}


