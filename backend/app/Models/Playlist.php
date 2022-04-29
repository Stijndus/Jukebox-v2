<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Playlist extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'image',
        'user',
        'pinned',
        'public',
    ];
    public function playlists(){
        return $this->belongsToMany(Playlist::class);
    }
}
