import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SECTIONS, ScrollSpyService } from '../../services/scroll-spy.service';

@Component({
  selector: 'app-route-bar',
  standalone: true,
  templateUrl: './route-bar.component.html',
  styleUrl: './route-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteBarComponent {
  private readonly spy = inject(ScrollSpyService);

  protected readonly currentPath = computed(() => {
    const active = SECTIONS.find((s) => s.id === this.spy.activeId());
    return active?.path ?? '/home';
  });
}
