import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
})
export class AssignmentComponent implements OnInit {
  peoples: People[] = [];
  displayPeople: People[] = []
  currentIndex: number = 0
  constructor() {}

  ngOnInit(): void {
    this.peoples = [
      {
        name: 'John Smith',
        location: 'New York, NY',
      },
      {
        name: 'Jane Doe',
        location: 'Los Angeles, CA',
      },
      {
        name: 'Bob Johnson',
        location: 'Chicago, IL',
      },
      {
        name: 'Emily Davis',
        location: 'Houston, TX',
      },
      {
        name: 'Michael Brown',
        location: 'Phoenix, AZ',
      },
      {
        name: 'Sarah Miller',
        location: 'Philadelphia, PA',
      },
      {
        name: 'David Garcia',
        location: 'San Antonio, TX',
      },
      {
        name: 'Jessica Rodriguez',
        location: 'San Diego, CA',
      },
      {
        name: 'Mark Wilson',
        location: 'Dallas, TX',
      },
      {
        name: 'Elizabeth Martinez',
        location: 'San Jose, CA',
      },
      {
        name: 'Joshua Hernandez',
        location: 'Austin, TX',
      },
      {
        name: 'Karen Moore',
        location: 'Jacksonville, FL',
      },
      {
        name: 'Brian Jackson',
        location: 'Fort Worth, TX',
      },
      {
        name: 'Heather Anderson',
        location: 'Columbus, OH',
      },
      {
        name: 'Teresa Thomas',
        location: 'Charlotte, NC',
      },
      {
        name: 'Dennis Mitchell',
        location: 'Indianapolis, IN',
      },
      {
        name: 'Cynthia Lee',
        location: 'Seattle, WA',
      },
      {
        name: 'Adam Hall',
        location: 'Denver, CO',
      },
      {
        name: 'Nancy Allen',
        location: 'El Paso, TX',
      },
      {
        name: 'Lisa King',
        location: 'Washington, DC',
      },
      {
        name: 'William Wright',
        location: 'Boston, MA',
      },
      {
        name: 'Mary Scott',
        location: 'Nashville, TN',
      },
      {
        name: 'Kathryn Green',
        location: 'Portland, OR',
      },
      {
        name: 'Gerald Baker',
        location: 'Vancouver, BC',
      },
      {
        name: 'Eric Cooper',
        location: 'Sacramento, CA',
      },
      {
        name: 'Stephanie Gomez',
        location: 'Oklahoma City, OK',
      },
      {
        name: 'Edward Kelly',
        location: 'Tulsa, OK',
      },
      {
        name: 'Ashley Sanders',
        location: 'Winnipeg, MB',
      },
    ];
    this.updateDisplayPersons();
  }
  nextPersons() {
    this.currentIndex = this.currentIndex+3;
    if(this.currentIndex > this.peoples.length) {
      alert("No More People!")
    }
    else this.updateDisplayPersons();
  }
  updateDisplayPersons() {
    this.displayPeople = this.peoples.slice(this.currentIndex,this.currentIndex+3);
  }
  getIndex(data: People) {
    return (this.peoples.findIndex(person=> person.name==data.name)+1)
  }
}

export class People {
  name: string | undefined;
  location: string | undefined;
}
