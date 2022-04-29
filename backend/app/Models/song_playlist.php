<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class song_playlist extends Model
{
    use HasFactory;
    public function songs(){
        return $this->hasMany(Song::class, 'song_id', 'playlist_id');
    }
}
