import {
  ChangeDetectionStrategy,
  Component,
  signal,
  AfterViewInit,
} from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { ChartComponent } from '../chart/chart.component';
import { Tooltip } from 'chart.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pdashboard',
  imports: [MatButtonToggleModule, MatCardModule, ChartComponent,  CommonModule ],
  templateUrl: './pdashboard.html',
  styleUrl: './pdashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Pdashboard implements AfterViewInit {
  checked = 1;

  dataEnvironmental = [
    { title: 'GHG Reduction', value: "37.3K", unit: 'kgCO₂eq' },
    { title: 'Solar Production', value: "29.4K", unit: 'KWh' },
    { title: 'Manageable Waste', value: "14.2", unit: 'Tons' },
    { title: 'Energy Consumption', value: "243", unit: 'KWh' },
  ]

  dataTraffic = [
    { title: 'People Counting', car: "37.6K", unit: 'Peoples', motorcycle: "35.3K" },
    { title: 'EAST Parking', car: "91.2K", unit: 'Vehicles', motorcycle: "72.3K" },
    { title: 'WEST Parking', car: "9.3K", unit: 'Vehicles', motorcycle: "17.4K" }, 
  ]
  
  activeDate = 0;
  activeSolar = 0;

  hideSingleSelectionIndicator = signal(false);
  datachart= {
        type: 'bar',
        data: {
          labels: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December',
          ],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
              backgroundColor: 
                '#00DBA3',
              borderColor: [
                '#00DBA3',
              ],
              borderWidth: 1,
              borderRadius: 10,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Bar Chart',
            },
             tooltip: {
                 enabled: true,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      }
  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update((value) => !value);
  }

  ngAfterViewInit() {
 
  }

  date(data: number){
    this.activeDate = data;
    console.log(this.activeDate);
  }

}
