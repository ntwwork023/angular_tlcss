import { ChangeDetectionStrategy, Component, signal, AfterViewInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { ChartComponent } from '../chart/chart.component';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {MatTableModule} from '@angular/material/table';

Chart.register(ChartDataLabels);

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-pdashboard',
  imports: [MatButtonToggleModule, MatCardModule, ChartComponent, CommonModule, MatTableModule],
  templateUrl: './pdashboard.html',
  styleUrl: './pdashboard.scss', 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pdashboard implements AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  
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
      order: 1,
      
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
      order: 0,
      datalabels: { display: false }
    }
  ]
};

data1 = {
  labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [300, 50, 100, 40, 120],
      backgroundColor: [
        '#d52e2eff',
        '#FF9F43',
        '#FFDD59',
        '#00DBA3', 
        '#3742FA'
      ],
      hoverOffset: 4
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
      datalabels: {
        anchor: 'end',   
        align: 'end',    
        offset: 6,
        clamp: true,
        formatter: (value: any) => `${value} kWh`, // จะใส่หน่วยเองก็ได้ เช่น `${value} kWh`
        font: { size: 11, weight: '600' },
      },
    }
  }
};

config1 = {
  type: 'bar',
  data: this.data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Horizontal Combined Line/Bar Chart'
      },
      datalabels: {
        anchor: 'end',   
        align: 'end',    
        offset: 6,
        clamp: true,
        formatter: (value: any) => value, // จะใส่หน่วยเองก็ได้ เช่น `${value} kWh`
        font: { size: 11, weight: '600' },
      },
    }
  }
};
donut = {
  type: 'doughnut',
  data: this.data1,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Doughnut Chart'
      },
      datalabels: {
        anchor: 'end',   
        align: 'end',    
        offset: 6,
        clamp: true,
        formatter: (value: any) => value, // จะใส่หน่วยเองก็ได้ เช่น `${value} kWh`
        font: { size: 11, weight: '600' },
      },
    }
  }
};

pie = {
  type: 'pie',
  data: this.data1,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Pie Chart'
      },
      datalabels: {
        anchor: 'end',   
        align: 'end',    
        offset: 6,
        clamp: true,
        formatter: (value: any) => value, // จะใส่หน่วยเองก็ได้ เช่น `${value} kWh`
        font: { size: 11, weight: '600' },
      },
    }
  }
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
