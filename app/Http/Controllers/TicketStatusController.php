<?php

namespace App\Http\Controllers;

use App\Models\TicketStatus;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TicketStatusController extends Controller
{
    public function index()
    {
        $allStatus = TicketStatus::all();
        return Inertia::render('Tickets/TicketStatus', compact('allStatus'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'nullable|string|max:255',
            'status' => 'required|boolean'
        ]);

        try {
            TicketStatus::firstOrCreate($validated);
            return redirect()->route('ticket-status')->with('success', 'Status adicionando com sucesso');
        } catch (Exception $e) {
            return redirect()->route('ticket-status')->with('erro', 'Não foi possivel adicionar esse status');
        }
    }

    public function update(Request $request, int $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'nullable|string|max:255',
            'status' => 'required|boolean'
        ]);
        try {
            $status = TicketStatus::find($id);
            $status->update($validated);
            return redirect()->route('ticket-status')->with('success', 'Status atualiazdo com sucesso');
        } catch (Exception $e) {
            return redirect()->route('ticket-status')->with('erro', 'Não foi possivel atualizar esse status');
        }
    }

    public function destroy(int $id)
    {
        try {
            $status = TicketStatus::find($id);
            $status->delete();
            return redirect()->route('ticket-status')->with('success', 'Status deletado com sucesso');
        } catch (Exception $e) {
            return redirect()->route('ticket-status')->with('erro', 'Não foi possivel deletar esse status');
        }
    }
}
