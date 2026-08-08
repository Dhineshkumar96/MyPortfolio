import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessComponent {
  protected readonly steps = [
    'Requirement analysis',
    'UI design',
    'Component architecture',
    'Development',
    'API integration',
    'Testing',
    'Deployment',
    'Maintenance',
  ];
}
