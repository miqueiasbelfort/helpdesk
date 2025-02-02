<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MyAreaController extends Controller
{
    public function index()
    {
        $myDepartament = Ticket::with(['departament', 'user'])->get();
        return Inertia::render('Dashboard', compact('myDepartament'));
    }
}
