import { Tablet } from 'src/app/models/Tablet';
import { TabletService } from "src/app/services/tablet.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {


currTablet:Tablet;
id:string="";
tabForm = new FormGroup({
  description: new FormControl("", [Validators.required]),
  family: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required)
  });

constructor(private tabService: TabletService,private router: Router,  private activatedrouter: ActivatedRoute) {

}

 ngOnInit(): void { 
     this.activatedrouter.params.subscribe(data=>
        {
            this.id=data.id;
             this.tabService.getTabletById(data.id).subscribe(tabData=>
                {
                    this.currTablet=tabData[0]; 
                  
                    this.tabForm = new FormGroup({
                      description: new FormControl(this.currTablet.description, Validators.required),
                      family: new FormControl(this.currTablet.family, Validators.required),
                      date: new FormControl(this.currTablet.date, Validators.required)
                        
                      });
                })
        })
      
    }
   

  sendData() {
debugger;
    this.tabService.editTablet(this.tabForm.value, this.id).subscribe(data=>
        { 
            debugger;
            //redirect from JS
            this.router.navigate(['/all']);
        })
       
  }
}
