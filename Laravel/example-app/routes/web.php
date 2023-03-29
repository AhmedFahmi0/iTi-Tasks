<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Blade;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

//Route::get('/', [TestController::class, 'test']);

Route::group(['middleware'=>['auth']],function(){
    Route::get('/', [PostController::class, 'index'])->name('posts.index');
    Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
    Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
    Route::get('/posts/{post}', [PostController::class, 'show'])->name('posts.show');
    Route::get('/posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');
    Route::put('/posts/{post}', [PostController::class, 'update'])->name('posts.update');
    Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
    Route::delete('/posts/{post}', [PostController::class, 'delete'])->name('posts.delete');
    Route::post('/comments', [CommentController::class, 'store'])->name('comments.store');
    Route::delete('/comments/{comment}', [CommentController::class, 'destroy'])->name('comments.destroy');
    Route::put('/comments/{comment}', [CommentController::class, 'update'])->name('comments.update');
    Route::get('/comments/{comment}/edit', [CommentController::class, 'edit'])->name('comments.edit');
});
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

 
Route::get('/auth/redirect', function () {
    return Socialite::driver('github')->redirect();
});



Route::get('/auth/callback', function () {
    $githubUser = Socialite::driver('github')->user();
    $user = User::where("email", $githubUser->email)->first();
    if(!$user){
    $user = User::updateOrCreate([
        'github_id' => $githubUser->id,
        ], [
            'name' => $githubUser->name,
            'email' => $githubUser->email,
            'password'=>'',
            'github_token' => $githubUser->token,
            'github_refresh_token' => $githubUser->refreshToken,
        ]);
    }
        Auth::login($user);
        return redirect('/posts');
    
    });



Route::get('/auth/redirect/google', function () {
    return Socialite::driver('google')->redirect();
});

Route::get('/auth/callback/google', function () {
    $googleUser = Socialite::driver('google')->user();
    $user = User::where("email", $googleUser->email)->first();
        // dd($user);

        if (!$user) {
            $user = User::updateOrCreate([
                'google_id' => $googleUser->id,
            ], [
                'name' => $googleUser->name,
                'email' => $googleUser->email,
                'password' => '',
                'google_token' => $googleUser->token,
                'google_refresh_token' => $googleUser->refreshToken,
            ]);
        }

        Auth::login($user);
        return redirect('/posts');
    });
    

