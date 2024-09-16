<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            PermissionSeeder::class,
        ]);

        if (app()->environment() === 'production') {
            //
        }else{
            $role = Role::findByName('admin');

            $user = User::factory()->create([
                'name' => 'Wojtazzzz',
                'email' => 'marcin.witas72@gmail.com',
            ]);

            $user->assignRole($role);

            Product::factory(5)->create();
        }
    }
}
