
# react-native-flic-lib

## Getting started

`$ npm install react-native-flic-lib --save`

### Mostly automatic installation

`$ react-native link react-native-flic-lib`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-flic-lib` and add `RNFlicLib.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNFlicLib.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNFlicLibPackage;` to the imports at the top of the file
  - Add `new RNFlicLibPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-flic-lib'
  	project(':react-native-flic-lib').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-flic-lib/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-flic-lib')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNFlicLib.sln` in `node_modules/react-native-flic-lib/windows/RNFlicLib.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Flic.Lib.RNFlicLib;` to the usings at the top of the file
  - Add `new RNFlicLibPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNFlicLib from 'react-native-flic-lib';

// TODO: What to do with the module?
RNFlicLib;
```
  