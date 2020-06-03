(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),i=a.n(r),c=a("NmYn"),o=a.n(c),s=a("OKom"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),p=a("QH2O"),u=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(u.b)("div",{className:d()(p.pageHeader,(t={},t[p.withTabs]=r.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.text},a)))))},h=a("pEPl"),f=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=h.data.site.siteMetadata.repository,r=a||n,i=r.baseUrl,c=r.subDirectory,o=i+"/edit/"+r.branch+c+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+f.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:f.link,href:o},"Edit this page on GitHub"))):null},O=a("FCXl"),g=(a("Oyvg"),a("Wbzz")),P=a("I8xM");var N=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0}),i=r===n,c=new RegExp(n+"(?!-)"),s=a.replace(c,r);return Object(u.b)("li",{key:e,className:d()((t={},t[P.selectedItem]=i,t),P.listItem)},Object(u.b)(g.Link,{className:P.link,to:""+s},e))}));return Object(u.b)("div",{className:P.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:P.list},r))))))},n}(i.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=e.Title,c=t.frontmatter,b=void 0===c?{}:c,d=t.relativePagePath,p=t.titleType,h=b.tabs,f=b.title,g=b.theme,P=b.description,y=b.keywords,L=n.data.site.pathPrefix,v=L?r.pathname.replace(L,""):r.pathname,D=h?v.split("/").filter(Boolean).slice(-1)[0]||o()(h[0],{lower:!0}):"";return Object(u.b)(l.a,{tabs:h,homepage:!1,theme:g,pageTitle:f,pageDescription:P,pageKeywords:y,titleType:p},Object(u.b)(m,{title:i?Object(u.b)(i,null):f,label:"label",tabs:h}),h&&Object(u.b)(N,{slug:v,tabs:h,currentTab:D}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:d})),Object(u.b)(O.a,{pageContext:t,location:r,slug:v,tabs:h,currentTab:D}),Object(u.b)(s.a,null))}},"4grl":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return l}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c={},o={_frontmatter:c},s=r.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(s,i({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",null,"Configure LDAP Identity Provider"),Object(n.b)("p",null,"We will show you how to configre the LDAP Identity Provider (LDAP authentication) with OpenShift cluster.  "),Object(n.b)("h2",null,"Configure LDAP TLS Certificate Authority ConfigMap and Bind Password Secret"),Object(n.b)("p",null,"In our scenario, we will use the TLS for the LDAP protocol (a.k.a. LDAPS).  We will store the LDAP Server’s TLS certificate authority (CA) certificate in a ConfigMap in the openshift-config namespace.",Object(n.b)("br",{parentName:"p"}),"\n","The LDAP Server which we will use requires LDAP bind credentials to perform searches for user accounts. The bind user is configured as the bindDN in the Identity Provider configuration. The bind password must be stored as a secret using the bindPassword data key.   "),Object(n.b)("p",null,"Create a ConfigMap as follow."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"$ oc --user=admin create configmap -n openshift-config <configmap_name> --from-file=ca.crt=<ca_file_name>\n")),Object(n.b)("p",null,"Here is the command output in our environment."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"$ oc --user=admin create configmap -n openshift-config opentlc-ipa-tls-ca --from-file=ca.crt=ipa-ca.crt\nconfigmap/opentlc-ipa-tls-ca created\n$ \n")),Object(n.b)("p",null,"Then, create a secret as follow."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"$ oc --user=admin create secret generic -n openshift-config <secret_name> --from-literal=bindPassword=<password>\n")),Object(n.b)("p",null,"Here is the command output in our environment."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"$ oc --user=admin create secret generic -n openshift-config opentlc-ipa-bind-password --from-literal=bindPassword='r3dh4t1!'\nsecret/opentlc-ipa-bind-password created\n$ \n")),Object(n.b)("h2",null,"Configure LDAP Identity Provider"),Object(n.b)("p",null,"Now, we have a configmap and a secret for LDAP. Next step will configure the identity provider.\nEdit the oauth-config.yaml file and add the LDAP identity provider configuration.  Here are several field you would use with your LDAP authentication.  It really depends on your LDAP server configuration.  This is just an example.  "),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:"left"}),"Field"),Object(n.b)("th",i({parentName:"tr"},{align:"left"}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"ldap.attributes.email"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"User email address configured as mail")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"ldap.attributes.id"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"User identity in LDAP configured as dn")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"ldap.attributes.name"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Name attribute configured as cn")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"ldap.attributes.preferredUsername"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Preferred username configured as uid")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"ldap.bindDN"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"LDAP bind user DN for user search")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"ldap.bindPassword.name"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"OpenShift secret name configured with bind password for LDAP user search bind")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"ldap.ca.name"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"OpenShift ConfigMap name configured with ca.crt for your LDAP Server")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"ldap.insecure"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Configured for secure communication with TLS encryption")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"ldap.url"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"LDAP user search URL with base DN location for user accounts, username attribute set to uid, searching the LDAP subtree under the base DN, and filter to restrict users to only those that are member of specific group")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"name"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Identity provider name appears on the OpenShift Web Console")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"type"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"LDAP value indicates LDAP identity provider")))),Object(n.b)("p",null,"Here is an example of the oauth-config.yaml with LDAP identity provider."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),'apiVersion: config.openshift.io/v1\nkind: OAuth\nmetadata:\n  name: cluster\nspec:\n  identityProviders:\n  - name: Local Password\n    mappingMethod: claim\n    type: HTPasswd\n    htpasswd:\n      fileData:\n        name: htpasswd\n  - name: OPENTLC LDAP\n    challenge: true\n    login: true\n    mappingMethod: claim\n    type: LDAP\n    ldap:\n      attributes:\n        email: ["mail"]\n        id: ["dn"]\n        name: ["cn"]\n        preferredUsername: ["uid"]\n      bindDN: "uid=admin,cn=users,cn=accounts,dc=shared,dc=example,dc=opentlc,dc=com"\n      bindPassword:\n        name: opentlc-ipa-bind-password\n      insecure: false\n      ca:\n        name: opentlc-ipa-tls-ca\n      url: "ldaps://ipa.shared.example.opentlc.com:636/cn=users,cn=accounts,dc=shared,dc=example,dc=opentlc,dc=com?uid?sub?(memberOf=cn=ocp-users,cn=groups,cn=accounts,dc=shared,dc=example,dc=opentlc,dc=com)" \n\n')),Object(n.b)("p",null,"Once you create (or update) the yaml file, replace the OAuth configuration with the LDAP settings in the oauth-config.yaml file."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"$ oc --user=admin replace -f oauth-config.yaml\noauth.config.openshift.io/cluster replaced\n$ \n")),Object(n.b)("p",null,"In our scenario, we now have both Htpasswd and LDAP for the authentication. Since we have not logged in with the users via LDAP authentication yet, at this moment, we don’t see those users with “oc get users” command. We only see users who have logged in before with Htpasswd (Local Password) identity provider. In other words, until we logged in with those users, those users won’t show up."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"$ oc --user=admin get users\nNAME    UID                                    FULL NAME   IDENTITIES\nalice   962fdf1e-1848-11ea-a3e1-0a580a80011d               Local Password:alice\nbob     d0d4f046-1845-11ea-a3e1-0a580a80011d               Local Password:bob\n$ \n$ oc --user=admin get identities\nNAME                   IDP NAME         IDP USER NAME   USER NAME   USER UID\nLocal Password:alice   Local Password   alice           alice       962fdf1e-1848-11ea-a3e1-0a580a80011d\nLocal Password:bob     Local Password   bob             bob         d0d4f046-1845-11ea-a3e1-0a580a80011d\n$ \n")),Object(n.b)("h2",null,"Test LDAP Identity Provider"),Object(n.b)("p",null,"Access the OpenShift Console and you see three options for ",Object(n.b)("strong",{parentName:"p"},"Log in with…")," as shown in below."),Object(n.b)("img",{src:"/assets/img/day2/ldap_1.png",alt:"ldap_1"}),Object(n.b)("p",null,"For LDAP authentication, click on “OPENTLC LDAP” on the list.",Object(n.b)("br",{parentName:"p"}),"\n","Note that the “OPENTLC LDAP” is configured for the spec.identityProviders.name in the oauth-config.yaml file in the previous step.\nThen, we see the following page."),Object(n.b)("img",{src:"/assets/img/day2/ldap_2.png",alt:"ldap_2"}),Object(n.b)("p",null,"Then type the user and its password for the LDAP authentication.  "),Object(n.b)("p",null,"In our case, two users such as “andrew” and “karla” successfully logged in via LDAP authentication.\nCheck to see if those users will be showed up with oc commands."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"$ oc --user=admin get users\nNAME     UID                                    FULL NAME        IDENTITIES\nalice    962fdf1e-1848-11ea-a3e1-0a580a80011d                    Local Password:alice\nandrew   b8387e3f-1a70-11ea-abd6-0a580a80019a   andrew OSEUser   OPENTLC LDAP:dWlkPWFuZHJldyxjbj11c2Vycyxjbj1hY2NvdW50cyxkYz1zaGFyZWQsZGM9ZXhhbXBsZSxkYz1vcGVudGxjLGRjPWNvbQ\nbob      d0d4f046-1845-11ea-a3e1-0a580a80011d                    Local Password:bob\nkarla    2075f2ee-1a72-11ea-abd6-0a580a80019a   karla OSEUser    OPENTLC LDAP:dWlkPWthcmxhLGNuPXVzZXJzLGNuPWFjY291bnRzLGRjPXNoYXJlZCxkYz1leGFtcGxlLGRjPW9wZW50bGMsZGM9Y29t\n$ \n$ oc --user=admin get identities\nNAME                                                                                                          IDP NAME         IDP USER NAME                                                                                    USER NAME   USER UID\nLocal Password:alice                                                                                          Local Password   alice                                                                                            alice       962fdf1e-1848-11ea-a3e1-0a580a80011d\nLocal Password:bob                                                                                            Local Password   bob                                                                                              bob         d0d4f046-1845-11ea-a3e1-0a580a80011d\nOPENTLC LDAP:dWlkPWFuZHJldyxjbj11c2Vycyxjbj1hY2NvdW50cyxkYz1zaGFyZWQsZGM9ZXhhbXBsZSxkYz1vcGVudGxjLGRjPWNvbQ   OPENTLC LDAP     dWlkPWFuZHJldyxjbj11c2Vycyxjbj1hY2NvdW50cyxkYz1zaGFyZWQsZGM9ZXhhbXBsZSxkYz1vcGVudGxjLGRjPWNvbQ   andrew      b8387e3f-1a70-11ea-abd6-0a580a80019a\nOPENTLC LDAP:dWlkPWthcmxhLGNuPXVzZXJzLGNuPWFjY291bnRzLGRjPXNoYXJlZCxkYz1leGFtcGxlLGRjPW9wZW50bGMsZGM9Y29t     OPENTLC LDAP     dWlkPWthcmxhLGNuPXVzZXJzLGNuPWFjY291bnRzLGRjPXNoYXJlZCxkYz1leGFtcGxlLGRjPW9wZW50bGMsZGM9Y29t     karla       2075f2ee-1a72-11ea-abd6-0a580a80019a\n$\n")),Object(n.b)("p",null,"As you see above, “andrew” and “karla” are using the LDAP identity provider for their authentication."))}l.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-day-2-user-ldap-index-mdx-459db62fd5ba0f687588.js.map