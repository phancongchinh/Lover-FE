import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../../service/reservation.service';
import {ActivatedRoute} from '@angular/router';
import {Reservation} from '../../model/reservation';
import {ReservationDetailService} from '../../service/reservation-detail.service';
import {ReservationDetail} from '../../model/Reservation-detail';

@Component({
  selector: 'app-info-cart',
  templateUrl: './info-cart.component.html',
  styleUrls: ['./info-cart.component.css']
})
export class InfoCartComponent implements OnInit {

  reservation: Reservation = {};

  reservationDetails: ReservationDetail[] = [];

  constructor(private reservationService: ReservationService,
              private reservationDetailService: ReservationDetailService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      let id = param.get('id');
      this.findById(id);
      this.findReservationDetailById(id)
    })
  }

  findById(id: any) {
    this.reservationService.findById(id).subscribe(data => {
      this.reservation = data;
    }, error => console.log(error.message));
  }

  completed(id: any) {
    this.reservationService.accessInputStatus(id).subscribe(data => {

    }, error => console.log(error.message));
  }

  findReservationDetailById(id: any) {
    this.reservationDetailService.findReservationDetailByReservation(id).subscribe(data => {
      this.reservationDetails = data;
    }, error => console.log(error.message));
  }
}