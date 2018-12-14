package com.session3.projetfinsession3.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Adresse")
public class Adresse implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "Adresse_ID")
	private Long id_adresse;
	
	@Size(max = 100)
	@Column(name = "AdresseNom")
	private String adresseNom;
	
	@Size(max = 5)
	@Column(name = "Code_Postal")
	private String code_postal;
	
	@Size(max = 100)
	@Column(name = "Ville")
	private String ville;
	
//	@ManyToOne
//	@JoinColumn(name="Client_ID")
//	private Client client;

	

	public Adresse() {
		
	}



	public Adresse(@Size(max = 100) String adresseNom, @Size(max = 5) String code_postal, @Size(max = 100) String ville/*,
			Client client*/) {
		super();
		this.adresseNom = adresseNom;
		this.code_postal = code_postal;
		this.ville = ville;
		//this.client = client;
	}



	public Long getId_adresse() {
		return id_adresse;
	}



	public void setId_adresse(Long id_adresse) {
		this.id_adresse = id_adresse;
	}



	public String getAdresseNom() {
		return adresseNom;
	}



	public void setAdresseNom(String adresseNom) {
		this.adresseNom = adresseNom;
	}



	public String getCode_postal() {
		return code_postal;
	}



	public void setCode_postal(String code_postal) {
		this.code_postal = code_postal;
	}



	public String getVille() {
		return ville;
	}



	public void setVille(String ville) {
		this.ville = ville;
	}



	/*public Client getClient() {
		return client;
	}



	public void setClient(Client client) {
		this.client = client;
	}*/



	

/*

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Adresse other = (Adresse) obj;
		if (adresseNom == null) {
			if (other.adresseNom != null)
				return false;
		} else if (!adresseNom.equals(other.adresseNom))
			return false;
		if (client == null) {
			if (other.client != null)
				return false;
		} else if (!client.equals(other.client))
			return false;
		if (code_postal == null) {
			if (other.code_postal != null)
				return false;
		} else if (!code_postal.equals(other.code_postal))
			return false;
		if (id_adresse == null) {
			if (other.id_adresse != null)
				return false;
		} else if (!id_adresse.equals(other.id_adresse))
			return false;
		if (ville == null) {
			if (other.ville != null)
				return false;
		} else if (!ville.equals(other.ville))
			return false;
		return true;
	}
*/
	
	
}
