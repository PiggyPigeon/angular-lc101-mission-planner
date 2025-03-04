import { BindingType, parseTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  memberBeingEdited: object = null;
  inCrew: boolean = false;
  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
    
  ];

  constructor() { }

  ngOnInit() {
  }


  // below throws alert 3x if we keep the toUpperCase part. how to fix?
  add(memberName: string, isFirst: boolean) {
    for (let i=0; i < this.crew.length; i++) {
        if(this.crew[i]['name'].toUpperCase() === memberName.toUpperCase()) {
            this.inCrew = true;
            alert("You already have this crew member")
        }  
    }
   
    if (!this.inCrew && memberName !== "") {
        this.crew.push({name: memberName, firstMission: isFirst});
    }
    
    this.inCrew = false;
  }
      

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
 }

  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
  }

}
