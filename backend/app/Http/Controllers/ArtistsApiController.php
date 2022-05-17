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
            'name' => request('name'),
            'description' => request('description'),

        ]);
    }

    public function update(Artist $artist)
    {
        return $artist->update([
            'name' => request('name'),
            'description' => request('description'),
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

