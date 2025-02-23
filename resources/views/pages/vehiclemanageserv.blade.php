@extends('layouts.frontend')

@section('css_after')
@endsection

@section('content')
    <div class="bg-image head-title mb-3" style="background-image: url('{{ asset('media/photos/services/03.jpg') }}');">
        <div class="bg-primary-dark-op">
            <div class="content content-full overflow-hidden">
                <div class="mt-7 mb-5 text-center">
                    <h1 class="h2 text-white mb-2 js-appear-enabled animated fadeInDown" data-toggle="appear" style="font-family:SukhumvitSet;"  data-class="animated fadeInDown">@lang('frontend.Vehicle_Management_Services.title')</h1>

                </div>
            </div>
        </div>
    </div>
    <!-- Page Content -->
    <div class="content bg-white">
        <div class="content content-boxed">
            <div class="row justify-content-center">
                <div class="col-sm-12">
                    <div class="row">
                        <article class="story">
                            <div class="row gutters-tiny items-push js-gallery push img-fluid-100 js-gallery-enabled">
                                <div class="col-md-12 animated fadeIn d-flex justify-content-center" >
                                    <div class="options-container">
                                        <img width="100%" height="100%" src="{{ asset('media/photos/services/03.jpg') }}"  />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                {{-- <strong class="font-size-h4">@lang('frontend.about.title1')</strong> --}}
                                {{-- <p class="font-size-sm">
                                <span class="text-primary">Barbara Scott</span> on July 16, 2019 · <em class="text-muted">10 min</em>
                            </p> --}}
                                <p class="">
                                    @lang('frontend.Vehicle_Management_Services.content')
                                </p>
                                {{-- <div class="row"><strong >@lang('frontend.Vehicle_Management_Services.list.title')</strong></div>
                                <div class="row col-12">
                                    <ol class="list-unstyled">
                                        <li>@lang('frontend.Vehicle_Management_Services.list.1')</li>
                                        <li>@lang('frontend.Vehicle_Management_Services.list.2')</li>
                                        <li>@lang('frontend.Vehicle_Management_Services.list.3')</li>
                                        <li>@lang('frontend.Vehicle_Management_Services.list.4')</li>
                                        <li>@lang('frontend.Vehicle_Management_Services.list.5')</li>
                                        <li>@lang('frontend.Vehicle_Management_Services.list.6')</li>
                                        <li>@lang('frontend.Vehicle_Management_Services.list.7')</li>
                                    </ol>
                                </div> --}}
                                <p class="">
                                    @lang('frontend.Vehicle_Management_Services.content1')
                                </p>
                            </div>
                        </article>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 js-appear-enabled animated fadeIn" data-toggle="appear" data-offset="50"
                        data-class="animated fadeIn">
                        <a class="block block-rounded block-link-pop" href="{{ route('service.vehiclemanageserv.epouv') }}">
                            <img class="img-fluid" src="{{ asset('media/photos/services/03_01.jpg') }}" alt="">
                            <div class="block-content">
                                <h4 style="font-family:SukhumvitSet;" class="mb-1">@lang('frontend.Evaluation_Pricing_of_Used_Vehicles.title')</h4>
                                {{-- <p class="font-size-sm">
                                    <span class="text-primary">Carl Wells</span> on July 16, 2019 · <em class="text-muted">10 min</em>
                                </p> --}}
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 js-appear-enabled animated fadeIn" data-toggle="appear" data-offset="50"
                        data-class="animated fadeIn">
                        <a class="block block-rounded block-link-pop" href="{{ route('service.vehiclemanageserv.ifadfo') }}">
                            <img class="img-fluid" src="{{ asset('media/photos/services/03_02.jpg') }}" alt="">
                            <div class="block-content">
                                <h4 style="font-family:SukhumvitSet;" class="mb-1">@lang('frontend.In_fleet_and_De_fleet_Operations.title')</h4>
                                {{-- <p class="font-size-sm">
                                    <span class="text-primary">Carl Wells</span> on July 16, 2019 · <em class="text-muted">10 min</em>
                                </p> --}}
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 js-appear-enabled animated fadeIn" data-toggle="appear" data-offset="50"
                        data-class="animated fadeIn">
                        <a class="block block-rounded block-link-pop" href="{{ route('service.vehiclemanageserv.fucvcr') }}">
                            <img class="img-fluid" src="{{ asset('media/photos/services/03_03.jpg') }}" alt="">
                            <div class="block-content">
                                <h4 style="font-family:SukhumvitSet;" class="mb-1">@lang('frontend.Fleet_Used_Car_Vehicle_Condition_Report.title')</h4>
                                {{-- <p class="font-size-sm">
                                    <span class="text-primary">Carl Wells</span> on July 16, 2019 · <em class="text-muted">10 min</em>
                                </p> --}}
                            </div>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 js-appear-enabled animated fadeIn" data-toggle="appear" data-offset="50"
                        data-class="animated fadeIn">
                        <a class="block block-rounded block-link-pop" href="{{ route('service.vehiclemanageserv.feap') }}">
                            <img class="img-fluid" src="{{ asset('media/photos/services/03_04.jpg') }}" alt="">
                            <div class="block-content">
                                <h4 style="font-family:SukhumvitSet;" class="mb-1">@lang('frontend.Fleet_Evaluation_and_Pricing.title') </h4>
                                {{-- <p class="font-size-sm">
                                    <span class="text-primary">Carl Wells</span> on July 16, 2019 · <em class="text-muted">10 min</em>
                                </p> --}}
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 js-appear-enabled animated fadeIn" data-toggle="appear" data-offset="50"
                        data-class="animated fadeIn">
                        <a class="block block-rounded block-link-pop" href="{{ route('service.vehiclemanageserv.ucsff') }}">
                            <img class="img-fluid" src="{{ asset('media/photos/services/03_05.jpg') }}" alt="">
                            <div class="block-content">
                                <h4 style="font-family:SukhumvitSet;" class="mb-1">@lang('frontend.Used_Car_Seal_for_Fleet.title')</h4>
                                {{-- <p class="font-size-sm">
                                    <span class="text-primary">Carl Wells</span> on July 16, 2019 · <em class="text-muted">10 min</em>
                                </p> --}}
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 js-appear-enabled animated fadeIn" data-toggle="appear" data-offset="50"
                        data-class="animated fadeIn">
                        <a class="block block-rounded block-link-pop" href="{{ route('service.vehiclemanageserv.eotbmff') }}">
                            <img class="img-fluid" src="{{ asset('media/photos/services/03_06.jpg') }}" alt="">
                            <div class="block-content">
                                <h4 style="font-family:SukhumvitSet;" class="mb-1">@lang('frontend.End_of_Term_Buyback_management_for_Fleets.title')</h4>
                                {{-- <p class="font-size-sm">
                                    <span class="text-primary">Carl Wells</span> on July 16, 2019 · <em class="text-muted">10 min</em>
                                </p> --}}
                            </div>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 js-appear-enabled animated fadeIn" data-toggle="appear" data-offset="50"
                        data-class="animated fadeIn">
                        <a class="block block-rounded block-link-pop" href="{{ route('service.vehiclemanageserv.rmff') }}">
                            <img class="img-fluid" src="{{ asset('media/photos/services/03_07.jpg') }}" alt="">
                            <div class="block-content">
                                <h4 style="font-family:SukhumvitSet;" class="mb-1">@lang('frontend.Refurbishment_Management_for_Fleets.title') </h4>
                                {{-- <p class="font-size-sm">
                                    <span class="text-primary">Carl Wells</span> on July 16, 2019 · <em class="text-muted">10 min</em>
                                </p> --}}
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 js-appear-enabled animated fadeIn" data-toggle="appear" data-offset="50"
                        data-class="animated fadeIn">
                        <a class="block block-rounded block-link-pop" href="{{ route('service.vehiclemanageserv.rcff') }}">
                            <img class="img-fluid" src="{{ asset('media/photos/services/02_05.jpg') }}" alt="">
                            <div class="block-content">
                                <h4 style="font-family:SukhumvitSet;" class="mb-1">@lang('frontend.Remarketing_Consultancy_for_Fleets.title')</h4>
                                {{-- <p class="font-size-sm">
                                    <span class="text-primary">Carl Wells</span> on July 16, 2019 · <em class="text-muted">10 min</em>
                                </p> --}}
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 js-appear-enabled animated fadeIn" data-toggle="appear" data-offset="50"
                        data-class="animated fadeIn">
                        <a class="block block-rounded block-link-pop" href="{{ route('service.vehiclemanageserv.ssff') }}">
                            <img class="img-fluid" src="{{ asset('media/photos/services/03_09.jpg') }}" alt="">
                            <div class="block-content">
                                <h4 style="font-family:SukhumvitSet;" class="mb-1">@lang('frontend.Sales_solutions_for_Fleets.title')</h4>
                                {{-- <p class="font-size-sm">
                                    <span class="text-primary">Carl Wells</span> on July 16, 2019 · <em class="text-muted">10 min</em>
                                </p> --}}
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- END Page Content -->
@endsection

@section('js_after')
@endsection
