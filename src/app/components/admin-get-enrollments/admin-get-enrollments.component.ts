import { Component, OnInit } from '@angular/core';
import { GetEnrollmentsService } from 'src/app/services/get-enrollment.service';

@Component({
  selector: 'app-admin-get-enrollments',
  templateUrl: './admin-get-enrollments.component.html',
  styleUrls: ['./admin-get-enrollments.component.css']
})
export class AdminGetEnrollmentsComponent implements OnInit {
  enrollmentData: any[] = [];
  constructor(private getenrollmentService: GetEnrollmentsService) { }
  ngOnInit(): void {
    this.fetchEnrollments();
  }
  fetchEnrollments() {
    this.getenrollmentService.getEnrollments().subscribe((data: any[]) => {
      this.enrollmentData = data;
    });
  }
}
