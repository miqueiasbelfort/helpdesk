<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TicketController extends Controller
{
    public function index()
    {
        return Inertia::render('Tickets/Ticket');
    }

    public function openTicket()
    {
        return Inertia::render('Tickets/OpenTicket');
    }
}
