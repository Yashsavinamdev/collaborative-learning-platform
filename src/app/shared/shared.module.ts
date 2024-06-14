import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Import Angular Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

// Import components, directives, pipes (if any) to be shared
// For example:
// import { CustomButtonComponent } from './custom-button/custom-button.component';

@NgModule({
  declarations: [
    // Declare any shared components, directives, pipes
    // CustomButtonComponent,
  ],
  imports: [
    // Import Angular modules
    CommonModule,
    ReactiveFormsModule,

    // Import Angular Material modules
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [
    // Export Angular modules
    CommonModule,
    ReactiveFormsModule,

    // Export Angular Material modules
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,

    // Export shared components, directives, pipes
    // CustomButtonComponent,
  ],
})
export class SharedModule {}
