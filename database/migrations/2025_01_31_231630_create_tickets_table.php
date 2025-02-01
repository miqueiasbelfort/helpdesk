<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->text('description');
            $table->foreignId('departament_id')->references('id')->on('departaments')->comment('Área Responsavel');
            $table->foreignId('user_id')->references('id')->on('users')->comment('Usuário que abriu o chamado');
            $table->foreignId('responsible')->nullable()->references('id')->on('users')->comment('Responsavel pelo chamado');
            $table->foreignId('status_id')->nullable()->references('id')->on('ticket_status')->comment('Status do Ticket, ticket sem status = Fila');
            $table->foreignId('priority_id')->nullable()->references('id')->on('ticket_priorities')->comment('Prioriedade do Ticket');
            $table->date('scheduled')->nullable();
            $table->date('closed')->nullable();
            $table->date('rejected')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
