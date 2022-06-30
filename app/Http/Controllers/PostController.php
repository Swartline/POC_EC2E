<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\Grocery;
use App\Http\Resources\PostResource;


class PostController extends Controller
{
    public function index() {

        $products = Product::all();
        
        return response()->json($products);
    }

    public function addGrocery(Request $request)
    {
        $product = new Product();
        $product->name = $request->get('name');
        $product->amount = $request->get('amount');
        $product->unit_price = $request->get('price');
        $product->type = $request->get('type');
        $product->save();

        return response()->json(['status' => 'succes'], 200);

    }
}
