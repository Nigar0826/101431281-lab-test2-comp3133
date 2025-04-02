import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/launch.model';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component'; 
import { RouterModule } from '@angular/router';

// Material modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, MissionfilterComponent, RouterModule, MatCardModule, MatButtonModule], 
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: Launch[] = [];
  filteredLaunches: Launch[] = [];

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.loadAllMissions();
  }

  loadAllMissions(): void {
    this.spacexService.getLaunches().subscribe((data: Launch[]) => {
      this.launches = data;
      this.filteredLaunches = data;
    });
  }

  filterByYear(year: string): void {
    this.filteredLaunches = this.launches.filter(launch => launch.launch_year === year);
  }

  filterByLaunchSuccess(status: boolean): void {
    this.filteredLaunches = this.launches.filter(launch => launch.launch_success === status);
  }

  filterByLandingSuccess(status: boolean): void {
    this.filteredLaunches = this.launches.filter(launch => 
      launch.rocket?.first_stage?.cores?.[0]?.land_success === status
    );
  }
}
