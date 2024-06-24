import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      const { name, email, password, password_confirmation } = this.registroForm.value;
      this.authService.registrar({ name, email, password, password_confirmation }).subscribe({
        next: response => {
          console.log('Registration successful!', response);
          this.router.navigate(['/login']); // Redirige a la página de login
        },
        error: err => {
          console.error('Registration error:', err);
          // Aquí podrías manejar errores de registro, como mostrar un mensaje al usuario
        }
      });
    } else {
      this.registroForm.markAllAsTouched();
    }
  }
}
