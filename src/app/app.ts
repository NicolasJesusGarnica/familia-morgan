import { Component } from '@angular/core';
// Importamos solo MorganComponent, quitamos RouterOutlet
import { MorganComponent } from './morgan/morgan'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // Quitamos RouterOutlet de aquí:
  imports: [MorganComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'familia-morgan';
}