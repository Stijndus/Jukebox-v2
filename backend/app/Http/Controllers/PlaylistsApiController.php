<?php

namespace App\Http\Controllers;

use App\Models\Playlist;
use App\Models\Song;
use Illuminate\Http\Request;

// This controller handles all the api functionality of the playlist table (CRUD) and the functionality of adding a queue as a playlist
class PlaylistsApiController extends Controller
{
    public function index($id)
    {
        return json_encode(
            Playlist::select('*')
                ->where('user', '=', $id)
                ->get()
        );
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

    public function addToList(Playlist $playlist)
    {
        $result = false;
        $songs = $playlist->songs;
        foreach ($songs as $song) {
            if ($song['id'] == request('song_id')) {
                $result = true;
            }
        }

        $song = Song::find(request('song_id'));
        return $playlist->songs()->attach($song);
    }

    public function queue()
    {
        $playlist = Playlist::create([
            'title' => request('title'),
            'description' => request('description'),
            'image' => request('image'),
            'user' => request('user_id'),
        ]);
        $songs = json_decode(request('songs'));
        // return $songs;
        foreach ($songs as $song) {
            $playlist->songs()->attach(Song::find($song));
        }
    }

    public function update(Playlist $playlist)
    {
        return $playlist->update([
            'title' => request('title'),
            'description' => request('description'),
            'image' => request('image'),
        ]);
    }

    public function songs(Playlist $playlist)
    {
        $songs = $playlist->songs;
        foreach ($songs as $song) {
            $song['genre'] = $song->genre;
        }
        return json_encode($songs);
    }

    public function destroy(Playlist $playlist)
    {
        $playlist->songs()->detach();
        $succes = $playlist->delete();
        return json_encode($succes);
    }

    public function destroyRow(Playlist $playlist, $id)
    {
        $song = Song::where('id', $id)->first();
        $succes = $playlist->songs()->detach($song);

        return json_encode($succes);
    }

    public function read(Playlist $playlist)
    {
        $songs = $playlist->songs;
        foreach ($songs as $song) {
            $song['genre'] = $song->genre;
            $playlist['duration'] += $song['duration'];
        }
        $playlist['songs'] = $songs;
        return json_encode($playlist);
    }
}
