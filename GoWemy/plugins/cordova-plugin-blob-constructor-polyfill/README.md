# blob-constructor

A Cordova plugin which provides Blob() constructor syntax for versions of Android
which do not support it.

## Overview

This plugin adds support for a the Blob() constructor syntax, which should be
preferred in Chrome apps over the BlobBuilder interface. (See
http://updates.html5rocks.com/2012/06/Don-t-Build-Blobs-Construct-Them)

## Usage

    var blob = new Blob(['Today is a good day'], {type: 'text/x-optimistic'});

# Release Notes

## 1.0.2 (April 30, 2015)
- Renamed plugin to pubilsh to NPM

## 1.0.1 (October 21, 2014)
- Documentation updates.
