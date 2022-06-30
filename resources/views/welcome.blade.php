<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Grocery</title>

        <!-- Fonts -->
        {{-- <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet"> --}}
        <link rel="stylesheet" href="/css/home.css">

    </head>
    <body>
       <div id="app">
            <router-view />
       </div>
       <script src="{{ asset('js/app.js') }}"></script>
       <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    </body>
</html>
