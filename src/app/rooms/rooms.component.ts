import {
  Component,
  SimpleChanges,
  DoCheck,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom!: RoomList;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  constructor() {}
  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // console.log(this.headerComponent);
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Swiming Pool, Gym, Spa, Sports-Complex, Hi Tea, Buffet',
        price: 1000,
        photos:
          'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        checkInTime: new Date('11-Apr-2024'),
        checkOutTime: new Date('23-Apr-2022'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Swiming Pool, Gym, Spa, Sports-Complex, Hi Tea, Buffet',
        price: 1500,
        photos:
          'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        checkInTime: new Date('11-Apr-2024'),
        checkOutTime: new Date('23-Apr-2022'),
        rating: 3.4,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Swiming Pool, Gym, Spa, Sports-Complex, Hi Tea, Buffet',
        price: 5000,
        photos:
          'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        checkInTime: new Date('11-Apr-2024'),
        checkOutTime: new Date('23-Apr-2022'),
        rating: 3.8,
      },
    ];
  }

  ngDoCheck() {
    console.log('on changes is called');
  }
  ngAfterViewInit() {
    this.headerComponent.title = 'Room View';
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Swiming Pool, Gym, Spa, Sports-Complex, Hi Tea, Buffet',
      price: 1000,
      photos:
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      checkInTime: new Date('11-Apr-2024'),
      checkOutTime: new Date('23-Apr-2022'),
      rating: 4.5,
    };

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
