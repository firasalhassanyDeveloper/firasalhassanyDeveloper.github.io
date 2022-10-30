import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-behandling',
  templateUrl: './behandling.component.html',
  styleUrls: ['./behandling.component.css']
})
export class BehandlingComponent implements OnInit {
  title: string = "Behandling";
  constructor() { }

  ngOnInit(): void {
  }

}
