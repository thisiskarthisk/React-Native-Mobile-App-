
Terminal Command:

=== this Command Create Apk === 

`sudo npm install -g expo-cli`

expo init tms_mobile

cd tms_mobile/

rm yarn.lock

`npm install`

`npx expo install react-native-web@~0.18.10 @expo/webpack-config@^18.0.1`

npm start


=== this Command Build Apk ====


`npm i -g expo-cli`

`sudo npm install -g eas-cli`

package.json:

"build:android":"eas build -p android"


eas.json:
  "build": {
    "preview": {
      "android":{
       "buildType":"apk"
      }
    },
    "preview2": {
      "android":{
      "gradleCommand": ":app:assembleRelease"
      }
    },
    "preview3": {
      "developmentClient": true
    },
  }
