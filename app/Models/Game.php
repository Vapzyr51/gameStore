<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $fillable = ['name', 'release_date'];
    use HasFactory;
        /**
     * Get the phone associated with the user.
     */
    public function phone()
    {
        return $this->hasMany(Tag::class);
    }
}
