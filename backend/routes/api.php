<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PlaylistsApiController;


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
Route::put('/playlists/{playlist}', [PlaylistsApiController::class, 'update']);
Route::delete('/playlists/{playlist}',  [PlaylistsApiController::class, 'destroy']);
