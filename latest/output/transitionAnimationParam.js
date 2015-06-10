Ext.data.JsonP['transitionAnimationParam']({"tagname":"class","name":"transitionAnimationParam","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["iphone 3.2.0","ipad 3.2.0"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/iOS/iOS.yml"},"private":null,"id":"class-transitionAnimationParam","members":{"cfg":[],"property":[{"name":"duration","tagname":"property","owner":"transitionAnimationParam","meta":{},"id":"property-duration"},{"name":"tranistionTo","tagname":"property","owner":"transitionAnimationParam","meta":{},"id":"property-tranistionTo"},{"name":"transitionFrom","tagname":"property","owner":"transitionAnimationParam","meta":{},"id":"property-transitionFrom"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":161269,"files":[{"filename":"titanium.js","href":"titanium.html#transitionAnimationParam"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-iphone' title='iPhone since Titanium SDK 3.2.0'>iPhone 3.2.0</li><li class='platform-ipad' title='iPad since Titanium SDK 3.2.0'>iPad 3.2.0</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Dictionary specifying the transition animation used with the <a href=\"#!/api/Titanium.UI.iOS-method-createTransitionAnimation\" rel=\"Titanium.UI.iOS-method-createTransitionAnimation\" class=\"docClass\">Titanium.UI.iOS.createTransitionAnimation</a> method.\nOnly supported on iOS 7 and later.</p>\n\n\n\n\n<p> <b>Requires:</b> \niOS 7.0 and later \n</p>\n\n\n\n\n<h3>Examples</h3>\n\n\n<h4>Simple Example</h4>\n\n\n<p>In this example, the red window opens with a transition animation, while closing it uses the\ndefault behavior where it slides off screen.  To add a transition animation when the red\nwindow closes, define a transition animation for the blue window.</p>\n\n\n\n\n<pre><code>var transition = Ti.UI.iOS.createTransitionAnimation({\n    duration: 300,\n    // The show transition makes the window opaque and rotates it correctly\n    transitionTo: {\n        opacity: 1,\n        duration: 300,\n        transform: Ti.UI.create2DMatrix()\n    },\n    // The hide transition makes the window transparent and rotates it upside down\n    transitionFrom: {\n        opacity: 0,\n        duration: 300 / 2,\n        transform: Ti.UI.create2DMatrix().rotate(180),\n    }\n});\n\nvar win2 = Ti.UI.createWindow({\n    backgroundColor: 'red',\n    title: 'Red Window',\n    transitionAnimation: transition,\n    opacity: 0,\n    transform: Ti.UI.create2DMatrix().rotate(180)\n});\nvar button2 = Ti.UI.createButton({\n    title: 'Close Red Window'\n});\nbutton2.addEventListener('click', function(){\n    nav.closeWindow(win2);\n    // In order to see the blue window again,\n    // need to reverse the transition animation\n    win1.opacity = 1;\n    win1.transform = Ti.UI.create2DMatrix().rotate(0);\n});\nwin2.add(button2);\n\nvar win1 = Ti.UI.createWindow({\n    backgroundColor: 'blue',\n    title: 'Blue Window',\n    // Uncomment to use a transition animation when the blue window is closed\n    // transitionAnimation: transition\n});\nvar button1 = Ti.UI.createButton({title: 'Open Red Window'});\nbutton1.addEventListener('click', function(){\n    nav.openWindow(win2);\n});\nwin1.add(button1);\n\nvar nav = Ti.UI.iOS.createNavigationWindow({\n    window: win1\n});\nnav.open();\n</code></pre>\n\n<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-duration' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='transitionAnimationParam'>transitionAnimationParam</span></div><a href='#!/api/transitionAnimationParam-property-duration' class='name not-expandable'>duration</a><span> : Number</span></div><div class='description'><div class='short'><p>Length of the transition in milliseconds.</p>\n\n</div><div class='long'><p>Length of the transition in milliseconds.</p>\n\n</div></div></div><div id='property-tranistionTo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='transitionAnimationParam'>transitionAnimationParam</span></div><a href='#!/api/transitionAnimationParam-property-tranistionTo' class='name not-expandable'>tranistionTo</a><span> : <a href=\"#!/api/Titanium.UI.Animation\" rel=\"Titanium.UI.Animation\" class=\"docClass\">Titanium.UI.Animation</a></span></div><div class='description'><div class='short'><p>Animation to show the new window.</p>\n\n</div><div class='long'><p>Animation to show the new window.</p>\n\n</div></div></div><div id='property-transitionFrom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='transitionAnimationParam'>transitionAnimationParam</span></div><a href='#!/api/transitionAnimationParam-property-transitionFrom' class='name not-expandable'>transitionFrom</a><span> : <a href=\"#!/api/Titanium.UI.Animation\" rel=\"Titanium.UI.Animation\" class=\"docClass\">Titanium.UI.Animation</a></span></div><div class='description'><div class='short'><p>Animation to hide the current window.</p>\n\n</div><div class='long'><p>Animation to hide the current window.</p>\n\n</div></div></div></div></div></div></div>"});