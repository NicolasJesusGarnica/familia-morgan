import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-morgan',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './morgan.html',
  styleUrls: ['./morgan.css']
})
export class MorganComponent {
  
  // DATOS DE LOS PERSONAJES (Versión Texto/Iniciales)
  morganFigures = [
    { 
      name: 'Junius Spencer Morgan', 
      role: 'El Patriarca', 
      impact: 'Creó la conexión vital entre el capital británico y la economía estadounidense en expansión.',
      initials: 'JS' 
    },
    { 
      name: 'J.P. Morgan', 
      role: 'El "Júpiter" de Wall Street', 
      impact: 'El banquero más poderoso de la historia. Organizó U.S. Steel, GE y detuvo el pánico de 1907 él solo.',
      initials: 'JP'
    },
    { 
      name: 'J.P. Morgan Jr.', 
      role: 'El Financista de Guerra', 
      impact: 'Gestionó préstamos de $500 millones para los Aliados en la I Guerra Mundial y modernizó el banco.',
      initials: 'JR'
    }
  ];

  // Imperios Industriales
  industries = [
    {
      title: 'U.S. Steel (Acero)',
      icon: '🏗️',
      desc: 'La primera empresa de mil millones de dólares. Controlaba el 60% del acero de EE.UU.'
    },
    {
      title: 'General Electric',
      icon: '💡',
      desc: 'Morgan fusionó la empresa de Edison con su competencia para dominar la electricidad.'
    },
    {
      title: 'Ferrocarriles',
      icon: '🚂',
      desc: 'Controlaron 1/6 de todas las vías férreas de Estados Unidos.'
    }
  ];

  contactForm = { name: '', email: '' };

  onSubmit() {
    alert(`Gracias ${this.contactForm.name}. Información enviada.`);
    this.contactForm = { name: '', email: '' };
  }
}