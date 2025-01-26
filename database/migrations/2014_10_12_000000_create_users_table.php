<?php

use App\Models\Departament;
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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('username');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->date('bithday')->nullable();
            $table->date('date_of_hiring')->nullable();
            $table->string('phone')->nullable();
            $table->integer('type')->default(0)->comment('0 - Usuário (Abrir e Interagir tickets), 1 - Operador (Abrir, Fechar e Interagir tickets), 2 - Administrador (Abrir, Fechar, Interagir, Administrar o sistema)');
            $table->boolean('status')->default(true);
            $table->foreignIdFor(Departament::class)->nullable()->constrained();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
