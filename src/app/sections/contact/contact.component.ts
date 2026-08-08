import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  protected readonly submitted = signal(false);

  protected readonly channels = [
    { label: 'Email', value: 'dhinesh.m0607@gmail.com', href: 'mailto:dhinesh.m0607@gmail.com' },
    { label: 'Phone', value: '+91 8144767875', href: 'tel:+91 8144767875' },
    { label: 'Location', value: 'Chennai,Tamil Nadu, India', href: '' },
    { label: 'LinkedIn', value: 'www.linkedin.com/in/dhineshkumarm0607', href: 'https://linkedin.com/in/dhineshkumarm0607' },
    { label: 'GitHub', value: 'github.com/Dhineshkumar96', href: 'https://github.com/Dhineshkumar96' },
  ];

  onSubmit(form: HTMLFormElement): void {
    // Wire this up to your email provider / API of choice.
    this.submitted.set(true);
    form.reset();
  }
}
