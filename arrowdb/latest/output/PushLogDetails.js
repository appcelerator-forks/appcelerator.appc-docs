Ext.data.JsonP['PushLogDetails']({"tagname":"class","name":"PushLogDetails","alternateClassNames":[],"mixins":[],"meta":{"pseudo":true},"aliases":{},"files":[{"filename":"PushLogDetails.yml","href":"/var/lib/jenkins/jobs/appc-docs/workspace/cloud_docs/apidoc/PushLogDetails/PushLogDetails.yml"}],"members":{"cfg":[],"property":[{"name":"android_types","tagname":"property","owner":"PushLogDetails","meta":{"[:hide]":false},"id":"property-android_types"},{"name":"app_id","tagname":"property","owner":"PushLogDetails","meta":{"[:hide]":false},"id":"property-app_id"},{"name":"channel","tagname":"property","owner":"PushLogDetails","meta":{"[:hide]":false},"id":"property-channel"},{"name":"created_at","tagname":"property","owner":"PushLogDetails","meta":{"[:hide]":false},"id":"property-created_at"},{"name":"device_count","tagname":"property","owner":"PushLogDetails","meta":{"[:hide]":false},"id":"property-device_count"},{"name":"error_message","tagname":"property","owner":"PushLogDetails","meta":{"[:hide]":false},"id":"property-error_message"},{"name":"id","tagname":"property","owner":"PushLogDetails","meta":{"[:hide]":false},"id":"property-id"},{"name":"locked_at","tagname":"property","owner":"PushLogDetails","meta":{"[:hide]":false},"id":"property-locked_at"},{"name":"pem_sent_at","tagname":"property","owner":"PushLogDetails","meta":{"[:hide]":false},"id":"property-pem_sent_at"},{"name":"push_id","tagname":"property","owner":"PushLogDetails","meta":{"[:hide]":false},"id":"property-push_id"},{"name":"send_status","tagname":"property","owner":"PushLogDetails","meta":{"[:hide]":false},"id":"property-send_status"},{"name":"types","tagname":"property","owner":"PushLogDetails","meta":{"[:hide]":false},"id":"property-types"},{"name":"updated_at","tagname":"property","owner":"PushLogDetails","meta":{"[:hide]":false},"id":"property-updated_at"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"html_meta":{"pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='sidebar'></div><div class='hierarchy'></div><div class='doc-contents'><p>The data type for objects returned in the response to a <a href=\"#!/api/Logs-method-querypushlogdetails\" rel=\"Logs-method-querypushlogdetails\" class=\"docClass\">Logs.querypushlogdetails</a> request.\nAny error logged for a specific push notification is contained in the PushLogDetails object's <code>error_message</code> field.\nThe <code>error_message</code> field is only present if an error was logged for that item.</p>\n<p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Fields</h3><div class='subsection'><div id='property-android_types' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogDetails'>PushLogDetails</span></div><a href='#!/api/PushLogDetails-property-android_types' class='name expandable'>android_types</a><span> : Hash[]</span></div><div class='description'><div class='short'>List of Android push notification object types, and the number of notifications\ndelivered using each type. ...</div><div class='long'><p>List of Android push notification object types, and the number of notifications\ndelivered using each type. Possible key names are the following:</p>\n\n<ul>\n<li>GCM: Google Cloud Messaging service for Android</li>\n</ul>\n\n</div></div></div><div id='property-app_id' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogDetails'>PushLogDetails</span></div><a href='#!/api/PushLogDetails-property-app_id' class='name not-expandable'>app_id</a><span> : String</span></div><div class='description'><div class='short'><p>Application ID.</p>\n</div><div class='long'><p>Application ID.</p>\n</div></div></div><div id='property-channel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogDetails'>PushLogDetails</span></div><a href='#!/api/PushLogDetails-property-channel' class='name not-expandable'>channel</a><span> : String</span></div><div class='description'><div class='short'><p>Name of the channel to which the notification was delivered.</p>\n</div><div class='long'><p>Name of the channel to which the notification was delivered.</p>\n</div></div></div><div id='property-created_at' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogDetails'>PushLogDetails</span></div><a href='#!/api/PushLogDetails-property-created_at' class='name not-expandable'>created_at</a><span> : Date</span></div><div class='description'><div class='short'><p>Timestamp when the log item was created.</p>\n</div><div class='long'><p>Timestamp when the log item was created.</p>\n</div></div></div><div id='property-device_count' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogDetails'>PushLogDetails</span></div><a href='#!/api/PushLogDetails-property-device_count' class='name not-expandable'>device_count</a><span> : Number</span></div><div class='description'><div class='short'><p>The total number of devices to which the notification was delivered.</p>\n</div><div class='long'><p>The total number of devices to which the notification was delivered.</p>\n</div></div></div><div id='property-error_message' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogDetails'>PushLogDetails</span></div><a href='#!/api/PushLogDetails-property-error_message' class='name expandable'>error_message</a><span> : String</span></div><div class='description'><div class='short'>The error, if any, associated with the push notification. ...</div><div class='long'><p>The error, if any, associated with the push notification. For a list of possible errors,\nsee <a href=\"#!/guide/troubleshooting-section-push-notification-error-messages\">Push Notification Error Message</a>.</p>\n</div></div></div><div id='property-id' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogDetails'>PushLogDetails</span></div><a href='#!/api/PushLogDetails-property-id' class='name not-expandable'>id</a><span> : String</span></div><div class='description'><div class='short'><p>Identifes the push notification log item.</p>\n</div><div class='long'><p>Identifes the push notification log item.</p>\n</div></div></div><div id='property-locked_at' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogDetails'>PushLogDetails</span></div><a href='#!/api/PushLogDetails-property-locked_at' class='name not-expandable'>locked_at</a><span> : Date</span></div><div class='description'><div class='short'><p>Timestamp when the log item was locked.</p>\n</div><div class='long'><p>Timestamp when the log item was locked.</p>\n</div></div></div><div id='property-pem_sent_at' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogDetails'>PushLogDetails</span></div><a href='#!/api/PushLogDetails-property-pem_sent_at' class='name not-expandable'>pem_sent_at</a><span> : Date</span></div><div class='description'><div class='short'><p>Timestamp when log item was inserted by Platform event system.</p>\n</div><div class='long'><p>Timestamp when log item was inserted by Platform event system.</p>\n</div></div></div><div id='property-push_id' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogDetails'>PushLogDetails</span></div><a href='#!/api/PushLogDetails-property-push_id' class='name not-expandable'>push_id</a><span> : String</span></div><div class='description'><div class='short'><p>ID of push notification log item that was queried.</p>\n</div><div class='long'><p>ID of push notification log item that was queried.</p>\n</div></div></div><div id='property-send_status' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogDetails'>PushLogDetails</span></div><a href='#!/api/PushLogDetails-property-send_status' class='name expandable'>send_status</a><span> : Number</span></div><div class='description'><div class='short'>A number that indicates the notification's status, and can be one of the\nfollowing values:\n\n\n0 - Sending\n1 - Success\n...</div><div class='long'><p>A number that indicates the notification's status, and can be one of the\nfollowing values:</p>\n\n<ul>\n<li>0 - Sending</li>\n<li>1 - Success</li>\n<li>2 - Fail</li>\n<li>3 - Over Due</li>\n</ul>\n\n</div></div></div><div id='property-types' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogDetails'>PushLogDetails</span></div><a href='#!/api/PushLogDetails-property-types' class='name expandable'>types</a><span> : Hash[]</span></div><div class='description'><div class='short'>A single-element Array containing an object with possible field names \"android\"\nand \"ios\". ...</div><div class='long'><p>A single-element Array containing an object with possible field names \"android\"\nand \"ios\". The value of each field indicates the number of Android and iOS devices, respectively,\nto which the push notification was delivered.</p>\n</div></div></div><div id='property-updated_at' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogDetails'>PushLogDetails</span></div><a href='#!/api/PushLogDetails-property-updated_at' class='name not-expandable'>updated_at</a><span> : Date</span></div><div class='description'><div class='short'><p>Timestamp when log item was updated.</p>\n</div><div class='long'><p>Timestamp when log item was updated.</p>\n</div></div></div></div></div></div></div>"});