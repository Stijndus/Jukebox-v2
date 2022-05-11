<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'duration',
        'artist_id',
    ];

    public function playlists(){
        return $this->belongsToMany(Playlist::class);
    }

    public function artist(){
        return $this->belongsTo(Artist::class);
    }
}
