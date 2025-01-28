<?php

namespace App\Http\Controllers;

use App\Models\Departament;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Throwable;

class DepartamentController extends Controller
{
    public function index()
    {
        $departaments = Departament::all();
        return Inertia::render('Departaments/Index', ['departaments' => $departaments]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100|min:3',
            'description' => 'nullable|string|max:255',
            'company' => 'nullable|string|max:100',
            'local' => 'nullable|string|max:255',
            'status' => 'required|boolean'
        ]);
        
        try {
            Departament::create($validated);
            
            return redirect()
                ->route('departaments')
                ->with('success', 'Departamento adicionado com sucesso!');
        } catch (Throwable $e) {
            Log::error('Erro ao cadastrar departamento: ' . $e->getMessage());

            return redirect()
                ->route('departaments')
                ->with('error', 'Erro ao cadastrar departamento. Tente novamente mais tarde.');
        }
    }

    public function update(Request $request, int $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100|min:3',
            'description' => 'nullable|string|max:255',
            'company' => 'nullable|string|max:100',
            'local' => 'nullable|string|max:255',
            'status' => 'required|boolean'
        ]);
        
        try {
            $departament = Departament::findOrFail($id);
            $departament->update($validated);
            
            return redirect()
                ->route('departaments')
                ->with('success', 'Departamento atualizado com sucesso!');
        } catch (Throwable $e) {
            Log::error('Erro ao editar departamento: ' . $e->getMessage());

            return redirect()
                ->route('departaments')
                ->with('error', 'Erro ao editar departamento. Tente novamente mais tarde.');
        }
    }

    public function destroy(int $id)
    {
        try {
            $departament = Departament::findOrFail($id);
            $departament->delete();
            
            return redirect()
                ->route('departaments')
                ->with('success', 'Departamento deletado com sucesso!');
        } catch (Throwable $e) {
            Log::error('Erro ao deletar departamento: ' . $e->getMessage());

            return redirect()
                ->route('departaments')
                ->with('error', 'Erro ao deletar departamento. Tente novamente mais tarde.');
        }
    }
}
