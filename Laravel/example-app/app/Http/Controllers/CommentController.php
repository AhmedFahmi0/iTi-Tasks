<?php

namespace App\Http\Controllers;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $user_id= request()->post_creator;
        $body= request()->body;
        $id= request()->id;
        $post= Post::find($id);
        // dd($user_id,$body);
        $post->comments()->create([
            'user_id' => $user_id,
            'post_id' => $id,
            'body' => $body,
        ]);
        
        return back();
    }

    public function destroy($commentId)
    {
        Comment::where('id', $commentId)->delete();
        return back();
    }

    public function update($commentId)
    {
        $body= request()->body;
        $comment= Comment::find($commentId);
        $comment->update([
            'body'=>$body,
        ]);
        return redirect()->route('posts.index');
    }

    public function edit($id){
        $comment=Comment::find($id);
        return view('edit-comment',['comment'=>$comment]);
    }

}