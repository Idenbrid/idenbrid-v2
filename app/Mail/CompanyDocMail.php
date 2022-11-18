<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CompanyDocMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $company;
    public function __construct($company)
    {
        $this->company = $company;
    }
    public function build()
    {
        $company = $this->company;

        return $this->from('office@idenbrid.com')
                    ->subject('Idenbrid Document')
                    ->view('email.company-document');
                    // ->attachData(storage_path('app/public/company-document.pdf'), 'stock_report.pdf');
    }
}
