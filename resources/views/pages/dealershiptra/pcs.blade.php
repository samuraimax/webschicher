@extends('layouts.frontend')

@section('css_after')
@endsection

@section('content')
    <div class="bg-image mb-3" style="background-image: url('{{ asset('media/photos/services/03_01@2x.jpg') }}');">
        <div class="bg-primary-dark-op">
            <div class="content content-full overflow-hidden">
                <div class="mt-7 mb-5 text-center">
                    <h1 style="font-family:SukhumvitSet;" class="h2 text-white mb-2 js-appear-enabled animated fadeInDown" data-toggle="appear" data-class="animated fadeInDown">@lang('frontend.Personnel_Certificate_Services.title')</h1>
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
                                    <img width="100%" height="100%" src="{{ asset('media/photos/services/03_01@2x.jpg') }}"  />
                                </div>
                            </div>
                            
                        </div>
                        <div class="row">
                            <p class="">
                                @lang('frontend.Personnel_Certificate_Services.content')
                            </p>
                            <div class="row col-12"><strong >@lang('frontend.Personnel_Certificate_Services.list.title')</strong></div>
                            <div class="row col-12">
                                <ol>
                                    <li>@lang('frontend.Personnel_Certificate_Services.list.1')</li>
                                    <li>@lang('frontend.Personnel_Certificate_Services.list.2')</li>
                                    <li>@lang('frontend.Personnel_Certificate_Services.list.3')</li>
                                    <li>@lang('frontend.Personnel_Certificate_Services.list.4')</li>
                                    <li>@lang('frontend.Personnel_Certificate_Services.list.5')</li>
                                    <li>@lang('frontend.Personnel_Certificate_Services.list.6')</li>
                                    <li>@lang('frontend.Personnel_Certificate_Services.list.7')</li>
                                </ol>
                            </div>
                            <h5 style="font-family:SukhumvitSet;" class="row h5">@lang('frontend.Personnel_Certificate_Services.title1')</h5>
                            <p class="mb-1">
                                <strong class="mr-2">@lang('frontend.Personnel_Certificate_Services.content1_first')</strong>
                                @lang('frontend.Personnel_Certificate_Services.content1')
                            </p>
                            <p>
                                <strong class="mr-2">@lang('frontend.Personnel_Certificate_Services.content2_first')</strong>
                                @lang('frontend.Personnel_Certificate_Services.content2')
                            </p>
                        </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END Page Content -->
@endsection

@section('js_after')
@endsection
