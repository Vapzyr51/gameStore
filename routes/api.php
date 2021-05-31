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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/games', "GameController@index");

Route::get('/games/{id}', "GameController@index");

Route::post('/games/{id}', "GameController@edit");

Route::delete('/games/{id}', "GameController@delete");

Route::post('/games', "GameController@add");


Route::get('/categories', "CategoryController@index");

Route::get('/categories/{gameId}', "CategoryController@get");

Route::post('/categories', "CategoryController@add");

Route::delete('/games/{id}', "CategoryController@delete");

Route::post('/categories/{categoryId}', "CategoryController@edit");




