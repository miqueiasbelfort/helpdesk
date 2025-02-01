<?php

use App\Http\Controllers\DepartamentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\TicketPriorityController;
use App\Http\Controllers\TicketStatusController;
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
    Route::get('/open', [TicketController::class, 'openTicket'])->name('open-ticket');

    Route::get('/ticket-status', [TicketStatusController::class, 'index'])->name('ticket-status');
    Route::post('/ticket-status', [TicketStatusController::class, 'store'])->name('ticket-status.store');
    Route::put('/ticket-status/{id}', [TicketStatusController::class, 'update'])->name('ticket-status.update');
    Route::delete('/ticket-status/{id}', [TicketStatusController::class, 'destroy'])->name('ticket-status.destroy');

    Route::get('/ticket-priorities', [TicketPriorityController::class, 'index'])->name('ticket-priority');
    Route::post('/ticket-priorities', [TicketPriorityController::class, 'store'])->name('ticket-priority.store');
    Route::put('/ticket-priority/{id}', [TicketPriorityController::class, 'update'])->name('ticket-priority.update');
    Route::delete('/ticket-priority/{id}', [TicketPriorityController::class, 'destroy'])->name('ticket-priority.destroy');

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
