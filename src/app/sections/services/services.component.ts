import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Service {
  name: string;
  description: string;
  detail: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  protected readonly services: Service[] = [
    { name: 'Enterprise dashboard development', description: 'Modern admin panels built with Angular.', detail: [] },
    { name: 'UI development', description: 'Responsive SaaS interfaces.', detail: [] },
    { name: 'API integration', description: 'RESTful API integration and data handling.', detail: [] },
    { name: 'Authentication', description: 'Secure access control end to end.', detail: ['JWT', 'Cookie authentication', 'Role-based authorization'] },
    { name: 'Performance optimization', description: 'Applications that stay fast as they scale.', detail: ['Lazy loading', 'Standalone components', 'Bundle optimization', 'Reusable architecture'] },
  ];
}
