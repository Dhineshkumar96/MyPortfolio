import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Project {
  name: string;
  description: string;
  items: string[];
  itemLabel: string;
  status: 'Production' | 'Live' | 'Shipped';
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected readonly expandedId = signal<number | null>(0);

  protected readonly projects: Project[] = [
    {
      name: 'Enterprise Admin Portal',
      description:
        'A complete SaaS administration platform with multiple user roles, dashboards, analytics, approval workflows and document management.',
      itemLabel: 'Highlights',
      items: ['Angular 20', 'Material Design', 'Dynamic Forms', 'JWT Authentication', 'Responsive UI', 'Role Based Access'],
      status: 'Production',
    },
    {
      name: 'Partner Onboarding System',
      description:
        'A multi-step onboarding platform with document uploads, validations, workflow approvals and digital verification.',
      itemLabel: 'Features',
      items: ['Multi-step forms', 'Dynamic validations', 'Document uploads', 'OTP verification', 'Approval workflow', 'Progress tracking'],
      status: 'Live',
    },
    {
      name: 'Zyratax Admin Panel',
      description:
        'A modern enterprise dashboard for managing customers, compliance, financial records and operational workflows.',
      itemLabel: 'Key features',
      items: ['Dashboard analytics', 'Data tables', 'Advanced filtering', 'Secure login', 'Responsive design', 'User management'],
      status: 'Production',
    },
    {
      name: 'Fargin Connect',
      description:
        'A complete SaaS platform for cable operators featuring subscriber management, authentication, reports, dashboards and operational tools.',
      itemLabel: 'Modules',
      items: ['Dashboard', 'Subscribers', 'Billing', 'Reports', 'Role management', 'Settings'],
      status: 'Shipped',
    },
  ];

  toggle(index: number): void {
    this.expandedId.update((current) => (current === index ? null : index));
  }
}
