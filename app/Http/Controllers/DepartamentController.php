<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DepartamentController extends Controller
{
    public function index()
    {
        return Inertia::render('Departaments/Index');
    }
}
