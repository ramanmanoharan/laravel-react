<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CategoryController;

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/Category', [App\Http\Controllers\Api\CategoryController::class, 'index'])->name('index');
Route::post('/Category/store', [App\Http\Controllers\Api\CategoryController::class, 'store'])->name('store');
Route::delete('/Category/delete/{id}', [App\Http\Controllers\Api\CategoryController::class, 'destroy'])->name('destroy');
Route::get('/Category/edit/{id}', [App\Http\Controllers\Api\CategoryController::class, 'edit'])->name('edit');
Route::put('/Category/update/{id}', [App\Http\Controllers\Api\CategoryController::class, 'update'])->name('update');
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
