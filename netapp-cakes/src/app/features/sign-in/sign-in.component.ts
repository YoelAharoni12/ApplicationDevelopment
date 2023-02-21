import { Component, OnInit } from '@angular/core';
import { firebaseConfig } from "../../shared/models/typs";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { NgxToastNotifyService } from "ngx-toast-notify";
import { ContactDetails } from "../../shared/models/contact-details";
import { getDatabase, ref, child, get } from "firebase/database";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  contact: ContactDetails = {firstName: "", lastName: "", email: "", password: ""};

  constructor(private router: Router, private toast: NgxToastNotifyService) {
    const firebaseConfig = environment.firebase as firebaseConfig;
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const database = getDatabase(app);
  }

  ngOnInit(): void {
  }

  async logIn() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.contact.email, this.contact.password)
      .then(async (userCredential) => {
        // Signed in
        await this.readContactDetails();
        this.toast.showToast(`Welcome ${this.contact.firstName} ${this.contact.lastName}`, 'success', 'top-center');
        this.router.navigate(['/main-site']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message.split(':').pop();
        this.toast.showToast(errorMessage, 'danger', 'top-center');
      });
  }

  async readContactDetails() {
    const dbRef = ref(getDatabase());
    await get(child(dbRef, `users/${this.contact.email.split('@').shift()}`)).then((snapshot) => {
      if (snapshot.exists()) {
        this.contact = snapshot.val() as ContactDetails;
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
}
