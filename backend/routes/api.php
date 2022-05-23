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
Route::get('/playlist/{playlist}', [PlaylistsApiController::class, 'read']);
Route::post('/playlists', [PlaylistsApiController::class, 'store']);
Route::post('/playlists/{playlist}_method=PUT', [PlaylistsApiController::class, 'update']);
Route::delete('/playlists/{playlist}',  [PlaylistsApiController::class, 'destroy']);
Route::get('/playlist_song/{playlist}', [PlaylistsApiController::class, 'songs']);
Route::post('/song_playlist/{playlist}', [PlaylistsApiController::class, 'addToList']);



// Songs Api Routes
Route::get('/songs', [SongsApiController::class, 'index']);
Route::post('/songs', [SongsApiController::class, 'store']);
Route::put('/songs/{song}', [SongsApiController::class, 'update']);
Route::delete('/songs/{song}',  [SongsApiController::class, 'destroy']);

// genre Api Routes
Route::get('/genres', [GenresApiController::class, 'index']);
Route::post('/genres', [GenresApiController::class, 'store']);
Route::put('/genres/{genre}', [GenresApiController::class, 'update']);
Route::delete('/genres/{genre}',  [GenresApiController::class, 'destroy']);
