<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LuckyController
{
    #[Route("/lucky/number", name:"app_lucky_number")]
    public function number(): Response
    {
        $number = random_int(0, 100);

        return new Response(
            'Lucky number: '.$number
        );
    }
}