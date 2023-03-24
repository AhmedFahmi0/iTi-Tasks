@extends('layouts.app')


@section('title') Index @endsection

@section('content')
    <div class="text-center">
        <button type="button" class="mt-4 btn btn-success"><a href="{{route('posts.create')}}" style="color:white;text-decoration:none;">Create Post</a></button>
    </div>
    <table class="table mt-4">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Posted By</th>
            <th scope="col">Slug</th>
            <th scope="col">Created At</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>

        @foreach($posts as $post)
            <tr>
                <td>{{$post->id}}</td>
                <td>{{$post->title}}</td>
                @if($post->user)
                <td>{{$post->user->name}}</td>
                @else
                <td>Not Found</td>
                @endif
                <td>{{$post->slug}}</td>
                <td>{{$post->created_at->format("Y-m-d")}}</td>
                <td>
                    <a href="{{route('posts.show', $post->id)}}" class="btn btn-info">View</a>
                    <a class="btn btn-primary" href="{{route('posts.edit',$post->id)}}">Edit</a>
                    <form style="display: inline" method="POST" action="{{ route('posts.delete',$post->id) }}">
                    @method('DELETE')
                    @csrf
                    <button onclick="return confirm('Are you sure you want to delete this post?');" class="btn btn-danger">Delete</button>
                </form>
                </td>
            </tr>
  
        @endforeach
        </tbody>
    </table>

        @if(isset($posts))
   @if($posts->currentPage() > 1)
      <a href="{{ $posts->previousPageUrl() }}" class="btn btn-info m-4">Previous</a>
   @endif
 
   @if($posts->hasMorePages())
      <a href="{{ $posts->nextPageUrl()}}" class="btn btn-info m-4">Next</a>
   @endif
@endif



     

@endsection