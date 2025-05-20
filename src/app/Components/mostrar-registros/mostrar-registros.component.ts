import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MateriaProfesorService } from '../../Services/materia-profesor.service';
import { VerRegistros } from '../../Models/Verregistros';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-mostrar-registros',
  imports: [CommonModule],
  templateUrl: './mostrar-registros.component.html',
  styleUrl: './mostrar-registros.component.css'
})
export class MostrarRegistrosComponent implements OnInit {
  registros: VerRegistros[] = [];
  error: string = '';
 

  constructor(private service: MateriaProfesorService) {}

  @ViewChild('contenidoPDF', { static: false }) contenidoPDF!: ElementRef;
  ngOnInit(): void {
    this.service.obtenerRegistros().subscribe({
      next: (data) => (this.registros = data),
      error: (err) => (this.error = 'Error al cargar registros')
    });
  }
exportarPDF(): void {
    const data = this.contenidoPDF.nativeElement;

    html2canvas(data).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('registros-estudiantes.pdf');
    });
  }
}
