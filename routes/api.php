<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GameController;

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

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/games', "App\Http\Controllers\GameController@index");

    Route::get('/games/{id}', "App\Http\Controllers\GameController@index");

    Route::post('/games/{id}', "App\Http\Controllers\GameController@edit");

    Route::delete('/games/{id}', "App\Http\Controllers\GameController@delete");

    Route::post('/games', "App\Http\Controllers\GameController@add");

    Route::get('/categories', "App\Http\Controllers\CategoryController@index");

    Route::get('/categories/{gameId}', "App\Http\Controllers\CategoryController@get");

    Route::post('/categories', "App\Http\Controllers\CategoryController@add");

    Route::delete('/games/{id}', "App\Http\Controllers\CategoryController@delete");

    Route::post('/categories/{categoryId}', "App\Http\Controllers\CategoryController@edit");
});
