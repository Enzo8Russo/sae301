<?php

// src/Controller/DeconnexionController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;

class DeconnexionController extends AbstractController
{
    #[Route('/deconnexion', name: 'app_deconnexion')]
    public function index(SessionInterface $session): Response
    {
        // Vérifiez si l'utilisateur est connecté avant de le déconnecter
        if ($session->get('user_authenticated')) {
            // Déconnectez l'utilisateur en supprimant l'information de connexion de la session
            $session->set('user_authenticated', false);

            // Ajoutez un message flash pour informer l'utilisateur qu'il a été déconnecté
            $this->addFlash('success', 'Vous avez été déconnecté avec succès.');
        }

        // Redirigez l'utilisateur vers la page d'accueil ou une autre page après la déconnexion
        return $this->redirectToRoute('app_home');
    }
}

