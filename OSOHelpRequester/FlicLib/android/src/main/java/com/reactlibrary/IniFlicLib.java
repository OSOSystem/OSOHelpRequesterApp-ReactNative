package com.osohelprequester;

import android.content.Context;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.Button;
import android.widget.EditText;
import io.flic.lib.FlicManager;
import java.net.URL;
import java.net.MalformedURLException;
import android.widget.Toast;
import io.flic.lib.FlicAppNotInstalledException;
import io.flic.lib.FlicManagerInitializedCallback;
import io.flic.lib.FlicBroadcastReceiverFlags;
import io.flic.lib.FlicButton;
import android.content.Intent;
import io.flic.lib.FlicBroadcastReceiver;


public class IniFlicLib {
    public static void iniFlicLib() {
        // appId, appSecret, appName
        FlicManager.setAppCredentials("31eda4d5-302d-49b0-8d69-5ab86dc1325a",
                "a4d85782-0bc6-419f-a993-77e999ae9be3",
                "OSOAndroid");
    }

    // flic app will appear and the user can choose his flic button
    // the flic manager will take the choosed flic button
    public static void getFlicButton() {
        try {
            FlicManager.getInstance(this, new FlicManagerInitializedCallback() {
                @Override
                public void onInitialized(FlicManager manager) {
                    manager.initiateGrabButton(MainActivity.this);
                }
            });
        } catch (FlicAppNotInstalledException err) {
            //Toast.makeText(this, "Flic App is not installed", Toast.LENGTH_SHORT).show();
        }
    }

    // To receive the button object, we must feed the result into the manager which then returns
    // the button object. With the button object, we register for notifications. In this example,
    // we’re only interested in down, up and remove events.
    public static void onActivityResultFlic(final int requestCode, final int resultCode, final Intent data) {
        FlicManager.getInstance(this, new FlicManagerInitializedCallback() {
            @Override
            public void onInitialized(FlicManager manager) {
                FlicButton button = manager.completeGrabButton(requestCode, resultCode, data);
                if (button != null) {
                    button.registerListenForBroadcast(FlicBroadcastReceiverFlags.UP_OR_DOWN | FlicBroadcastReceiverFlags.REMOVED);
                    //Toast.makeText(MainActivity.this, "Grabbed a button", Toast.LENGTH_SHORT).show();
                } else {
                    //Toast.makeText(MainActivity.this, "Did not grab any button", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}