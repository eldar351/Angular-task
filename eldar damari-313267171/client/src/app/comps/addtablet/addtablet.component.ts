import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TabletService } from 'src/app/services/tablet.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-addtablet",
  templateUrl: "./addtablet.component.html",
  styleUrls: ["./addtablet.component.css"]
})
export class AddtabletComponent implements OnInit {
  tabForm = new FormGroup({
    description: new FormControl("", [Validators.required]),
    family: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
   
  });

  constructor(private tabService:TabletService, private router:Router) {}

  ngOnInit() {}

  sendData() { 
   this.tabService.addTablet(this.tabForm.value).subscribe(data=>
    { 
        //redirect from JS
        this.router.navigate(['/all']);
    })
  }
}
