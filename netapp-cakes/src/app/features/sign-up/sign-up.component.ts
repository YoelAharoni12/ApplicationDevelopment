import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { firebaseConfig } from "../../shared/models/typs";
import { NgxToastNotifyService } from "ngx-toast-notify";
import { ContactDetails } from "../../shared/models/contact-details";
import { getDatabase, ref, set } from "firebase/database";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  contact: ContactDetails = {firstName: "", lastName: "", email: "", password: ""};

  constructor(private router: Router, private toast: NgxToastNotifyService) {
    const firebaseConfig = environment.firebase as firebaseConfig;
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const database = getDatabase(app);
  }

  ngOnInit(): void {
  }

  signUp(confirm: string) {
    if (this.contact.email !== confirm) {
      this.toast.showToast('Please confirm with the correct email!', 'danger', 'top-center');
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.contact.email, this.contact.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.writeContactDetails();
        this.toast.showToast(`Registration completed successfully!\n           Please sign in`, 'success', 'top-center');
        this.router.navigate(['/sign-in']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message.split(':').pop();
        this.toast.showToast(errorMessage, 'danger', 'top-center');
      });
  }

  writeContactDetails() {
    const db = getDatabase();
    set(ref(db, 'users/' + this.contact.email.split('@').shift()), this.contact);
  }
}
