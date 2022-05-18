<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PlaylistsApiController;
use App\Http\Controllers\SongsApiController;
use App\Http\Controllers\ArtistsApiController;
use App\Http\Controllers\AlbumsApiController;
use App\Http\Controllers\GenresApiController;




/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);    
});

// Playlists Api Routes
Route::get('/playlists/{user}', [PlaylistsApiController::class, 'index']);
Route::get('/playlists/public', [PlaylistsApiController::class, 'public']);
Route::get('/playlist/{playlist}', [PlaylistsApiController::class, 'read']);
Route::post('/playlists', [PlaylistsApiController::class, 'store']);
Route::put('/playlist_pin/{playlist}', [PlaylistsApiController::class, 'pin']);
Route::get('/playlist_song/{playlist}', [PlaylistsApiController::class, 'songs']);
Route::put('/playlists/{playlist}', [PlaylistsApiController::class, 'update']);
Route::delete('/playlists/{playlist}',  [PlaylistsApiController::class, 'destroy']);
Route::post('/song_playlist/{playlist}', [PlaylistsApiController::class, 'addToList']);



// Songs Api Routes
Route::get('/songs', [SongsApiController::class, 'index']);
Route::post('/songs', [SongsApiController::class, 'store']);
Route::put('/songs/{song}', [SongsApiController::class, 'update']);
Route::delete('/songs/{song}',  [SongsApiController::class, 'destroy']);

// Artists Api Routes
Route::get('/artists', [ArtistsApiController::class, 'index']);
Route::post('/artists', [ArtistsApiController::class, 'store']);
Route::put('/artists/{artist}', [ArtistsApiController::class, 'update']);
Route::delete('/artists/{artist}',  [ArtistsApiController::class, 'destroy']);

// Albums Api Routes
Route::get('/albums', [AlbumsApiController::class, 'index']);
Route::post('/albums', [AlbumsApiController::class, 'store']);
Route::put('/albums/{album}', [AlbumsApiController::class, 'update']);
Route::delete('/albums/{album}',  [AlbumsApiController::class, 'destroy']);

// genre Api Routes
Route::get('/genres', [GenresApiController::class, 'index']);
Route::post('/genres', [GenresApiController::class, 'store']);
Route::put('/genres/{genre}', [GenresApiController::class, 'update']);
Route::delete('/genres/{genre}',  [GenresApiController::class, 'destroy']);
