import { Injectable, signal } from '@angular/core';

export interface RouteSection {
  id: string;
  label: string;
  path: string;
}

export const SECTIONS: RouteSection[] = [
  { id: 'home', label: 'Home', path: '/home' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'experience', label: 'Experience', path: '/experience' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'stack', label: 'Tech Stack', path: '/stack' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'process', label: 'Process', path: '/process' },
  { id: 'journey', label: 'Journey', path: '/journey' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  readonly activeId = signal<string>('home');
  private observer?: IntersectionObserver;

  observe(): void {
    if (this.observer || typeof IntersectionObserver === 'undefined') return;

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          this.activeId.set(visible.target.id);
        }
      },
      { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    for (const section of SECTIONS) {
      const el = document.getElementById(section.id);
      if (el) this.observer.observe(el);
    }
  }

  goTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
