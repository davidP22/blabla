
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.session3.projetfinsession3.model.Adresse;
//import com.session3.projetfinsession3.model.Client;
//import com.session3.projetfinsession3.repository.ClientRepository;
//
//@RestController
//@RequestMapping("/api")
//public class ClientController {
//	
//	@Autowired(required=true)
//	private ClientRepository clientRepository;
//	
//	public ClientController() {}
//		
//		/**
//		 * Retourner tous les clients
//		 * @return
//		 */
//		
//		@RequestMapping(value = "/clients", method = RequestMethod.GET)
//		public ResponseEntity<?> getAllClient(){
//			System.out.println("++++++++++++++++");
//			
////			List<Client> listeClients = null;
////			try {
////				listeClients = clientRepository.findAll();
////			} catch (Exception e) {
////				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
////			}
//			System.out.println("++++++++++++++++");
//			//return ResponseEntity.status(HttpStatus.OK).body(listeClients);
//			
//			Adresse ad1 = new Adresse("23 rue des plantes", "75400", "Paris");
//			return ResponseEntity.status(HttpStatus.OK).body(ad1);
//		
//		
//		
//	}
//		/**
//		 * rechercher
//		 * @param id
//		 * @return
//		 */
//		@RequestMapping(value = "/client/{id}", method = RequestMethod.GET)
//		public ResponseEntity<?> getClient(@PathVariable long id){
//			Client client = null;
//					
//			try {
//				client = clientRepository.getOne(id);
//			} catch (Exception e) {
//				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
//			}
//			
//			if(client == null)
//				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
//			
//			return ResponseEntity.status(HttpStatus.OK).body(client);
//		}
//		
//		/**
//		 * ajouter
//		 * @param client
//		 * @return
//		 */
//		@RequestMapping(value = "/client", method = RequestMethod.POST)
//		public ResponseEntity<?> addClient(@RequestBody Client client){
//			Client resultClient = null;
//			String prenom = client.getPrenom();
//			if((prenom == null) || (prenom.isEmpty()))
//				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Il manque le prénom !");
//			
//			String nom = client.getNom();
//			if((nom == null) || (nom.isEmpty()))
//				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Il manque le nom !");
//			
//			try {
//				resultClient = clientRepository.saveAndFlush(client);
//			} catch (Exception e) {
//				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
//			}
//			
//			return ResponseEntity.status(HttpStatus.CREATED).body(resultClient);
//		}
//		
//		/**
//		 * Détruire
//		 * @param id
//		 * @return
//		 */
//		@RequestMapping(value = "/client/delete/{id}", method = RequestMethod.DELETE)
//		public ResponseEntity<?> deleteClient(@PathVariable Long id){
//			try {
//			clientRepository.deleteById(id);
//			} catch (Exception e) {
//				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
//			}
//			
//			return ResponseEntity.status(HttpStatus.OK).body(null);
//		}
//		
//	
//	
//
//}
