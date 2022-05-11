<?php

namespace App\Http\Controllers;

use App\Models\Song;
use Illuminate\Http\Request;

class SongsApiController extends Controller
{
    public function index()
    {
        $songs = Song::select('*')->get();
        foreach($songs as $song){
            $song['artist'] = $song->artist;
        }
        return json_encode($songs);
    }

    public function store()
    {
        
        return Song::create([
            'title' => request('title'),
            'artist_id' => request('artist'),
            'duration' => request('duration'),

        ]);
    }

    public function update(Song $song)
    {
        return $song->update([
            'title' => request('title'),
            'description' => request('description'),
            'image' => request('image'),
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
