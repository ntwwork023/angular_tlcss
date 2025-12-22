import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class ChartComponent  {
  @ViewChild('chartCanvas')
  chartCanvas!: ElementRef<HTMLCanvasElement>;
  @Input() data: any;

   ngAfterViewInit() {
      const ctx = this.chartCanvas.nativeElement.getContext('2d');
  
      if (!ctx) return; // กัน DOM null (SSR-safe)
      new Chart(
        ctx, this.data
      )
    }

}
