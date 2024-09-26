<?php

declare(strict_types=1);

namespace Modules\Product;

use Illuminate\Support\ServiceProvider;

class ProductServiceProvider extends ServiceProvider
{
    public function register(): void
    {

    }

    public function boot(): void
    {
        $this->loadRoutesFrom(base_path('modules/Product/Api/routes.php'));
    }
}
