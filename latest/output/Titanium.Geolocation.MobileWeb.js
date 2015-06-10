Ext.data.JsonP['Titanium_Geolocation_MobileWeb']({"tagname":"class","name":"Titanium.Geolocation.MobileWeb","extends":"Titanium.Module","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["mobileweb 2.0.0"],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Geolocation/MobileWeb/MobileWeb.yml"},"private":null,"id":"class-Titanium.Geolocation.MobileWeb","members":{"cfg":[],"property":[{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0"]},"id":"property-apiName"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"property-bubbleParent"},{"name":"forwardGeocoderTimeout","tagname":"property","owner":"Titanium.Geolocation.MobileWeb","meta":{},"id":"property-forwardGeocoderTimeout"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0"]},"id":"property-lifecycleContainer"},{"name":"locationTimeout","tagname":"property","owner":"Titanium.Geolocation.MobileWeb","meta":{},"id":"property-locationTimeout"},{"name":"maximumHeadingAge","tagname":"property","owner":"Titanium.Geolocation.MobileWeb","meta":{},"id":"property-maximumHeadingAge"},{"name":"maximumLocationAge","tagname":"property","owner":"Titanium.Geolocation.MobileWeb","meta":{},"id":"property-maximumLocationAge"},{"name":"reverseGeocoderTimeout","tagname":"property","owner":"Titanium.Geolocation.MobileWeb","meta":{},"id":"property-reverseGeocoderTimeout"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","mobileweb 3.0.0"]},"id":"method-applyProperties"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0"]},"id":"method-getApiName"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"method-getBubbleParent"},{"name":"getForwardGeocoderTimeout","tagname":"method","owner":"Titanium.Geolocation.MobileWeb","meta":{},"id":"method-getForwardGeocoderTimeout"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0"]},"id":"method-getLifecycleContainer"},{"name":"getLocationTimeout","tagname":"method","owner":"Titanium.Geolocation.MobileWeb","meta":{},"id":"method-getLocationTimeout"},{"name":"getMaximumHeadingAge","tagname":"method","owner":"Titanium.Geolocation.MobileWeb","meta":{},"id":"method-getMaximumHeadingAge"},{"name":"getMaximumLocationAge","tagname":"method","owner":"Titanium.Geolocation.MobileWeb","meta":{},"id":"method-getMaximumLocationAge"},{"name":"getReverseGeocoderTimeout","tagname":"method","owner":"Titanium.Geolocation.MobileWeb","meta":{},"id":"method-getReverseGeocoderTimeout"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>"]},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"method-setBubbleParent"},{"name":"setForwardGeocoderTimeout","tagname":"method","owner":"Titanium.Geolocation.MobileWeb","meta":{},"id":"method-setForwardGeocoderTimeout"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0"]},"id":"method-setLifecycleContainer"},{"name":"setLocationTimeout","tagname":"method","owner":"Titanium.Geolocation.MobileWeb","meta":{},"id":"method-setLocationTimeout"},{"name":"setMaximumHeadingAge","tagname":"method","owner":"Titanium.Geolocation.MobileWeb","meta":{},"id":"method-setMaximumHeadingAge"},{"name":"setMaximumLocationAge","tagname":"method","owner":"Titanium.Geolocation.MobileWeb","meta":{},"id":"method-setMaximumLocationAge"},{"name":"setReverseGeocoderTimeout","tagname":"method","owner":"Titanium.Geolocation.MobileWeb","meta":{},"id":"method-setReverseGeocoderTimeout"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":67915,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium-Geolocation-MobileWeb"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-mobileweb'\n        title='Mobile Web'>2.0.0</li></ul>","editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.Module","Titanium.Geolocation.MobileWeb"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-mobileweb' title='Mobile Web since Titanium SDK 2.0.0'>Mobile Web 2.0.0</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <a href='#!/api/Titanium.Module' rel='Titanium.Module' class='docClass'>Titanium.Module</a></div><div class='subclass'> &gt; <strong>Titanium.Geolocation.MobileWeb</strong></div></div></div><div class='doc-contents'><p>The Mobile Web specific geolocation capabilities.</p>\n\n<ul class='platforms'><li class='platform-mobileweb'\n        title='Mobile Web'>2.0.0</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-apiName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li></ul></div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the proxy will bubble an event to its parent. ...</div><div class='long'><p>Indicates if the proxy will bubble an event to its parent.</p>\n\n<p><p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul></div></div></div><div id='property-forwardGeocoderTimeout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Geolocation.MobileWeb'>Titanium.Geolocation.MobileWeb</span></div><a href='#!/api/Titanium.Geolocation.MobileWeb-property-forwardGeocoderTimeout' class='name not-expandable'>forwardGeocoderTimeout</a><span> : Number</span></div><div class='description'><div class='short'><p>The time within which forward geocoder requests must succeed, in milliseconds.</p>\n\n</div><div class='long'><p>The time within which forward geocoder requests must succeed, in milliseconds.</p>\n\n</div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul></div></div></div><div id='property-locationTimeout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Geolocation.MobileWeb'>Titanium.Geolocation.MobileWeb</span></div><a href='#!/api/Titanium.Geolocation.MobileWeb-property-locationTimeout' class='name expandable'>locationTimeout</a><span> : Number</span></div><div class='description'><div class='short'>The time within which location requests must succeed, in milliseconds. ...</div><div class='long'><p>The time within which location requests must succeed, in milliseconds.</p>\n\n<p>Default: Infinity</p></div></div></div><div id='property-maximumHeadingAge' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Geolocation.MobileWeb'>Titanium.Geolocation.MobileWeb</span></div><a href='#!/api/Titanium.Geolocation.MobileWeb-property-maximumHeadingAge' class='name expandable'>maximumHeadingAge</a><span> : Number</span></div><div class='description'><div class='short'>The maximum age of cached locations acceptible for heading requests, in milliseconds. ...</div><div class='long'><p>The maximum age of cached locations acceptible for heading requests, in milliseconds.</p>\n\n<p>Default: 1000</p></div></div></div><div id='property-maximumLocationAge' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Geolocation.MobileWeb'>Titanium.Geolocation.MobileWeb</span></div><a href='#!/api/Titanium.Geolocation.MobileWeb-property-maximumLocationAge' class='name not-expandable'>maximumLocationAge</a><span> : Number</span></div><div class='description'><div class='short'><p>The maximum age of cached locations acceptible for location requests, in milliseconds.</p>\n\n</div><div class='long'><p>The maximum age of cached locations acceptible for location requests, in milliseconds.</p>\n\n</div></div></div><div id='property-reverseGeocoderTimeout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Geolocation.MobileWeb'>Titanium.Geolocation.MobileWeb</span></div><a href='#!/api/Titanium.Geolocation.MobileWeb-property-reverseGeocoderTimeout' class='name not-expandable'>reverseGeocoderTimeout</a><span> : Number</span></div><div class='description'><div class='short'><p>The time within which reverse geocoder requests must succeed, in milliseconds.</p>\n\n</div><div class='long'><p>The time within which reverse geocoder requests must succeed, in milliseconds.</p>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> )</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n<p><p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.0.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> )</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getForwardGeocoderTimeout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Geolocation.MobileWeb'>Titanium.Geolocation.MobileWeb</span></div><a href='#!/api/Titanium.Geolocation.MobileWeb-method-getForwardGeocoderTimeout' class='name expandable'>getForwardGeocoderTimeout</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the value of the forwardGeocoderTimeout property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Geolocation.MobileWeb-property-forwardGeocoderTimeout\" rel=\"Titanium.Geolocation.MobileWeb-property-forwardGeocoderTimeout\" class=\"docClass\">forwardGeocoderTimeout</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLocationTimeout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Geolocation.MobileWeb'>Titanium.Geolocation.MobileWeb</span></div><a href='#!/api/Titanium.Geolocation.MobileWeb-method-getLocationTimeout' class='name expandable'>getLocationTimeout</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the value of the locationTimeout property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Geolocation.MobileWeb-property-locationTimeout\" rel=\"Titanium.Geolocation.MobileWeb-property-locationTimeout\" class=\"docClass\">locationTimeout</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMaximumHeadingAge' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Geolocation.MobileWeb'>Titanium.Geolocation.MobileWeb</span></div><a href='#!/api/Titanium.Geolocation.MobileWeb-method-getMaximumHeadingAge' class='name expandable'>getMaximumHeadingAge</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the value of the maximumHeadingAge property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Geolocation.MobileWeb-property-maximumHeadingAge\" rel=\"Titanium.Geolocation.MobileWeb-property-maximumHeadingAge\" class=\"docClass\">maximumHeadingAge</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMaximumLocationAge' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Geolocation.MobileWeb'>Titanium.Geolocation.MobileWeb</span></div><a href='#!/api/Titanium.Geolocation.MobileWeb-method-getMaximumLocationAge' class='name expandable'>getMaximumLocationAge</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the value of the maximumLocationAge property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Geolocation.MobileWeb-property-maximumLocationAge\" rel=\"Titanium.Geolocation.MobileWeb-property-maximumLocationAge\" class=\"docClass\">maximumLocationAge</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getReverseGeocoderTimeout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Geolocation.MobileWeb'>Titanium.Geolocation.MobileWeb</span></div><a href='#!/api/Titanium.Geolocation.MobileWeb-method-getReverseGeocoderTimeout' class='name expandable'>getReverseGeocoderTimeout</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the value of the reverseGeocoderTimeout property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Geolocation.MobileWeb-property-reverseGeocoderTimeout\" rel=\"Titanium.Geolocation.MobileWeb-property-reverseGeocoderTimeout\" class=\"docClass\">reverseGeocoderTimeout</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n<p><p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n\n\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> )</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setForwardGeocoderTimeout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Geolocation.MobileWeb'>Titanium.Geolocation.MobileWeb</span></div><a href='#!/api/Titanium.Geolocation.MobileWeb-method-setForwardGeocoderTimeout' class='name expandable'>setForwardGeocoderTimeout</a>( <span class='pre'>forwardGeocoderTimeout</span> )</div><div class='description'><div class='short'>Sets the value of the forwardGeocoderTimeout property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Geolocation.MobileWeb-property-forwardGeocoderTimeout\" rel=\"Titanium.Geolocation.MobileWeb-property-forwardGeocoderTimeout\" class=\"docClass\">forwardGeocoderTimeout</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>forwardGeocoderTimeout</span> : Number<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLocationTimeout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Geolocation.MobileWeb'>Titanium.Geolocation.MobileWeb</span></div><a href='#!/api/Titanium.Geolocation.MobileWeb-method-setLocationTimeout' class='name expandable'>setLocationTimeout</a>( <span class='pre'>locationTimeout</span> )</div><div class='description'><div class='short'>Sets the value of the locationTimeout property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Geolocation.MobileWeb-property-locationTimeout\" rel=\"Titanium.Geolocation.MobileWeb-property-locationTimeout\" class=\"docClass\">locationTimeout</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>locationTimeout</span> : Number<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setMaximumHeadingAge' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Geolocation.MobileWeb'>Titanium.Geolocation.MobileWeb</span></div><a href='#!/api/Titanium.Geolocation.MobileWeb-method-setMaximumHeadingAge' class='name expandable'>setMaximumHeadingAge</a>( <span class='pre'>maximumHeadingAge</span> )</div><div class='description'><div class='short'>Sets the value of the maximumHeadingAge property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Geolocation.MobileWeb-property-maximumHeadingAge\" rel=\"Titanium.Geolocation.MobileWeb-property-maximumHeadingAge\" class=\"docClass\">maximumHeadingAge</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>maximumHeadingAge</span> : Number<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setMaximumLocationAge' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Geolocation.MobileWeb'>Titanium.Geolocation.MobileWeb</span></div><a href='#!/api/Titanium.Geolocation.MobileWeb-method-setMaximumLocationAge' class='name expandable'>setMaximumLocationAge</a>( <span class='pre'>maximumLocationAge</span> )</div><div class='description'><div class='short'>Sets the value of the maximumLocationAge property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Geolocation.MobileWeb-property-maximumLocationAge\" rel=\"Titanium.Geolocation.MobileWeb-property-maximumLocationAge\" class=\"docClass\">maximumLocationAge</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>maximumLocationAge</span> : Number<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setReverseGeocoderTimeout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Geolocation.MobileWeb'>Titanium.Geolocation.MobileWeb</span></div><a href='#!/api/Titanium.Geolocation.MobileWeb-method-setReverseGeocoderTimeout' class='name expandable'>setReverseGeocoderTimeout</a>( <span class='pre'>reverseGeocoderTimeout</span> )</div><div class='description'><div class='short'>Sets the value of the reverseGeocoderTimeout property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Geolocation.MobileWeb-property-reverseGeocoderTimeout\" rel=\"Titanium.Geolocation.MobileWeb-property-reverseGeocoderTimeout\" class=\"docClass\">reverseGeocoderTimeout</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>reverseGeocoderTimeout</span> : Number<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});