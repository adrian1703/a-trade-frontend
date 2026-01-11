# Journal

## Security Feature: Login With JWT

Roadmap:

- ~~Develop Login component~~ - basic impl username-pw
- ~~Auth Token abstraction~~ - basic impl
- ~~Cookie Read Write~~ -> Storage writer
- Authservice - somewhat untested but good enough
  - login
  - logout
  - get role
- enhance topbar with a logout button
- set up and test roleguards for modifying compenents
- set up oauth maybe
- set up user management in admin panel
- connect to backend

11.01

Storagewriter implemented for storage abstraction.

Contemplated if a CookieKey enum is useful but decided
against it. Pro: centralized keymanagement - no overrides Con: lot of Text **CookieKey.abc**; all components would depend and see all the keys which i dont like.
This means Components need to manage this themselves using consts which is not too bad.

A specific logout will be very usefull for testing.

Im not 100% i have grasped the correct use of layouts. So we will keep it simple app stay with top main botton. Top and bottom will dynamically configure with auth service. Main will redirect to login if not logged in. Otherwise there will be the home comp with its usual routes only differentiating between user and admin. The rest is guarded by authGuard. 


  

  
