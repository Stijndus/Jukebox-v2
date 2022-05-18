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
            $song['artist'] = $song->artist;
            $song['album'] = $song->album;
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
            'artist_id' => request('artist'),
            'genre_id' => request('genre'),
            'album_id' => request('album'),
            'duration' => request('duration'),
        ]);
    }

    public function update(Song $song)
    {
        return $song->update([
            'title' => request('title'),
            'artist_id' => request('artist'),
            'album_id' => request('album'),
            'genre_id' => request('genre'),
            'duration' => request('duration'),
        ]);
    }

    public function destroy(Song $song)
    {
        $succes = $song->delete();
        return json_encode($succes);
    }

    public function read(Song $song)
    {
        $song['artist'] = $song->artist;
        return json_encode($song);
    }
}
