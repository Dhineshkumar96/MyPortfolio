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
    { label: 'Email', value: 'yourmail@gmail.com', href: 'mailto:yourmail@gmail.com' },
    { label: 'Phone', value: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
    { label: 'Location', value: 'Tamil Nadu, India', href: '' },
    { label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', href: 'https://linkedin.com/in/yourprofile' },
    { label: 'GitHub', value: 'github.com/yourprofile', href: 'https://github.com/yourprofile' },
  ];

  onSubmit(form: HTMLFormElement): void {
    // Wire this up to your email provider / API of choice.
    this.submitted.set(true);
    form.reset();
  }
}
