@extends('layouts.app')

@section('title')View @endsection

@section('content')
<div class="card my-3">
    <h5 class="card-header">Post Info</h5>
    <div class="card-body">
        <h6 class="card-title">Title: </h6>{{ $post['title'] }}
        <h6 class="card-title">Description: </h6>
        <p class="card-text">{{ $post['description'] }}</p>
    </div>
</div>
<div class="card my-3">
        <h5 class="card-header">Posted by: </h5>
        <div class="card-body">
        <h6 class="card-title">Name: </h6>
        <p>{{ $post->user->name }}</p>
        <h6 class="card-title">Email: </h6>
        <p class="card-text">{{ $post->user->email }}</p>
        <h6 class="card-title">Created At: </h6>
        <p class="card-text">{{ $post->created_at }}</p>
    </div>
</div>
<div class="card">
    <div class="card-header">
        Comments
    </div>
    <div class="card-body">
        <form action="{{route(('comments.store'),['id'=>$post['id']])}}" method="POST">
            @csrf
            <label for="exampleFormControlTextarea1" class="form-label">By</label>
            <select name="post_creator" class="form-control mb-3">
                @foreach ($users as $user)
                <option value="{{ $user->id }}">{{ $user->name }}</option>
                @endforeach
            </select>
            <div class="form-group ">
                <textarea name="body" id="body" cols="15" rows="4" class="form-control" placeholder="Your comment here"></textarea>
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-primary mb-3 mt-3">Add Comment</button>
            </div>
        </form>
        @if(count($post->comments) > 0)
        @foreach($post->comments as $comment)
        <div class="card mb-4">
            <div class="card-header">
                {{$comment->user->name}}
            </div>
            <div class="card-body">
                <div class="mb-2">
                    <span style="font-size: 1rem; font-weight: bold">Comment&nbsp;: </span>
                    {{$comment->body}}
                </div>
                <div class="mb-2">
                    <span style="font-size: 1rem; font-weight: bold">Created At&nbsp;: </span>
                    {{ \Carbon\Carbon::parse($comment->created_at)->format('l jS \\of F Y h:i:s A') }}
                </div>
                <div class="mb-2">
                    <span style="font-size: 1rem; font-weight: bold">By&nbsp;: </span>
                    {{ $comment->user->name }}
                </div>
                <div style="display:flex;justify-content:space-around;">
                <a class="btn btn-primary m-1" href="{{route('comments.edit',$comment->id)}}">Edit</a>
                <div class="m-1">
                <form style="display: inline" method="POST" action="{{ route('comments.destroy',$comment->id) }}">
                    @method('DELETE')
                    @csrf
                    <button onclick="return confirm('Are you sure you want to delete this comment?');" class="btn btn-danger">Delete</button>
                </form>
            </div> 
            </div> 
            </div>
        </div>
        @endforeach
        @else
        <div>No comments yet</div>
        @endif
    </div>
    </div>
    @endsection

