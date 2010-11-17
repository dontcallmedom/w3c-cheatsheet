package org.w3c.mwi.cheatsheet2;
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
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import java.lang.reflect.Field;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.JsResult;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ImageView;

public class CheatSheet extends Activity {
	
	private static final String LOG_TAG = "W3CCheatSheet";
	private ImageView loadingView;
	private WebView appView;
	private String uri;
	private boolean starting;
	
	
    /** Called when the activity is first created. */
	@Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().requestFeature(Window.FEATURE_NO_TITLE); 
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN); 
        setContentView(R.layout.main);        
        this.starting = true;
        this.loadingView = (ImageView) findViewById(R.id.loadingView);
        appView = (WebView) findViewById(R.id.appView);
        
        /* This changes the setWebChromeClient to log alerts to LogCat!  Important for Javascript Debugging */
        
        appView.setWebChromeClient(new GapClient(this));
        appView.setWebViewClient(new WebViewClient() {
        	public void onPageFinished(WebView view, String url) {
        		if (starting && (url.compareTo(uri) == 0)) {
        			stopLoading();
        		}
        	}
        	
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
            	if (url.contains(":")) {
            		Intent intent = new Intent();
            		intent.setData(Uri.parse(url));
            		intent.setAction("android.intent.action.VIEW");
            		intent.setClassName("com.android.browser",
            		"com.android.browser.BrowserActivity");
            		startActivity(intent);
            	} else {
            		view.loadUrl(url);
            	}
        		return true;
            }
        	
        });
        appView.getSettings().setJavaScriptEnabled(true);
        appView.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);        
        
        /* Bind the appView object to the gap class methods */
        bindBrowser(appView);
        
        /* Load a URI from the strings.xml file */
        Class<R.string> c = R.string.class;
        Field f;
        
        int i = 0;
        
        try {
          f = c.getField("url");
          i = f.getInt(f);
          this.uri = this.getResources().getString(i);
        } catch (Exception e)
        {
          this.uri = "http://www.w3.org/2009/cheatsheet/";
        }
        appView.loadUrl(this.uri);
        
    }
	
	@Override
    public void onConfigurationChanged(Configuration newConfig) {
      //don't reload the current page when the orientation is changed
      super.onConfigurationChanged(newConfig);
    } 
    
    private void bindBrowser(WebView appView)
    {
    	// The PhoneGap class handles the Notification and Android Specific crap
    	PhoneGap gap = new PhoneGap(this, appView);
    	//AccelListener accel = new AccelListener(this, appView);
    	// This creates the new javascript interfaces for PhoneGap
        appView.addJavascriptInterface(gap, "Device");
    	//appView.addJavascriptInterface(accel, "Accel");    	
    }

    private void stopLoading() {
        this.appView.setVisibility(View.VISIBLE);
        this.loadingView.setVisibility(View.GONE);
        this.starting = false;
    }

    @Override
    public boolean onSearchRequested() {
	   appView.loadUrl("javascript:cheatsheet.load_anchor('search')");
	   return true;
   }
    
    /* only available starting API level 5
   @Override
   public void onBackPressed() {
	   
   } */
   
    /**
     * Provides a hook for calling "alert" from javascript. Useful for
     * debugging your javascript.
     */
    final class GapClient extends WebChromeClient {
    	
    	Context mCtx;
    	GapClient(Context ctx)
    	{
    		mCtx = ctx;
    	}


    	
    	@Override
        public boolean onJsAlert(WebView view, String url, String message, JsResult result) {
            Log.d(LOG_TAG, message);
            // This shows the dialog box.  This can be commented out for dev
            AlertDialog.Builder alertBldr = new AlertDialog.Builder(mCtx);
            alertBldr.setMessage(message);
            alertBldr.setTitle("Alert");
            alertBldr.show();
            result.confirm();
            return true;
        }
    }
    
}