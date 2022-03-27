<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ContractDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('contractDetails')->insert([
            'contract_id'=> 1,
            'header' => 'Lorem Ipsum',
            'title' => '',
            'content' => 'some random lorem ipsum text that no-one knows what it means...',
            'accepted'=> 0,
        ]);
    }
}
