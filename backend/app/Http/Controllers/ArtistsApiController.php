<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use Illuminate\Http\Request;

class ArtistsApiController extends Controller
{
    public function index()
    {
        return json_encode(Artist::select('*')->get());
    }

    public function store()
    {
        
        return Artist::create([
            'title' => request('title'),
            'artist' => request('artist'),
            'duration' => request('duration'),

        ]);
    }

    public function update(Artist $artist)
    {
        return $artist->update([
            'title' => request('title'),
            'artist' => request('artist'),
            'duration' => request('duration'),
        ]);
    }

    public function destroy(Artist $artist)
    {
        $succes = $artist->delete();
        return json_encode($succes);
    }

    public function read(Artist $artist)
    {
        return json_encode($artist);
    }
}

