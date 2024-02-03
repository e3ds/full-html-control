:: Copyright 1998-2019 Epic Games, Inc. All Rights Reserved.
@echo off

pushd %~dp0
 
title startTokenServer.bat

node.exe tokenServer.js
popd
pause
