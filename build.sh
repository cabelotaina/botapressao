#!/bin/bash
ng build --prod && scp -r dist/bpa/* root@142.93.47.17:/var/www/html