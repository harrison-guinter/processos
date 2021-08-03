import { Component, Input, OnInit } from '@angular/core';
import { Processo } from '../processo.model';

@Component({
  selector: 'processo-card',
  templateUrl: './processo-card.component.html',
  styleUrls: ['./processo-card.component.css']
})
export class ProcessoCardComponent implements OnInit {
  @Input()
  processo!: Processo;
  constructor() { }

  ngOnInit(): void {
  }

}
