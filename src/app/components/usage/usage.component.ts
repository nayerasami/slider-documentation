import { Component, TemplateRef } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-usage',
  standalone: true,
  imports: [NgbTooltipModule],
  templateUrl: './usage.component.html',
  styleUrl: './usage.component.css'
})
export class UsageComponent {

  constructor(public toastService: ToastService) {}

  copyCommand(elementId: string, template: TemplateRef<any>): void {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with ID '${elementId}' not found.`);
      this.toastService.show({
        template,
        classname: 'bg-danger text-light',
        delay: 5000,
        text: 'Failed to copy: Command element not found.'
      });
      return;
    }

    const promptElement = element.querySelector('.prompt');
    let commandText = element.textContent || '';
    if (promptElement && promptElement.textContent) {
      commandText = commandText.replace(promptElement.textContent, '').trim();
    } else {
      commandText = commandText.trim();
    }

    if (navigator.clipboard) {
      navigator.clipboard.writeText(commandText).then(
        () => {
          this.toastService.show({
            template,
            classname: 'bg-success text-light',
            delay: 5000,
            text: 'Command copied to clipboard!'
          });
        },
        (err) => {
          console.error('Clipboard API error:', err);
          this.toastService.show({
            template,
            classname: 'bg-danger text-light',
            delay: 5000,
            text: 'Failed to copy command. Please copy manually.'
          });
        }
      );
    } else {
      console.warn('Clipboard API not available. Attempting fallback.');
      this.fallbackCopy(commandText, template);
    }
  }

  private fallbackCopy(text: string, template: TemplateRef<any>): void {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      this.toastService.show({
        template,
        classname: 'bg-success text-light',
        delay: 5000,
        text: 'Command copied to clipboard!'
      });

    } catch (err) {
      console.error('Fallback copy failed:', err);
      this.toastService.show({
        template,
        classname: 'bg-danger text-light',
        delay: 5000,
        text: 'Failed to copy command. Please copy manually.'
      });
    }
  }
}
