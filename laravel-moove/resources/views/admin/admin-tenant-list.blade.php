@extends('layouts.head')
@section('title')
<title>moove - tenant list</title>
@endsection
@section('content')
<div>
    @if(session()->has('success'))
        <div class="m-4 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
            <div class="flex">
                <div class="py-1 pr-2">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-circle" class="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                    </svg>
                </div>
                <div>
                    <p class="font-bold">Success</p>
                    <p class="text-sm">{{session()->get('success')}}</p>
                </div>
            </div>
        </div>
    @endif
    <TenantList applicants="{{json_encode($applicants->items())}}" />
</div>
@if($applicants->count() > 0)
    <div class="flex justify-center text-sm mt-3">
        Page {{ $applicants->currentPage()}} of {{ $applicants->lastPage() }}
    </div>
@endif
<div class="flex justify-center mt-2">
    {{ $applicants->links() }}
</div>
@endsection