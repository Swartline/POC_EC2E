<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Grocery;
use App\Http\Resources\PostResource;


class PostController extends Controller
{
    public function index() {
        return PostResource::collection(Grocery::all());
    }
}
