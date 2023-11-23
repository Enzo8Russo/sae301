<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class ConnexionController extends AbstractController
{
#[Route('/connexion', name: 'app_connexion')]
public function index(Request $request): Response
{
    // Gérez la soumission du formulaire de connexion
    if ($request->isMethod('POST')) {
    $email = $request->request->get('email');
    $password = $request->request->get('password');

    // Effectuez une vérification réelle côté serveur
    if ($this->authenticateUser($email, $password)) {
    // Stockez l'information de connexion dans la session
        $session = $request->getSession();
        $session->set('user_authenticated', true);
    // Redirigez l'utilisateur vers la page d'accueil
        return $this->redirectToRoute('app_home');

    // Redirigez l'utilisateur vers la page d'accueil
    return $this->redirectToRoute('app_home');
    } else {
    // Gérez les erreurs d'authentification ici (par exemple, affichez un message d'erreur)
    $this->addFlash('error', 'Identifiants incorrects. Veuillez réessayer.'); // Message d'erreur flash
    }
}

return $this->render('connexion/index.html.twig', [
'controller_name' => 'ConnexionController',
]);
}

private function authenticateUser($email, $password)
{
// Vérification réelle des informations d'identification par rapport au fichier user.txt
$url = $this->getParameter('kernel.project_dir') . '/public/';
$userData = file_get_contents($url . 'user.txt');

// Vérifiez si le fichier user.txt a pu être lu
if ($userData === false) {
dump('Erreur lors de la lecture du fichier user.txt');
return false;
}

// Parse les données du fichier user.txt
$lines = explode("\n\n", $userData); // Utilisation de "\n\n" pour diviser les utilisateurs

// Vérifiez si le fichier user.txt a été correctement divisé en utilisateurs
if ($lines === false) {
dump('Erreur lors de la division des utilisateurs du fichier user.txt');
return false;
}

foreach ($lines as $userDataString) {
// Chaque bloc de données du fichier user.txt contient les informations d'un utilisateur
$userDataArray = [];
foreach (explode("\n", $userDataString) as $line) {
// Chaque ligne du bloc de données contient une propriété de l'utilisateur
$lineParts = explode(':', $line, 2);
if (count($lineParts) === 2) {
$userDataArray[trim($lineParts[0])] = trim($lineParts[1]);
}
}

// Affichez les données pour débogage
dump($userDataArray);

// Vérifiez si les informations d'identification correspondent
if (
isset($userDataArray['Email'], $userDataArray['Password'])
&& $userDataArray['Email'] === $email
&& $userDataArray['Password'] === $password
) {
return true;
}
}

return false;
}
}
