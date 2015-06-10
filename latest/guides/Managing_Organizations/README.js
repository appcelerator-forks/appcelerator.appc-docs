Ext.data.JsonP['Managing_Organizations']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Managing Organizations</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"43298778\" class=\"content\">\n            <h1>Managing Organizations</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Managing_Organizations-section-43298778_ManagingOrganizations-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Managing_Organizations-section-43298778_ManagingOrganizations-Concepts\">Concepts</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Managing_Organizations-section-43298778_ManagingOrganizations-ViewOrganizationDetails,ApplicationsandMembers\">View Organization Details, Applications and Members</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Managing_Organizations-section-43298778_ManagingOrganizations-AddanOrganizationMember\">Add an Organization Member</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Managing_Organizations-section-43298778_ManagingOrganizations-AddorRemoveApplicationTeamMembers\">Add or Remove Application Team Members</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Managing_Organizations-section-43298778_ManagingOrganizations-DeleteanApplication\">Delete an Application</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Managing_Organizations-section-43298778_ManagingOrganizations-ModifyingaMember'sRoleorAccess\">Modifying a Member's Role or Access</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Managing_Organizations-section-43298778_ManagingOrganizations-CreateanOrganization\">Create an Organization</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Managing_Organizations-section-43298778_ManagingOrganizations-Troubleshooting\">Troubleshooting</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Managing_Organizations-section-43298778_ManagingOrganizations-IwasrecentlypromotedtoAdministratorbutIcannotseeapplicationsfromotherusers\">I was recently promoted to Administrator but I cannot see applications from other users</a>    </p>\n</li></ul></li></ul>    <div class=\"section section-2 \" id=\"43298778_ManagingOrganizations-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>\nAs an administrator, Appcelerator Dashboard lets you view details about your organization, manages the users who have access to the Appcelerator Platform, and manage the applications created by members of your organization.  All of these functions are available through the <strong class=\" \">Managing Organizations</strong> page.  To access this page, login in to <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">the dashboard</a>, then click on your name in the upper-right and select <strong class=\" \">Organization</strong> from the menu.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43298778_ManagingOrganizations-Concepts\">\n        <h2 class=\"heading \"><span>Concepts</span></h2>\n    <p>\nUsers belong to organizations. An organization is a group of people working for the same entity &ndash; typically the members of a company or some subset of a company.    </p>\n<ul class=\" \"><li class=\" \">    <p>\nOrganization <i class=\" \">members</i> can create new Titanium applications in Appcelerator Studio or native applications in Dashboard. These applications belong to the organization the user designated during the app creation process.    </p>\n</li><li class=\" \">    <p>\nOrganization <i class=\" \">admins</i> can create applications, invite users to join the organization, and assign organization members to <i class=\" \">application teams</i>.    </p>\n</li></ul>    <p>\nA user can have different administrator rights:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<i class=\" \">Org Admin<strong class=\" \"> </strong> </i>gives the user access to manage the organization.    </p>\n</li><li class=\" \">    <p>\n<i class=\" \">Node.ACS Admin</i> gives the user access to manage Node.ACS application associated with the organization using the <tt class=\" \">acs</tt> CLI, including republishing or remove applications.    </p>\n</li></ul>    <p>\nA user can be a member of multiple organizations. In this case, the user will see an organization switcher in the Profile drop-down, located in top-right of the Appcelerator Dashboard.    </p>\n    <p>\nAn application team is a group of people working on a single application. Application team members can have different roles:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<i class=\" \">Application admins</i> can add users to the application team, change user roles, and update or modify the application's data. The user who creates an application becomes an admin for that application by default. Some ACS APIs can only be called by application admins.    </p>\n</li><li class=\" \">    <p>\n<i class=\" \">Application members</i> can access application data.    </p>\n</li></ul>    <p>\nAll the data generated by an application is visible to members and admins of the app and the admins of the organization the app belongs to. Organization admins can see data for all of the organization's applications.    </p>\n    <p>\nAn organization can have children organizations. These children organizations are allocated user and device account resources from the parent organization.  An administrator of the parent organization can create children organizations and manage applications and users for both the parent and children organizations.    </p>\n    <div class=\"section section-3 \" id=\"43298778_ManagingOrganizations-ViewOrganizationDetails,ApplicationsandMembers\">\n        <h3 class=\"heading \"><span>View Organization Details, Applications and Members</span></h3>\n    <p>\n<strong class=\" \">To manage organizations, applications and members:</strong>    </p>\n<ol class=\" \"><li class=\" \">    <p>\nLog in to <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com\" target=\"_blank\">Dashboard</a>.    </p>\n</li><li class=\" \">    <p>\nTo open the Manage Organizations screen, select<strong class=\" \"> Organization</strong> from the <strong class=\" \">Profile</strong> menu or select <strong class=\" \">Manage Organizations </strong>from the <strong class=\" \">Orgs</strong> menu.    </p>\n        <img src=\"images/download/attachments/43298778/billing.png\" alt=\"images/download/attachments/43298778/billing.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"219\"/>\n        </li></ol>    <p>\nThis opens the Manage Org screen for the currently selected organization.    </p>\n    <p>\n        <img src=\"images/download/attachments/43298778/manage_org.png\" alt=\"images/download/attachments/43298778/manage_org.png\" class=\"confluence-embedded-image\" width=\"800\"/>\n            </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43298778_ManagingOrganizations-AddanOrganizationMember\">\n        <h3 class=\"heading \"><span>Add an Organization Member</span></h3>\n    <p>\nIf you are an organization admin, you can add new members to an organization. An organization admin can only add as many members as the number of available seats in the organization.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nLog in to <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Dashboard</a>.    </p>\n</li><li class=\" \">    <p>\nClick on the <strong class=\" \">Orgs</strong> menu or <strong class=\" \">Profile</strong> menu and select <strong class=\" \">Manage Organizations</strong>.    </p>\n</li><li class=\" \">    <p>\nIf you're a member of multiple organizations, select the organization you want to view from the list at the top-left.    </p>\n</li><li class=\" \">    <p>\nClick the <strong class=\" \">Manage Members</strong> tab.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">New User</strong> in the upper-right corner.    </p>\n</li><li class=\" \">    <p>\nEnter the user's email address and choose whether to make the user an administrator.    </p>\n</li><li class=\" \">    <p>\nIn the <strong class=\" \">Apps</strong> list, select the application teams, if any, the user should be added to.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Add User</strong>.    </p>\n        <img src=\"images/download/attachments/43298778/add_user_and_app.png\" alt=\"images/download/attachments/43298778/add_user_and_app.png\" class=\"confluence-embedded-image\" width=\"500\"/>\n        </li></ol>    <p>\nAn email invitation is sent to the user, providing a link to confirm their membership. If the user has not yet accepted, the user's name appears in the member list with an <strong class=\" \">Invited</strong> status.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43298778_ManagingOrganizations-AddorRemoveApplicationTeamMembers\">\n        <h3 class=\"heading \"><span>Add or Remove Application Team Members</span></h3>\n    <p>\nYou can add team members to an application via the either Manage Members or Team tabs.    </p>\n    <p>\n<strong class=\" \">To add or remove team members from the Manage Members tab:</strong>    </p>\n<ol class=\" \"><li class=\" \">    <p>\nLog in to <a class=\"external-link external-link\" href=\"https://plaform.appcelerator.com/\" target=\"_blank\">Dashboard</a>.    </p>\n</li><li class=\" \">    <p>\nClick on the <strong class=\" \">Orgs</strong> or <strong class=\" \">Profile</strong> menu and select <strong class=\" \">Manage Organizations</strong>.    </p>\n</li><li class=\" \">    <p>\nIf you're a member of multiple organizations, select the organization you want to view from the list at the top-left.    </p>\n</li><li class=\" \">    <p>\nClick the <strong class=\" \">Manage Members</strong> tab.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nLocate the member to manage in the members list, and click  <strong class=\" \">App Teams</strong>  in the row for that member.    </p>\n</li><li class=\" \">    <p>\nLocate the application to which you want to add the user, and click the add (        <img src=\"images/download/attachments/43298778/dashboard_just_add_button.png\" alt=\"images/download/attachments/43298778/dashboard_just_add_button.png\" class=\"confluence-embedded-image\"/>\n    ) button.    </p>\n</li><li class=\" \">    <p>\nSelect the new member's role, <strong class=\" \">Admin</strong>  or  <strong class=\" \">Member, </strong> from the pop-up menu.    </p>\n</li><li class=\" \">    <p>\nTo remove the member from an application team, click the check mark button.    </p>\n        <img src=\"images/download/attachments/43298778/app_teams_add_delete.png\" alt=\"images/download/attachments/43298778/app_teams_add_delete.png\" class=\"confluence-embedded-image\" width=\"700\"/>\n        </li></ol></li></ol>    <p>\n<strong class=\" \">To add or remove team members from the Team tab:</strong>    </p>\n<ol class=\" \"><li class=\" \">    <p>\nLog in to <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Dashboard</a>.    </p>\n</li><li class=\" \">    <p>\nSelect the app to mange from the <strong class=\" \">Apps</strong> menu.    </p>\n</li><li class=\" \">    <p>\nClick the <strong class=\" \">Team</strong> tab.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nLocate the member you want to add and click the add (        <img src=\"images/download/attachments/43298778/dashboard_just_add_button.png\" alt=\"images/download/attachments/43298778/dashboard_just_add_button.png\" class=\"confluence-embedded-image\"/>\n    ) button.    </p>\n</li><li class=\" \">    <p>\nSelect the member's role, <strong class=\" \">Admin</strong> or <strong class=\" \">Member</strong>.    </p>\n</li><li class=\" \">    <p>\nTo remove a member, click <strong class=\" \">Remove Member</strong>.    </p>\n</li></ol></li></ol>    <p>\nNewly added team members are sent an email informing them that they were added to the application.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43298778_ManagingOrganizations-DeleteanApplication\">\n        <h3 class=\"heading \"><span>Delete an Application</span></h3>\n<ol class=\" \"><li class=\" \">    <p>\nLog in to <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Dashboard</a>.    </p>\n</li><li class=\" \">    <p>\nClick on the <strong class=\" \">Apps</strong> menu and select <strong class=\" \">All Apps</strong>.    </p>\n</li><li class=\" \">    <p>\nIf you're a member of multiple organizations, select the organization you want to view from the list at the top-left.    </p>\n</li><li class=\" \">    <p>\nLocate the application to delete in the table and click the red trash can icon.    </p>\n</li><li class=\" \">    <p>\nA dialog appears asking you to confirm the action. Click <strong class=\" \">Continue</strong>.    </p>\n</li></ol>    </div>\n    <div class=\"section section-3 \" id=\"43298778_ManagingOrganizations-ModifyingaMember'sRoleorAccess\">\n        <h3 class=\"heading \"><span>Modifying a Member's Role or Access</span></h3>\n    <p>\nAfter you create or add a member to your organization, you can view and modify the user's access rights or role.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nLog in to <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Dashboard</a>.    </p>\n</li><li class=\" \">    <p>\nClick on the <strong class=\" \">Orgs</strong> or <strong class=\" \">Profile</strong> menu and select <strong class=\" \">Manage Organizations</strong>.    </p>\n</li><li class=\" \">    <p>\nIf you're a member of multiple organizations, select the organization you want to view from the list at the top-left.    </p>\n</li><li class=\" \">    <p>\nClick the <strong class=\" \">Manage Members</strong> tab.    </p>\n</li><li class=\" \">    <p>\nTo change a members access, enable of disable the Org Admin and Node.ACS Admin checkboxes.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nOrg Admin makes the member an administrator of the organization.    </p>\n</li><li class=\" \">    <p>\nNode.ACS Admin makes the member an administrator of the Node.ACS apps associated with the organization.    </p>\n</li></ol></li><li class=\" \">    <p>\nTo delete a member from the organization, click the red trash can button.    </p>\n        <img src=\"images/download/attachments/43298778/members_table_admin.png\" alt=\"images/download/attachments/43298778/members_table_admin.png\" class=\"confluence-embedded-image\"/>\n        </li></ol>    </div>\n    <div class=\"section section-3 \" id=\"43298778_ManagingOrganizations-CreateanOrganization\">\n        <h3 class=\"heading \"><span>Create an Organization</span></h3>\n    <p>\nIf you are an administrator of your organization, you can create child organizations under your parent organization. Child organizations share the user and device resources with the parent organization and cannot be allotted more than what the parent has not used.    </p>\n    <p>\nIf your organization is an authorized Appcelerator Platform Reseller and you are an admin user, you can create two kinds of organization:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nInternal organizations, called <strong class=\" \">Groups</strong>, are the same as children organizations that will use your parent organization's allotted user and device resources.    </p>\n</li><li class=\" \">    <p>\nExternal organizations, called <strong class=\" \">Customers</strong>, is a group that has purchased the Appcelerator Platform, which is allotted its own pool of user and device resources.    </p>\n</li></ul>    <p>\nTo create an organization:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nLog in to <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Dashboard</a>.    </p>\n</li><li class=\" \">    <p>\nClick on the <strong class=\" \">Orgs</strong> or <strong class=\" \">Profile</strong> menu and select <strong class=\" \">Manage Organizations</strong>.    </p>\n</li><li class=\" \">    <p>\nOn the <strong class=\" \">Manage Org</strong> tab, click <strong class=\" \">New Organization</strong> in the upper-right.    </p>\n</li><li class=\" \">    <p>\nIn the <strong class=\" \">Name</strong> textfield, enter the name of the organization.    </p>\n</li><li class=\" \">    <p>\nIn the <strong class=\" \">Admin Email</strong> textfield, enter the email address of the person who will be administrating the organization.    </p>\n</li><li class=\" \">    <p>\nIn the <strong class=\" \">Dashboard Users</strong> field enter the number of seats to allocate for Dashboard users in the new organization.    </p>\n</li><li class=\" \">    <p>\nIn the <strong class=\" \">Test Devices</strong> field enter the number of devices allowed to use Appcelerator Test services.    </p>\n</li><li class=\" \">    <p>\nTo invite users to the new organization, click <strong class=\" \">Invite Members to this Organization. </strong><br/><strong class=\" \">         <img src=\"images/download/attachments/43298778/invite_users_new_org.png\" alt=\"images/download/attachments/43298778/invite_users_new_org.png\" class=\"confluence-embedded-image\"/>\n     </strong><br/><strong class=\" \">Note: </strong>This button is disabled if the specified number of <strong class=\" \">Dashboard Users</strong> is not greater than 1.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Create Organization</strong>.    </p>\n        <img src=\"images/download/attachments/43298778/new_org.png\" alt=\"images/download/attachments/43298778/new_org.png\" class=\"confluence-embedded-image\"/>\n        </li></ol>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43298778_ManagingOrganizations-Troubleshooting\">\n        <h2 class=\"heading \"><span>Troubleshooting</span></h2>\n    <div class=\"section section-3 \" id=\"43298778_ManagingOrganizations-IwasrecentlypromotedtoAdministratorbutIcannotseeapplicationsfromotherusers\">\n        <h3 class=\"heading \"><span>I was recently promoted to Administrator but I cannot see applications from other users</span></h3>\n<ol class=\" \"><li class=\" \">    <p>\nLog out of the Appcelerator Dashboard.    </p>\n</li><li class=\" \">    <p>\nClear your browser's cache.  You may need to restart the browser.    </p>\n</li><li class=\" \">    <p>\nLog back in to the Appcelerator Dashboard.    </p>\n</li></ol>    <p>\n    </p>\n    <p>\n    </p>\n    <p class=\"p1\">\nClick to remove member from app team    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43298778\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Managing Organizations"});