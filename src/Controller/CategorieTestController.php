<?php
// CategorieTestController.php
namespace App\Controller;

use App\Entity\Categorie;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CategorieTestController extends AbstractController
{
    #[Route("/create-categorie", name: "create_categorie")]
    public function createCategorie(EntityManagerInterface $entityManager): Response
    {
        $categorie = new Categorie();
        $categorie->setTitre('VotreTitre'); // Remplacez par le titre que vous souhaitez
        $categorie->setOrdre(1); // Remplacez par l'ordre que vous souhaitez

        $entityManager->persist($categorie);
        $entityManager->flush();

        return new Response('Enregistrement OK pour la catégorie : ' . $categorie->getId());
    }
}
