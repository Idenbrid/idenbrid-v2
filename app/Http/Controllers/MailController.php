<?php

namespace App\Http\Controllers;

use App\Mail\CompanyDocMail;
use App\Models\Contact;
use App\Models\ProjectQuotation;
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
            'summary' => 'required',
            'source' => 'required',
        ]);
        Contact::create($request->all());
        return response()->json([
            'success' => true,
        ]);
        // $admin='office@idenbrid.com';
        // Mail::send('email.contact-us', ['data' => $request->all()], function($message) use($admin){
        //     $message->to($admin);
        //     $message->subject('誰かが価格の見積もりを尋ねた');
        // });
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
        if($requestDoc->save()){
            Mail::to($request->email)->send(new CompanyDocMail($requestDoc));
        }
        return response()->json([
            'success' => true,
        ]);
    }
    public function submitQuotation(Request $request){
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'project_name' => 'required',
        ]);
        $project_quotation = new ProjectQuotation();
        $project_quotation->step_1 = $request->step_1;
        $project_quotation->step_2 = $request->step_2;
        $project_quotation->step_3 = $request->step_3;
        $project_quotation->step_4 = implode(',', $request->step_4);
        $project_quotation->step_5 = $request->step_5;
        $project_quotation->step_6 = $request->step_6;
        $project_quotation->name = $request->name;
        $project_quotation->project_name = $request->project_name;
        $project_quotation->email = $request->email;
        $project_quotation->phone = $request->phone;
        $project_quotation->save();
        return response()->json([
            'success' => true,
        ]);
    }
}
