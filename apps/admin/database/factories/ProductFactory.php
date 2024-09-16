<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->sentence(),
            'description' => fake()->text(),
            'commands' => 'say Hello World!',
            'price' => fake()->randomFloat(2, 0.99, 199.99),
            'image' => fake()->imageUrl(),
            'active' => true,
        ];
    }
}
