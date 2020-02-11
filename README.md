# AngularSocketIo

This is a proof of concept integration of a Socket.io server, with Stream capability, into an Angular application.

## Notable Structure

### `/vagrantfile` - VM container configuration
* Defines IP address of VM 
* Exposes networking ports
* Mounts local source to `/var/www`
* Links `provision.sh` to set up VM with dependencies

### `/server` - Socket Server
* NodeJS / ExpressJS
* Socket.io
* Socket.io-streams

### `/src` - Angular Application
* Angular 8
* RxJs Observable pattern
* Socket.io-client

## Getting started
* Start the VM - `$> vagrant up`
* SSH into the VM - `$> vagrant ssh`
* Start the app
  * `cd /var/www`
  * `npm start`
* See mock stream output at `http://192.168.60.60:4200/`

This will start both the Socket server, and the local Angular Webpack dev server.