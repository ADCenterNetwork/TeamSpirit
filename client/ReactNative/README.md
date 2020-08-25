# React Native 

/!\ From https://github.com/jgimenoa/TeamSpiritRNFE


## Set-up / First steps

### **Discover ReactNative**: 


React Native Tutorial for Beginners - Crash Course 2020 (expo): https://www.youtube.com/watch?v=qSRrxpdMpVc

React Native Crash Course 2020 (react native cli) : https://www.youtube.com/watch?v=Hf4MJH0jDb4
 
Build a React Native App [2020] : https://www.youtube.com/watch?v=0-S5a0eXPoc&feature=youtu.be

### **Develop with ReactNative**: 

We have two ways to start a project: Expo CLI or React Native ClI. For this project, Expo CLI is used.

[React Native](https://reactnative.dev/) itself gives us the UI components needed, but there are also other style libraries available.

### **Build and run**: 

How to build and run the app from code.

Prerequisite:  
- **expo-cli** must be installed ```npm install expo-cli --global ```, don’t use VPN during this process. You will need an Android phone.
- Prepare your Android phone 
    - Download Expo in your device: https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www 

Follow: 
- clone or download code, navigate to project's root folder
- install modules with ```yarn install ``` p.ex., works also with npm
- Set your environnment for local BackEnd : 
    - Get your IPv4 Address with ```ipconfig``` p.ex.
    - Go to **src/services/environment/environment.tsx** and update the variable *IPv4_Address*
- Run the App with ```expo start```
- A browser window will be opened. 
- Open Expo in your phone. Scan the QR code in the browser window and wait until it’s loaded (first times it can take some minutes) 
- Enjoy your app

### **Testing**:

Follow: 
- Using Jest for testing
- Run the tests with ```yarn test```
- The tests will be opened in the same console. 


### **Build APK**:

Prerequisite: 
- Must be logged in with an Expo account (following the build process you can create an account by default)

Follow: 
- Install ```npm install -g sharp-cli```
- Run ```npx expo-optimize``` to resize pictures
- Run ```expo start``` to load the App locally in one console
- In another console, build the App with ```build:android``` and choose APK (here you can create an Expo account)
- This process will take some minutes, you can follow it in the console or directly in Expo provided links
