import { Component, inject } from '@angular/core';
import { DashboardHeader } from "../../layout/dashboard-header/dashboard-header";
import { DiplomaCard } from "./components/ui/diploma-card/diploma-card";
import { DiplomasService } from '../../services/diplomas/diplomas.service';
import { DashboardPagesContainer } from '../../shared/dashboard-pages-container/dashboard-pages-container';

@Component({
  selector: 'app-home',
  imports: [DashboardHeader, DiplomaCard, DashboardPagesContainer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly diplomaService = inject(DiplomasService)
  diplomas : object[] = []

ngOnInit(): void {
  this.diplomaService.getAllSubjects().subscribe({
    next:(res)=>{
   this.diplomas = res.subjects;
   console.log(this.diplomas);
   
    }
  })


  
  
}
}
