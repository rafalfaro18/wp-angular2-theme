# wp-angular2-theme
Wordpress Theme that loads a bundled Angular 2 app

### Notes
- Build the angular app without hashes
```sh
ng build --prod --output-hashing=none
```

### To Do
- Angular's assets need to be located in /assets so a proper redirect must be included in the .htaccess file
