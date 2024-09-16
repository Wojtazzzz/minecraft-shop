<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table(config('permission.table_names.roles'))->truncate();
        DB::table(config('permission.table_names.permissions'))->truncate();

        $role = Role::create([
            'name' => 'admin'
        ]);

        $permissions = [
            'admin panel',

            'view any product',
//            'view product',
            'create product',
            'update product',
            'delete product',

            'view any role',
//            'view role',
            'create role',
            'update role',
            'delete role',
        ];

        foreach ($permissions as $permission) {
            $perm = Permission::create([
                'name' => $permission,
            ]);

            $role->givePermissionTo($perm);
        }
    }
}
