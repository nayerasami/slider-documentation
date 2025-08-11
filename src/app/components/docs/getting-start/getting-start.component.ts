import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getting-start',
  standalone: true, // Added to explicitly mark as standalone
  imports: [CommonModule], // Moved imports to decorator metadata
  templateUrl: './getting-start.component.html',
  styleUrls: ['./getting-start.component.css'] // Fixed styleUrl to styleUrls
})
export class GettingStartComponent {}