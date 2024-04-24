import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];

  constructor() {}

  ngOnInit(): void {
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
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  selectRoom(room: RoomList) {
    console.log(room);
  }
}
