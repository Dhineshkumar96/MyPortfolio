import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  protected readonly stats = [
    { value: '3+', label: 'years experience' },
    { value: '4', label: 'enterprise SaaS builds' },
    { value: '20', label: 'Angular, latest' },
  ];
}
