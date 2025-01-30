<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TicketStatusController extends Controller
{
    public function index()
    {
        return Inertia::render('Tickets/TicketStatus');
    }
}
