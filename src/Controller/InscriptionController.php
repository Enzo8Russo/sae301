<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Filesystem\Filesystem;

class InscriptionController extends AbstractController
{
    #[Route('/inscription-success', name: 'app_inscription_success')]
    public function success(): Response
    {
        return $this->render('inscription/success.html.twig');
    }

    #[Route('/inscription', name: 'app_inscription')]
    public function index(
        KernelInterface $kernel,
        Request $request): Response
    {

        if ($request->isMethod('POST')) {
            $username = $request->request->get('username');
            $email = $request->request->get('email');
            $password = $request->request->get('password');

            // Validez et sauvegardez les données dans un fichier texte
            $url = $kernel->getProjectDir().'/public/';
            $this->saveToTextFile($username, $email, $password, $url);

            // Redirection vers la page de connexion après l'inscription réussie
            return $this->redirectToRoute('app_connexion');
        }

        return $this->render('inscription/index.html.twig', [
            'controller_name' => 'InscriptionController',
        ]);
    }

    private function saveToTextFile($username, $email, $password, $url): void
    {
        $data = sprintf("Username: %s\nEmail: %s\nPassword: %s\n\n", $username, $email, $password);

        $filesystem = new Filesystem();
        $filesystem->appendToFile($url.'user.txt', $data);
    }
}