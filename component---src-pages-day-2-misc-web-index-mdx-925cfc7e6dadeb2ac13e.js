(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"013z":function(e,t,n){"use strict";n("KKXr"),n("pIFo");var o=n("pOBw"),a=n("q1tI"),i=n.n(a),l=n("NmYn"),r=n.n(l),c=n("OKom"),s=n("k4MR"),b=n("TSYQ"),p=n.n(b),u=n("QH2O"),h=n("qKvR"),m=function(e){var t,n=e.title,o=e.tabs,a=void 0===o?[]:o;return Object(h.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=a.length,t))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:u.text},n)))))},d=n("pEPl"),f=n("BAC9"),O=function(e){var t=e.relativePagePath,n=e.repository,o=d.data.site.siteMetadata.repository,a=n||o,i=a.baseUrl,l=a.subDirectory,r=i+"/edit/"+a.branch+l+"/src/pages"+t;return i?Object(h.b)("div",{className:"bx--row "+f.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:f.link,href:r},"Edit this page on GitHub"))):null},g=n("FCXl"),j=(n("Oyvg"),n("Wbzz")),w=n("I8xM");var v=function(e){var t,n;function o(){return e.apply(this,arguments)||this}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],a=t.map((function(e){var t,a=r()(e,{lower:!0}),i=a===o,l=new RegExp(o+"(?!-)"),c=n.replace(l,a);return Object(h.b)("li",{key:e,className:p()((t={},t[w.selectedItem]=i,t),w.listItem)},Object(h.b)(j.Link,{className:w.link,to:""+c},e))}));return Object(h.b)("div",{className:w.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",null,Object(h.b)("ul",{className:w.list},a))))))},o}(i.a.Component),N=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,i=e.Title,l=t.frontmatter,b=void 0===l?{}:l,p=t.relativePagePath,u=t.titleType,d=b.tabs,f=b.title,j=b.theme,w=b.description,y=b.keywords,C=o.data.site.pathPrefix,S=C?a.pathname.replace(C,""):a.pathname,D=d?S.split("/").filter(Boolean).slice(-1)[0]||r()(d[0],{lower:!0}):"";return Object(h.b)(s.a,{tabs:d,homepage:!1,theme:j,pageTitle:f,pageDescription:w,pageKeywords:y,titleType:u},Object(h.b)(m,{title:i?Object(h.b)(i,null):f,label:"label",tabs:d}),d&&Object(h.b)(v,{slug:S,tabs:d,currentTab:D}),Object(h.b)(N.a,{padded:!0},n,Object(h.b)(O,{relativePagePath:p})),Object(h.b)(g.a,{pageContext:t,location:a,slug:S,tabs:d,currentTab:D}),Object(h.b)(c.a,null))}},ZFFm:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var o=n("7ljp"),a=n("013z");n("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l={},r={_frontmatter:l},c=a.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(c,i({},r,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",null,"Web Console Access Overview"),Object(o.b)("p",null,"The OpenShift Container Platform web console is a user interface accessible from a web browser. Developers can use the web console to visualize, browse, and manage the contents of projects.",Object(o.b)("br",{parentName:"p"}),"\n","After your OCP installation is completed then you can immediately access the Web Console.  In fact, the OCP installation script will display how access the webconsole as part of the installation complete message.  "),Object(o.b)("p",null,"To see more information please see the ",Object(o.b)("a",i({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/web-console/web-console.html"}),"Online documentation of the webconsole")),Object(o.b)("h1",null,"Day 1 Platform"),Object(o.b)("p",null,"As Day 1 tasks (or a preparation of the Day 2 tasks), you need to prepare the certificate for the URL of Web Console. During the installation, the self-singed certificate for the URL of Web console access will be generated."),Object(o.b)("h1",null,"Day 2 Platform"),Object(o.b)("p",null,"We can modify and customize the OpenShift Web Console.  We can also disable it."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",i({parentName:"li"},{href:"#configuring-the-web-console"}),"Configuring the web console"),": You can modify the OpenShift Container Platform web console"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",i({parentName:"li"},{href:"#Customizing-the-web-console"}),"Customizing the web console"),": You can customize the OpenShift Container Platform web console"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",i({parentName:"li"},{href:"#Managing-Developer-access"}),"Managing Developer access (user permissions)"),": Based on the RBAC rules, you can disable/enable capabilities on the Web console"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",i({parentName:"li"},{href:"#Disabling-the-web-console"}),"Disabling the web console"),": You can disable the OpenShift Container Platform web console"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",i({parentName:"li"},{href:"#Updating-the-cert-for-the-web-console"}),"Updating the certificate for the web console URL"),": You can replace the default certificate of the web console URL.")),Object(o.b)("h1",null,"Day 1 Application"),Object(o.b)("p",null,"N/A "),Object(o.b)("h1",null,"Day 2 Application"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",i({parentName:"li"},{href:"#The-Developer-perspective"}),"Developer Console"),": The Developer perspective provides workflows specific to developer use cases")),Object(o.b)("h1",null,"Mapping to Personas"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",i({parentName:"tr"},{align:null}),"Persona"),Object(o.b)("th",i({parentName:"tr"},{align:null}),"Day 2 Tasks"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",i({parentName:"tr"},{align:null}),"SRE"),Object(o.b)("td",i({parentName:"tr"},{align:null}),"Configuring the web console")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",i({parentName:"tr"},{align:null}),"SRE"),Object(o.b)("td",i({parentName:"tr"},{align:null}),"Customizing the web console")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",i({parentName:"tr"},{align:null}),"SRE"),Object(o.b)("td",i({parentName:"tr"},{align:null}),"Updating the certificate for the web console URL")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",i({parentName:"tr"},{align:null}),"SRE"),Object(o.b)("td",i({parentName:"tr"},{align:null}),"Disabling the web console")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",i({parentName:"tr"},{align:null}),"DevOps/SRE"),Object(o.b)("td",i({parentName:"tr"},{align:null}),"The Developer perspective")))),Object(o.b)("a",{name:"Configuring-the-web-console"}),Object(o.b)("h2",null,"Configuring the web console"),Object(o.b)("p",null,"You can modify the OpenShift Container Platform web console to set a logout redirect URL or disable the console by editing the console.config.openshift.io resource.  "),Object(o.b)("p",null,Object(o.b)("a",i({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/web_console/configuring-web-console.html"}),"https://docs.openshift.com/container-platform/4.3/web_console/configuring-web-console.html"),"  "),Object(o.b)("a",{name:"Customizing-the-web-console"}),Object(o.b)("h2",null,"Customizing the web console"),Object(o.b)("p",null,"You can customize the OpenShift Container Platform web console including the followings:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Adding a custom logo and product name"),Object(o.b)("li",{parentName:"ul"},"Creating custom links in the web console"),Object(o.b)("li",{parentName:"ul"},"Defining a template for an external log link"),Object(o.b)("li",{parentName:"ul"},"Creating custom notification banners"),Object(o.b)("li",{parentName:"ul"},"Customizing CLI downloads"),Object(o.b)("li",{parentName:"ul"},"Adding YAML examples to Kubernetes resources")),Object(o.b)("p",null,"It is especially helpful if you need to tailor the web console to meet specific corporate or government requirements."),Object(o.b)("p",null,Object(o.b)("a",i({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/web_console/customizing-the-web-console.html"}),"https://docs.openshift.com/container-platform/4.3/web_console/customizing-the-web-console.html"),"  "),Object(o.b)("a",{name:"The-Developer-perspective"}),Object(o.b)("h2",null,"The Developer perspective"),Object(o.b)("p",null,"The OpenShift Container Platform web console provides two perspectives; the Administrator perspective and the Developer perspective.\nThe Developer perspective provides workflows specific to developer use cases, such as the ability to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create and deploy applications on OpenShift Container Platform by importing existing codebases, images, and dockerfiles."),Object(o.b)("li",{parentName:"ul"},"Visually interact with applications, components, and services associated with them within a project and monitor their deployment and build status."),Object(o.b)("li",{parentName:"ul"},"Group components within an application and connect the components within and across applications."),Object(o.b)("li",{parentName:"ul"},"Integrate serverless capabilities (Technology Preview)."),Object(o.b)("li",{parentName:"ul"},"Create workspaces to edit your application code using Eclipse Che.")),Object(o.b)("p",null,Object(o.b)("a",i({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/web_console/odc-about-developer-perspective.html"}),"https://docs.openshift.com/container-platform/4.3/web_console/odc-about-developer-perspective.html"),"  "),Object(o.b)("a",{name:"Managing-Developer-access"}),Object(o.b)("h2",null,"Managing Developer access (User permissions)"),Object(o.b)("p",null,"You can manage what capabilities are enabled/disabled on the Web console for the DevOps engineer based on the RBAC rules.\nFor example, with the no-privileged user’s default settings, there is no “Monitoring” and “Compute” menu in the Administrator view.\n",Object(o.b)("img",i({parentName:"p"},{src:"/assets/img/day2/webconsole_diff_1.png",alt:"webconsole_diff_1"}))),Object(o.b)("p",null,"You can find the default user permissions in ",Object(o.b)("a",i({parentName:"p"},{href:"https://github.ibm.com/CASE/OCP-Day2-operations/blob/master/UserManagement/rbac/default_user_permissions.md"}),"here"),". "),Object(o.b)("p",null,"You can find out the information about the RBAC in ",Object(o.b)("a",i({parentName:"p"},{href:"https://github.ibm.com/CASE/OCP-Day2-operations/blob/master/UserManagement/README.md"}),"here"),".  "),Object(o.b)("a",{name:"Updating-the-cert-for-the-web-console"}),Object(o.b)("h2",null,"Updating the certificate for the web console URL"),Object(o.b)("p",null,"When you build an OpenShift 4 cluster, a self-signed certificate is applied to HTTPS endpoints such as the Web Console and API server by default.",Object(o.b)("br",{parentName:"p"}),"\n","Therefore, a certificate verification error occurs when accessing with a browser or the oc command, and it is necessary to perform an operation of “permit access to potentially insecure endpoints”, so in operations such as a production environment, it is not a good idea to keep using as it is.",Object(o.b)("br",{parentName:"p"}),"\n","In other words, you would replace it with a formal certificate if necessary.",Object(o.b)("br",{parentName:"p"}),"\n","In addition to the certificate corresponding to the API server (api. <OpenShift 4 cluster domain>), the certificate requires a wildcard certificate (* .apps. <OpenShift 4 cluster domain>) corresponding to Router.",Object(o.b)("br",{parentName:"p"}),"\n","Replacing a certificate is a very simple task. You will login to the cluster as a user with the cluster-admin role and applying the prepared formal certificate with the oc command.  "),Object(o.b)("p",null,"See the OpenShift official document for detailed instructions.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",i({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/networking/ingress-operator.html#nw-ingress-setting-a-custom-default-certificate_configuring-ingress"}),"https://docs.openshift.com/container-platform/4.3/networking/ingress-operator.html#nw-ingress-setting-a-custom-default-certificate_configuring-ingress")),Object(o.b)("a",{name:"Disabling-the-web-console"}),Object(o.b)("h2",null,"Disabling the web console"),Object(o.b)("p",null,"If you have any reason that you are not allow to use the web console of your OpenShift cluster, you can disable the OpenShift Container Platform web console by editing the console.operator.openshift.io resource."),Object(o.b)("p",null,Object(o.b)("a",i({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/web_console/disabling-web-console.html"}),"https://docs.openshift.com/container-platform/4.3/web_console/disabling-web-console.html"),"  "),Object(o.b)("h1",null,"Implementing Web Console"),Object(o.b)("p",null,"Since Web Console in OpenShift is the feature comes with OpenShift.  Which means that the information we mentioned above are for OpenShift only."),Object(o.b)("h2",null,"Kubernetes"),Object(o.b)("p",null,"Kubernetes provides the Web Console but it is not included in OpenShift.  In other words, OpenShift Web Console contains most of features which Kubenets Web Console provides and therefore we don’t need to use Kubenetes Web Console feature to manage OpenShift.  "),Object(o.b)("p",null,Object(o.b)("a",i({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"}),"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"),"  "),Object(o.b)("h2",null,"OpenShift"),Object(o.b)("p",null,"Information described in the previous sections are applicable only for OpenShift."),Object(o.b)("h2",null,"On IBM Cloud"),Object(o.b)("p",null,"OpenShift ",Object(o.b)("strong",{parentName:"p"},"managed service")," which is provided by ",Object(o.b)("strong",{parentName:"p"},"IBM Cloud")," provides its unique dashbaord as well as OpenShift Web Console which we described in this document above."),Object(o.b)("h2",null,"With IBM Cloudpak for MCM"),Object(o.b)("p",null,"N/A"),Object(o.b)("h2",null,"Others"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"KUI"),"\nKUI does not come with OCP.  KUI is an open source kubernetes application.  KUI is a Visual Web Terminal that allows you to interact with multiple command line tools in order to minimize context switching and get more done in a single place."),Object(o.b)("p",null,"The following is a sample of running a kubectl get pods.  It displays the output in a nice graphical format, and it provides context senstive next action."),Object(o.b)("p",null,"If you click on the name of the pods then it will display the output of the kubectl desc podsname."),Object(o.b)("img",{src:"/assets/img/day2/sample-kui-output.png",alt:"Kui Sample Output"}),Object(o.b)("p",null,"More information about KUI can be found in the ",Object(o.b)("a",i({parentName:"p"},{href:"https://kui.tools/"}),"KUI webpage")),Object(o.b)("h2",null,"Other consideration"),Object(o.b)("p",null,"n/a"))}s.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-day-2-misc-web-index-mdx-925cfc7e6dadeb2ac13e.js.map