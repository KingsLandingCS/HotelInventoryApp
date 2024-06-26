import { RoomsService } from './../rooms.service';
import { Component, OnInit, Self, SkipSelf } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  // providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {
  empName: string = 'John';

  constructor(private roomsService: RoomsService) { }
  ngOnInit(): void { }
}
