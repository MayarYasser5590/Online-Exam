import { Component, inject } from '@angular/core';
import { DashboardHeader } from "../../layout/dashboard-header/dashboard-header";
import { DiplomasService } from '../../services/diplomas/diplomas.service';
import { DashboardPagesContainer } from '../../shared/dashboard-pages-container/dashboard-pages-container';
import { Diploma } from '../../interfaces/diploma/diploma-interface';

@Component({
  selector: 'app-home',
  imports: [DashboardHeader, DashboardPagesContainer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly diplomaService = inject(DiplomasService)
  diplomas : Diploma[] = []

ngOnInit(): void {
   this.getAllDiplomas()
}

getAllDiplomas(){
  this.diplomaService.getAllSubjects().subscribe({
    next:(res)=>{
   this.diplomas = res.subjects;
   console.log(this.diplomas);
    }
  })
}
}
