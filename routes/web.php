<?php

use App\Http\Controllers\DepartamentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TicketController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('ticket')->group(function(){
    Route::get('/', [TicketController::class, 'index'])->name('ticket');
})->middleware(['auth', 'verified']);

Route::prefix('departaments')->group(function(){
    Route::get('/', [DepartamentController::class, 'index'])->name('departaments');
    Route::post('/', [DepartamentController::class, 'store'])->name('departaments.store');
    Route::put('/{id}', [DepartamentController::class, 'update'])->name('departaments.update');
    Route::delete('/{id}', [DepartamentController::class, 'destroy'])->name('departaments.destroy');
})->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
