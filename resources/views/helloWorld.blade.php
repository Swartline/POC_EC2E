<head>
    <title>
        POC Laravel
    </title>
    <link rel="stylesheet" href="/css/home.css">
</head>
    <div class="border">
        <h1>
            Epicerie
        </h1>
        <h2>
            Charles haller    
        </h2>
        <div style="clear: both;"></div>
    </div>

    <ul>
        @foreach($products as $product)
        <li>{{$product->name}}</li>
        @endforeach
    </ul>
