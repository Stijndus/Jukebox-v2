<?php

namespace App\Http\Controllers;

use App\Models\Playlist;
use Illuminate\Http\Request;

class PlaylistsApiController extends Controller
{
    public function index($id)
    {
        return json_encode(Playlist::select('*')->where('user', '=', $id)->get());
    }

    public function store()
    {
        
        return Playlist::create([
            'title' => request('title'),
            'description' => request('description'),
            'image' => request('image'),
            'user' => request('user_id'),

        ]);
    }

    public function update(Playlist $playlist)
    {
        return $playlist->update([
            'title' => request('title'),
            'description' => request('description'),
            'image' => request('image'),
        ]);
    }

    public function destroy(Playlist $playlist)
    {
        $succes = $playlist->delete();
        return json_encode($succes);
    }

    public function read(Playlist $playlist)
    {
        return json_encode($playlist);
    }
}

