package com.osohelprequester;

import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;


public class RNFlicLibModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNFlicLibModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNFlicLib";
  }

  public static void activityResult(int requestCode, int resultCode, Intent data) {
    activityResultFlic(requestCode, resultCode, data);
    iniFlicLib();
    getFlicButton();
  }

  public static void sendEvent(String eventName) {
    reactContext
        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
        .emit(eventName);
  }
}