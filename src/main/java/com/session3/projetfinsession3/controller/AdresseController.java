package com.session3.projetfinsession3.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.session3.projetfinsession3.model.Adresse;
import com.session3.projetfinsession3.repository.AdresseRepository;


@RestController
@RequestMapping("/api")
public class AdresseController {

	@Autowired(required=true)
	private AdresseRepository adresseRepository;
	
	public AdresseController() {
		
	}
	
	//
	@RequestMapping(value = "/adresses", method = RequestMethod.GET)
	public ResponseEntity<?> getAllAdresse(){
		System.out.println("++++++++++++++++");
		
		List<Adresse> listeAdresses = null;
		try {
			listeAdresses = adresseRepository.findAll();
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
		System.out.println("++++++++++++++++");
		//return ResponseEntity.status(HttpStatus.OK).body(listeClients);
		
//		Adresse ad1 = new Adresse("23 rue des plantes", "75400", "Paris");
//		adresseRepository.save(ad1);
		return ResponseEntity.status(HttpStatus.OK).body(listeAdresses);
		
	}
	
	
	//ajouter une adresse ah ah ah
	
	@PostMapping(value = "/adresse")
	public ResponseEntity<?> addAdresse(@RequestBody Adresse adresse){
		Adresse resultAdresse = null;
		String adresseNom = adresse.getAdresseNom();
		if((adresseNom == null) || (adresseNom.isEmpty()))
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Il manque le nom de l'adresse!");
		
		String code_postal = adresse.getCode_postal();
		if((code_postal == null) || (code_postal.isEmpty()))
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Il manque le code postal !");
		
		String ville = adresse.getVille();
		if((ville == null) || (ville.isEmpty()))
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Il manque la ville !");
		
		try {
			resultAdresse = adresseRepository.saveAndFlush(adresse);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
		
		return ResponseEntity.status(HttpStatus.CREATED).body(resultAdresse);
	}
	
	//modifier une adresse
	
	@RequestMapping(value = "/adresse/{id_adresse}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateClient(@RequestBody Adresse adresse, @PathVariable Long id) throws Exception {
		Adresse resultAdresse = null;
		String adresseNom = adresse.getAdresseNom();
		if((adresseNom == null) || (adresseNom.isEmpty()))
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Il manque le nom de l'adresse!");
		
		String code_postal = adresse.getCode_postal();
		if((code_postal == null) || (code_postal.isEmpty()))
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Il manque le code postal !");
		
		String ville = adresse.getVille();
		if((ville == null) || (ville.isEmpty()))
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Il manque la ville !");
		
		try {
			resultAdresse = adresseRepository.save(adresse);
			
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
		
		return ResponseEntity.status(HttpStatus.OK).body(resultAdresse);
	}
	
	//su^pprimer une adresse
	
	@RequestMapping(value = "/adresse/delete/{id_adresse}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteAdresse(@PathVariable Long id_adresse){
		try {
		adresseRepository.deleteById(id_adresse);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
		
		return ResponseEntity.status(HttpStatus.OK).body(null);
	}
	
}
