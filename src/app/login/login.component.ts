import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private afAuth:AngularFireAuth) {}

  ngOnInit(): void {
  }

  login(){
   const provider = new firebase.auth.GoogleAuthProvider();
  // firebase.auth().signInWithRedirect(provider);
  this.afAuth.signInWithRedirect(provider);

  }

}
