<?php

namespace App\Http\Controllers;

use App\Models\TicketPriority;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TicketPriorityController extends Controller
{
    public function index()
    {
        $priorities = TicketPriority::all();
        return Inertia::render('Tickets/TicketPriority', compact('priorities'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'nullable|string|max:255',
            'color' => 'sometimes|string|max:50',
            'status' => 'required|boolean'
        ]);

        try {
            TicketPriority::firstOrCreate($validated);
            return redirect()->route('ticket-priority')->with('success', 'Prioriedade adicionando com sucesso');
        } catch (Exception $e) {
            return redirect()->route('ticket-priority')->with('erro', 'Não foi possivel adicionar esse prioriedade');
        }
    }

    public function update(Request $request, int $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'nullable|string|max:255',
            'color' => 'sometimes|string|max:50',
            'status' => 'required|boolean'
        ]);
        try {
            $status = TicketPriority::find($id);
            $status->update($validated);
            return redirect()->route('ticket-priority')->with('success', 'Prioriedade atualiazdo com sucesso');
        } catch (Exception $e) {
            return redirect()->route('ticket-priority')->with('erro', 'Não foi possivel atualizar esse prioriedade');
        }
    }

    public function destroy(int $id)
    {
        try {
            $status = TicketPriority::find($id);
            $status->delete();
            return redirect()->route('ticket-priority')->with('success', 'Prioriedade deletado com sucesso');
        } catch (Exception $e) {
            return redirect()->route('ticket-priority')->with('erro', 'Não foi possivel deletar esse prioriedade');
        }
    }
}
