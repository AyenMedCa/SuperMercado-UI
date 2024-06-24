import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-rotator',
  templateUrl: './image-rotator.component.html',
  styleUrls: ['./image-rotator.component.css']
})
export class ImageRotatorComponent implements OnInit {
  images: { src: string, alt: string }[] = [
    { src: 'assets/images/ara.jpeg', alt: 'Imagen que muestra el supermercado ARA' },
    { src: 'assets/images/d1.png', alt: 'Imagen que muestra el supermercado D1' },
    { src: 'assets/images/justo.jpeg', alt: 'Imagen que muestra el supermercado justo y bueno' }
  ];

  currentIndex = 0;
  currentImage: string = '';
  currentAlt: string = '';

  ngOnInit(): void {
    this.showImage();
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.showImage();
    }, 5000); // Cambia de imagen cada 5 segundos (5000 milisegundos)
  }

  showImage(): void {
    this.currentImage = this.images[this.currentIndex].src;
    this.currentAlt = this.images[this.currentIndex].alt;
  }
}
