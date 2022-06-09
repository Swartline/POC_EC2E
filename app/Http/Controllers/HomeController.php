<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {

        $products = \App\Models\Grocery::all();

        return view('helloWorld', ['products' => $products]);
    }
}
