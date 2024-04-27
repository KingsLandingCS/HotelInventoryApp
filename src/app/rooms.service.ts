import { Injectable } from '@angular/core';
import { RoomList } from './rooms/rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [
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
  constructor() {
    console.log('Rooms service Initialized');
  }
  getRooms() {
    return this.roomList;
  }
}
