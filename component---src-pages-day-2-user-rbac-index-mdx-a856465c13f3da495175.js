(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"013z":function(e,t,o){"use strict";o("KKXr"),o("pIFo");var a=o("pOBw"),r=o("q1tI"),n=o.n(r),s=o("NmYn"),i=o.n(s),c=o("OKom"),l=o("k4MR"),p=o("TSYQ"),b=o.n(p),u=o("QH2O"),m=o("qKvR"),d=function(e){var t,o=e.title,a=e.tabs,r=void 0===a?[]:a;return Object(m.b)("div",{className:b()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},o)))))},h=o("pEPl"),j=o("BAC9"),g=function(e){var t=e.relativePagePath,o=e.repository,a=h.data.site.siteMetadata.repository,r=o||a,n=r.baseUrl,s=r.subDirectory,i=n+"/edit/"+r.branch+s+"/src/pages"+t;return n?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},O=o("FCXl"),f=(o("Oyvg"),o("Wbzz")),v=o("I8xM");var w=function(e){var t,o;function a(){return e.apply(this,arguments)||this}return o=e,(t=a).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,a.prototype.render=function(){var e=this.props,t=e.tabs,o=e.slug,a=o.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0}),n=r===a,s=new RegExp(a+"(?!-)"),c=o.replace(s,r);return Object(m.b)("li",{key:e,className:b()((t={},t[v.selectedItem]=n,t),v.listItem)},Object(m.b)(f.Link,{className:v.link,to:""+c},e))}));return Object(m.b)("div",{className:v.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:v.list},r))))))},a}(n.a.Component),y=o("MjG9");t.a=function(e){var t=e.pageContext,o=e.children,r=e.location,n=e.Title,s=t.frontmatter,p=void 0===s?{}:s,b=t.relativePagePath,u=t.titleType,h=p.tabs,j=p.title,f=p.theme,v=p.description,N=p.keywords,k=a.data.site.pathPrefix,C=k?r.pathname.replace(k,""):r.pathname,x=h?C.split("/").filter(Boolean).slice(-1)[0]||i()(h[0],{lower:!0}):"";return Object(m.b)(l.a,{tabs:h,homepage:!1,theme:f,pageTitle:j,pageDescription:v,pageKeywords:N,titleType:u},Object(m.b)(d,{title:n?Object(m.b)(n,null):j,label:"label",tabs:h}),h&&Object(m.b)(w,{slug:C,tabs:h,currentTab:x}),Object(m.b)(y.a,{padded:!0},o,Object(m.b)(g,{relativePagePath:b})),Object(m.b)(O.a,{pageContext:t,location:r,slug:C,tabs:h,currentTab:x}),Object(m.b)(c.a,null))}},cWxJ:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return s})),o.d(t,"default",(function(){return l}));o("91GP"),o("rGqo"),o("yt8O"),o("Btvt"),o("RW0V"),o("q1tI");var a=o("7ljp"),r=o("013z");o("qKvR");function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}var s={},i={_frontmatter:s},c=r.a;function l(e){var t=e.components,o=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,["components"]);return Object(a.b)(c,n({},i,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"Configure Groups and Cluster Role-Based Access Control"),Object(a.b)("p",null,"We will show you how to configure groups and cluster role-based access control (RBAC) on your OpenShift Cluster.  We will cover the following items:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a cluster role binding to configure a group with direct cluster-admin access privileges"),Object(a.b)("li",{parentName:"ul"},"Configure a group with cluster-admin access through the sudoer cluster role"),Object(a.b)("li",{parentName:"ul"},"Restrict project self-provisioning to specific user groups"),Object(a.b)("li",{parentName:"ul"},"Configure project request messages   ")),Object(a.b)("p",null,"The top two items tell you how to delegate the cluster administrative privileges."),Object(a.b)("h2",null,"Create a cluster role binding to configure a group with direct cluster-admin access privileges"),Object(a.b)("p",null,"You assign the ",Object(a.b)("strong",{parentName:"p"},"cluster-admin")," access to a group called ",Object(a.b)("strong",{parentName:"p"},"local-admin")," which we have already created in our environment.\nHere are steps to configure direct cluster-admin access."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Check the list of groups and acciated users in each group as follow.")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),"$ oc --user=admin get groups\nNAME             USERS\nlocal-admin      alice\nocp-platform     david, admin1, admin2, admin\nocp-production   karla, prod1, prod2, admin, redhat\nocp-users        andrew, marina, karla, david, portal1, portal2, payment1, payment2, prod1, prod2, platform1, platform2, admin1, admin2, admin\npaymentapp       marina, payment1, payment2\nportalapp        andrew, portal1, portal2\n$ \n")),Object(a.b)("p",null,"In our environment, there is ",Object(a.b)("strong",{parentName:"p"},"local-admin")," group with ",Object(a.b)("strong",{parentName:"p"},"alice")," user.  We will use those in the following steps."),Object(a.b)("p",null,"Note that we have disabled the ",Object(a.b)("strong",{parentName:"p"},"kubeadmin")," in your environment as described in ",Object(a.b)("a",n({parentName:"p"},{href:"../UserVmware"}),"here"),". Therefore, the steps in this page must be performed using the system:admin user account which means that we will add ",Object(a.b)("strong",{parentName:"p"},"—user=admin")," option with the oc command if necessary."),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Create a cluster role binding to give ",Object(a.b)("strong",{parentName:"li"},"cluster-admin")," rights to members of the ",Object(a.b)("strong",{parentName:"li"},"local-admin")," group as follow.")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),'$ oc --user=admin adm policy add-cluster-role-to-group cluster-admin local-admin\nclusterrole.rbac.authorization.k8s.io/cluster-admin added: "local-admin"\n$ \n')),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"To confirm that users who belong to the ",Object(a.b)("strong",{parentName:"li"},"local-admin")," group has the administrative access, you login as the ",Object(a.b)("strong",{parentName:"li"},"alice")," user as follow.")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),"$ oc login -u alice -p 'p4ssw0rd'\nLogin successful.\n\n... OUTPUT OMITTED ...\n\n")),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Then, confirm full administrative access with any verb to any resource type such as “boo” and “bar” as follow.")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),"$ oc auth can-i foo bar\nWarning: the server doesn't have a resource type 'bar'\nyes\n$ \n")),Object(a.b)("p",null,"You see ",Object(a.b)("strong",{parentName:"p"},"yes")," as the command output which means that the user has the aminitrative access. You can ignore the warning message above.\nThe ",Object(a.b)("strong",{parentName:"p"},"local-admin")," group now has the administrative access and the users belong to that group can run the command which requires the administrative access without specifying ",Object(a.b)("strong",{parentName:"p"},"—user=admin")," option.  "),Object(a.b)("h2",null,"Configure a group with cluster-admin access through the sudoer cluster role"),Object(a.b)("p",null,"We will grant the ",Object(a.b)("strong",{parentName:"p"},"sudoer")," rights to the group and show you how to use the administrative access with the users in that group.  "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Check the list of groups and acciated users in each group as follow.")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),"$ oc --user=admin get groups\nNAME             USERS\nlocal-admin      alice\nocp-platform     david, admin1, admin2, admin\nocp-production   karla, prod1, prod2, admin, redhat\nocp-users        andrew, marina, karla, david, portal1, portal2, payment1, payment2, prod1, prod2, platform1, platform2, admin1, admin2, admin\npaymentapp       marina, payment1, payment2\nportalapp        andrew, portal1, portal2\n$ \n")),Object(a.b)("p",null,"In our environment, there is ",Object(a.b)("strong",{parentName:"p"},"ocp-platform")," group with ",Object(a.b)("strong",{parentName:"p"},"david")," user.  We will use those in the following steps."),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Create a cluster role binding to grant ",Object(a.b)("strong",{parentName:"li"},"sudoer")," rights to members of the ocp-platform group:")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),'$ oc adm policy add-cluster-role-to-group sudoer ocp-platform\nclusterrole.rbac.authorization.k8s.io/sudoer added: "ocp-platform"\n')),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Log in as a user ",Object(a.b)("strong",{parentName:"li"},"david")," that belongs to the ",Object(a.b)("strong",{parentName:"li"},"ocp-platform")," group to confirm cluster administrative privileges.")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),"$ oc login -u david -p 'r3dh4t1!'\nLogin successful.\n\nYou don't have any projects. You can try to create a new project, by running\n\n    oc new-project <projectname>\n")),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Test direct cluster administrative access to confirm that it is not available as follow.")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),"$ oc auth can-i foo bar\nWarning: the server doesn't have a resource type 'bar'\nno\n")),Object(a.b)("p",null,"You see ",Object(a.b)("strong",{parentName:"p"},"no")," as the command output which means that the user does not have the aminitrative access. You can ignore the warning message above."),Object(a.b)("ol",{start:5},Object(a.b)("li",{parentName:"ol"},"Repeat the same command with the ",Object(a.b)("strong",{parentName:"li"},"—as=system:admin")," option using the system:admin account as follow.")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),"$ oc --as=system:admin auth can-i foo bar\nWarning: the server doesn't have a resource type 'bar'\nyes\n")),Object(a.b)("p",null,"You see ",Object(a.b)("strong",{parentName:"p"},"yes")," as the command output which means that the user has the aminitrative access. You can ignore the warning message above."),Object(a.b)("p",null,"As step 4 and 5 showed you, the ",Object(a.b)("strong",{parentName:"p"},"sudoer")," rights can provide the administrative access by specifying the ",Object(a.b)("strong",{parentName:"p"},"—as=system:admin")," option.  "),Object(a.b)("p",null,"Now, you have delegated cluster administrative access to users such as ",Object(a.b)("strong",{parentName:"p"},"alice")," and ",Object(a.b)("strong",{parentName:"p"},"david")," in our example. Therefore, it is no longer appropriate to continue using TLS certificates to access system:admin.  "),Object(a.b)("h3",null,"Remove Credentials for system:admin from Configuration File"),Object(a.b)("p",null,"Before we move to the next items which are “Restrict project self-provisioning to specific user groups” and “Configure project request messages”, we will show you how to remove the cluser-admin access from the user to whom you previously delegated cluster-admin access.  In our example, the user ",Object(a.b)("strong",{parentName:"p"},"alice")," is the one.  "),Object(a.b)("p",null,"We remove the credentials for system:admin from the configuration file as follow.  "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"You can get the API URL with oc command as follow.")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),"$oc whoami --show-server\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Remove your kube configuration file.")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),"$ rm -f $HOME/.kube/config\n")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Log in again as the ",Object(a.b)("strong",{parentName:"li"},"alice")," user.  Answer ",Object(a.b)("strong",{parentName:"li"},"y")," to the question “Use insecure connections?” which will reset your environment and authenticate for the user ",Object(a.b)("strong",{parentName:"li"},"alice"),".")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),"$ oc login -u alice -p 'p4ssw0rd' $API_URL\nThe server uses a certificate signed by an unknown authority.\nYou can bypass the certificate check, but any data you send to the server could be intercepted by others.\nUse insecure connections? (y/n): y\n\nLogin successful.\n\n... output omitted ...\n")),Object(a.b)("h2",null,"Restrict Access for Project Self-Provisioning"),Object(a.b)("p",null,"We will cover two items such as “Restrict project self-provisioning to specific user groups” and “Configure project request messages” in this section. We will demonstrate 3 topics as folow:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You remove the user’s default permission to create their own projects and allow only production administrators to create projects."),Object(a.b)("li",{parentName:"ul"},"You set a message for users who attempt to create projects without appropriate permissions. "),Object(a.b)("li",{parentName:"ul"},"You allow users from the ocp-production group to create their own projects.  ")),Object(a.b)("h3",null,"Remove OAuth Authenticated Access to Role self-provisioner"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"View the self-provisioners cluster role binding:")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),'$ oc get clusterrolebinding self-provisioners -o yaml\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  annotations:\n    rbac.authorization.kubernetes.io/autoupdate: "true"\n  creationTimestamp: "2019-05-25T18:46:20Z"\n  name: self-provisioners\n  resourceVersion: "6265"\n  selfLink: /apis/rbac.authorization.k8s.io/v1/clusterrolebindings/self-provisioners\n  uid: 6304fb71-7f1d-11e9-a345-0624d0163962\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: self-provisioner\nsubjects:\n- apiGroup: rbac.authorization.k8s.io\n  kind: Group\n  name: system:authenticated:oauth\n')),Object(a.b)("p",null,"o\tThis role binding has the rbac.authorization.kubernetes.io/autoupdate: “true” annotation.\no\tTypically, you remove a cluster role binding with oc adm policy remove-cluster-role-from-group or oc adm policy remove-cluster-role-from-user. Because the autoupdate process restores the access, you cannot use either approach with the self-provisioners role binding yet."),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Set the rbac.authorization.kubernetes.io/autoupdate annotation on the self-provisioners cluster role binding to false:")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),"$ oc annotate clusterrolebinding self-provisioners --overwrite \\\n    'rbac.authorization.kubernetes.io/autoupdate=false'\nclusterrolebinding.rbac.authorization.k8s.io/self-provisioners annotated\n")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Remove the system:authenticated:oauth group from the self-provisioners cluster role binding:")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),'$ oc adm policy remove-cluster-role-from-group \\\n    self-provisioner system:authenticated:oauth\nclusterrole.rbac.authorization.k8s.io/self-provisioner removed: "system:authenticated:oauth"\n')),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Confirm that the self-provisioners cluster role binding still exists and has the rbac.authorization.kubernetes.io/autoupdate: “false” annotation, but no subjects:")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),'$ oc get clusterrolebinding self-provisioners -o yaml\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  annotations:\n    rbac.authorization.kubernetes.io/autoupdate: "false"\n  creationTimestamp: "2019-05-25T18:46:20Z"\n  name: self-provisioners\n  resourceVersion: "1773477"\n  selfLink: /apis/rbac.authorization.k8s.io/v1/clusterrolebindings/self-provisioners\n  uid: 6304fb71-7f1d-11e9-a345-0624d0163962\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: self-provisioner\n')),Object(a.b)("h3",null,"Configure Message with Project Request Instructions"),Object(a.b)("p",null,"With project self-provisioning disabled, it is helpful to provide users with a message to inform them of the correct way to request a new project in OpenShift."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create a file called projects-config.patch.json with the following JSON patch for the project request message:")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),'{\n  "spec": {\n    "projectRequestMessage": "Please create projects using the portal http://portal.company.internal/provision or PaaS Support at paas-support@example.com"\n  }\n}\n')),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Patch the cluster resource of kind projects.config.openshift.io with the patch file:")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),'$ oc patch projects.config.openshift.io cluster --type=merge \\\n    -p "$(cat projects-config.patch.json)"\nproject.config.openshift.io/cluster patched\n')),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Log in as the non-admin andrew user and attempt to create a project to verify that the project request message is active:")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),"$ oc login -u andrew -p 'r3dh4t1!'\nLogin successful.\n\nYou don't have any projects. Contact your system administrator to request a project.\n$ oc new-project test\nError from server (Forbidden): Please create project using the portal http://portal.company.internal/provision or PaaS Support at paas-support@example.com\n")),Object(a.b)("p",null,"If you do not see the full error message, wait a minute or two and try again. It takes a little while for the operator to update the configuration after the patch is applied."),Object(a.b)("h3",null,"Allow Production Administrators to Create Projects"),Object(a.b)("p",null,"You configure the ocp-production group that the LDAP group sync created so that its members can create projects."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Log in as the alice cluster-admin user:")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),"$ oc login -u alice -p 'p4ssw0rd'\n... output omitted ...\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Use oc adm policy again, but this time add the cluster role of self-provisioner to the ocp-production group:")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),"$ oc adm policy add-cluster-role-to-group self-provisioner ocp-production\n")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Log in to the system as the karla user, a member of the ocp-production group:")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),"$ oc login -u karla -p 'r3dh4t1!'\nLogin successful.\n")),Object(a.b)("p",null,"You don’t have any projects. You can try to create a new project, by running"),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),"oc new-project <projectname>\n")),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Attempt to create a project as the karla user and verify that this is now successful:")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),'$ oc new-project test\nNow using project "test" on server "https://api.cluster-7ae9.sandbox134.opentlc.com:6443".\n')),Object(a.b)("p",null,"You can add applications to this project with the ‘new-app’ command. For example, try:"),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),"    oc new-app django-psql-example\n")),Object(a.b)("p",null,"to build a new example application in Python. Or use kubectl to deploy a simple Kubernetes application:"),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),"kubectl create deployment hello-node --image=gcr.io/hello-minikube-zero-install/hello-node\n")),Object(a.b)("ol",{start:5},Object(a.b)("li",{parentName:"ol"},"Remove the test project:")),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{}),'$ oc delete project test\nproject.project.openshift.io "test" deleted\n')))}l.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-day-2-user-rbac-index-mdx-a856465c13f3da495175.js.map