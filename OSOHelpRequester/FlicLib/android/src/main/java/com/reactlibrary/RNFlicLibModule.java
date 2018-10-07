package com.osohelprequester;

import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.modules.core.DeviceEventManagerModule;


public class RNFlicLibModule extends ReactContextBaseJavaModule {

  private static ReactApplicationContext reactContext;
  private static IniFlicLib iniFlicLib = new IniFlicLib();

  public RNFlicLibModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;

    iniFlicLib.ini(reactContext);
    iniFlicLib.getFlicButton();
  }

  @Override
  public String getName() {
    return "RNFlicLib";
  }

  public static void activityResult(int requestCode, int resultCode, Intent data) {
    iniFlicLib.onActivityResultFlic(requestCode, resultCode, data);
  }

  public static void sendEvent(String eventName) {
    reactContext
        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
        .emit(eventName, null);
  }
}