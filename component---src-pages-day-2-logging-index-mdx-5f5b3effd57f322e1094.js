(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"013z":function(e,t,n){"use strict";n("KKXr"),n("pIFo");var a=n("pOBw"),o=n("q1tI"),l=n.n(o),r=n("NmYn"),i=n.n(r),c=n("OKom"),s=n("k4MR"),g=n("TSYQ"),b=n.n(g),u=n("QH2O"),p=n("qKvR"),d=function(e){var t,n=e.title,a=e.tabs,o=void 0===a?[]:a;return Object(p.b)("div",{className:b()(u.pageHeader,(t={},t[u.withTabs]=o.length,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.text},n)))))},m=n("pEPl"),h=n("BAC9"),f=function(e){var t=e.relativePagePath,n=e.repository,a=m.data.site.siteMetadata.repository,o=n||a,l=o.baseUrl,r=o.subDirectory,i=l+"/edit/"+o.branch+r+"/src/pages"+t;return l?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:i},"Edit this page on GitHub"))):null},O=n("FCXl"),j=(n("Oyvg"),n("Wbzz")),N=n("I8xM");var y=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=i()(e,{lower:!0}),l=o===a,r=new RegExp(a+"(?!-)"),c=n.replace(r,o);return Object(p.b)("li",{key:e,className:b()((t={},t[N.selectedItem]=l,t),N.listItem)},Object(p.b)(j.Link,{className:N.link,to:""+c},e))}));return Object(p.b)("div",{className:N.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:N.list},o))))))},a}(l.a.Component),C=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,o=e.location,l=e.Title,r=t.frontmatter,g=void 0===r?{}:r,b=t.relativePagePath,u=t.titleType,m=g.tabs,h=g.title,j=g.theme,N=g.description,w=g.keywords,v=a.data.site.pathPrefix,E=v?o.pathname.replace(v,""):o.pathname,k=m?E.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"";return Object(p.b)(s.a,{tabs:m,homepage:!1,theme:j,pageTitle:h,pageDescription:N,pageKeywords:w,titleType:u},Object(p.b)(d,{title:l?Object(p.b)(l,null):h,label:"label",tabs:m}),m&&Object(p.b)(y,{slug:E,tabs:m,currentTab:k}),Object(p.b)(C.a,{padded:!0},n,Object(p.b)(f,{relativePagePath:b})),Object(p.b)(O.a,{pageContext:t,location:o,slug:E,tabs:m,currentTab:k}),Object(p.b)(c.a,null))}},WtEH:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return s}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),o=n("013z");n("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={},i={_frontmatter:r},c=o.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,l({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"Logging Overview"),Object(a.b)("p",null,"The logs such as cluster platform logs and application logs are useful for debugging and and monitoring cluster and applications activity. The easiest and most embraced logging method for kubernetes platform components and containerized applications is to write to the standard output and standard error streams. These logs can be viewed on a Pod level using ",Object(a.b)("inlineCode",{parentName:"p"},"oc logs")," CLI or via OCP web console (Workload -> Pod -> Pod Details -> Logs)."),Object(a.b)("p",null,"However, the native functionality provided by a container engine or runtime is usually not enough for a complete logging solution. For example, if a container crashes, a pod is evicted, or a node dies, usually you will still want to access your application’s logs. As such, logs should have a separate storage location, and lifecycle that is independent of nodes, pods, or containers. This concept is called cluster-level-logging. Cluster-level logging requires a separate backend to store, analyze, and query logs. OpenShift provides a logging solution based on EFK stack (",Object(a.b)("a",l({parentName:"p"},{href:"https://www.elastic.co/products/elasticsearch"}),"Elasticsearch"),", ",Object(a.b)("a",l({parentName:"p"},{href:"http://www.fluentd.org/architecture"}),"Fluentd")," (or Rsyslog), and ",Object(a.b)("a",l({parentName:"p"},{href:"https://www.elastic.co/guide/en/kibana/current/introduction.html"}),"Kibana"),"). The collector, Fluentd, is deployed to each node in the OpenShift Container Platform cluster. It collects all node and container logs and writes them to Elasticsearch (ES). Kibana is the centralized web UI where users and administrators can create rich visualizations and dashboards with the aggregated data."),Object(a.b)("h1",null,"Day 1 Platform"),Object(a.b)("p",null,"Implementation of the Logging solution based on EFK stack provided by OCP should be planned during design (Day 0) phase. Ensure that you have the necessary persistent storage for Elasticsearch. Note that each Elasticsearch node requires its own storage volume."),Object(a.b)("p",null,"Elasticsearch is a memory-intensive application. Each Elasticsearch node needs 16G of memory for both memory requests and limits with OCP 4.3. The initial set of OpenShift Container Platform nodes might not be large enough to support the Elasticsearch cluster. In that case you may need to add additional nodes to the OpenShift Container Platform cluster to run with the recommended or higher memory. Each Elasticsearch node can operate with a lower memory setting though this is not recommended for production deployments."),Object(a.b)("p",null,"The OCP logging solution based on the EFK stack is deployed separately to OCP cluster installation. Follow the instructions specified in OpenShift documentation: ",Object(a.b)("a",l({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/logging/cluster-logging-deploying.html"}),"https://docs.openshift.com/container-platform/4.3/logging/cluster-logging-deploying.html")," in order to deploy full logging solution.\nCheck also the ",Object(a.b)("a",l({parentName:"p"},{href:"../Sup_EfkAws"}),"deployment steps for logging solution for OpenShift on AWS"),"."),Object(a.b)("p",null,"Deployment steps include installation of two Operators: Elasticsearch Operator and Cluster Logging Operator as well as creating of Cluster Logging Custom Resource (CR) to schedule cluster logging pods and other resources necessary to support cluster logging. The Operators are responsible for deploying, upgrading, and maintaining cluster logging.\n",Object(a.b)("img",l({parentName:"p"},{src:"/assets/img/day2/2020-02-11-17-05-10.png",alt:null}))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Day 1 Platform tasks for Logging:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Size system resources for logging components"),Object(a.b)("li",{parentName:"ul"},"Deploy Elasticsearch and Cluster Logging Operators   ")),Object(a.b)("h1",null,"Day 2 Platform"),Object(a.b)("p",null,"The default settings of Cluster Logging CR are tuned for small to medium sized OpenShift Container Platform clusters. If case of increased log traffic, the Cluster Logging CR can be reconfigured using instructions documented ",Object(a.b)("a",l({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/logging/cluster-logging-deploying-about.html#cluster-logging-deploy-about-config_cluster-logging-deploying-about"}),"here")," and the following chapters of this document."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Day 2 Platform tasks for Logging:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#Assigning-the-logging-resources-to-specific-nodes"}),"Assigning the logging resources to specific nodes")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#Configuring-Elasticsearch"}),"Configuring Elasticsearch")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#add-resources-to-elastic"}),"Adding additional resources to the Elastic stack")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#Configuring-Kibana"}),"Configuring Kibana")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#Configuring-Curator"}),"Configuring Curator")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#Configuring-log-collector-Fluentd"}),"Configuring log collector (Fluentd)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#Forwarding-logs-to-external-logging-systems"}),"Forwarding logs to external logging systems")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#Monitoring-of-Elasticsearch"}),"Monitoring of Elasticsearch")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#Monitoring-of-log-collector-Fluentd"}),"Monitoring of log collector (Fluentd)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#Building-Kibana-visualizations-and-dashboards"}),"Building Kibana visualizations and dashboards"),"   ")),Object(a.b)("h1",null,"Day 1 Application"),Object(a.b)("p",null,"Logs provide visibility into the behavior of a running application component and microservice, they are one of the most fundamental tools for debugging and finding issues within your application. If structured correctly, logs can contain a wealth of information about a specific event. Logs can tell us not only when the event took place, but also provide us with details as to the root cause. Therefore, it is important that the log entries are readable to humans and machines. CSMO GSE provides a set of recommendations for a proper logging during application code development (",Object(a.b)("a",l({parentName:"p"},{href:"https://www.ibm.com/cloud/architecture/files/service-management-pov-csmo-build-to-manage-v1.1.pdf"}),"Build to Manage POV - chapter 4.2 “Logging Format and Catalog"),").\nMake sure that all containerized application components log to STDOUT/STDERR in order to collect these logs automatically by Fluentd. "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Day 1 Application tasks for logging:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Good practices for logging during application code development    ")),Object(a.b)("h1",null,"Day 2 Application"),Object(a.b)("p",null,"Application logs are collected automatically by the OpenShift EFK stack and stored in the ",Object(a.b)("inlineCode",{parentName:"p"},"project.<project_name>.<project_id>.<date>")," index. Fluentd enriches application logs with broad set of metadata like container image name, pod name, project/namespace name, application name, worker node hostname etc."),Object(a.b)("img",{src:"/assets/img/day2/2020-02-11-16-03-08.png",alt:null}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Multi-tenancy")),Object(a.b)("p",null,"The EFK stack is configured out-of-the-box for multi-tenancy and individual users will have access to log entries only from components located in projects they have access. "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parsing log messages")),Object(a.b)("p",null,"If application generates logs in JSON format and we need to annotate individual fields in the log messages, then we just need to enable ",Object(a.b)("inlineCode",{parentName:"p"},"MERGE_JSON_LOG")," variable in the Fluentd daemonset as described ",Object(a.b)("a",l({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-collector.html#cluster-logging-collector-json_cluster-logging-collector"}),"here"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Day 2 Application tasks for logging:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"#Building-Kibana-visualizations-and-dashboards"}),"Building Kibana visualizations and dashboards")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-collector.html#cluster-logging-collector-throttling_cluster-logging-collector"}),"Throttling log collection (per application project)"))),Object(a.b)("h1",null,"Mapping to Personas"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:null}),"Persona"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"task"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"SRE"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Assigning the logging resources to specific nodes")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"SRE"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Configuring Elasticsearch")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"SRE"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Adding additional resources to the Elastic stack")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"SRE"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Configuring Kibana")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"SRE"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Configuring Curator")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"SRE"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Configuring log collector (Fluentd)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"SRE"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Forwarding logs to external logging systems")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"SRE"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Monitoring of Elasticsearch")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"SRE"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Monitoring of log collector (Fluentd)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"SRE & DevOps Engineer"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Building Kibana visualizations and dashboards")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"SRE & DevOps Engineer"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Throttling log collection (per application project)")))),Object(a.b)("h1",null,"Day 2 operations tasks for Logging"),Object(a.b)("a",{name:"Assigning-the-logging-resources-to-specific-nodes"}),Object(a.b)("h2",null,"Assigning the logging resources to specific nodes ","[ SRE ]"),Object(a.b)("p",null,"You can configure the Cluster Logging Operator to deploy the pods for any or all of the Cluster Logging components, Elasticsearch, Kibana, and Curator to different nodes. Edit the Cluster Logging CR and specify the ",Object(a.b)("inlineCode",{parentName:"p"},"nodeSelector")," for specific logging solution component in order to schedule it on required worker nodes as described ",Object(a.b)("a",l({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/logging/cluster-logging-moving-nodes.html"}),"here"),"."),Object(a.b)("a",{name:"Configuring-Elasticsearch"}),Object(a.b)("h2",null,"Configuring Elasticsearch ","[ SRE ]"),Object(a.b)("p",null,"OpenShift Container Platform uses Elasticsearch to store and organize the log data. You can configure storage for your Elasticsearch cluster and define how shards are replicated across data nodes in the cluster, CPU and memory limits or external access to Elasticsearch."),Object(a.b)("p",null,"The following Elasticsearch settings can be configured via ",Object(a.b)("inlineCode",{parentName:"p"},"Cluster Logging CR")," definition:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-elasticsearch.html#cluster-logging-elasticsearch-ha_cluster-logging-elasticsearch"}),"Define how shards are replicated across data nodes in the cluster")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-elasticsearch.html#cluster-logging-elasticsearch-exposing_cluster-logging-elasticsearch"}),"Configure external access to Elasticsearch data")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-elasticsearch.html#cluster-logging-elasticsearch-limits_cluster-logging-elasticsearch"}),"Configure Elasticsearch CPU and memory limits")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-tolerations.html#cluster-logging-elasticsearch-tolerations_cluster-logging-tolerations"}),"Configuring tolerations to control Elasticsearch pod placement"))),Object(a.b)("a",{name:"add-resources-to-elastic"}),Object(a.b)("h2",null,"Adding additional resources to the Elastic stack ","[ SRE ]"),Object(a.b)("p",null,"If, despite all efforts to manage resources, the Elastic stack requires more ",Object(a.b)("a",l({parentName:"p"},{href:"../Capacity/README.md"}),"capacity")," then additional Nodes can be added to the cluster for the Elastic stack’s use. There are a number of steps needed to make sure that the new Node can be used by the Elasticstack cluster:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-elasticsearch.html#cluster-logging-elasticsearch-storage_cluster-logging-elasticsearch"}),"Configure storage for Elasticsearch cluster")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-tolerations.html#cluster-logging-elasticsearch-tolerations_cluster-logging-tolerations"}),"Configuring tolerations to control Elasticsearch pod placement")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/cluster-logging-moving-nodes.html"}),"Add the relevant ",Object(a.b)("inlineCode",{parentName:"a"},"nodeSelector")," to the new Node"))),Object(a.b)("a",{name:"Configuring-Kibana"}),Object(a.b)("h2",null,"Configuring Kibana ","[ SRE ]"),Object(a.b)("p",null,"OpenShift Container Platform uses Kibana to display the log data collected by Fluentd and indexed by Elasticsearch. You can scale Kibana for redundancy and configure the CPU and memory for Kibana nodes."),Object(a.b)("p",null,"The following Kibana settings can be configured via ",Object(a.b)("inlineCode",{parentName:"p"},"Cluster Logging CR")," definition:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-kibana.html#cluster-logging-kibana-limits_cluster-logging-kibana"}),"Configure Kibana CPU and memory limits")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-kibana.html#cluster-logging-kibana-scaling_cluster-logging-kibana"}),"Scaling Kibana for redundancy")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-tolerations.html#cluster-logging-kibana-tolerations_cluster-logging-tolerations"}),"Configuring tollerations to control Kibana pod placement"))),Object(a.b)("a",{name:"Configuring-Curator"}),Object(a.b)("h2",null,"Configuring Curator ","[ SRE ]"),Object(a.b)("p",null,"The Elasticsearch Curator tool performs scheduled maintenance operations on a global and/or on a per-project basis. Curator performs actions (like pruning the old indexes) daily based on its configuration."),Object(a.b)("p",null,"The Cluster Logging Operator installs Curator and its configuration. You can configure the Curator cron schedule using the Cluster Logging CR and further configuration options can be found in the Curator ConfigMap, ",Object(a.b)("inlineCode",{parentName:"p"},"curator")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"openshift-logging")," project."),Object(a.b)("p",null,"The following Curator settings can be configured via ",Object(a.b)("inlineCode",{parentName:"p"},"Cluster Logging CR")," definition:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-curator.html#cluster-logging-curator-schedule_cluster-logging-curator"}),"Configuring the Curator schedule")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-curator.html#cluster-logging-curator-yaml_cluster-logging-curator"}),"Configuring Curator index deletion")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-tolerations.html#cluster-logging-curator-tolerations_cluster-logging-tolerations"}),"Configuring tollerations to control Curator pod placement"))),Object(a.b)("a",{name:"Configuring-log-collector-Fluentd"}),Object(a.b)("h2",null,"Configuring log collector (Fluentd) ","[ SRE ]"),Object(a.b)("p",null,"OpenShift Container Platform uses Fluentd to collect platform and application logs from your cluster which OpenShift Container Platform enriches with Kubernetes Pod and Namespace metadata."),Object(a.b)("p",null,"You can configure log rotation, log location, use an external log aggregator, and make other configurations for the log collector."),Object(a.b)("p",null,"The following log colector settings can be configured via ",Object(a.b)("inlineCode",{parentName:"p"},"Cluster Logging CR")," definition:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-collector.html#cluster-logging-collector-limits_cluster-logging-collector"}),"Configure Fluentd CPU and memory limits")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-collector.html#cluster-logging-collector-log-location_cluster-logging-collector"}),"Configuring the collected log location")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-collector.html#cluster-logging-collector-throttling_cluster-logging-collector"}),"Throttling log collection")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-collector.html#cluster-logging-collector-json_cluster-logging-collector"}),"Configuring log collection JSON parsing")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-collector.html#cluster-logging-collector-undefined_cluster-logging-collector"}),"Configuring how the log collector normalizes logs")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-collector.html#cluster-logging-collector-envvar_cluster-logging-collector"}),"Configuring the logging collector using environment variables")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-tolerations.html#cluster-logging-collector-tolerations_cluster-logging-tolerations"}),"Configuring tollerations to control Fluentd pod placement"))),Object(a.b)("a",{name:"Forwarding-logs-to-external-logging-systems"}),Object(a.b)("h2",null,"Forwarding logs to external logging systems ","[ SRE ]"),Object(a.b)("p",null,"The preferred logging management approach for your organization may be forwarding the logs to an external server with dedicated large capacity of storage. By sending log messages to a remote log server, it will help reduce disk space issues and also meet certain compliance requirements. OCP provides two ways to forward logs to external log server.  "),Object(a.b)("h3",null,"Log Forwarding feature (Tech Preview, OCP 4.3 only)"),Object(a.b)("p",null,"The cluster logging ",Object(a.b)("inlineCode",{parentName:"p"},"Log Forwarding")," feature enables administrators to configure custom pipelines to send your container and node logs to specific endpoints within or outside of your cluster. You can send logs by type (application logs, OCP platform logs or audit logs) to remote destinations not managed by OpenShift Container Platform cluster logging, such as your existing logging service, an external Elasticsearch cluster, external log aggregation solutions, or a Security Information and Event Management (SIEM) system. ",Object(a.b)("a",l({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-log-forwarding.html"}),"How to enable and configure Log Forwarding on OCP 4.3"),"."),Object(a.b)("h3",null,"Sending logs to external devices using Fluentd Forward plug-ins"),Object(a.b)("p",null,"Another altrnative method of forwarding logs to the external logging systems is to use Fluentd ",Object(a.b)("inlineCode",{parentName:"p"},"out_forward")," plug-in. This way we can configure Fluentd instances to forward logs to the extarnal secured Fluentd instance which can forward logs to any system suported by Fluentd. ",Object(a.b)("a",l({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-external.html"}),"How to configure Fluentd out_forward plugin on OCP 4.3"),"."),Object(a.b)("a",{name:"Monitoring-of-Elasticsearch"}),Object(a.b)("h2",null,"Monitoring of Elasticsearch ","[ SRE ]"),Object(a.b)("p",null,"Elasticsearch has built-in Prometheus support and can expose Prometheus metrics showing current health and performance. The Cluster Logging Operator automatically configures OCP Prometheus to collect Elasticsearch metrics. OCP provides also predefined set of alerts for OCP Elasticsearch:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"th"},"Alert")),Object(a.b)("th",l({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"th"},"Description")),Object(a.b)("th",l({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"th"},"Severity")))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"ElasticsearchClusterNotHealthy"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Cluster health status has been RED for at least 2m. Cluster does not accept writes, shards may be missing or master node hasn’t been elected yet."),Object(a.b)("td",l({parentName:"tr"},{align:null}),"critical")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"ElasticsearchClusterNotHealthy"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Cluster health status has been YELLOW for at least 20m. Some shard replicas are not allocated."),Object(a.b)("td",l({parentName:"tr"},{align:null}),"warning")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"ElasticsearchBulkRequestsRejectionJumps"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"High Bulk Rejection Ratio at node in cluster. This node may not be keeping up with the indexing speed."),Object(a.b)("td",l({parentName:"tr"},{align:null}),"warning")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"ElasticsearchNodeDiskWatermarkReached"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Disk Low Watermark Reached at node in cluster. Shards can not be allocated to this node anymore. You should consider adding more disk to the node."),Object(a.b)("td",l({parentName:"tr"},{align:null}),"alert")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"ElasticsearchNodeDiskWatermarkReached"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Disk High Watermark Reached at node in cluster. Some shards will be re-allocated to different nodes if possible. Make sure more disk space is added to the node or drop old indices allocated to this node."),Object(a.b)("td",l({parentName:"tr"},{align:null}),"high")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"ElasticsearchJVMHeapUseHigh"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"JVM Heap usage on the node in cluster is ",Object(a.b)("em",{parentName:"td"},"value")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"alert")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"AggregatedLoggingSystemCPUHigh"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"System CPU usage on the node in cluster is ",Object(a.b)("em",{parentName:"td"},"value")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"alert")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"ElasticsearchProcessCPUHigh"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"ES process CPU usage on the node in cluster is ",Object(a.b)("em",{parentName:"td"},"value")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"alert")))),Object(a.b)("p",null,"OCP Alerting can be further configured to forward events to external Event Managers like CEM or NOI or send as a notification like email or Slack message.  You can find out additional information in ",Object(a.b)("a",l({parentName:"p"},{href:"../EventManagement"}),"the Event Management section"),".  "),Object(a.b)("a",{name:"Monitoring-of-log-collector-Fluentd"}),Object(a.b)("h2",null,"Monitoring of log collector (Fluentd) ","[ SRE ]"),Object(a.b)("p",null,"Fluentd has built-in Prometheus support and can expose Prometheus metrics showing current status, health and performance. The Cluster Logging Operator automatically configures OCP Prometheus to collect Fluentd metrics. OCP provides also predefined set of alerts for OCP Fluentd:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"th"},"Alert")),Object(a.b)("th",l({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"th"},"Message")),Object(a.b)("th",l({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"th"},"Description")),Object(a.b)("th",l({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"th"},"Severity")))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"FluentdErrorsHigh"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"In the last minute, ",Object(a.b)("em",{parentName:"td"},"value")," errors reported by fluentd ",Object(a.b)("em",{parentName:"td"},"instance"),"."),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Fluentd is reporting a higher number of issues than the specified number, default 10."),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Critical")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"FluentdNodeDown"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Prometheus could not scrape fluentd ",Object(a.b)("em",{parentName:"td"},"instance")," for more than 10m."),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Fluentd is reporting that Prometheus could not scrape a specific Fluentd instance."),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Critical")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"FluentdQueueLengthBurst"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"In the last minute, fluentd ",Object(a.b)("em",{parentName:"td"},"instance")," buffer queue length increased more than 32. Current value is ",Object(a.b)("em",{parentName:"td"},"value"),"."),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Fluentd is reporting that it is overwhelmed."),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Warning")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"FluentdQueueLengthIncreasing"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"In the last 12h, fluentd ",Object(a.b)("em",{parentName:"td"},"instance")," buffer queue length constantly increased more than 1. Current value is ",Object(a.b)("em",{parentName:"td"},"value"),"."),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Fluentd is reporting queue usage issues."),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Critical")))),Object(a.b)("p",null,"OCP Alerting can be further configured to forward events to external Event Managers like CEM or NOI or send as a notification like email or Slack message. You can find out additional information in ",Object(a.b)("a",l({parentName:"p"},{href:"../EventManagement"}),"the Event Management section"),".  "),Object(a.b)("a",{name:"Building-Kibana-visualizations-and-dashboards"}),Object(a.b)("h2",null,"Building Kibana visualizations and dashboards ","[ SRE & DevOps Engineer ]"),Object(a.b)("p",null,"Read more about building Kibana visualizations and dashboards in the ",Object(a.b)("a",l({parentName:"p"},{href:"https://www.elastic.co/guide/en/kibana/5.6/getting-started.html"}),"Kibana User Guide"),"."),Object(a.b)("h1",null,"Implementing Logging Features"),Object(a.b)("h2",null,"Kubernetes"),Object(a.b)("p",null,"Kubernetes does not provide any centralized logging solution. Everything a containerized application writes to stdout and stderr is handled and redirected by a container engine to physical logs located on worker nodes. For example, the Docker container engine redirects those two streams to a logging driver, which is configured in Kubernetes to write to a file in json format. When you run ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl logs"),", the kubelet on the node handles the request and reads directly from the log file, returning the contents in the response."),Object(a.b)("h2",null,"OpenShift"),Object(a.b)("p",null,"OpenShift provides EFK stack pre-configured and managed by Cluster Logging Operator described in this document. ",Object(a.b)("a",l({parentName:"p"},{href:"../Sup_EfkAws"}),"Example deployment steps for logging solution for OpenShift on AWS"),"."),Object(a.b)("h2",null,"IBM Cloud"),Object(a.b)("p",null,"You can find which solutions are available for logging on IBM Cloud in ",Object(a.b)("a",l({parentName:"p"},{href:"../Sup_Log"}),"here"),"."),Object(a.b)("h2",null,"IBM Cloud Pak for MCM"),Object(a.b)("p",null,"IBM Cloud Pak for Multicloud Management provides logging solution based on ELK (based on Elasticsearch, Logstash, Kibana and Filebeat). You can read more about Day 2 Operations for this logging solution in our ",Object(a.b)("a",l({parentName:"p"},{href:"https://github.ibm.com/CASE/ICP-DAY2-Operations/tree/master/Logging"}),"ICP Day 2 Operations Guide for Logging"),". Installation of ELK stack is optional and can be ",Object(a.b)("a",l({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSFC4F_1.2.0/install/disable_and_enable_services.html"}),"enabled or disabled")," during MCM Cloud Pak installation."),Object(a.b)("p",null,Object(a.b)("a",l({parentName:"p"},{href:"https://www.humio.com/faq"}),"Humio")," is a new logging solution that is (or will be) included with IBM Cloud Pak for MCM. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://www.humio.com/ibm-humio"}),"Humio and MCM"),".")),Object(a.b)("h2",null,"Others"),Object(a.b)("p",null,Object(a.b)("a",l({parentName:"p"},{href:"https://grafana.com/oss/loki/"}),"Grafana Looki")," is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus. It is designed to be very cost effective and easy to operate. It does not index the contents of the logs, but rather a set of labels for each log stream."))}s.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-day-2-logging-index-mdx-5f5b3effd57f322e1094.js.map