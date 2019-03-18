import { TabletService } from "./../../services/tablet.service";
import { Component, OnInit } from "@angular/core";
import { Tablet } from "src/app/models/Tablet";
import { Router } from '@angular/router';

@Component({
  selector: "app-alltablets",
  templateUrl: "./alltablets.component.html",
  styleUrls: ["./alltablets.component.css"]
})
export class AlltabletsComponent implements OnInit {
  allTablets: Tablet[] = [];

  constructor(private tabService: TabletService, private router:Router) {}

  ngOnInit() {
    this.refreshData();
  }


  refreshData(): any {
    this.tabService.getAllTablets().subscribe(data => {
      this.allTablets = data;
    });
  }


  deleteTab(event) { 
    this.tabService.deleteTablet(event.target.id).subscribe(data => { 
      this.refreshData();
    });
  }
  editTab(event)
  {
   let id=  event.target.id.replace('edit','');
   this.router.navigate(['/edit', id]);
  }
}
