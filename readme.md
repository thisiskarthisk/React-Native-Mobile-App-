
Terminal Command:

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
