<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

use App\Models\Game;
use Illuminate\Http\Request;

class GameController extends Controller
{

    /**
     * return the games registered for a given user.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    public function index(Request $request)
    {
        $Game = Game::paginate(10);
        return response($Game, 200, ['Content-Type' => 'application/json']);
    }

    /**
     * Returns the informations of a given game
     *
     * @param  int  $id
     */
    public function get(Request $request, int $id)
    {
        $gameInfos = Game::findOrFail($id);
        return response($gameInfos, 200, ['Content-Type' => 'application/json']);
    }

    /**
     *  Register a new game in the database
     * 
     * @param  int  $id
     */
    public function add(Request $request)
    {
        // field validation
        $request->validate([
            'name' => ['required', 'string'],
            'release_date' => ['required', 'date'],
        ]);
        Game::create([
            'name' => $request->input('name'),
            'release_date' => $request->input('release_date'),
        ]);
        $message = "game added succesfully";
        return response($message, 200, ['Content-Type' => 'application/json']);
    }

    /**
     * Remove an existing game from the database
     * 
     * @param  int  $id
     */
    public function delete(Request $request, int $id)
    {
        Game::findOrFail($id)->delete();
        $message = "game deleted succesfully";
        return response($message, 200, ['Content-Type' => 'application/json']);
    }

    /**
     *  Edit a game in the database
     * 
     * @param  int  $id
     */
    public function edit(Request $request, int $id)
    {
        // field validation
        $request->validate([
            'name' => ['required', 'string'],
            'release_date' => ['required', 'date'],
        ]);
        Game::findOrFail($id)->update([
            'name' => $request->input('name'),
        ]);
        $message = "game updated succesfully";
        return response($message, 200, ['Content-Type' => 'application/json']);
    }
}
