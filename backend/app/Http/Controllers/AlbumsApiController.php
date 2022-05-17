<?php

namespace App\Http\Controllers;
use App\Models\Album;
use Illuminate\Http\Request;

class AlbumsApiController extends Controller
{
    public function index()
    {
        $albums = Album::select('*')->get();
        foreach($albums as $album){
            $album['artist'] = $album->artist;
        }
        return json_encode($albums);
    }

    public function store()
    {
        
        return Album::create([
            'title' => request('name'),
            'artist_id'=> request('artist')
        ]);
    }

    public function update(Album $album)
    {
        return $album->update([
            'title' => request('name'),
            'artist_id'=> request('artist')
        ]);
    }

    public function destroy(Album $album)
    {
        $succes = $album->delete();
        return json_encode($succes);
    }

    public function read(Album $album)
    {
        return json_encode($album);
    }
}
