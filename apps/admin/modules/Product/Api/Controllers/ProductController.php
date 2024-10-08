<?php

declare(strict_types=1);

namespace Modules\Product\Api\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\DB;
use Modules\Product\Api\Dto\ProductIndexResponseDto;
use Modules\Product\Api\Dto\ProductShowResponseDto;

class ProductController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        $products = DB::table('products')
            ->select([
                'id',
                'name',
                'slug',
                'image',
                'price',
            ])
            ->get();

        return ProductIndexResponseDto::collection($products);
    }

    public function show(Product $product): ProductShowResponseDto
    {
        return new ProductShowResponseDto($product);
    }
}
