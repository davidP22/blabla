$(document).ready(function(){
	
	loadDatatable();
	
	var table = $('#adresseTable').DataTable();
	
});

/**
 * Charge les données dans la DataTable (JQuery)
 * @returns
 */
function loadDatatable() {
	$('#clientTable').DataTable({
		"columnDefs": [
	            {
	                "targets": [ 0 ],
	                "visible" : true
	            },
	            {
	                "targets": [ 1 ],
	                "visible" : true
	            },
	            {
	                "targets": [ 2 ],
	                "visible": true
	            }
	        ],
		"ajax" : {
			url : 'clients.json',
			dataSrc : ''
		},
		"columns" : [ 
			{"data" : "id_adresse"},
			{"data" : "adresseNom"},
			{"data" : "code_postal"},]
			
	});
	
}
///**
// * Méthode qui traite les POST et PUT
// * @param button
// * @param httpVerb
// * @returns
// */
//function adresse_submit(button, httpVerb, table) {
//
//	var adresse = {};
//	// on récupère les valeurs saisies
//	adresse["id_adresse"] = $("#id_adresse").val();
//	adresse["adresseadresseNom"] = $("#adresseadresseNom").val();
//	adresse["code_postal"] = $("#code_postal").val();
//	
//	
//	// on initialise l'url du back
//	var url = "/api/adresse";
//	
//	// si c'est une modification, on passe l'identifiant
//	if(httpVerb == "PUT")
//		url += "/" + adresse["id_adresse"];
//	
//	// on désactive le bouton en cours 
//	button.prop("disabled", true);
//
//	// on lance la méthode ajax pour faire le lien avec les méthodes back du constructeur
//	$.ajax({
//		type : httpVerb,						// méthode POST ou PUT
//		contentType : "application/json",		// type de données
//		url : url,								// url destinatrice
//		data : JSON.stringify(adresse),		// on transforme les données de la variable Javascript "adresse" en format JSON
//		dataType : 'json',						// on précise le mode de transfert
//		cache : false,							// pas de cache sollicité
//		timeout : 600000,						// délai d'attente
//		success : function(data) {				// si ok
//
//			var json = "<h3>Server Response au format JSON</h3><pre>adresse (modifié/ajouté) :<br>" + JSON.stringify(data, null, 4) + "</pre>";
//			
//			$('#feedbackadresse').html(json); // renvoie les infos aux format JSON adapté au HTML dans la balise "<DIV id="feedbackadresse"> 
//
//			console.log("SUCCESS : ", data);
//			button.prop("disabled", false);
//
//			resetForm()
//		},
//		error : function(e) {
//
//			var json = "<h3>Server Response</h3><pre>" + e.responseText	+ "</pre>";
//			
//			$('#feedbackadresse').html(json);
//
//			console.log("ERROR : ", e);
//			button.prop("disabled", false);
//
//		}
//	});
//	
//	table.ajax.reload(); // on recharge les données via ajax et la méthode reload()
//}
//
//function resetForm() {
//	$('#adresse-form')[0].reset();
//}
//
//function resetFeedBackadresse() {
//	$('#feedbackadresse').html("");
//}
//
///**
// * Méthode qui récupère un adresse
// * @returns
// */
//function getadresse() {
//
//	var idadresse = $("#id_adresse").val(); // on récupère la variable
//
//	$.ajax({
//		type : "GET",
//		contentType : "application/json",
//		url : "/api/clients/" + idadresse,
//		data : {},
//		dataType : 'json',
//		cache : false,
//		timeout : 600000,
//		success : function(data) {
//
//			var json = "<h3>Server Response format JSON</h3><pre>adresse trouvé :<br>" + JSON.stringify(data, null, 4) + "</pre>";
//			$('#feedbackadresse').html(json);
//			$("#id_adresse").val(data.id_adresse);
//			$("#adresseNom").val(data.adresseNom);
//			$("#code_postal").val(data.code_postal);
//			
//			console.log("SUCCESS : ", data);
//		},
//		error : function(e) {
//
//			var json = "<h3>Server Response</h3><pre>" + e.responseText	+ "</pre>";
//			
//			$('#feedbackadresse').html(json);
//
//			console.log("ERROR : ", e);
//		}
//	});
//}
//
///**
// * méthode pour supprimer un adresse
// * @returns
// */
//function deleteadresse() {
//
//	var idadresse = $("#id_adresse").val();
//
//	$.ajax({
//		type : "DELETE",
//		contentType : "application/json",
//		url : "/api/adresse/" + idadresse,
//		//data : {},
//		//dataType : 'json',
//		cache : false,
//		timeout : 600000,
//		success : function(data) {
//
//			var json = "<h3>Server Response</h3><pre>adresse " + idadresse + " deleted.</pre>";
//			$('#feedbackadresse').html(json);
//			console.log("SUCCESS : ", data);
//
//			resetForm();
//		},
//		error : function(e) {
//			var json = "<h3>Server Response</h3><pre>" + e.responseText	+ "</pre>";
//			
//			$('#feedbackadresse').html(json);
//			console.log("ERROR : ", e);
//		}
//	});
//	table.reload();
//}