package org.w3c.mwi.cheatsheet;
/* License (MIT)
 * Copyright (c) 2008 Nitobi
 * website: http://phonegap.com
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * Software), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import java.io.IOException;
import java.util.TimeZone;

import android.content.Context;
import android.content.IntentFilter;
import android.net.Uri;
import android.os.Handler;
import android.os.Vibrator;
import android.telephony.TelephonyManager;
import android.view.View;
import android.webkit.WebView;
import android.widget.ImageView;
import android.media.Ringtone;
import android.media.RingtoneManager;

public class PhoneGap{
	
	private static final String LOG_TAG = "PhoneGap";
	/*
	 * UUID, version and availability	
	 */
	public boolean droid = true;
	public static String version = "0.2";
	public static String platform = "Android";
	public static String uuid;
	private Context mCtx;
    private WebView mAppView;
    
	public PhoneGap(Context ctx, WebView appView) {
        this.mCtx = ctx;
        this.mAppView = appView;

    }
	
	
	
	public void vibrate(long pattern){
        // Start the vibration, 0 defaults to half a second.
		if (pattern == 0)
			pattern = 500;
        Vibrator vibrator = (Vibrator) mCtx.getSystemService(Context.VIBRATOR_SERVICE);
        vibrator.vibrate(pattern);
	}
	
		
	public void init()
	{
	}
		
    
}

