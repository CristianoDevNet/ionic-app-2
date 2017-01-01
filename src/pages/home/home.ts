import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  users: any[];

  nome: boolean = false;

  constructor(public navCtrl: NavController, public service: ServiceProvider) {
    
  }

  ngOnInit() {
    this.getDados();
  }

  getDados() {
    this.service.getData().subscribe(
      data => this.users = data,
      err => console.log('Erro na api: ', err)
    );
  }

  mostraNome() {
    this.nome = !this.nome;
  }

}
