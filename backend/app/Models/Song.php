<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'genre_id',
        'artist',
        'duration'
    ];

    public function playlists(){
        return $this->belongsToMany(Playlist::class);
    }

    public function genre(){
        return $this->belongsTo(Genre::class);
    }
}
