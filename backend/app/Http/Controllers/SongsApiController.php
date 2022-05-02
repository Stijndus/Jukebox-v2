<?php

namespace App\Http\Controllers;

use App\Models\Song;
use Illuminate\Http\Request;

class SongsApiController extends Controller
{
    public function index()
    {
        return json_encode(Song::select('*')->get());
    }

    public function store()
    {
        
        return Song::create([
            'title' => request('title'),
            'description' => request('description'),
            'image' => request('image'),
            'user' => request('user_id'),

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



    public function artist(Song $song)
    {
        return json_encode($song->artist);
    }

    public function destroy(Song $song)
    {
        $succes = $song->delete();
        return json_encode($succes);
    }

    public function read(Song $song)
    {
        return json_encode($song);
    }
}
