package br.com.juridico.totvs.fullstack.Backend.service.dto;

public class PontoTuristicoCreateUpdateDTO {

    private String pais;
    private String cidade;
    private String nome;
    private String estacao;
    private String resumo;
	
    public PontoTuristicoCreateUpdateDTO(){

    }

	public String getPais() {
		return pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEstacao() {
		return estacao;
	}

	public void setEstacao(String estacao) {
		this.estacao = estacao;
	}

	public String getResumo() {
		return resumo;
	}

	public void setResumo(String resumo) {
		this.resumo = resumo;
	}

   

}
