<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\RequestedDoc;

class MailController extends Controller
{
    public function sendMail(Request $request){

        $request->validate([
            'inquiry_type' => 'required',
            'name' => 'required',
            'email' => 'required',
            'phone_number' => 'required',
            'summary' => 'accepted',
            'source' => 'accepted',
        ]);
        Contact::create($request->all());
        $admin='office@idenbrid.com';
        Mail::send('email.contact-us', ['data' => $request->all()], function($message) use($admin){
            $message->to($admin);
            $message->subject('誰かが価格の見積もりを尋ねた');
        });
    }
    public function requestDoc(Request $request){
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'company_name' => 'required',
        ]);
        $requestDoc = new RequestedDoc();
        $requestDoc->name = $request->name;
        $requestDoc->email = $request->email;
        $requestDoc->company_name = $request->company_name;
        $requestDoc->save();
        return response()->json([
            'success' => true,
        ]);

    }
}
