<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\BlogCategory;
use App\Models\BlogLike;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    public function index(){
        $session_id = session()->get('session_id');
        $blogs = Blog::orderBy('created_at','desc')->get();
        $categories = DB::table('categories')->orderBy('created_at','desc')->limit(5)->get();
        foreach($blogs as $key => $blog){
            $bl = BlogLike::where(['user_id'=>$session_id,'blog_id'=>$blog->id])->first();
            if($bl){
                $blog['is_liked']=1;
                $blog['count'] = BlogLike::where('blog_id', '=', $bl->blog_id)->count();
            }
            else{
                $blog['is_liked']=0;
            }       
        } 
        $most_liked = Blog::orderBy('count', 'DESC')->limit(5)->get();
        return response()->json([
            'blogs' => $blogs,
            'categories' => $categories,
            'most_liked' => $most_liked,
        ]);
    }

    public function blogDetail($id){
        $blog=Blog::find($id);
        $latest_blogs=Blog::orderBy('created_at','desc')->latest()->take(5)->get();
        $prev = Blog::where('id','<',$id)->get();
        $latest = Blog::where('id','>',$id)->get();

        if(count($prev) > 0){
            $prev= true;
        }
        if(count($latest) > 0){
            $latest= true;
        }

        return response()->json([
            'blog' => $blog ,
            'latest_blogs' => $latest_blogs,
            'previous' => $prev,
            'latest' => $latest
        ]);
    }

    public function prevBlogDetail($id){
        $prev = Blog::where('id','<',$id)->latest()->first();
        return response()->json([
            'id' => $prev['id'] ,
        ]);
    }

    public function latestBlogDetail($id){
        $latest = Blog::where('id','>',$id)->first();
        return response()->json([
            'id' => $latest->id ,
        ]);
    }
    public function likeBlog($id,Request $request)
    {
        $session_id = session()->get('session_id');
        $bl = Blog::where('id','=',$id)->first();
        if(empty($session_id)){
            $session_id = Str::random(40);
            session()->put('session_id', $session_id);
        }
        $previous_blog = BlogLike::where(['user_id'=>$session_id,'blog_id'=>$id])->first();
        if($previous_blog){
            $blog = Blog::find($id);
            $blog->count = $blog->count-1;
            $blog->update();
            $previous_blog->delete();
            return response()->json([
                'success' => true,
                'is_liked'=>false,
            ]);
             
        }else{
            $blogLike = new BlogLike();
            $blogLike->user_id = $session_id;
            $blogLike->blog_id = $id;
            $blogLike->save();
            $getBlog = Blog::find($id);
            $getBlog->count = $getBlog->count+1;
            $getBlog->update();
            return response()->json([
                'success' => true,
                'is_liked'=>true,
            ]);
        }

        // $blog = Blog::find($id);
        // $cart = session()->get('cart', []);
        // if(isset($cart[$id])) {
        //     $cart[$id]['count']++;
        // } else {
        //     $cart[$id] = [
        //         "name" => $blog->title,
        //         "count" => 1,
        //     ];
        // }       
        // session()->put('cart', $cart);
    }

    // public function unlikeBlog($id)
    // {
    //     $blog = Blog::find($id);
    //     $cart = session()->get('cart', []);

    //     if(isset($cart[$id])) {
    //         echo 'fhhfj';
    //         return response()->json([
    //             'success' => true,
    //             'is_liked'=>false,
    //             'cart' => 'already added'
    //         ]);
    //     }     
    // }
    public function searchBlog($keyword){

        $session_id = session()->get('session_id');
        $blogs = Blog::Where('title', 'like', '%' . $keyword . '%')->get();
        foreach($blogs as $key => $blog){
            $bl = BlogLike::where(['user_id'=>$session_id,'blog_id'=>$blog->id])->first();
            if($bl){
                $blog['is_liked']=1;
                $blog['count'] = BlogLike::where('blog_id', '=', $bl->blog_id)->count();
            }
            else{
                $blog['is_liked']=0;
            }       
        }
        return $blogs;

    }
    public function searchBlogCategory($cate_id){
        $session_id = session()->get('session_id');
        $blogs = BlogCategory::Where('category_id', $cate_id)->with('Blog')->get();
        foreach($blogs as $key => $blog){
            $bl = BlogLike::where(['user_id'=>$session_id,'blog_id'=>$blog->blog->id])->first();
            if($bl){
                $blog->blog['is_liked']=1;
                $blog->blog['count'] = BlogLike::where('blog_id', '=', $bl->blog_id)->count();
            }
            else{
                $blog->blog['is_liked']=0;
            }       
        }
        return $blogs;
    }
}
