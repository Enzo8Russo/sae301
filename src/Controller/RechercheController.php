<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RechercheController extends AbstractController
{
    /**
     * @Route("/recherche", name="recherche")
     */
    public function index(): Response
    {
        return $this->render('recherche/index.html.twig');
    }

    /**
     * @Route("/recherche/resultat", name="recherche_resultat", methods={"POST"})
     */
    public function resultat(Request $request): Response
    {
        $query = $request->request->get('query');

        return $this->render('recherche/resultat.html.twig', [
            'query' => $query,
        ]);
    }
}