import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  imports: [],
  templateUrl: './setting.html',
  styleUrl: './setting.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Setting { }
