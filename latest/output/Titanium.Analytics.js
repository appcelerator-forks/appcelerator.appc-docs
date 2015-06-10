Ext.data.JsonP['Titanium_Analytics']({"tagname":"class","name":"Titanium.Analytics","extends":"Titanium.Module","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 0.8","iphone 0.8","ipad 0.8","mobileweb 1.8"],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Analytics/Analytics.yml","description":["<p>The analytics module can be used to supply additional context or application-specific \ninformation which can then be accessed during analysis using Analytics.</p>\n\n<p>Use the {@link Titanium.Analytics#method-featureEvent featureEvent} method to generate custom\nevents that you can view through the Analytics product. You can specify a name for \nthe feature event which is visible through Analytics.</p>\n\n<p><strong>NOTE</strong> The analytics module lets you transmit some data that is stored, but \nnot made accessible through the Analytics UI. To access this data, you must\nsign up for the optional raw data export service. </p>\n\n<p><em>The following types of data are stored but not made available through the Analytics UI:</em></p>\n\n<ul>\n<li><p>Navigation events.</p></li>\n<li><p>Extra data added to feature events (the <code>data</code> parameter).</p></li>\n</ul>\n\n<p>Viewing navigation events in the Analytics UI will be supported in a future version \nof the Analytics product. There is no plan to support the other event types, and they \nshould not be used.</p>\n\n<p>See also <a href=\"http://docs.appcelerator.com/platform/latest/#!/guide/Ti_Analytics\">Ti\nAnalytics</a>\nin the Titanium Mobile Guides.</p> \n<h3>Examples</h3>\n<h4>Custom Feature Event</h4>\n<p>This example shows how to send a feature event during an application session to indicate \nsome feature that you would like to track was used.</p>\n\n<pre><code>Titanium.Analytics.featureEvent('app.feature.blah');\n</code></pre>\n\n<p>In this case, the Analytics product would show statistics about how many times the\n'app.feature.blah' event was generated. </p>"]},"private":null,"id":"class-Titanium.Analytics","members":{"cfg":[],"property":[{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0"]},"id":"property-apiName"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"property-bubbleParent"},{"name":"lastEvent","tagname":"property","owner":"Titanium.Analytics","meta":{"readonly":true,"description":["<p>LastEvent is the JSON version of the last event prepared to be sent to Appcelerator\nduring the application's session. This value may be null or undefined if no such\nevent was queued.</p>"],"platform":["android 3.1.2","iphone 3.1.2","ipad 3.1.2"]},"id":"property-lastEvent"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0"]},"id":"property-lifecycleContainer"}],"method":[{"name":"addEvent","tagname":"method","owner":"Titanium.Analytics","meta":{"removed":{"version":"3.3.0","text":""}},"id":"method-addEvent"},{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","mobileweb 3.0.0"]},"id":"method-applyProperties"},{"name":"featureEvent","tagname":"method","owner":"Titanium.Analytics","meta":{},"id":"method-featureEvent"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0"]},"id":"method-getApiName"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"method-getBubbleParent"},{"name":"getLastEvent","tagname":"method","owner":"Titanium.Analytics","meta":{"platform":["android 3.1.2","iphone 3.1.2","ipad 3.1.2"]},"id":"method-getLastEvent"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0"]},"id":"method-getLifecycleContainer"},{"name":"navEvent","tagname":"method","owner":"Titanium.Analytics","meta":{},"id":"method-navEvent"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>"]},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"method-setBubbleParent"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0"]},"id":"method-setLifecycleContainer"},{"name":"settingsEvent","tagname":"method","owner":"Titanium.Analytics","meta":{"removed":{"version":"3.3.0","text":""}},"id":"method-settingsEvent"},{"name":"timedEvent","tagname":"method","owner":"Titanium.Analytics","meta":{"removed":{"version":"3.3.0","text":""}},"id":"method-timedEvent"},{"name":"userEvent","tagname":"method","owner":"Titanium.Analytics","meta":{"removed":{"version":"3.3.0","text":""}},"id":"method-userEvent"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":32082,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium-Analytics"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul>","editurl":null,"description":"<p><p>The analytics module can be used to supply additional context or application-specific \ninformation which can then be accessed during analysis using Analytics.</p>\n\n\n\n\n<p>Use the <a href=\"#!/api/Titanium.Analytics-method-featureEvent\" rel=\"Titanium.Analytics-method-featureEvent\" class=\"docClass\">featureEvent</a> method to generate custom\nevents that you can view through the Analytics product. You can specify a name for \nthe feature event which is visible through Analytics.</p>\n\n\n\n\n<p><strong>NOTE</strong> The analytics module lets you transmit some data that is stored, but \nnot made accessible through the Analytics UI. To access this data, you must\nsign up for the optional raw data export service. </p>\n\n\n\n\n<p><em>The following types of data are stored but not made available through the Analytics UI:</em></p>\n\n\n\n\n<ul>\n<li><p>Navigation events.</p></li>\n<li><p>Extra data added to feature events (the <code>data</code> parameter).</p></li>\n</ul>\n\n\n\n\n<p>Viewing navigation events in the Analytics UI will be supported in a future version \nof the Analytics product. There is no plan to support the other event types, and they \nshould not be used.</p>\n\n\n\n\n<p>See also <a href=\"http://docs.appcelerator.com/platform/latest/#!/guide/Ti_Analytics\">Ti\nAnalytics</a>\nin the Titanium Mobile Guides.</p>\n\n\n<p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Custom Feature Event</h4>\n\n\n<p>This example shows how to send a feature event during an application session to indicate \nsome feature that you would like to track was used.</p>\n\n\n\n\n<pre><code><a href=\"#!/api/Titanium.Analytics-method-featureEvent\" rel=\"Titanium.Analytics-method-featureEvent\" class=\"docClass\">Titanium.Analytics.featureEvent</a>('app.feature.blah');\n</code></pre>\n\n\n\n\n<p>In this case, the Analytics product would show statistics about how many times the\n'app.feature.blah' event was generated. </p>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.Module","Titanium.Analytics"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 0.8'>Android 0.8</li><li class='platform-iphone' title='iPhone since Titanium SDK 0.8'>iPhone 0.8</li><li class='platform-ipad' title='iPad since Titanium SDK 0.8'>iPad 0.8</li><li class='platform-mobileweb' title='Mobile Web since Titanium SDK 1.8'>Mobile Web 1.8</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <a href='#!/api/Titanium.Module' rel='Titanium.Module' class='docClass'>Titanium.Module</a></div><div class='subclass'> &gt; <strong>Titanium.Analytics</strong></div></div></div><div class='doc-contents'><p>Used for transmitting developer-defined Analytics events to the Appcelerator Analytics product. </p>\n\n<p><p>The analytics module can be used to supply additional context or application-specific \ninformation which can then be accessed during analysis using Analytics.</p>\n\n\n\n\n<p>Use the <a href=\"#!/api/Titanium.Analytics-method-featureEvent\" rel=\"Titanium.Analytics-method-featureEvent\" class=\"docClass\">featureEvent</a> method to generate custom\nevents that you can view through the Analytics product. You can specify a name for \nthe feature event which is visible through Analytics.</p>\n\n\n\n\n<p><strong>NOTE</strong> The analytics module lets you transmit some data that is stored, but \nnot made accessible through the Analytics UI. To access this data, you must\nsign up for the optional raw data export service. </p>\n\n\n\n\n<p><em>The following types of data are stored but not made available through the Analytics UI:</em></p>\n\n\n\n\n<ul>\n<li><p>Navigation events.</p></li>\n<li><p>Extra data added to feature events (the <code>data</code> parameter).</p></li>\n</ul>\n\n\n\n\n<p>Viewing navigation events in the Analytics UI will be supported in a future version \nof the Analytics product. There is no plan to support the other event types, and they \nshould not be used.</p>\n\n\n\n\n<p>See also <a href=\"http://docs.appcelerator.com/platform/latest/#!/guide/Ti_Analytics\">Ti\nAnalytics</a>\nin the Titanium Mobile Guides.</p>\n\n\n<p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Custom Feature Event</h4>\n\n\n<p>This example shows how to send a feature event during an application session to indicate \nsome feature that you would like to track was used.</p>\n\n\n\n\n<pre><code><a href=\"#!/api/Titanium.Analytics-method-featureEvent\" rel=\"Titanium.Analytics-method-featureEvent\" class=\"docClass\">Titanium.Analytics.featureEvent</a>('app.feature.blah');\n</code></pre>\n\n\n\n\n<p>In this case, the Analytics product would show statistics about how many times the\n'app.feature.blah' event was generated. </p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-apiName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li></ul></div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the proxy will bubble an event to its parent. ...</div><div class='long'><p>Indicates if the proxy will bubble an event to its parent.</p>\n\n<p><p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul></div></div></div><div id='property-lastEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Analytics'>Titanium.Analytics</span></div><a href='#!/api/Titanium.Analytics-property-lastEvent' class='name not-expandable'>lastEvent</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>JSON representation of the last analytics event generated.</p>\n\n</div><div class='long'><p>JSON representation of the last analytics event generated.</p>\n\n<p><p>LastEvent is the JSON version of the last event prepared to be sent to Appcelerator\nduring the application's session. This value may be null or undefined if no such\nevent was queued.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.2</li><li class='platform-iphone'\n        title='iPhone'>3.1.2</li><li class='platform-ipad'\n        title='iPad'>3.1.2</li></ul></div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEvent' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Analytics'>Titanium.Analytics</span></div><a href='#!/api/Titanium.Analytics-method-addEvent' class='name expandable'>addEvent</a>( <span class='pre'>type, name, [data]</span> )<strong class='removed signature' >removed</strong></div><div class='description'><div class='short'>Sends a generic event for this application session. ...</div><div class='long'><p>Sends a generic event for this application session.\n<strong>Not displayed in Analytics UI</strong>.</p>\n\n        <div class='signature-box removed'>\n        <p>This method has been <strong>removed</strong> since 3.3.0</p>\n        \n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>Event type.</p>\n\n</div></li><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Event name.</p>\n\n</div></li><li><span class='pre'>data</span> : Object (optional)<div class='sub-desc'><p>Extra data related to the event. Must be serializable as JSON.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-addEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> )</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n<p><p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.0.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-featureEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Analytics'>Titanium.Analytics</span></div><a href='#!/api/Titanium.Analytics-method-featureEvent' class='name expandable'>featureEvent</a>( <span class='pre'>name, [data]</span> )</div><div class='description'><div class='short'>Sends a feature event for this application session. ...</div><div class='long'><p>Sends a feature event for this application session.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Event name, displayed in Analytics UI.</p>\n\n</div></li><li><span class='pre'>data</span> : Object (optional)<div class='sub-desc'><p>Extra data related to the event, <strong>not displayed in Analytics UI</strong>. \nThe object must be serializable as JSON.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> )</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLastEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Analytics'>Titanium.Analytics</span></div><a href='#!/api/Titanium.Analytics-method-getLastEvent' class='name expandable'>getLastEvent</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the lastEvent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Analytics-property-lastEvent\" rel=\"Titanium.Analytics-property-lastEvent\" class=\"docClass\">lastEvent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.2</li><li class='platform-iphone'\n        title='iPhone'>3.1.2</li><li class='platform-ipad'\n        title='iPad'>3.1.2</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-navEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Analytics'>Titanium.Analytics</span></div><a href='#!/api/Titanium.Analytics-method-navEvent' class='name expandable'>navEvent</a>( <span class='pre'>from, to, [name], [data]</span> )</div><div class='description'><div class='short'>Sends a navigation event for this application session. ...</div><div class='long'><p>Sends a navigation event for this application session. \n<strong>Not displayed in Analytics UI</strong>.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>from</span> : String<div class='sub-desc'><p>String describing the location the user navigated from.</p>\n\n</div></li><li><span class='pre'>to</span> : String<div class='sub-desc'><p>String describing the location the user navigated to.</p>\n\n</div></li><li><span class='pre'>name</span> : String (optional)<div class='sub-desc'><p>Event name.</p>\n\n</div></li><li><span class='pre'>data</span> : Object (optional)<div class='sub-desc'><p>Extra data related to the event. The object must be serializable as JSON.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n<p><p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n\n\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> )</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-settingsEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Analytics'>Titanium.Analytics</span></div><a href='#!/api/Titanium.Analytics-method-settingsEvent' class='name expandable'>settingsEvent</a>( <span class='pre'>name, [data]</span> )<strong class='removed signature' >removed</strong></div><div class='description'><div class='short'>Sends a settings event for this application session. ...</div><div class='long'><p>Sends a settings event for this application session.\n<strong>Not displayed in Analytics UI</strong>.</p>\n\n        <div class='signature-box removed'>\n        <p>This method has been <strong>removed</strong> since 3.3.0</p>\n        \n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Event name.</p>\n\n</div></li><li><span class='pre'>data</span> : Object (optional)<div class='sub-desc'><p>Extra data related to the event. Must be serializable as JSON.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-timedEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Analytics'>Titanium.Analytics</span></div><a href='#!/api/Titanium.Analytics-method-timedEvent' class='name expandable'>timedEvent</a>( <span class='pre'>name, start, stop, duration, [data]</span> )<strong class='removed signature' >removed</strong></div><div class='description'><div class='short'>Send a timed event for this application session. ...</div><div class='long'><p>Send a timed event for this application session.\n<strong>Not displayed in Analytics UI</strong>.</p>\n\n        <div class='signature-box removed'>\n        <p>This method has been <strong>removed</strong> since 3.3.0</p>\n        \n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Event name.</p>\n\n</div></li><li><span class='pre'>start</span> : Date<div class='sub-desc'><p>Event start as a Date object.</p>\n\n</div></li><li><span class='pre'>stop</span> : Date<div class='sub-desc'><p>Event end as a Date object.</p>\n\n</div></li><li><span class='pre'>duration</span> : Number<div class='sub-desc'><p>Event duration.</p>\n\n</div></li><li><span class='pre'>data</span> : Object (optional)<div class='sub-desc'><p>Extra data related to the event. Must be serializable as JSON.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-userEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Analytics'>Titanium.Analytics</span></div><a href='#!/api/Titanium.Analytics-method-userEvent' class='name expandable'>userEvent</a>( <span class='pre'>name, [data]</span> )<strong class='removed signature' >removed</strong></div><div class='description'><div class='short'>Sends a user event for this application session. ...</div><div class='long'><p>Sends a user event for this application session. <strong>Not displayed in Analytics UI</strong>.</p>\n\n        <div class='signature-box removed'>\n        <p>This method has been <strong>removed</strong> since 3.3.0</p>\n        \n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Event name.</p>\n\n</div></li><li><span class='pre'>data</span> : Object (optional)<div class='sub-desc'><p>Extra data related to the event. Must be serializable as JSON.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});