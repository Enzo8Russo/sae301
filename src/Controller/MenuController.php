<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class MenuController extends AbstractController
{

/*
    #[Route('/menu', name: 'app_menu')]
    public function index(): Response
    {
        // Récupérez l'état d'authentification de l'utilisateur depuis la session
        $isAuthenticated = $this->session->get('user_authenticated', false);
        dump($isAuthenticated);

        return $this->render('menu/index.html.twig', [
            'is_authenticated' => $isAuthenticated,
        ]);
    }*/


    public function menu(
        RequestStack $request): Response
    {
        // Récupérez l'état d'authentification de l'utilisateur depuis la session
        $isAuthenticated = $request->getSession()->get('user_authenticated', false);

        return $this->render('menu/index.html.twig', [
            'isAuthenticated' => $isAuthenticated,
        ]);
    }
}

