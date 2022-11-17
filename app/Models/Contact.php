<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;
    protected $fillable = [
        'inquiry_type',
        'company_name',
        'url',
        'name',
        'email',
        'phone_number',
        'summary',
        'source',
    ];
}
