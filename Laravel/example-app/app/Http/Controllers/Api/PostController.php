<?php

namespace App\Http\Controllers\Api;
use App\Models\Post;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StorePostRequest;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\PostResource;

class PostController extends Controller
{
    public function index()
    {
        $allPosts=Post::all();
        return PostResource::collection($allPosts);
    }

    public function show($postId)
    {
        $post = post::find($postId);
        return new PostResource($post);
    }

    public function store(StorePostRequest $request){
        $path = !empty($request->file('image'))?$request->file('image')->store('photos',["disk"=>"public"]):"";
        $title=request()->title;
        $description=request()->description;
        $postCreator=request()->post_creator;

        $post=Post::create([
            'title'=>$title,
            'description'=>$description,
            'user_id'=>$postCreator,
            'photo'=>$path,

        ]);
        return $post;
        
    }
}
