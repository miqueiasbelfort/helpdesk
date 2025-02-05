<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'departament_id',
        'user_id',
        'responsible',
        'status_id',
        'priority_id',
        'scheduled',
        'closed',
        'rejected'
    ];

    public function files()
    {
        return $this->hasMany(TicketFiles::class);
    }

    public function departament()
    {
        return $this->belongsTo(Departament::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function status()
    {
        return $this->belongsTo(TicketStatus::class);
    }

    public function priority()
    {
        return $this->belongsTo(TicketPriority::class);
    }
}
