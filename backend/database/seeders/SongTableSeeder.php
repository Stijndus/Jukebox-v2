<?php

namespace Database\Seeders;

use App\Models\Song;
use Illuminate\Database\Seeder;

class SongTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $songs = [[
            'title' => 'Love Yourz',
            'genre_id' => 1,
            'artist' => 'J Cole',
            'duration' => 211
        ], [
            'title' => 'No Role Modelz',
            'genre_id' => 1,
            'artist' => 'J Cole',
            'duration' => 293
        ],[
            'title' => 'Branches',
            'genre_id' => 1,
            'artist' => 'BONES',
            'duration' => 123
        ],[
            'title' => 'Trees of the Valley',
            'genre_id' => 1,
            'artist' => 'Night Lovell',
            'duration' => 188
        ],
        [
            'title' => 'Traitor',
            'genre_id' => 2,
            'artist' => 'Olivia Rodrigo',
            'duration' => 229
        ],[
            'title' => 'Glimpse of Us',
            'genre_id' => 2,
            'artist' => 'Joji',
            'duration' => 233
        ],[
            'title' => 'Heat Waves',
            'genre_id' => 2,
            'artist' => 'Glass Animals',
            'duration' => 239
        ],[
            'title' => 'Easy On Me',
            'genre_id' => 2,
            'artist' => 'Adele',
            'duration' => 225
        ],
        [
            'title' => 'Hotel California - 2013 Remaster',
            'genre_id' => 3,
            'artist' => 'Eagles',
            'duration' => 391
        ],[
            'title' => 'Brother In Arms',
            'genre_id' => 3,
            'artist' => 'Dire Straits',
            'duration' => 420
        ],[
            'title' => 'Master Of Puppets',
            'genre_id' => 3,
            'artist' => 'Metallice',
            'duration' => 535
        ],[
            'title' => 'Do I Wanna Know?',
            'genre_id' => 3,
            'artist' => 'Arctic Monkeys',
            'duration' => 272
        ],[
            'title' => 'Little Dark Age',
            'genre_id' => 4,
            'artist' => 'MGMT',
            'duration' => 300
        ],[
            'title' => '505',
            'genre_id' => 4,
            'artist' => 'Arctic Monkeys',
            'duration' => 254
        ],[
            'title' => 'Sweater Weather',
            'genre_id' => 4,
            'artist' => 'MGMT',
            'duration' => 240
        ],[
            'title' => 'Freaks',
            'genre_id' => 4,
            'artist' => 'Surf Curse',
            'duration' => 147
        ],[
            'title' => 'Mindcontroller',
            'genre_id' => 5,
            'artist' => 'XRNT',
            'duration' => 315
        ],[
            'title' => 'Rebirth',
            'genre_id' => 5,
            'artist' => 'Sara Landry',
            'duration' => 367
        ],[
            'title' => 'Set the Trap',
            'genre_id' => 5,
            'artist' => 'Asquith',
            'duration' => 349
        ],[
            'title' => 'Meet Her At The love Parade',
            'genre_id' => 5,
            'artist' => 'Vieze Asbak',
            'duration' => 192
        ],];


        foreach($songs as $key => $value){
            Song::create($value);
        }
    }
}
