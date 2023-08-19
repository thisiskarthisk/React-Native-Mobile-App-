
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



              |
              |
              V


            (or)


InCase Not Working Build This Methods Try This Methods

----------------------------------------------------------------------------
eas.json:


{
  "cli": {
    "version": ">= 3.17.1"
  },
  "build": {
    "development": {
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "apk"
      }
    }
  },
  "submit": {
    "production": {}
  }
}


app.json

{
  "expo": {
    "name": "odoo_mobile",
    "slug": "odoo_mobile",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.karthisk.odoo_mobile"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "caa8aadd-be02-4e84-b8dc-b1324d3dab83"
      }
    }
  }
}

----------------------------------------------------------------------------
Run And Build Command 
`eas build --profile development`
              (or)
`sudo eas build --profile development`

