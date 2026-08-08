import { AfterViewInit, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouteBarComponent } from './components/route-bar/route-bar.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { TechStackComponent } from './sections/tech-stack/tech-stack.component';
import { ServicesComponent } from './sections/services/services.component';
import { ProcessComponent } from './sections/process/process.component';
import { AchievementsComponent } from './sections/achievements/achievements.component';
import { JourneyComponent } from './sections/journey/journey.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './sections/footer/footer.component';
import { ScrollSpyService } from './services/scroll-spy.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarComponent,
    RouteBarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    TechStackComponent,
    ServicesComponent,
    ProcessComponent,
    AchievementsComponent,
    JourneyComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  private readonly spy = inject(ScrollSpyService);

  ngAfterViewInit(): void {
    this.spy.observe();
  }
}
