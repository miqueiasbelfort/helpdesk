<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MyAreaController extends Controller
{
    public function index()
    {
        // Criar uma função que vai dixando o chamado branco, depois vermlhor até o preto sempre que for chegando perto do limite de tempo com base no tipo do chamado
        $myDepartament = Ticket::with(['departament', 'user.departament', 'status', 'priority'])
            ->whereHas('departament', fn($query) => $query->where('id', auth()->user()->departament_id))
            ->whereNull('responsible')
            ->get();

        return Inertia::render('Dashboard', compact('myDepartament'));
    }
}
