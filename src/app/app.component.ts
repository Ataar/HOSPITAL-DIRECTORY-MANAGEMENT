import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DOCTORS } from './data/doctors';
import { Doctor } from './models/doctor.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  searchText = '';
  selectedFloor = 'All Floors';
  selectedDepartment = 'All Departments';

  readonly doctors = DOCTORS;

  get floors(): string[] {
    return ['All Floors', ...Array.from(new Set(this.doctors.map(d => d.floor)))];
  }

  get departments(): string[] {
    return ['All Departments', ...Array.from(new Set(this.doctors.map(d => d.department)))];
  }

  get filteredDoctors(): Doctor[] {
    const q = this.searchText.trim().toLowerCase();

    return this.doctors.filter(d => {
      const matchesText = !q || [d.doctorName, d.department, d.floor, d.roomNo, d.timings]
        .some(value => value.toLowerCase().includes(q));
      const matchesFloor = this.selectedFloor === 'All Floors' || d.floor === this.selectedFloor;
      const matchesDepartment = this.selectedDepartment === 'All Departments' || d.department === this.selectedDepartment;
      return matchesText && matchesFloor && matchesDepartment;
    });
  }

  clearSearch(): void {
    this.searchText = '';
    this.selectedFloor = 'All Floors';
    this.selectedDepartment = 'All Departments';
  }
}
