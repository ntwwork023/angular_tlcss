import { ChangeDetectionStrategy, Component, signal, AfterViewInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { ChartComponent } from '../chart/chart.component';
import { Tooltip } from 'chart.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pdashboard',
  imports: [MatButtonToggleModule, MatCardModule, ChartComponent, CommonModule],
  templateUrl: './pdashboard.html',
  styleUrl: './pdashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pdashboard implements AfterViewInit {
  checked = 1;

  chartData: any = { labels: [], datasets: [] };

  dataEnvironmental = [
    { title: 'GHG Reduction', value: '37.3K', unit: 'kgCO₂eq' },
    { title: 'Solar Production', value: '29.4K', unit: 'KWh' },
    { title: 'Manageable Waste', value: '14.2', unit: 'Tons' },
    { title: 'Energy Consumption', value: '243', unit: 'KWh' },
  ];

  dataTraffic = [
    { title: 'People Counting', car: '37.6K', unit: 'Peoples', motorcycle: '35.3K' },
    { title: 'EAST Parking', car: '91.2K', unit: 'Vehicles', motorcycle: '72.3K' },
    { title: 'WEST Parking', car: '9.3K', unit: 'Vehicles', motorcycle: '17.4K' },
  ];

  activeDate = 0;
  activeSolar = 0;

  hideSingleSelectionIndicator = signal(false);

  data = {
  labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
  datasets: [
    {
      label: 'Dataset 1',
      data:  [12, 10, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
      borderColor:'#00DBA3',
      backgroundColor: '#00DBA3',
       borderRadius: 10,
       borderSkipped: false,
      order: 1
    },
    {
      label: 'Dataset 2',
      fill: false,
      data: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
      borderColor: 'rgba(255, 0, 0, 0.7)',
      pointRadius: 0,
      borderDash: [10],
      backgroundColor: 'rgba(255, 0, 0, 0.7)',
      type: 'line',
      order: 0
    }
  ]
};

config = {
  type: 'bar',
  data: this.data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Combined Line/Bar Chart'
      }
    }
  },
};

  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update((value) => !value);
  }

  ngAfterViewInit() {

  }
  
  date(data: number) {
    this.activeDate = data;
    console.log(this.activeDate);
  }
}
