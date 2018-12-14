$(document).ready(function(){
	
	//loadDatatable();
	
	var table; // = $('#adresseTable').DataTable();
	
	$('#adresseTable tbody').on( 'dblclick', 'tr', function () {
	    let dataRow = table.row( this ).data();
	    $("#id_adresse").val(dataRow.id_adresse);
		$("#adresseNom").val(dataRow.adresseNom);
		$("#code_postal").val(dataRow.code_postal);
		$("#ville").val(dataRow.ville);
		
		
	});
	
	// si vous cliquez sur le bouton click "btn-post"
	// on appelle la méthode "clent_submit()
	// en lui passant 2 paramètres : la référence du bouton pour le désactiver et le type de méthode, ici POST.
	$("#btn-post").click(function() {
		const conf = confirm("Etes-vous sûr de vouloir ajouter cette entrée?");
		if (conf){
			adresse_submit($("#btn-post"), "POST", table);
			
		}
		
	
	});
	// si vous cliquez sur le bouton click "btn-put"
	// on appelle la méthode "adresse_submit()
	// en lui passant 2 paramètres : la référence du bouton pour le désactiver et la type de méthode, ici PUT.
	$("#btn-put").click(function() {
		adresse_submit($("#btn-put"), "PUT", table);
	
	});

	//click on RESET
	$("#btn-reset").click(function() {
		
		resetForm(); // méthode qui met les valeurs des zones de textes du formulaire à blanc
		resetFeedBackAdresse
	});
		
	//click on GET
	$("#btn-get").click(function() {
		getAdresse(); // affiche le adresse sélectionné(e) dans la DataTable
	});

	//click on DELETE
	$("#btn-delete").click(function() {
		deleteAdresse(); // efface le adresse en fonction de l'identifiant
		
		
	});
	
	//click on create
	$("#btn-create").click(function(){
		createAdresse();//creer des adresses
	});
});

function createAdresse() {
	document.getElementById('adresseList').style.visibility="visible";
	loadDatatable();
	table = $('#adresseTable').DataTable();
	var idAdresse = $("#id_adresse").val(); // on récupère la variable
	
}


function getAdresse() {

	var idAdresse = $("#id_adresse").val(); // on récupère la variable

	$.ajax({
		type : "GET",
		contentType : "application/json",
		url : "/api/adresses/",
		data : {},
		dataType : 'json',
		cache : false,
		timeout : 600000,
		success : function(data) {

			var json = "<h3>Server Response format JSON</h3><pre>Adresse trouvé :<br>" + JSON.stringify(data, null, 4) + "</pre>";
			$('#feedbackadresse').html(json);
			$("#id_adresse").val(data.id_adresse);
			$("#adresseNom").val(data.adresseNom);
			$("#code_postal").val(data.code_postal);
			$("#ville").val(data.ville);
			
			console.log("SUCCESS : ", data);
		},
		error : function(e) {

			var json = "<h3>Server Response</h3><pre>" + e.responseText	+ "</pre>";
			
			$('#feedbackadresse').html(json);

			console.log("ERROR : ", e);
		}
	});
}



/**
 * Charge les données dans la DataTable (JQuery)
 * @returns
 */
function loadDatatable() {
	$('#adresseTable').DataTable({
		"columnDefs": [
	            {
	                "targets": [ 0 ],
	                "sortable" : true
	            },
	            {
	                "targets": [ 1 ],
	                "sortable" : true
	            },
	            {
	                "targets": [ 2 ],
	                "sortable": true
	            },
	            {
	                "targets": [ 3 ],
	                "sortable" : true
	            },
	        ],
		"ajax" : {
			url : '/api/createadresse',
			dataSrc : ''
		},	       
	
		"columns" : [ 
			{"data" : "id_adresse"},
			{"data" : "adresseNom"},
			{"data" : "code_postal"},
			{"data" : "ville"}]
			
	});
	
	
}
/**
 * Méthode qui traite les POST et PUT
 * @param button
 * @param httpVerb
 * @returns
 */
function adresse_submit(button, httpVerb, table) {

	var adresse = {};
	// on récupère les valeurs saisies
	adresse["id_adresse"] = $("#id_adresse").val();
	adresse["adresseNom"] = $("#adresseNom").val();
	adresse["code_postal"] = $("#code_postal").val();
	adresse["ville"] = $("#ville").val();
	
	
	// on initialise l'url du back
	var url = "/api/adresse";
	
	// si c'est une modification, on passe l'identifiant
	if(httpVerb == "PUT")
		url += "/" + adresse["id_adresse"];
	
	// on désactive le bouton en cours 
	button.prop("disabled", true);

	// on lance la méthode ajax pour faire le lien avec les méthodes back du constructeur
	$.ajax({
		type : httpVerb,						// méthode POST ou PUT
		contentType : "application/json",		// type de données
		url : url,								// url destinatrice
		data : JSON.stringify(adresse),		// on transforme les données de la variable Javascript "adresse" en format JSON
		dataType : 'json',						// on précise le mode de transfert
		cache : false,							// pas de cache sollicité
		timeout : 600000,						// délai d'attente
		success : function(data) {				// si ok

			var json = "<h3>Server Response au format JSON</h3><pre>adresse (modifié/ajouté) :<br>" + JSON.stringify(data, null, 4) + "</pre>";
			
			$('#feedbackadresse').html(json); // renvoie les infos aux format JSON adapté au HTML dans la balise "<DIV id="feedbackadresse"> 

			console.log("SUCCESS : ", data);
			button.prop("disabled", false);

			resetForm()
		},
		error : function(e) {

			var json = "<h3>Server Response</h3><pre>" + e.responseText	+ "</pre>";
			
			$('#feedbackadresse').html(json);

			console.log("ERROR : ", e);
			button.prop("disabled", false);

		}
	});
	
	table.ajax.reload(); // on recharge les données via ajax et la méthode reload()
}

function resetForm() {
	$('#adresse-form')[0].reset();
}

function resetFeedBackAdresse() {
	$('#feedbackadresse').html("");
}

/**
 * Méthode qui récupère un adresse
 * @returns
 */
function getAdresse() {

	var idAdresse = $("#id_adresse").val(); // on récupère la variable

	$.ajax({
		type : "GET",
		contentType : "application/json",
		url : "/api/adresse/" + idAdresse,
		data : {},
		dataType : 'json',
		cache : false,
		timeout : 600000,
		success : function(data) {

			var json = "<h3>Server Response format JSON</h3><pre>Adresse trouvé :<br>" + JSON.stringify(data, null, 4) + "</pre>";
			$('#feedbackadresse').html(json);
			$("#id_adresse").val(data.id_adresse);
			$("#adresseNom").val(data.adresseNom);
			$("#code_postal").val(data.code_postal);
			$("#ville").val(data.ville);
			
			console.log("SUCCESS : ", data);
		},
		error : function(e) {

			var json = "<h3>Server Response</h3><pre>" + e.responseText	+ "</pre>";
			
			$('#feedbackadresse').html(json);

			console.log("ERROR : ", e);
		}
	});
}

/**
 * méthode pour supprimer un adresse
 * @returns
 */
function deleteAdresse() {

	var idAdresse = $("#id_adresse").val();

	$.ajax({
		type : "DELETE",
		contentType : "application/json",
		url : "/api/adresse/" + idAdresse,
		//data : {},
		//dataType : 'json',
		cache : false,
		timeout : 600000,
		success : function(data) {

			var json = "<h3>Server Response</h3><pre>adresse " + idAdresse + " deleted.</pre>";
			$('#feedbackadresse').html(json);
			console.log("SUCCESS : ", data);

			resetForm();
		},
		error : function(e) {
			var json = "<h3>Server Response</h3><pre>" + e.responseText	+ "</pre>";
			
			$('#feedbackadresse').html(json);
			console.log("ERROR : ", e);
		}
	});
	table.reload();
}