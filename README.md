# @matheo/nx-ionic

This project was generated using [Nx](https://nx.dev).

## Ionic Integration

We take advantage of Ionic 4.3.0+ [multi-app projects](https://ionicframework.com/docs/cli/configuration#multi-app-projects).

If you use yarn be sure to set it as default with `ionic config set -g npmClient yarn`

## Adding an Application

1. `ng generate @nrwl/angular:application mobile --directory=customer --prefix=cmob --tags=mobile --style=scss --routing --no-interactive`

2. Prepare the `ionic.config.json` and `angular.json` default projects.

3. Fill the gaps to enable the global `ionic` cli.

4. `ng add @ionic/angular --project customer-mobile`

5. Fix the generated `angular.json` config.

6. `ionic integrations enable capacitor`

7. Build some utility npm scripts.

8. Add platforms with `yarn customer:mobile:cap add android`

9. Run a live-reload dev-server with `yarn customer:mobile:run android`

## Known Issues

- `ng add @ionic/angular` doesn't update the correct project in the `angular.json`

- DO NOT update the Android Graddle version even if Android Studio insists. Capacitor takes care of the working version.

- Android Studio complaining about non-Gradle modules next to Android-Gradle modules:  
  Close the IDE, delete the `.idea` directory, delete the all `.iml` files, run `<app>:mobile:cap open android` again.  
  https://stackoverflow.com/a/53920901/885259

Enjoy!
