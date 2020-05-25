import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    street: [''],
    city: ['', Validators.required],
    postCode: ['', Validators.required]
  });

  incidentForm = this.fb.group({
    circumstances: ['', Validators.required],
    witnessess: ['', Validators.required],
    interventionsTaken: [''],
    notificationsMade: ['', Validators.required],
    vitalSings: ['', Validators.required],
    residentActivity: ['', Validators.required],
    correctiveActions: ['']
  });

  hideUserForm: boolean;
  hideIncidentForm: boolean;

  
  constructor(private fb: FormBuilder) { 
    this.hideUserForm = false;
    this.hideIncidentForm = true;
  }

  ngOnInit(): void {
  }

  onUserformClick() {
    this.hideIncidentForm = !this.hideIncidentForm;
    this.hideUserForm = !this.hideUserForm;
  }

  onIncidentFormClick() {
    this.hideUserForm = false;
    this.hideIncidentForm = false;
  }
}
