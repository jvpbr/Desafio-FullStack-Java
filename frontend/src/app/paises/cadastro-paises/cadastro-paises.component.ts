import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { HttpService } from 'src/app/service/http-service.service';
import { triggerFormValidators } from 'src/app/shared/util';

@Component({
	selector: 'app-cadastro-paises',
	templateUrl: './cadastro-paises.component.html',
	styleUrls: ['./cadastro-paises.component.css']
})
export class CadastroPaisesComponent implements OnInit {
	idPais: string;
	formPais: FormGroup;
	title: string = "Novo cadastro de País"
	constructor(private formBuilder: FormBuilder,
		private poNotification: PoNotificationService,
		private route: ActivatedRoute,
		private router: Router,
		private http: HttpService
		) { 

		this.formPais = this.formBuilder.group({
			nome: ['', Validators.compose([Validators.required])],
			sigla: ['', Validators.compose([Validators.required])],
			continente: ['', Validators.compose([Validators.required])],
			ddi: [, Validators.compose([Validators.required])]
		})
	}

	ngOnInit(): void {
		this.idPais = this.route.snapshot.paramMap.get('idPais');
		if (this.idPais !== null){
			this.buscaDadosPais()
			this.title = "Alteração do País"
		}
	}

	salvar(){
		if (this.validarRegistro()){
			if (this.idPais === null || this.idPais === ""){
				this.enviarPost()
			} else {
				this.enviarPut()
			}
		} else {
			this.poNotification.error("Preencha todos os campos antes de salvar as alterações!")
		}
	}

	voltar(){
		this.router.navigate(['/pais'], { relativeTo: this.route })
	}

	validarRegistro(): boolean{
		return this.formPais.valid;
	}

	enviarPost(){
		this.http.post('pais',this.formPais.value).subscribe({
			next:(resposta) => {
				this.poNotification.success("Registro criado com sucesso!");
				this.voltar();
			},
			error:(erro) => {
				this.poNotification.error(erro)
			},
		})
	}

	enviarPut(){
		this.http.put('pais/' + this.idPais,this.formPais.value).subscribe({
			next:(resposta) => {
				this.poNotification.success("Registro atualizado com sucesso!");
				this.voltar();
			},
			error:(erro) => {
				this.poNotification.error(erro)
			},
		})
	}

	buscaDadosPais(){
		this.http.get('pais/' + this.idPais).subscribe({
			next: (resposta)=>{
				this.formPais.patchValue({
					nome: resposta.nome,
					sigla: resposta.sigla,
					continente: resposta.continente,
					ddi: resposta.ddi
				})
			},
			error: (erro)=>{
				this.poNotification.error(erro)
			}
		})
	}
}
