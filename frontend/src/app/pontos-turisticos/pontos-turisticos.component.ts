import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoNotificationService, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { HttpService } from '../service/http-service.service';

@Component({
  selector: 'app-pontos-turisticos',
  templateUrl: './pontos-turisticos.component.html',
  styleUrls: ['./pontos-turisticos.component.css']
})
export class PontosTuristicosComponent implements OnInit {
    lsActions: Array<PoTableAction> = this.carregarActions();
    lsColumns: Array<PoTableColumn> = this.carregarColunas();
    lsPontosTuristicos: Array<PontoTuristico> = []

  constructor(
      private httpService: HttpService,
		  private poNotification: PoNotificationService,
		  private router: Router,
		  private activatedRoute: ActivatedRoute) { }
   

  ngOnInit(): void {
    this.carregarPontosTuristicos()
  }

  carregarActions(): Array<PoTableAction> {
		return [
			{
				label: 'Editar',
				icon: 'po-icon-edit',
				action: (row: PontoTuristico)=>{ this.navegarParaCadastro(row.id) }
			},
			{
				label: 'Excluir',
				icon: 'po-icon-delete',
				action: (row: PontoTuristico)=>{ this.deletarCadastro(row.id) }
			}
		]
	}

  deletarCadastro(id: string): void {
		this.httpService.delete('ponto-turistico/' + id).subscribe({
			next: (response)=>{
				this.poNotification.success('Registro excluido com sucesso!');
				this.carregarPontosTuristicos();
			},
			error: (error)=>{
				this.poNotification.error(error);
			}
		})
	}

  navegarParaCadastro(codigoPontoTuristico: string = ""){
		this.router.navigate(['cadastro', codigoPontoTuristico], { relativeTo: this.activatedRoute })
  }

  carregarPontosTuristicos(){
		return this.httpService.get('ponto-turistico').subscribe({
			next: (resposta)=>{
				let registros: Array<PontoTuristico> = []
				resposta.forEach(item => {
					let novoPontoTuristico: PontoTuristico = {
						id: item.id,
            pais: item.pais,
            cidade: item.cidade,
						nome: item.nome,
						estacao: item.estacao,
						resumo: item.resumo
					}
					registros.push(novoPontoTuristico);
				});

				this.lsPontosTuristicos = [...registros]
			}
		})
	}

  carregarColunas(): Array<PoTableColumn>{
		return [
			{
				property: 'pais',
				label: 'País'
			},
      {
				property: 'cidade',
				label: 'Cidade',
			},
			{
				property: 'nome',
				label: 'Nome',
			},
			{
				property: 'estacao',
				label: 'Estação'
			},
			{
				property: 'resumo',
				label: 'Resumo'
			}
		]
	}

}

interface PontoTuristico{
	id: string,
  pais: string,
  cidade: string,
	nome: string,
	estacao: string,
	resumo: string
}