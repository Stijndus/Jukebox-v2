<?php

namespace App\Http\Controllers;
use App\Models\Genre;

use Illuminate\Http\Request;

// This controller handles all the api functionality of the genre's table (CRUD)
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
        $songs = $genre->songs;
        foreach($songs as $song){
            $song['genre'] = $song->genre;
        }
        $genre['songs'] = $songs;
        return json_encode($genre);
    }
}
