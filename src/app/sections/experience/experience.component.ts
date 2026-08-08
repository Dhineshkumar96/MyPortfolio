import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  protected readonly responsibilities = [
    'Developing enterprise admin panels',
    'Creating reusable Angular components',
    'Building dynamic forms',
    'API integration',
    'Authentication using JWT / cookies',
    'Angular Material UI development',
    'Performance optimization',
    'Bug fixing and maintenance',
    'Production deployments',
    'Collaborating with backend developers',
  ];
}
