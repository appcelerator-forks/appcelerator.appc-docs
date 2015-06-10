Ext.data.JsonP['APS_Analytics_for_iOS']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>APS Analytics for iOS</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"43298730\" class=\"content\">\n            <h1>APS Analytics for iOS</h1>\n    <p>\n    </p>\n    <div class=\"confbox admonition admonition-warning aui-message problem shadowed information-macro\">\n            <div class=\"title\">Enterprise Subscription Required!</div>\n        \n    <p>\nThis Appcelerator Platform feature requires an Enterprise Subscription.    </p>\n    </div>\n    \n    <p>\n    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/APS_Analytics_for_iOS-section-43298730_APSAnalyticsforiOS-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/APS_Analytics_for_iOS-section-43298730_APSAnalyticsforiOS-Terminology\">Terminology</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/APS_Analytics_for_iOS-section-43298730_APSAnalyticsforiOS-GettingStarted\">Getting Started</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/APS_Analytics_for_iOS-section-43298730_APSAnalyticsforiOS-AdvancedInitializationOptions\">Advanced Initialization Options</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/APS_Analytics_for_iOS-section-43298730_APSAnalyticsforiOS-SessionTimeout\">Session Timeout</a>    </p>\n</li></ul></li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/APS_Analytics_for_iOS-section-43298730_APSAnalyticsforiOS-CreatingCustomEvents\">Creating Custom Events</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/APS_Analytics_for_iOS-section-43298730_APSAnalyticsforiOS-FeatureEvents\">Feature Events</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/APS_Analytics_for_iOS-section-43298730_APSAnalyticsforiOS-NavigationEvents\">Navigation Events</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/APS_Analytics_for_iOS-section-43298730_APSAnalyticsforiOS-Transitionevents\">Transition events</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/APS_Analytics_for_iOS-section-43298730_APSAnalyticsforiOS-GeoEvents\">Geo Events</a>    </p>\n</li></ul></li></ul>    <p>\nThis page describes how to use the Appcelerator Platform Service (APS) Analytics for native iOS applications, built with Objective-C and the iOS APIs.    </p>\n    <div class=\"confbox panel panel\">\n            <div class=\"title\">Not developing a native iOS application with Objective-C?</div>\n        <p>\nSee the following topics to use the Appcelerator Analytics Service on other platforms:    </p>\n    <p>\n        <img src=\"images/download/attachments/43298732/android_icon.png\" alt=\"images/download/attachments/43298732/android_icon.png\" class=\"confluence-embedded-image\"/>\n            </p>\n    <p>\nFor native Android applications built with Java, see <a class=\"document-link \" href=\"#!/guide/APS_Analytics_for_Android\">APS Analytics for Android</a>.    </p>\n    <p>\n        <img src=\"images/download/attachments/43298732/titanium_icon.png\" alt=\"images/download/attachments/43298732/titanium_icon.png\" class=\"confluence-embedded-image\"/>\n            </p>\n    <p>\nFor Titanium Applications, see <a class=\"document-link \" href=\"#!/guide/Appcelerator_Analytics\">Appcelerator Analytics</a>.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43298730_APSAnalyticsforiOS-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>\nAppcelerator Analytics collects and presents information in real time about how your application's user acquisition, engagement and usage. By default, it provides the number of applications installs, the number of sessions, and the average application session length organized by application name, platform and geography. Your application can send custom     <span style=\"color: #484848;\">\nanalytic     </span>\n     <span style=\"color: #484848;\">\nevents, which are collected and logged by Analytics, to learn how users use your application. You can also create     </span>\n <i class=\" \">event funnels</i>     <span style=\"color: #484848;\">\n&mdash;ordered sets of custom events that correspond to a business process or application flow you want to track as a whole.    </span>\n    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro has-no-icon\">\n        \n    <p>\nThis document provides an overview of the features provided by Analytics, and how to use them using the Titanium SDK. <strong class=\" \">If you are developing a native iOS or Android application</strong>, see <a class=\"document-link \" href=\"#!/guide/APS_Analytics_for_iOS\">APS Analytics for iOS</a> or <a class=\"document-link \" href=\"#!/guide/APS_Analytics_for_Android\">APS Analytics for Android</a> for details on using Analytics in your native application.    </p>\n    </div>\n    \n    <p>\n<strong class=\" \">See also:</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>\nFor platform-specific details about how analytics captured, see <a class=\"document-link \" href=\"#!/guide/Analytics_Architecture\">Analytics Architecture</a>.    </p>\n</li><li class=\" \">    <p>\nFor information about viewing analytics data, see <a class=\"document-link \" href=\"#!/guide/Managing_Client_Applications-section-43298774_ManagingClientApplications-AnalyticsTab\">A</a><a class=\"document-link \" href=\"#!/guide/Managing_Client_Applications-section-43298774_ManagingClientApplications-AnalyticsTab\">pplication Details Screen: Analytics Tab</a>.    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"43298730_APSAnalyticsforiOS-Terminology\">\n        <h2 class=\"heading \"><span>Terminology</span></h2>\n    <p>\n<strong class=\" \">Analytics</strong> refers to data about how your application has been used, as well as information about how users interact with your application. Analytics data is transmitted in the form of <i class=\" \">events</i>.    </p>\n    <p>\n<strong class=\" \">Events</strong>  are operational milestones in the application. Some events are generated automatically, such as those that mark an installation, or the beginning and end of a session. Others may be  <strong class=\" \">custom events</strong>, which have a meaning specific to an application, such as tapping a specific button, or opening a certain window.    </p>\n    <p>\nThere are two types custom events:  <strong class=\" \">feature events</strong> and  <strong class=\" \">navigation events</strong> .  A  feature event  represents an action a user could take in an application, such as 'liking an item' or launching a video'.  A  <strong class=\" \">navigation event</strong>  is used to track a users's navigation from one area of the UI to another. Applications use the Titanium or APSAnalytics API to create custom events.    </p>\n    <p>\n<strong class=\" \">Event funnels</strong> let you define custom, ordered event sequences that let you track a specific user process, such as finding a product and making a purchase.    </p>\n    <p>\nThe <strong class=\" \">Analytics dashboard</strong> organizes, analyzes, and presents analytics data captured for your applications. You also use the Analytics dashboard to create and view event funnels.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\nNavigation events are not currently available through the Analytics UI, only through raw data export.    </p>\n    </div>\n    \n    </div>\n    <div class=\"section section-2 \" id=\"43298730_APSAnalyticsforiOS-GettingStarted\">\n        <h2 class=\"heading \"><span>Getting Started</span></h2>\n    <p>\nTo integrate the Performance service with a new or existing iOS application:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nGo to the <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Appcelerator Dashboard</a> and create a new native iOS application.    </p>\n</li><li class=\" \">    <p>\nDownload the Services SDK and get your Analytics application key.    </p>\n</li><li class=\" \">    <p>\nUnpack the <tt class=\" \">appcelerator-sdk-ios-&lt;VERSION&gt;.zip</tt> file.    </p>\n</li><li class=\" \">    <p>\nDrag the <tt class=\" \">Appcelerator.framework</tt> folder into your Xcode project's root folder if you are using Xcode 6 and above, or the  <tt class=\" \">Frameworks</tt>  folder if you are using Xcode 5 or below.    </p>\n</li><li class=\" \">    <p>\nSelect <strong class=\" \">Copy items into destination&hellip;</strong> and click <strong class=\" \">Finish</strong>.    </p>\n</li><li class=\" \">    <p>\nSelect your project in the Project Navigator and click the <strong class=\" \">Build Phases</strong> tab.    </p>\n</li><li class=\" \">    <p>\nExpand the <strong class=\" \">Link Binary With Libraries</strong> section and add the  <tt class=\" \">libsqlite3.dylib</tt> and <tt class=\" \">libz.dylib</tt> frameworks.    </p>\n</li><li class=\" \">    <p>\nClick the <strong class=\" \">Build Settings</strong> tab, then click the <strong class=\" \">All</strong> button in the top-left corner of the tab.    </p>\n</li><li class=\" \">    <p>\nExpand the <strong class=\" \">Linking</strong> section and add <tt class=\" \">-ObjC</tt>  to <strong class=\" \">Other Linker Flags</strong>  .    </p>\n</li><li class=\" \">    <p>\nIn your application delegate implementation file, import <tt class=\" \">Appcelerator/Appcelerator.h .  </tt>    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">AppDelegate.m</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">#</code><code class=\"keyword\">import</code><code class=\"plain\"> &lt;Appcelerator/Appcelerator.h&gt;</code></div>\n</div>\n</div></li><li class=\" \">    <p>\nIn the application delegate's <tt class=\" \">application:didFinishLaunchingWithOptions</tt> method, enable the service by calling the APSServiceManager's <tt class=\" \">enableWithAppKey:</tt> method.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">AppDelegate.m</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    [[APSServiceManager sharedInstance] enableWithAppKey:@</code><code class=\"string\">\"APS_APP_KEY\"</code><code class=\"plain\">];</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> YES;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    <div class=\"confbox admonition admonition-tip aui-message success shadowed information-macro\">\n        \n    <p class=\"diff-block-target diff-block-context\">\nTo get your APS App key:    </p>\n<ol class=\" \"><li class=\"diff-block-target diff-block-context \">    <p>\nGo to the <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Appcelerator Dashboard</a>.    </p>\n</li><li class=\"diff-block-target diff-block-context \">    <p>\nSelect your application from the <strong class=\" \">Apps</strong> drop-down menu.    </p>\n</li><li class=\"diff-block-target diff-block-context \">    <p>\nClick the <strong class=\" \">Overview</strong> tab.    </p>\n</li><li class=\"diff-block-target diff-block-context \">    <p>\nClick the <strong class=\" \">Services</strong> button.    </p>\n</li><li class=\"diff-block-target diff-block-context \">    <p>\nClick <strong class=\" \">Show Key</strong> under the Analytics, Performance and Cloud section.    </p>\n</li></ol>    </div>\n    \n</li></ol>    <p>\nThe iOS application can now send user session events and make additional method calls using the  <a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/aps-sdk-apidoc/latest/ios/Classes/APSAnalytics.html\" target=\"_blank\"> <tt class=\" \">APSAnalytics</tt>  class </a> .    </p>\n    <div class=\"section section-3 \" id=\"43298730_APSAnalyticsforiOS-AdvancedInitializationOptions\">\n        <h3 class=\"heading \"><span>Advanced Initialization Options</span></h3>\n    <div class=\"section section-4 \" id=\"43298730_APSAnalyticsforiOS-SessionTimeout\">\n        <h4 class=\"heading \"><span>Session Timeout</span></h4>\n    <p>\nBy default, after the application has been backgrounded for 30 seconds, the Analytics service ends the current user session and starts a new one when the application enter the foreground again.  To adjust the timeout, use the <tt class=\" \">sessionTimeout</tt> property.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Sets the timeout to 15 seconds instead of 30 seconds.</code></div>\n<div class=\"line\"><code class=\"plain\">[APSAnalytics sharedInstance].sessionTimeout = </code><code class=\"value\">15</code><code class=\"plain\">;</code></div>\n</div>\n</div>    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43298730_APSAnalyticsforiOS-CreatingCustomEvents\">\n        <h2 class=\"heading \"><span>Creating Custom Events</span></h2>\n    <p>\nYou use the the  <a class=\"external-link external-link\" href=\"#!/api/Titanium.Analytics\">A</a> <a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/aps-sdk-apidoc/latest/ios/Classes/APSAnalytics.html\" target=\"_blank\">PSAnalytics API </a>  to log and report custom events. There are two main types of events you can capture:  <a class=\"document-link \" href=\"#!/guide/APS_Analytics_for_iOS-section-43298730_APSAnalyticsforiOS-FeatureEvents\">Feature Events</a> and  <a class=\"document-link \" href=\"#!/guide/APS_Analytics_for_iOS-section-43298730_APSAnalyticsforiOS-NavigationEvents\">Navigation Events</a> . Feature events are for capturing a user action, such as selecting a specific menu option, or launching a video. Navigation events track a user's movement through an application, such as going from the application's home screen, and then to a search screen.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\nCurrently, the optional <tt class=\" \">data</tt> parameter of the Titanium.Analytics methods, which is used to log a dictionary object, cannot be accessed through the Dashboard.    </p>\n    </div>\n    \n    <div class=\"section section-3 \" id=\"43298730_APSAnalyticsforiOS-FeatureEvents\">\n        <h3 class=\"heading \"><span>Feature Events</span></h3>\n    <p>\nYou use the <tt class=\" \">sendAppFeatureEvent:payload</tt> method to generate a feature event that captures a specific application or user activity. A feature event should represent an action, such as launching a video, or 'new item', 'launch video', and so forth. The name you assign to a feature event should incorporate the application state into the event name, rather than long descriptive names. The following naming convention is suggested, where <i class=\" \">group.event</i> refers to the parent event:    </p>\n    <p>\n<tt class=\" \">group.event.sub-event</tt>    </p>\n    <p>\nFeature event names should be as generic as possible. For instance, if you want to track when users select a certain menu option, use a name like <strong class=\" \">     <span style=\"color: #000000;\">\n&quot;user.menu.selection&quot;,    </span>\n </strong>     <span style=\"color: #000000;\">\n not <strong class=\" \">&quot;joeuser.menu.selection&quot;</strong>. The first option is better because it groups all the same types of event into a single metric that's easy to view on Dashboard. The person analyzing the data only has to look at a single number to get an overview of how many users have selected that menu option. The second might be fine for very small user bases, but if you have more than 100 users it means that the person analyzing the data would have to look through 100 different event names to be able to generate any useful data.    </span>\n     <span style=\"color: #000000;\">\n     </span>\n    </p>\n    <p>\nFor example, to track a user's menu selection you might use the following code, where the 10 digit number uniquely identifies the selection in your code:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">Good Practice: Track the State with the Naming Syntax</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">[[APSAnalytics sharedInstance] sendAppFeatureEvent:@</code><code class=\"string\">\"select.item.12345678910\"</code><code class=\"plain\"> payload:nil];</code></div>\n</div>\n</div>    <p>\nYou should avoid using long, descriptive event names, as shown below:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">Bad Practice: Avoid Long Descriptions</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\"> [[APSAnalytics sharedInstance] sendAppFeatureEvent:@</code><code class=\"string\">\"Select Item THIS IS THE DESCRIPTION OF THE EVENT -12345678910\"</code><code class=\"plain\"> payload:nil];</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"43298730_APSAnalyticsforiOS-NavigationEvents\">\n        <h3 class=\"heading \"><span>Navigation Events</span></h3>\n    <p>\nUse the <tt class=\" \">sendAppNavEventFrom:to:withName:payload</tt> method to track a user's navigation within your application from one screen to another. The method's first and second parameters are strings that specify the &quot;from&quot; and &quot;to&quot; locations, respectively. It's third parameter is the name you want to assign to the event.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\nCurrently, navigation events do not appear in Dashboard. As a workaround, consider using <a class=\"document-link \" href=\"#!/guide/APS_Analytics_for_iOS-section-43298730_APSAnalyticsforiOS-Transitionevents\">transition events</a>.    </p>\n    </div>\n    \n    <p>\nIn the following example, an event is generated when the user navigates from the application's home screen to an edit message screen:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">Best Practice: Track User Navigations Using a navEvent</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">[[APSAnalytics sharedInstance] sendAppNavEventFrom:@</code><code class=\"string\">\"Home\"</code><code class=\"plain\"> to:@</code><code class=\"string\">\"Edit Message\"</code><code class=\"plain\"> withName:@</code><code class=\"string\">\"nav.editmessage\"</code><code class=\"plain\"> payload:nil];</code></div>\n</div>\n</div>    <p>\nAvoid passing a single long, descriptive string to <tt class=\" \">navEvent()</tt>, for example:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">Bad Practice: Do Not Track User Navigations Using featureEvent</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">[[APSAnalytics sharedInstance] sendAppFeatureEvent:@</code><code class=\"string\">\"Home -&gt; Edit Message\"</code><code class=\"plain\"> payload:nil];</code></div>\n</div>\n</div>    <div class=\"section section-4 \" id=\"43298730_APSAnalyticsforiOS-Transitionevents\">\n        <h4 class=\"heading \"><span>Transition events</span></h4>\n    <p>\nCurrently, <a class=\"document-link \" href=\"#!/guide/APS_Analytics_for_iOS-section-43298730_APSAnalyticsforiOS-NavigationEvents\">navigation events</a> are not collected and presented in the Appcelerator Dashboard. As a workaround to this temporary issue, you can create &quot;transition&quot; events that serve the same purpose. A transition event is a <a class=\"document-link \" href=\"#!/guide/APS_Analytics_for_iOS-section-43298730_APSAnalyticsforiOS-FeatureEvents\">feature event</a> whose name uniquely identifies the user's navigation (&quot;screen1-to-screen2&quot;, for example). You can create an  <a class=\"document-link \" href=\"#!/guide/Appcelerator_Analytics-section-43298693_AppceleratorAnalytics-CreatingandViewingEventFunnels\">event funnel</a> in Dashboard from these events to analyze navigation within your application.    </p>\n    <p>\nFor example, suppose you wanted to track user navigation between pages of a multi-step sign-up process. As the user moves from one step to the next, the application generates a feature event whose name follows the pattern &quot;step<i class=\" \">N</i>-to-step<i class=\" \">N+1</i>&quot;, where <i class=\" \">N</i> is the step number.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Transition 1:</code></div>\n<div class=\"line\"><code class=\"plain\">- (</code><code class=\"keyword\">void</code><code class=\"plain\">)gotoStepTwo {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Generate transition event</code></div>\n<div class=\"line\"><code class=\"plain\">    [[APSAnalytics sharedInstance] sendAppFeatureEvent:@</code><code class=\"string\">\"step1-to-step2\"</code><code class=\"plain\"> payload:nil];</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"comments\">// Transition 2:</code></div>\n<div class=\"line\"><code class=\"plain\">- (</code><code class=\"keyword\">void</code><code class=\"plain\">)gotoStepThree {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Generate transition event</code></div>\n<div class=\"line\"><code class=\"plain\">    [[APSAnalytics sharedInstance] sendAppFeatureEvent:@</code><code class=\"string\">\"step2-to-step3\"</code><code class=\"plain\"> payload:nil];</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"comments\">// Transition 3:</code></div>\n<div class=\"line\"><code class=\"plain\">- (</code><code class=\"keyword\">void</code><code class=\"plain\">)gotoStepFour {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Generate transition event</code></div>\n<div class=\"line\"><code class=\"plain\">    [[APSAnalytics sharedInstance] sendAppFeatureEvent:@</code><code class=\"string\">\"step3-to-step4\"</code><code class=\"plain\"> payload:nil];</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    <p class=\"p1\">\nWhen you create the funnel, you order the events in their logical order to mirror the process.    </p>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"43298730_APSAnalyticsforiOS-GeoEvents\">\n        <h3 class=\"heading \"><span>Geo Events</span></h3>\n    <p>\nUse the <tt class=\" \">sendAppGeoEvent</tt> to send real-time geographic data to the Analytics service.  Pass the method a <tt class=\" \">CLLocation</tt> object containing the location data.  For example, you can use <a class=\"external-link external-link\" href=\"https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManagerDelegate_Protocol/CLLocationManagerDelegate/CLLocationManagerDelegate.html#//apple_ref/occ/intfm/CLLocationManagerDelegate/locationManager:didUpdateLocations:\" target=\"_blank\"> <tt class=\" \">locationManager:</tt>  <tt class=\" \">didUpdateLocations</tt>  </a>  delegate method to send geo-events when the device receives new location data.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">GeoController.m</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Delegate method from the CLLocationManagerDelegate protocol</code></div>\n<div class=\"line\"><code class=\"plain\">- (</code><code class=\"keyword\">void</code><code class=\"plain\">)locationManager:(CLLocationManager *)manager</code></div>\n<div class=\"line\"><code class=\"plain\">     didUpdateLocations:(NSArray *)locations</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    CLLocation *newLocation = [locations lastObject];</code></div>\n<div class=\"line\"><code class=\"plain\">    [[APSAnalytics sharedInstance] sendAppGeoEvent:newLocation];</code></div>\n<div class=\"line\"><code class=\"plain\">    NSLog(@</code><code class=\"string\">\"%f, %f\"</code><code class=\"plain\">, newLocation.coordinate.latitude, newLocation.coordinate.longitude);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"color1\">@end</code></div>\n</div>\n</div>    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43298730\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"APS Analytics for iOS"});