@extends('layouts.head')
@section('title')
<title>moove - tenant application</title>
@endsection
@section('content')
<div>
    @error('id')
        {{$message}}
    @enderror
    @if(isset($data))
        <TenantApplication data="{{$data}}" />
    @endif
</div>
@endsection