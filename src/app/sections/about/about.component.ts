import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly skills = [
    'Angular 20', 'TypeScript', 'SCSS', 'Angular Material', 'Bootstrap', 'RxJS',
    'REST APIs', 'Authentication & Authorization', 'State Management',
    'Form Validation', 'Responsive UI', 'Performance Optimization',
  ];
}
