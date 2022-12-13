import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  itemBeingEdited: string = null;
  equipment = [] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];
  inToolKit: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  add(newItem: string) {
    for (let i=0; i < this.equipment.length; i++) {
        if(this.equipment[i].toLowerCase() === newItem.toLowerCase()) {
            this.inToolKit = true;
            alert("You already have this.")
        }  
    }
   
    if (!this.inToolKit && newItem !== "") {
        this.equipment.push(newItem);
    }
    
    this.inToolKit = false;
  }





  edit(item: string) {
    this.itemBeingEdited = item;
 }

 remove(item: string) {
  let index = this.equipment.indexOf(item);
  this.equipment.splice(index, 1);
}

save(item: string) {
  this.equipment.push(item);
  // this.itemBeingEdited = null;
}

}
