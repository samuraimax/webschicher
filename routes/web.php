<?php

use App\Http\Controllers\FrontendController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Example Routes
// Route::view('/', 'index');
Route::get('/', [FrontendController::class, "index"]);
Route::get('change/lang', [FrontendController::class, "lang_change"])->name('LangChange');
Route::get('/about', [FrontendController::class, "about"])->name('about');
Route::get('/service/vehicleanalysis', [FrontendController::class, "vehicleanalysis"])->name('service.vehicleanalysis');
