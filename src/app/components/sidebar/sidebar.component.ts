import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SECTIONS, ScrollSpyService } from '../../services/scroll-spy.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  protected readonly spy = inject(ScrollSpyService);
  protected readonly sections = SECTIONS;

  navigate(id: string, event: Event): void {
    event.preventDefault();
    this.spy.goTo(id);
  }
}
