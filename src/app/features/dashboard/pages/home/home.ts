import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { DashboardHeader } from "../../layout/dashboard-header/dashboard-header";
import { DiplomasService } from '../../services/diplomas/diplomas.service';
import { DashboardPagesContainer } from '../../shared/dashboard-pages-container/dashboard-pages-container';
import { Diploma } from '../../interfaces/diploma/diploma-interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [DashboardHeader, DashboardPagesContainer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit , OnDestroy{
  private readonly diplomaService = inject(DiplomasService)
  diplomas : Diploma[] = []
  diplomaSubscribe : Subscription = new Subscription();

ngOnInit(): void {
   this.getAllDiplomas()
}

getAllDiplomas(){
  this.diplomaSubscribe = this.diplomaService.getAllSubjects().subscribe({
    next:(res)=>{
   this.diplomas = res.subjects;
    }
  })
}
 ngOnDestroy(): void {
    this.diplomaSubscribe.unsubscribe()
 }
}
