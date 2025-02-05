<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TicketController extends Controller
{
    public function index(int $id)
    {
        $ticket = Ticket::with(
            [
                'files', 
                'departament', 
                'user.departament',
                'status',
                'priority'
            ]
        )->find($id);
        return Inertia::render('Tickets/Ticket', compact('ticket'));
    }

    public function openTicket()
    {
        return Inertia::render('Tickets/OpenTicket');
    }

    public function createTicket(Request $request)
    {
        $validated = $request->validate([
            'departament' => 'required|integer|exists:departaments,id',
            'description' => 'required|min:4',
            'files' => 'sometimes|array',
            'files.*' => 'file|max:2048',
        ], [
            'departament.exists' => 'O departamento selecionado não existe.',
        ]);

        $ticket = Ticket::create([
            'description' => $validated['description'],
            'departament_id' => $validated['departament'],
            'user_id' => auth()->id(),
        ]);

        if (!empty($validated['files'])) {
            foreach ($validated['files'] as $file) {
                $path = $file->store('uploads', 'public');
                $ticket->files()->create([
                    'filename' => $path,
                ]);
            }
        }

        return redirect()->route('ticket')->with('success', 'Ticket criado com sucesso');
    }
}
