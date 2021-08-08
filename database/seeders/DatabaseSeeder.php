<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Game;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(1)->create([
        //     'name' => 'jean',
        //     'email' => 'vapzyr@gmail.com',
        //     'password' => bcrypt('123456'),
        //     'email_verified_at' => now(),
        // ]);
        Game::factory()->count(50)->create();
    }
}
