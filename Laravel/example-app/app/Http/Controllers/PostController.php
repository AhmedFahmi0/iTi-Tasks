<?php

namespace App\Http\Controllers;
use App\Models\Post;
use App\Models\User;
use App\Models\Comment;
use Illuminate\Http\Request;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\Rule;
use App\Jobs\PruneOldPostsJob;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
class PostController extends Controller
{
    public function index()
    {
        $allPosts=Post::simplePaginate(10);
        return view('post.index', ['posts' => $allPosts]);
    }
    public function show($postId)
    {
        $post = post::find($postId);
        $users =  User::all();
        return view("post.show",['post' => $post],['users' => $users]);
    }

     public function create(){
        $users=User::all();
        return view('post.create',['users'=>$users]);
    }
    public function edit($id){

        $users=User::all();
        $post=Post::find($id);
        return view('post.edit',['users'=>$users],['post'=>$post]);
    }

    public function update(StorePostRequest $request,$id){
        $path = !empty($request->file('image'))?$request->file('image')->store('photos',["disk"=>"public"]):"";
        $title=request()->title;
        $description=request()->description;
        $postCreator=request()->post_creator;
        $postToBeUpdated=Post::find( $id);
        Storage::disk("public")->delete($postToBeUpdated->photo);
        $post = Post::where('id',$id)->update([
            'title'=>$title,
            'slug' => Str::slug($request->title),
            'description'=>$description,
            'user_id'=>$postCreator,
            'photo'=>$path,
        ]);
        return to_route(route:'posts.index');
        }

   public function store(StorePostRequest $request){
            $path = !empty($request->file('image'))?$request->file('image')->store('photos',["disk"=>"public"]):"";
            $title=request()->title;
            $description=request()->description;
            $postCreator=request()->post_creator;

            Post::create([
                'title'=>$title,
                'description'=>$description,
                'user_id'=>$postCreator,
                'photo'=>$path,

            ]);
            return to_route(route:'posts.index');
            
        }

        public function delete($postId)
    {
        $post=Post::find( $postId);
        Storage::disk("public")->delete($post->photo);
        Comment::where('commentable_id', $postId)->delete();
        Post::where('id', $postId)->delete();
        return to_route('posts.index');
    }
        
    }