<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Seeder;

class GenreTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $genres = [[
            'name' => 'Hip Hop'
        ], [
            'name' => 'Pop'
        ], [
            'name' => 'Rock'
        ], [
            'name' => 'Indie'
        ], [
            'name' => 'Techno'
        ],];

        foreach($genres as $key => $value){
            Genre::create($value);
        }
    }
}
