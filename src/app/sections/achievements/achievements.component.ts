import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  standalone: true,
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AchievementsComponent {
  protected readonly achievements = [
    'Built enterprise Angular applications',
    'Developed scalable admin dashboards',
    'Created reusable component libraries',
    'Optimized application performance',
    'Worked on secure authentication systems',
    'Delivered responsive SaaS interfaces',
  ];

  protected readonly whyHire = [
    'Clean code', 'Enterprise experience', 'Scalable architecture', 'Fast learner',
    'Strong problem solving', 'Modern UI design', 'Team collaboration',
    'API integration expertise', 'Performance focused',
  ];
}
