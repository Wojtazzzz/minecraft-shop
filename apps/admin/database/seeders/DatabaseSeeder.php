<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        if (app()->environment() === 'production') {
            //
        }else{
            $user = User::factory()->create([
                'name' => 'Wojtazzzz',
                'email' => 'marcin.witas72@gmail.com',
            ]);

            $role = Role::create([
                'name' => 'admin',
            ]);

            $permission = Permission::create([
                'name' => 'admin panel',
            ]);

            $role->givePermissionTo($permission);

            $user->assignRole($role);

            Product::factory(5)->create();
        }
    }
}
