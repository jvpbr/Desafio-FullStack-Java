package br.com.juridico.totvs.fullstack.Backend.domain;

import br.com.juridico.totvs.fullstack.Backend.service.dto.PontoTuristicoDTO;

public class PontoTuristico {
	private Long id;
    private String pais;
    private String cidade;
    private String nome;
    private String estacao;
    private String resumo;

    public PontoTuristico(Long id, String pais, String cidade, String nome, String estacao, String resumo){
        this.id = id;
        this.pais = pais;
        this.cidade = cidade;
        this.nome = nome;
        this.estacao = estacao;
        this.resumo = resumo;
    }

    public PontoTuristico(PontoTuristicoDTO pontoTuristicoDTO){
        this.id = pontoTuristicoDTO.getId();
        this.pais = pontoTuristicoDTO.getPais();
        this.cidade = pontoTuristicoDTO.getCidade();
        this.nome = pontoTuristicoDTO.getNome();
        this.estacao = pontoTuristicoDTO.getEstacao();
        this.resumo = pontoTuristicoDTO.getResumo();
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

