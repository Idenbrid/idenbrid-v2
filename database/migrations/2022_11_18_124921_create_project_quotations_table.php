<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectQuotationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_quotations', function (Blueprint $table) {
            $table->id();
            $table->text('step_1');
            $table->text('step_2');
            $table->text('step_3');
            $table->text('step_4');
            $table->text('step_5');
            $table->text('step_6');
            $table->string('name');
            $table->string('project_name');
            $table->string('email')->nullable();
            $table->string('phone');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('project_quotations');
    }
}
