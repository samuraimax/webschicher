<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Lang;

class FrontendController extends Controller
{
    private $header;
    function __construct()
    {
        $this->header = [
            "header" => "Schicher",
            "meta" => [
                [
                    "name" => "description",
                    "content" => "Schicher Test"
                ],
            ],
        ];
    }

    public function index()
    {
        return view('pages/index')->with('header',$this->header);
    }
    public function about()
    {
        return view('pages/about')->with('header',$this->header);
    }
    public function lang_change(Request $request)
    {

        if (! in_array($request->lang, ['en', 'th', 'de'])) {
            App::setLocale('en');
        }
        App::setLocale($request->lang);
        session()->put('locale', $request->lang);
        return redirect()->to(url()->previous());
    }

    // vehicleanalysis
    public function vehicleanalysis (){
        $this->header["header"] = $this->header["header"] ." | ". Lang::get('frontend.vehicleanalysis.title');
        return view('pages/vehicleanalysis')->with('header',$this->header);
    }
    public function pma (){
        return view('pages/vehicleanalysis/pma')->with('header',$this->header);
    }
    public function eta (){
        return view('pages/vehicleanalysis/eta')->with('header',$this->header);
    }
    public function spa (){
        return view('pages/vehicleanalysis/spa')->with('header',$this->header);
    }
    public function mea (){
        return view('pages/vehicleanalysis/mea')->with('header',$this->header);
    }
    public function rsa (){
        return view('pages/vehicleanalysis/rsa')->with('header',$this->header);
    }
    public function cva (){
        return view('pages/vehicleanalysis/cva')->with('header',$this->header);
    }
    public function pvia (){
        return view('pages/vehicleanalysis/pvia')->with('header',$this->header);
    }
    public function avia (){
        return view('pages/vehicleanalysis/avia')->with('header',$this->header);
    }
    // end vehicleanalysis

    // claimsappraisal
    public function claimsappraisal() {
        $this->header["header"] = $this->header["header"] ." | ". Lang::get('frontend.claimsappraisal.title');
        return view('pages.claimsappraisal')->with('header',$this->header);
    }
    public function ach() {
        $this->header["header"] = $this->header["header"] ." | ". Lang::get('frontend.Automotive_Claims_Handling.title');
        return view('pages.claimsappraisal.ach')->with('header',$this->header);
    }
    public function tpas() {
        $this->header["header"] = $this->header["header"] ." | ". Lang::get('frontend.Third_Party_Administration_Service.title');
        return view('pages.claimsappraisal.tpas')->with('header',$this->header);
    }
    public function aas() {
        $this->header["header"] = $this->header["header"] ." | ". Lang::get('frontend.Accident_Appraisal_Services.title');
        return view('pages.claimsappraisal.aas')->with('header',$this->header);
    }
    public function ba() {
        $this->header["header"] = $this->header["header"] ." | ". Lang::get('frontend.Bodyshop_Appraisal.title');
        return view('pages.claimsappraisal.ba')->with('header',$this->header);
    }
    public function ga() {
        return view('pages.claimsappraisal.ga');
    }

    //vehiclemanagementservices
    public function vehiclemanageserv(){
        $this->header["header"] = $this->header["header"] ." | ". Lang::get('frontend.Vehicle_Management_Services.title');
        return view('pages.vehiclemanageserv');
    }
}
