<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'studio', 'release_date'];

    
    public function users() {
        return $this->belongsToMany(User::class);
    }

    public function categories() {
        return $this->belongsToMany(Category::class);
    }
}
