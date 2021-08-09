import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private afAuth:AngularFireAuth) {
    afAuth.authState.subscribe((state) => {console.log(state)})
  }

  ngOnInit(): void {
  }

  logout(){
 this.afAuth.signOut();
  }

}
