import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule
  ],
})
export class MissionfilterComponent {
  launchYear: string = '';

  @Output() yearFiltered = new EventEmitter<string>();
  @Output() launchSuccessFiltered = new EventEmitter<boolean>();
  @Output() landingSuccessFiltered = new EventEmitter<boolean>();
  @Output() resetFilter = new EventEmitter<void>();

  onFilter() {
    this.yearFiltered.emit(this.launchYear.trim());
  }

  onLaunchSuccessFilter(status: boolean) {
    this.launchSuccessFiltered.emit(status);
  }

  onLandingSuccessFilter(status: boolean) {
    this.landingSuccessFiltered.emit(status);
  }

  onReset() {
    this.launchYear = '';
    this.resetFilter.emit();
  }
}
