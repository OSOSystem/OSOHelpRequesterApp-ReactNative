package com.osohelprequester;

import android.content.Context;
import android.util.Log;

import io.flic.lib.FlicBroadcastReceiver;
import io.flic.lib.FlicButton;
import io.flic.lib.FlicManager;

public class ExampleBroadcastReceiver extends FlicBroadcastReceiver {
    @Override
    protected void onRequestAppCredentials(Context context) {
        FlicManager.setAppCredentials("31eda4d5-302d-49b0-8d69-5ab86dc1325a",
                "a4d85782-0bc6-419f-a993-77e999ae9be3",
                "OSOAndroid");
    }

    @Override
    public void onButtonUpOrDown(Context context, FlicButton button, boolean wasQueued, int timeDiff, boolean isUp, boolean isDown) {
        if (isUp) {
            // Code for button up event here
            Log.d("FLIC", "button up");

        } else {
            // Code for button down event here
            Log.d("FLIC", "button down");
            // ToDo: We must return the result to the React-Native part here
            RNFlicLibModule.sendEvent("flicButtonPressed");
        }
    }
}