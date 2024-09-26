<?php

use Illuminate\Support\Facades\Route;
use Modules\Product\Api\Controllers\ProductController;

Route::prefix('/api/products')
    ->name('products.')
    ->controller(ProductController::class)
    ->group(function () {
        Route::get('/', 'index')->name('index');
    });
