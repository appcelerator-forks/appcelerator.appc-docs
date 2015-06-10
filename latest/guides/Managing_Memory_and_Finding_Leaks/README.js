Ext.data.JsonP['Managing_Memory_and_Finding_Leaks']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Managing Memory and Finding Leaks</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"29004941\" class=\"content\">\n            <h1>Managing Memory and Finding Leaks</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Managing_Memory_and_Finding_Leaks-section-29004941_ManagingMemoryandFindingLeaks-JavaScriptgarbagecollection\">JavaScript garbage collection</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Managing_Memory_and_Finding_Leaks-section-29004941_ManagingMemoryandFindingLeaks-WhenTitaniumreleasesmemory\">When Titanium releases memory</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Managing_Memory_and_Finding_Leaks-section-29004941_ManagingMemoryandFindingLeaks-Memoryleaks\">Memory leaks</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Managing_Memory_and_Finding_Leaks-section-29004941_ManagingMemoryandFindingLeaks-Examplesourcesofmemoryleaks\">Example sources of memory leaks</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Managing_Memory_and_Finding_Leaks-section-29004941_ManagingMemoryandFindingLeaks-MonitoringallocationsoniOS\">Monitoring allocations on iOS</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Managing_Memory_and_Finding_Leaks-section-29004941_ManagingMemoryandFindingLeaks-MonitoringallocationsonAndroid\">Monitoring allocations on Android</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Managing_Memory_and_Finding_Leaks-section-29004941_ManagingMemoryandFindingLeaks-Hands-onPractice\">Hands-on Practice</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Managing_Memory_and_Finding_Leaks-section-29004941_ManagingMemoryandFindingLeaks-References\">References</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"29004941_ManagingMemoryandFindingLeaks-Objective\">\n        <h2 class=\"heading \"><span>Objective</span></h2>\n    <p>\nIn this section, you will learn how to monitor for and solve memory leaks in your apps. The processes for monitoring memory usage varies by platform. You'll learn separately how to perform this feat on iOS and Android.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"29004941_ManagingMemoryandFindingLeaks-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>\n    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\nLet's start with a clarification: we're talking memory, <i class=\" \">not</i> storage in this section. Memory, sometimes called RAM, is the volatile location in which your app and its data are retained while they're being processed by the CPU. Storage is the long-term location where app data is retained while you're not using the app or device. In a desktop computer, the distinction is a bit easier: memory is done with chips; storage is done with the hard drive, floppy disk, or CD-ROM.    </p>\n    <p>\nIn a mobile device, both memory and storage are implemented as chips. Storage uses Flash memory chips, slow, but such chips don't lose their contents when power is removed. Memory uses RAM-style chips (DRAM, etc.), which are fast but volatile (contents lost when power removed).    </p>\n    </div>\n    \n    <p>\nCPUs in smartphones and tablets are amazingly advanced. The JavaScript Core and V8 interpreters that Titanium uses are quite fast and well-optimized for mobile apps. Computation speed is rarely an issue with apps. Memory is typically the largest bottleneck, a factor you'll need to actively manage as your apps grow in complexity.    </p>\n    <p>\nIn this section, we'll see what factors go into determining how much memory your app uses. We'll see how Titanium frees memory, which will require a peek under the covers to see how JavaScript manages memory. And we'll look at issues that can cause memory leaks--memory allocations that grow over time to the point where your app could crash.    </p>\n    <p>\nMemory limits vary by operating system and device and are not clearly documented by the vendors. Based on our sleuthing, here are the limits you must be concerned with:    </p>\n    <div class=\"confbox admonition admonition-warning aui-message problem shadowed information-macro\">\n            <div class=\"title\">iOS notes</div>\n        \n    <p>\nThe numbers for iOS are rough estimates. Apple does not publish information about their app termination threshold, managed by processes called &quot;watchdog&quot; (responsible for monitoring) and &quot;jetsam&quot; (responsible for warnings/purging). App termination is controlled entirely at the discretion of these processes and their behavior may change at any time.    </p>\n    <p>\nThe upside of this is that if you see a crash or device log referencing jetsam, this certainly indicates a memory issue.    </p>\n    </div>\n    \n<ul class=\" \"><li class=\" \">    <p>\niPhone - limited to 10% of system memory, or about 12MB on an iPhone 3G    </p>\n</li><li class=\" \">    <p>\niPad - limited to between 30-50 MB; smaller is always better    </p>\n</li><li class=\" \">    <p>\nAndroid, prior to version 4 (ICS) - 16 MB    </p>\n</li><li class=\" \">    <p>\nAndroid 4 (Ice Cream Sandwich/ICS) - 24 MB    </p>\n</li><li class=\" \">    <p>\nAndroid, pre-Froyo (1.x - 2.1): 16MB    </p>\n</li><li class=\" \">    <p>\nAndroid Froyo (2.2), Gingerbread (2.3): 24MB    </p>\n</li><li class=\" \">    <p>\nAndroid Honeycomb (3.x), ICS (4.0): 32MB heap, optional &quot;large heap&quot; of 128MB (<a class=\"document-link \" href=\"#!/guide/tiapp.xml_and_timodule.xml_Reference-section-29004921_tiapp.xmlandtimodule.xmlReference-Androidspecificapplicationproperties\">see here</a> for how to enable this)    </p>\n</li></ul>    <p>\nCompared to the memory space available to the desktop, these are severely restricted amounts. Furthermore, both iOS and Android can force-reclaim memory or force-quit an app when the system needs more free memory. You'll want to limit your memory use and free allocations when you can. Let's see how JavaScript frees memory and then how you can release memory in your Titanium app.    </p>\n    <div class=\"section section-3 \" id=\"29004941_ManagingMemoryandFindingLeaks-JavaScriptgarbagecollection\">\n        <h3 class=\"heading \"><span>JavaScript garbage collection</span></h3>\n    <p>\nIn some languages, the programmer must explicitly allocate and de-allocate memory within their programs. This manual process can take quite a bit of work and is often the source of bugs. JavaScript instead uses an automatic technique called <i class=\" \">garbage collection</i>. With garbage collection, the JavaScript interpreter determines when objects are no longer needed, then destroys them to free the memory they were using.    </p>\n    <p>\nMost modern JavaScript interpreters use a &quot;mark and sweep&quot; method for determining when to garbage collect objects. Periodically, execution stops while the interpreter scans memory building a list of every object in memory. It marks those to which there is a reference (an active variable name, being a property of on object that's in use, and so forth) and those to which there are no active references. When it's done with this sweep, the interpreter sends a &quot;destroy&quot; message to all of the objects that have no active references. Those object tear themselves down and release their memory.    </p>\n    <p>\nIn this way, JavaScript automatically clears out objects that are not being used. Problems arise when you leave references to objects that you no longer need. You can remove references by setting variables and objects to <tt class=\" \">null</tt> when you no longer need them. This includes both variables and objects you create to represent your app's business logic, but also objects that represent Titanium components such as Views or Images.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"29004941_ManagingMemoryandFindingLeaks-WhenTitaniumreleasesmemory\">\n        <h3 class=\"heading \"><span>When Titanium releases memory</span></h3>\n    <p>\nTitanium is a bridge between JavaScript and the native operating system. When you define a Titanium object, such as a Button or View, Titanium creates a matching proxy in the native operating system. Titanium will destroy that native proxy object, freeing the memory it used, when the corresponding JavaScript object is destroyed.    </p>\n<ul class=\" \"><li class=\" \">    <p>\nCalling <i class=\" \">parent</i>.<tt class=\" \">remove()</tt> then setting the JavaScript object to <tt class=\" \">null</tt> destroys both the proxy and JavaScript object. You won't be able to <tt class=\" \">add()</tt> it to the view hierarchy later without redefining it.    </p>\n</li></ul>    <p>\nTo be clear, calling <i class=\" \">parent</i>.<tt class=\" \">remove()</tt> on its own does <i class=\" \">not</i> destroy either the JavaScript or proxy object. You must <tt class=\" \">null</tt> the JavaScript object to destroy its related proxy.    </p>\n    <p>\nDestroying a parent object (setting it to <tt class=\" \">null</tt>) will destroy any child objects as long as no other references to those child objects exist. Consider the following code snippet to get a feel for the specifics:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var button = Ti.UI.createButton({</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// parameters go here...</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">var view = Ti.UI.createView({</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// some parameters here...</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">view.add(button);</code></div>\n<div class=\"line\"><code class=\"comments\">// ... later</code></div>\n<div class=\"line\"><code class=\"plain\">win.remove(view);  </code><code class=\"comments\">// view &amp; button still exist</code></div>\n<div class=\"line\"><code class=\"plain\">view = </code><code class=\"keyword\">null</code><code class=\"plain\">; </code><code class=\"comments\">// deletes the view and its proxy, but not the button!</code></div>\n<div class=\"line\"><code class=\"comments\">// compare that to:</code></div>\n<div class=\"line\"><code class=\"plain\">var view = Ti.UI.createView({</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// some parameters here...</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">view.add(Ti.UI.createButton({</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// parameters go here...</code></div>\n<div class=\"line\"><code class=\"plain\">}));</code></div>\n<div class=\"line\"><code class=\"comments\">// ... later</code></div>\n<div class=\"line\"><code class=\"plain\">win.remove(view);</code></div>\n<div class=\"line\"><code class=\"plain\">view = </code><code class=\"keyword\">null</code><code class=\"plain\">; </code><code class=\"comments\">// deletes the view, button, and their proxies</code></div>\n</div>\n</div>    <p>\nMake sure that you actively manage the Titanium objects you create, such as Windows, Views, and Buttons. Remove them from the view hierarchy and destroy them when you no longer need them. You might do this when a user closes a &quot;dialog box&quot; (view) or changes tabs in your app.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"29004941_ManagingMemoryandFindingLeaks-Memoryleaks\">\n        <h3 class=\"heading \"><span>Memory leaks</span></h3>\n    <p>\nMemory leaks occur when your app allocates memory but doesn't release it. Leaks occur when unintended or overlooked references to objects remain in scope. When this happens, JavaScript can't garbage collect the objects and Titanium can't destroy the native proxies. Because the causes of leaks vary so widely, at best we'll be able to give you some strategies to attempt in order to solve the problems. There are no &quot;cookie cutter&quot; solutions for stopping memory leaks.    </p>\n    <div class=\"section section-4 \" id=\"29004941_ManagingMemoryandFindingLeaks-Examplesourcesofmemoryleaks\">\n        <h4 class=\"heading \"><span>Example sources of memory leaks</span></h4>\n<ul class=\" \"><li class=\" \">    <p>\nHiding a View removes it from the display, but retains the object in memory. To conserve memory, call <i class=\" \">parent</i>.<tt class=\" \">remove()</tt> and/or set the object equal to <tt class=\" \">null</tt> when you no longer need it, as described above.    </p>\n</li><li class=\" \">    <p>\nDeclaration of an object within a <a class=\"external-link external-link\" href=\"http://jibbering.com/faq/notes/closures/\" target=\"_blank\">closure</a> can preserve references to an object that might no longer be needed. Moving object declarations out of the closure (pass a reference in as a method argument) is one way to resolve this problem.    </p>\n</li><li class=\" \">    <p>\nDeclaring objects within a &quot;global&quot; event listener means those objects will remain in scope as long as the event listener exists. Global event listeners include those set on Ti.App, Ti.Geolocation, Ti.Gesture, and so forth.    </p>\n</li></ul><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">Creating and fixing a memory leak in a global event listener</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">function doSomething(_event) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tvar foo = bar;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"comments\">// adding this event listener causes a memory leak</code></div>\n<div class=\"line\"><code class=\"comments\">// as references remain valid as long as the app is running</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.App.addEventListener(</code><code class=\"string\">'bad:idea'</code><code class=\"plain\">, doSomething);</code></div>\n<div class=\"line\"><code class=\"comments\">// you can plug this leak by removing the event listener, for example when the window is closed</code></div>\n<div class=\"line\"><code class=\"plain\">thisWindow.addEventListener(</code><code class=\"string\">'close'</code><code class=\"plain\">, function() {</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// to remove an event listener, you must use the exact same function signature</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// as when the listener was added</code></div>\n<div class=\"line\"><code class=\"plain\">\tTi.App.removeEventListener(</code><code class=\"string\">'bad:idea'</code><code class=\"plain\">, doSomething);</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div>    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"29004941_ManagingMemoryandFindingLeaks-MonitoringallocationsoniOS\">\n        <h3 class=\"heading \"><span>Monitoring allocations on iOS</span></h3>\n    <p>\nApple's Instruments application is a handy tool for monitoring and discovering memory leaks. Here's how you can use it for this purpose:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nOpen your app in the iOS simulator.    </p>\n</li><li class=\" \">    <p>\nOpen Instruments:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nFor Xcode 4.4 and later, start Xcode and from the menu, select <strong class=\" \">Xcode</strong> -&gt; <strong class=\" \">Open Developer Tools</strong> -&gt; <strong class=\" \">Instruments</strong>.    </p>\n</li><li class=\" \">    <p>\nFor Xcode 4.3 and earlier, open /Developer/Applications/Instruments.    </p>\n</li></ul></li><li class=\" \">    <p>\nIn the Choose a Template window, click <strong class=\" \">Allocations</strong> and click <strong class=\" \">Choose</strong>.    </p>\n</li><li class=\" \">    <p>\nAttach your application to Instruments.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nFor Xcode 6.x and later, click <strong class=\" \">Choose Target</strong>, click <strong class=\" \">More...</strong> under <strong class=\" \">System</strong>, then scroll down and click your app's name. Note: This has to be a device target, not simulator.    </p>\n</li><li class=\" \">    <p>\nFor Xcode 5.x and earlier, click <strong class=\" \">Choose Target</strong>, <strong class=\" \">Attach to Process</strong>, then scroll down under <strong class=\" \">System</strong> and click your app's name.    </p>\n</li></ol></li><li class=\" \">    <p>\nClick <strong class=\" \">Record</strong>. Wait a moment till data begins recording.    </p>\n</li><li class=\" \">    <p>\nIn the Instrument Detail filter box, enter a filter string, such as TiUI to show only relevant allocation information.    </p>\n</li><li class=\" \">    <p>\nClick and use your app while watching these values in Instruments:    </p>\n</li></ol>    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Column </strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Shows</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Notes</strong>    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Persistent Bytes<br/>(or Live Bytes)</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nMemory currently being used by active instances of the object in memory    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nYou may have a leak if this number continues to grow as you use your app.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">#Persistent<br/>(or #Living)</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nNumber of active instances of the object in memory    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nYou may have a leak if this number continues to grow as you use your app.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">#Transient<br/>(or #Transitory)</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nNumber of ready-to-be-garbage-collected instances of the object    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTransitory objects might or might not be in memory. It doesn't matter if this value grows over time. JavaScriptCore will garbage collect periodically; any transitory objects will be destroyed when it does so.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Total Bytes<br/>(or Overall Bytes)</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nBytes used by Living and Transitory objects    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nThis number will grow until garbage collection runs.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">#Total<br/>(or #Overall)</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nSum of Living and Transitory    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nThis number will grow over time.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Transient / Total Bytes<br/>[or # Allocations (Net / Overall)]</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nA histogram of the current and total accounts.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>\nIf you make a change to your app, the most reliable way to gather new statistics in Instruments is to close it and start over.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <div class=\"title\">Tracking memory more accurately</div>\n        \n    <p>\nOn iOS, the runtime and other systems may frequently allocate (or deallocate) objects which can't be managed directly through your javascript code. In general, when checking your app for memory leaks, you should be filtering for objects with the &quot;Ti&quot; prefix.    </p>\n    <p>\nAlso note that by attaching the profiler after the app has started, you do not get any information on already-created objects until they are touched by the memory management system. To get more accurate information, you may need to open the xcode project generated in your project's <tt class=\" \">build/iphone</tt> folder, and choose <strong class=\" \">Product -&gt; Profile</strong>, then configure the resulting Instruments launch as described here.    </p>\n    </div>\n    \n    <p>\n        <img src=\"images/download/attachments/29004941/instruments.png\" alt=\"images/download/attachments/29004941/instruments.png\" class=\"confluence-embedded-image\" width=\"600\"/>\n            </p>\n    </div>\n    <div class=\"section section-3 \" id=\"29004941_ManagingMemoryandFindingLeaks-MonitoringallocationsonAndroid\">\n        <h3 class=\"heading \"><span>Monitoring allocations on Android</span></h3>\n    <p>\nAndroid's DDMS tool can show you memory leaks &ndash; both memory allocations that are not freed and objects that aren't garbage collected. Following the procedure shown here, you can watch as memory use and object allocations grow. You'll need to pair that information, with knowledge of your app to determine where within your app the cause might be.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nBuild your app for the Android emulator at least once.    </p>\n</li><li class=\" \">    <p>\nIn your text editor, open &lt;Project&gt;/build/android/AndroidManifest.xml.    </p>\n</li><li class=\" \">    <p>\nCopy the <tt class=\" \">&lt;application&gt;</tt> node, a sample of which is shown here (your app name would vary, of course):    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;application android:icon=</code><code class=\"string\">\"@drawable/appicon\"</code></div>\n<div class=\"line\"><code class=\"plain\">  android:label=</code><code class=\"string\">\"AppLeak\"</code><code class=\"plain\"> android:name=</code><code class=\"string\">\"AppleakApplication\"</code></div>\n<div class=\"line\"><code class=\"plain\">  android:debuggable=</code><code class=\"string\">\"false\"</code><code class=\"plain\">&gt;</code></div>\n</div>\n</div></li><li class=\" \">    <p>\nPaste that into your app's TiApp.xml file, modifying the <tt class=\" \">&lt;android&gt;</tt> node as shown:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;android xmlns:android=</code><code class=\"string\">\"http://schemas.android.com/apk/res/android\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;manifest&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;application android:icon=</code><code class=\"string\">\"@drawable/appicon\"</code></div>\n<div class=\"line\"><code class=\"plain\">      android:label=</code><code class=\"string\">\"AppLeak\"</code><code class=\"plain\"> android:name=</code><code class=\"string\">\"AppleakApplication\"</code></div>\n<div class=\"line\"><code class=\"plain\">      android:debuggable=</code><code class=\"string\">\"true\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/application&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;/manifest&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/android&gt;</code></div>\n</div>\n</div>    <p>\nNotice that we've set debuggable to true and added and completed a couple of the nodes.    </p>\n</li><li class=\" \">    <p>\nSave and build your app for the Android emulator again.    </p>\n</li><li class=\" \">    <p>\nOpen DDMS.    </p>\n</li><li class=\" \">    <p>\nAs shown in the screenshot below, click to select your app in the list of processes. Then, click the Show Heap Updates button (labeled #2 in the graphic).    </p>\n</li><li class=\" \">    <p>\nOn the VM Heap tab, click Cause GC to force garbage collection. Note the values listed in the Allocated and # Objects columns.    </p>\n</li><li class=\" \">    <p>\nHere's where you'll exercise your app and watch for memory leaks. For example, if you're using the AppLeak sample app linked to below, click the Test 1 button, click Back, and repeat. Memory and the object count in DDMS will grow, though that number includes objects that are ready to be garbage collected.    </p>\n</li><li class=\" \">    <p>\nClick Cause GC to force garbage collection. If there's a leak, the values of Allocated and # Objects won't return to their former values.    </p>\n</li></ol>    <p>\nThese steps don't tell you exactly what is causing the leak in your app. Unlike Instruments, DDMS doesn't clearly show which objects are remaining in memory rather than being collected. You will need to test your app and watch the memory values to infer the potential causes of the leak.    </p>\n    <p>\n        <img src=\"images/download/attachments/29004941/ddms.png\" alt=\"images/download/attachments/29004941/ddms.png\" class=\"confluence-embedded-image\" width=\"600\"/>\n            </p>\n    </div>\n    <div class=\"section section-3 \" id=\"29004941_ManagingMemoryandFindingLeaks-Hands-onPractice\">\n        <h3 class=\"heading \"><span>Hands-on Practice</span></h3>\n    <div class=\"section section-4 \" id=\"29004941_ManagingMemoryandFindingLeaks-Goal\">\n        <h4 class=\"heading \"><span>Goal</span></h4>\n    <p>\nYou'll examine an app that has a memory leak deliberately included. You'll apply various fixed and check your work until you have eliminated the leak.    </p>\n    <p>\n(This lab is written to work on iOS / OS X. See the notes at the end of the lab for Android information.)    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"29004941_ManagingMemoryandFindingLeaks-Steps\">\n        <h4 class=\"heading \"><span>Steps</span></h4>\n<ol class=\" \"><li class=\" \">    <p>\nDownload the AppLeak project from <a class=\"external-link external-link\" href=\"http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/AppLeak.zip\" target=\"_blank\">http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/AppLeak.zip</a>. Extract it and then import the project into Studio. Confirm that the tiapp.xml file has appropriate values for your environment then close that file.    </p>\n</li><li class=\" \">    <p>\nOpen test1.js in Studio. This file contains the leak, which you will fix.    </p>\n</li><li class=\" \">    <p>\nBuild the project for the iPhone or iPad simulator.    </p>\n</li><li class=\" \">    <p>\nOpen Instruments and attach it to your app's process:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nIn the Choose a Template window, click Allocations and then click Choose.    </p>\n</li><li class=\" \">    <p>\nClick Choose Target, Attach to Process, then under System, click AppLeak.    </p>\n</li><li class=\" \">    <p>\nClick Record. Wait a moment till data begins recording.    </p>\n</li><li class=\" \">    <p>\nIn the Instrument Detail filter box, enter <strong class=\" \">TiUITable</strong>    </p>\n</li></ol></li><li class=\" \">    <p>\nIn the simulator, click the Test 1 button. In Instruments, the # Living column for TiUITableViewRowProxy should show 5 objects are in memory; these objects correspond to the rows in the table. Close the modal window, then click Test 1 again. This time, # Living should increase to 10. The original 5 rows were not released and 5 new rows are allocated in memory. While the actual usage is small, if you were to repeatedly show this window enough times the app would exhaust its available memory and crash.    </p>\n</li><li class=\" \">    <p>\nClose the simulator. That will stop the data recording in Instruments.    </p>\n</li><li class=\" \">    <p>\nIn Studio, in test1.js, examine the code and speculate on the cause of the leak.    </p>\n</li><li class=\" \">    <p>\nAdd this code after the existing app-level event listener:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">test1win.addEventListener(</code><code class=\"string\">'close'</code><code class=\"plain\">, function() {</code></div>\n<div class=\"line\"><code class=\"plain\">\tTi.App.removeEventListener(</code><code class=\"string\">'bad:idea'</code><code class=\"plain\">, doSomething);</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div></li><li class=\" \">    <p>\nBuild your app for the simulator again.    </p>\n</li><li class=\" \">    <p>\nRepeat the Instruments testing steps listed above. This time, you should see the numbers in the # Transitory column increase as you open and close the Test 1 window. These values represent objects that have been garbage collected. You might see # Living go up above the 5 active rows occasionally; this simply reflects Instruments reacting more slowly than you clicking through the app. Note that because these objects are managed by garbage collection, you may not see them released immediately.    </p>\n</li><li class=\" \">    <p>\nClose the Simulator and Instruments; don't save the log results.    </p>\n</li></ol>    <p>\nThe app-level listener added within <tt class=\" \">build()</tt> remains in scope after the window is closed. This forces the objects the window contains to remain in scope, which means they cannot be garbage collected. When <tt class=\" \">build()</tt> runs again, a new window and table are created, which also cannot be garbage collected. You've got a leak! By removing the event listener when the window closes, the rest of the objects can be marked as ready for garbage collection. Even though a new set of objects are created by <tt class=\" \">build()</tt>, the old ones are gone from memory and this leak is fixed.    </p>\n    <p>\n<strong class=\" \">Android notes</strong>    </p>\n    <p>\nMemory leaks can be a problem for Android, even though we didn't highlight that platform in this lab. You can use the DDMS tool, and its Allocation Tracker component to watch for such leaks. We choose to use Instruments in this lab because the output is by far more obvious and the steps to discover a leak are simpler.    </p>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"29004941_ManagingMemoryandFindingLeaks-References\">\n        <h3 class=\"heading \"><span>References</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nO'Reilly's <a class=\"external-link external-link\" href=\"http://docstore.mik.ua/orelly/webprog/jscript/ch11_03.htm\" target=\"_blank\">JavaScript: The Definitive Guide, section 11.3 Garbage Collection</a>    </p>\n</li><li class=\" \">    <p>\nVideo: Your Apps are Leaking, by Rick Blalock at <a class=\"external-link external-link\" href=\"http://vimeopro.com/appcelerator/codestrong-2011/video/29804284\" target=\"_blank\">Codestrong 2011</a>    </p>\n</li><li class=\" \">    <p>\nTitanium Mobile <a class=\"document-link \" href=\"#!/guide/Best_Practices_and_Recommendations\">Best Practices and Recommendations</a>    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"29004941_ManagingMemoryandFindingLeaks-Summary\">\n        <h2 class=\"heading \"><span>Summary</span></h2>\n    <p>\nIn this section, you learned how memory is managed by JavaScript and Titanium. You learned that you must actively manage memory by actively managing the allocation and destruction of Titanium objects. You also learned how to use Instruments to monitor memory usage and potential leaks for iOS development.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004941\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Managing Memory and Finding Leaks"});