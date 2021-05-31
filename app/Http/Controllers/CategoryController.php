<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

use App\Models\Category;
use Illuminate\Http\Request;

class GameController extends Controller
{

    /**
     * Show the profile for a given user.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    public function index(Request $request)
    {
        $page = $request->input('page');
        $Category = Category::get();
        return response($Category, 200, ['Content-Type' => 'application/json']);
    }

        /**
     * Returns the different categories linked to a given Category
     *
     * @param  int  $id
     */
    public function get(Request $request, int $id)
    {
        $page = $request->input('page');
        $gameInfos = Category::get();
        return response($gameInfos, 200, ['Content-Type' => 'application/json']);
    }
    
    /**
     *  Register a new category in the database
     * 
     * @param  int  $id
     */
    public function add(Request $request, int $id)
    {
        $page = $request->input('page');
       // Category::add();
        $message = "game added succesfully";
        return response($message, 200, ['Content-Type' => 'application/json']);
    }

    /**
     * Remove an existing category from the database
     * 
     * @param  int  $id
     */
    public function delete(Request $request, int $id)
    {
        $page = $request->input('page');
       // Category::add();
        $message = "game deleted succesfully";
        return response($message, 200, ['Content-Type' => 'application/json']);
    }

        /**
     *  Edit a category in the database
     * 
     * @param  int  $id
     */
    public function edit(Request $request, int $id)
    {
        $page = $request->input('page');
       // Category::add();
        $message = "game added succesfully";
        return response($message, 200, ['Content-Type' => 'application/json']);
    }
    
}
