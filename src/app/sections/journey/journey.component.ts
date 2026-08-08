import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-journey',
  standalone: true,
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JourneyComponent {
  protected readonly milestones: Milestone[] = [
    {
      year: '2018',
      title: 'B.Tech, Information Technology',
      description: 'Graduated and began working as a C# developer.',
    },
    {
      year: '2018–2023',
      title: 'A different path',
      description:
        'Pursued a long-term goal of preparing for the Civil Services Examination, working in a Chartered Accountant\'s office to support that preparation along the way.',
    },
    {
      year: '2023',
      title: 'Back to IT, into Angular',
      description:
        'Returned to the industry with renewed focus and transitioned into frontend development, specializing in Angular.',
    },
    {
      year: 'Since 2023',
      title: 'Enterprise Angular development',
      description:
        'Building enterprise SaaS applications, modern dashboards, secure authentication systems and scalable business solutions.',
    },
  ];
}
