<?php

namespace App\Http\Controllers;

use App\Models\Playlist;
use App\Models\Song;
use Illuminate\Http\Request;

class SongsApiController extends Controller
{
    public function index()
    {
        $songs = Song::select('*')->get();
        foreach($songs as $song){
            $song['album'] = $song->genre;
        }
        return json_encode($songs);
    }

    public function addToList(Song $song)
    {
        $playlist = Playlist::find(request('playlist_id'));
        return $song->playlists()->attach($playlist);
    }

    public function store()
    {
        
        return Song::create([
            'title' => request('title'),
            'artist' => request('artist'),
            'genre_id' => request('genre'),
        ]);
    }

    public function update(Song $song)
    {
        return $song->update([
            'title' => request('title'),
            'artist' => request('artist'),
            'genre_id' => request('genre'),
        ]);
    }

    public function destroy(Song $song)
    {
        $succes = $song->delete();
        return json_encode($succes);
    }

    public function read(Song $song)
    {
        $song['genre'] = $song->genre;
        return json_encode($song);
    }
}
