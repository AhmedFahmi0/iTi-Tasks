<form method="POST" action="{{route('comments.update',$comment->id)}}">
        @csrf
        @method("put")
<div class="form-group ">
                <textarea name="body" id="body" cols="15" rows="4" class="form-control" placeholder="Your comment here"></textarea>
            </div>
            
            <div class="form-group">
                <button type="submit" class="btn btn-primary mb-3 mt-3" href="{{route('comments.update',$comment->id)}}">Edit Comment</button>
            </div>
</form>