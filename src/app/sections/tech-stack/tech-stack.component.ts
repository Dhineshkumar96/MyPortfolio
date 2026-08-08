import { ChangeDetectionStrategy, Component } from '@angular/core';

interface StackGroup {
  label: string;
  items: string[];
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechStackComponent {
  protected readonly groups: StackGroup[] = [
    { label: 'Frontend', items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'SCSS', 'CSS3', 'Bootstrap', 'Angular Material', 'RxJS'] },
    { label: 'Backend knowledge', items: ['REST APIs', 'JSON', 'JWT', 'Cookies', 'Node basics', 'C#'] },
    { label: 'Database', items: ['SQL Server', 'MySQL', 'Basic MongoDB'] },
    { label: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'Postman', 'Swagger', 'Figma', 'Chrome DevTools'] },
    {
      label: 'Other skills',
      items: [
        'Responsive design', 'Performance optimization', 'Authentication', 'Authorization',
        'API integration', 'Reusable components', 'Lazy loading', 'Reactive forms',
        'Template-driven forms', 'Animations', 'Accessibility', 'Cross-browser compatibility', 'Deployment',
      ],
    },
  ];
}
