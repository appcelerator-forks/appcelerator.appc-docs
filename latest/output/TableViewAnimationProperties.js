Ext.data.JsonP['TableViewAnimationProperties']({"tagname":"class","name":"TableViewAnimationProperties","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 0.8","iphone 0.8","ipad 0.8","mobileweb 1.8"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/TableView.yml","description":["<p>These properties are only used on iOS. Not all properties apply to all methods.</p>\n\n<p><code>animationStyle</code> does not apply to the <code>scrollToTop</code> or <code>scrollToIndex</code> methods.</p>\n\n<p><code>positon</code> only applies to the <code>scrollToIndex</code> method.</p>"]},"private":null,"id":"class-TableViewAnimationProperties","members":{"cfg":[],"property":[{"name":"animated","tagname":"property","owner":"TableViewAnimationProperties","meta":{},"id":"property-animated"},{"name":"animationStyle","tagname":"property","owner":"TableViewAnimationProperties","meta":{},"id":"property-animationStyle"},{"name":"position","tagname":"property","owner":"TableViewAnimationProperties","meta":{},"id":"property-position"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":132011,"files":[{"filename":"titanium.js","href":"titanium.html#TableViewAnimationProperties"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null,"description":"<p><p>These properties are only used on iOS. Not all properties apply to all methods.</p>\n\n\n\n\n<p><code>animationStyle</code> does not apply to the <code>scrollToTop</code> or <code>scrollToIndex</code> methods.</p>\n\n\n\n\n<p><code>positon</code> only applies to the <code>scrollToIndex</code> method.</p>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 0.8'>Android 0.8</li><li class='platform-iphone' title='iPhone since Titanium SDK 0.8'>iPhone 0.8</li><li class='platform-ipad' title='iPad since Titanium SDK 0.8'>iPad 0.8</li><li class='platform-mobileweb' title='Mobile Web since Titanium SDK 1.8'>Mobile Web 1.8</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>A simple object for specifying the animation properties to use when inserting or deleting rows, or scrolling the table.</p>\n\n<p><p>These properties are only used on iOS. Not all properties apply to all methods.</p>\n\n\n\n\n<p><code>animationStyle</code> does not apply to the <code>scrollToTop</code> or <code>scrollToIndex</code> methods.</p>\n\n\n\n\n<p><code>positon</code> only applies to the <code>scrollToIndex</code> method.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-animated' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TableViewAnimationProperties'>TableViewAnimationProperties</span></div><a href='#!/api/TableViewAnimationProperties-property-animated' class='name expandable'>animated</a><span> : Boolean</span></div><div class='description'><div class='short'>Whether this table change should be animated. ...</div><div class='long'><p>Whether this table change should be animated. Ignored if any <code>animationStyle</code> value is specified.</p>\n\n<p>Default: true</p></div></div></div><div id='property-animationStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TableViewAnimationProperties'>TableViewAnimationProperties</span></div><a href='#!/api/TableViewAnimationProperties-property-animationStyle' class='name expandable'>animationStyle</a><span> : Number</span></div><div class='description'><div class='short'>Type of animation to use for row insertions and deletions. ...</div><div class='long'><p>Type of animation to use for row insertions and deletions.</p>\n\n\n\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Titanium.UI.iPhone.RowAnimationStyle-property-BOTTOM\" rel=\"Titanium.UI.iPhone.RowAnimationStyle-property-BOTTOM\" class=\"docClass\">Titanium.UI.iPhone.RowAnimationStyle.BOTTOM</a>\n <li> <a href=\"#!/api/Titanium.UI.iPhone.RowAnimationStyle-property-FADE\" rel=\"Titanium.UI.iPhone.RowAnimationStyle-property-FADE\" class=\"docClass\">Titanium.UI.iPhone.RowAnimationStyle.FADE</a>\n <li> <a href=\"#!/api/Titanium.UI.iPhone.RowAnimationStyle-property-LEFT\" rel=\"Titanium.UI.iPhone.RowAnimationStyle-property-LEFT\" class=\"docClass\">Titanium.UI.iPhone.RowAnimationStyle.LEFT</a>\n <li> <a href=\"#!/api/Titanium.UI.iPhone.RowAnimationStyle-property-NONE\" rel=\"Titanium.UI.iPhone.RowAnimationStyle-property-NONE\" class=\"docClass\">Titanium.UI.iPhone.RowAnimationStyle.NONE</a>\n <li> <a href=\"#!/api/Titanium.UI.iPhone.RowAnimationStyle-property-RIGHT\" rel=\"Titanium.UI.iPhone.RowAnimationStyle-property-RIGHT\" class=\"docClass\">Titanium.UI.iPhone.RowAnimationStyle.RIGHT</a>\n <li> <a href=\"#!/api/Titanium.UI.iPhone.RowAnimationStyle-property-TOP\" rel=\"Titanium.UI.iPhone.RowAnimationStyle-property-TOP\" class=\"docClass\">Titanium.UI.iPhone.RowAnimationStyle.TOP</a>\n</li></li></li></li></li></li></ul></p>\n\n<p>Default: If `animated` is `true` but no `animationStyle` is specified, the style defaults to \n[FADE](<a href=\"#!/api/Titanium.UI.iPhone.RowAnimationStyle-property-FADE\" rel=\"Titanium.UI.iPhone.RowAnimationStyle-property-FADE\" class=\"docClass\">Titanium.UI.iPhone.RowAnimationStyle.FADE</a>).\n</p></div></div></div><div id='property-position' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TableViewAnimationProperties'>TableViewAnimationProperties</span></div><a href='#!/api/TableViewAnimationProperties-property-position' class='name expandable'>position</a><span> : Number</span></div><div class='description'><div class='short'>Specifies what position to scroll the selected row to. ...</div><div class='long'><p>Specifies what position to scroll the selected row to.</p>\n\n\n\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Titanium.UI.iPhone.TableViewScrollPosition-property-BOTTOM\" rel=\"Titanium.UI.iPhone.TableViewScrollPosition-property-BOTTOM\" class=\"docClass\">Titanium.UI.iPhone.TableViewScrollPosition.BOTTOM</a>\n <li> <a href=\"#!/api/Titanium.UI.iPhone.TableViewScrollPosition-property-MIDDLE\" rel=\"Titanium.UI.iPhone.TableViewScrollPosition-property-MIDDLE\" class=\"docClass\">Titanium.UI.iPhone.TableViewScrollPosition.MIDDLE</a>\n <li> <a href=\"#!/api/Titanium.UI.iPhone.TableViewScrollPosition-property-NONE\" rel=\"Titanium.UI.iPhone.TableViewScrollPosition-property-NONE\" class=\"docClass\">Titanium.UI.iPhone.TableViewScrollPosition.NONE</a>\n <li> <a href=\"#!/api/Titanium.UI.iPhone.TableViewScrollPosition-property-TOP\" rel=\"Titanium.UI.iPhone.TableViewScrollPosition-property-TOP\" class=\"docClass\">Titanium.UI.iPhone.TableViewScrollPosition.TOP</a>\n</li></li></li></li></ul></p>\n\n<p>Default: <a href=\"#!/api/Titanium.UI.iPhone.TableViewScrollPosition-property-NONE\" rel=\"Titanium.UI.iPhone.TableViewScrollPosition-property-NONE\" class=\"docClass\">Titanium.UI.iPhone.TableViewScrollPosition.NONE</a></p></div></div></div></div></div></div></div>"});