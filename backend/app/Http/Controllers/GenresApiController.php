<?php

namespace App\Http\Controllers;
use App\Models\Genre;

use Illuminate\Http\Request;

class GenresApiController extends Controller
{
    public function index()
    {
        return json_encode(Genre::select('*')->get());
    }

    public function store()
    {
        
        return Genre::create([
            'name' => request('name'),
        ]);
    }

    public function update(Genre $genre)
    {
        return $genre->update([
            'name' => request('name'),
        ]);
    }

    public function destroy(Genre $genre)
    {
        $succes = $genre->delete();
        return json_encode($succes);
    }

    public function read(Genre $genre)
    {
        return json_encode($genre);
    }
}
