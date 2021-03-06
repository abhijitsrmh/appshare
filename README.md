
# AppShare


## Build and share internal database apps
AppShare is a web based tool used to build and share internal database apps fast. There is a demo which works on desktop web browsers here:

Demo: https://appshare.co/app/homepage.html
<br/><br/>
Link to PDF docs (still using the old name Yazz Pilot): https://appshare.co/visifile/docs/appshare_march_2020.pdf
<br/><br/>
Link to Hacker News Post (when it was known as Yazz Pilot): https://news.ycombinator.com/item?id=21734845
<br/><br/><br/>







## Benefits

- Build apps apps in minutes using drag and drop UI
- Fast to deploy on Docker or any Kubernetes cluster
- Can run with NodeJS
- Reuse via pre built components such as buttons, text boxes, and data access components to talk to Postgres, Mysql, or REST APIs
- Can automatically pipe changes from one UI component to another
<br/><br/><br/>




## Current Features

- Drag and drop UI interface
- Code business logic in Javascript
- Each app has a built in SQLite database
- Open source MIT license
- Can run in Docker, Kubernetes, or OpenShift, as a Snap package, or locally on Mac, Windows, Linux, Raspberry PI using NodeJS
- Can build Microservices
- All source code for apps can be saved as a single .jsa file
- Apps can be saved as a single HTML file and sent by email (Even SQlite based apps)
- All code is stored as immuntable, and identified by a SHA256 hash
- The AppShare editor and output programs can work offline without internet connectivity
- Extra UI or server components can be build as plugins (as .jsa files)
- The AppShare extensible IDE allows you to build new ways of editing code. Currently a text editor and a Visual Basic style editor are included
<br/><br/><br/>


## Future Features

- An App Store so that Enterprise users and third party ISVs can discover, create, buy, and sell AppShare components and apps
- A VR/AR editor
- Paid for hosting options
- Support for Istio, Rancher, KNative, OpenWhisk, OpenFaas, AWS
- Machine Learning and vision components
- Enterprise connectivity via Red Hat, IBM, Salesforce, SAP, Oracle, Stripe, and other enterprise components
<br/><br/><br/>






## Quick examples
### Upload a Microservice from a Javascript file

First you need to run AppShare, assuming you have Docker installed:

> &gt; docker run -p 80:3000 -d zubairq/appshare

```
......................................................................................................
AppShare started on:
http://0.0.0.0:3000
```

Upload a micro-service:

> &gt; cat a.js

```
function(args) {  
    /*
    rest_api('test3')
    */

    return {ab: 163}
}
```

> &gt; curl -F 'file=@a.js' http://localhost:3000/file_upload

Finally browse to the following URL in your browser to see the microservice running:

    http://0.0.0.0:3000/test3





<br/><br/><br/>
## Starting the AppShare server

### Run from docker:

    docker run -p 80:3000 -d zubairq/appshare

```
......................................................................................................
AppShare started on:
http://localhost:3000
```

<br/><br/><br/>
### Run as a Snap package on Linux

    snap install --devmode --edge appshare

    appshare

[![Get it from the Snap Store](https://snapcraft.io/static/images/badges/en/snap-store-black.svg)](https://snapcraft.io/appshare)





<br/><br/><br/>
### Docker Quick start (with Docker deploy enabled)
##### 1) Download and run Docker
##### 2) Expose the Docker REST api on port 1234 with:
    docker run -d -v /var/run/docker.sock:/var/run/docker.sock -p 127.0.0.1:1234:1234 bobrik/socat TCP-LISTEN:1234,fork UNIX-CONNECT:/var/run/docker.sock
##### 3) Install and run the AppShare IDE with:
    docker run -p 80:3000 -d zubairq/appshare

##### 4) Go to a browser and view AppShare:
    http://localhost





<br/><br/><br/>
### Run AppShare on Linux, Mac, or Windows with NodeJS

##### 1) Install GIT from https://git-scm.com/downloads
##### 2) Install Node.js 8.9 64 bit installer from https://nodejs.org/en/download/
##### 3) From the command line get the Git repository
    git clone https://github.com/zubairq/appshare.git
##### 4) Go to the "appshare" directory
    cd appshare
##### 5) Install the NodeJS modules
    sudo npm install
##### 6) Run the AppShare NodeJS application
    node src/electron.js






<br/><br/><br/>
### Build a command line exexutable for MacOS
    nexe src/electron.js -r public/ -r src/ -r package.json -r node_sqlite3.node  -o appshare




<br/><br/><br/>
## Command line options:

    --help                 output usage information
    --version              output the version number
    --port                 Which port should I listen on? Default 80 or 3000 (if not run as sudo)
    --host                 Server address of the central host (default is local machine IP address)
    --locked               Allow server to be locked/unlocked on start up to other machines in intranet (default true)
    --deleteonexit         Delete database files on exit (default false)
    --deleteonstartup      Delete database files on startup (default false)
    --runapp               Run using a local app on startup (default not set). "homepage" often used
    --https                Run using a HTTPS (default is false)
    --private              Private HTTPS key location
    --public               Public HTTPS certificate location











<br/><br/><br/>
## FAQ


### What is AppShare's killer feature?
AppShare's killer feature is being able to build simple applications in minutes. It is run as a container and has no dependencies.




### What is AppShare's long term vision?
AppShare's long term vision is as a system for embedded computing, for personal automation and medical applications. It could be used for personal automated assistents, such as helping automated devices, or for small medical devices that can be inserted into body using TensorFlow and tiny cameras for detection and processing of issues with the body. We are developing an app store, and initial versions of AppShare are building UIs for internal enterprise apps, but we also believe that we should support systems which do not require apps, as some systems can use autodiscovery of components to each other to work. As an example, if a particular cell type is found by computer vision which is not recognised, AppShare could go out to the network to see if another compnent recognises this cell



### Why doesn't AppShare let me edit mutliple files as a tree like a traditional IDE?
AppShare breaks down all problems into single function components. A component can call other components as well if needed



### Is AppShare Production ready?
Yes, AppShare is production ready. AppShare itself runs on AppShare




### Is AppShare looking for investment
No



###  Does AppShare work with VMWare PKS or other versions of Kubernetes?
AppShare has been tested with standard Kubernetes, Open Shift, and Docker. We will test with more versions, including Rancher astime goes on.


###  Who should use AppShare today?
Anyone who wants to build small web apps for internal use on their intranet



### How does AppShare relate to Visual Basic?
The author is a huge fan opf Visual Basic 6 and earlier, and the VBX/OCX component ecosystems that existed in the 1990s, so the author of AppShare is trying to recreate the Visual Basic 6 ecosystem in Javascript.



### What does the AppShare Scheduler do?
The Scheduler is a NodeJS process which decides which worker processes to send server tasks to.



### How do AppShare processes communicate with each other?
Using IPC (Inter Process Communication)




### What is the basic Unit of code in AppShare?
A component is the basic unit of code in AppShare, represented as a function in a .jsa text file.



### How does AppShare differ from Visual Basic?
The Visual basic style development environment in AppShare is just a AppShare component itself. Other development paradigms can also be built in, with a VR/AR development environment planned for the future using Oculus Quest and WebXR.




### How much will AppShare cost?
AppShare is free to download and use. We will be releasing a hosted version at some point.






### If AppShare is privately funded then why are you not all working full time?
We could work full time on AppShare but we made a conscious decision to work part time on it until we know we have product market fit. This is so that we make sure that we are solving real problems that people have in the real world. We are scared that if we went full time then we would lose touch with reality, as seems to happen with so many startups in this space. Of course, being part time is much harder, as things move much more slowly with regard to developing the product, but we expect that we will be more efficient since we won't be building stuff that isn't needed.



### Does AppShare use AI?
Not yet, but AI is planned in the future for machine vision and learning algorithms. Also AI may be used to match component inputs and outputs and for intelligent code completion in the IDE.




### What does AppShare mean by Self Service?
When we say Self Service we mean that AppShare can be used by people who are not Professional programmers.



### Is there commercial support for AppShare?
If you require commercial support then please go to https://appshare.co




### I'm worried about vendor lock-in - what happens if AppShare goes out of business?
AppShare is Open Source so you can download the opensource repo or fork the Github repo.




### I'm worried about vendor lock-in - what happens if AppShare stays in business but I still need to move off?
AppShare is based on VueJS, HTML, and Javascript so you can slowly migrate to similar technologies in the ecosystem.



### I want to write libraries for AppShare - how can I take part in the AppShare community/ecosystem?
We will be releasing our dev guidelines soon.



### What happens if a server side component goes bad in AppShare?
AppShare runs all server components in their own child NodeJS process, so if a component goes bad then AppShare will restart kill the NodeJS process, restart a new NodeJS process, and return an error code to the caller





### How does version control work in AppShare?
AppShare removes the complexity of separate version control systems like git. Changes to your code are structured using distributed diff algorithms.

### How does AppShare relate to Unison language
There is no relation except that both Unison and AppShare are based on the principal of immutable code.





### How does AppShare relate to StoryScript language
StoryScript is a Glue code for multiple languages, whereas AppShare is only one dialect of Javascript

### How does AppShare relate to Eve?
Some concepts of universality are taken from Eve

### How does AppShare relate to Microsoft?
One of the developers works at Microsoft full time

### How does AppShare relate to Google?
One of the developers works at Goole full time, related to new Operating System concepts and Fuchsia


### Why don't Google or Microsoft developers commit to  the GitHub repo directly?
They have their reasons. Plus, they HATE Javascript. They much prefer .NET, Dart, Go, Typescript, and other cool stuff!


### Every time I restart AppShare I can't see my apps. How to I save them?
You need to save the apps that you wish to keep by pessing the button "Save as .jsa file" fro the editor.


### I’m already invested in my favorite text editor. Can I keep using it with AppShare?
AppShare's basic file format is text, so you can use any editor.



### How does AppShare compare to https://www.anytype.io/?
As of January 2020 AnyType is still closed source. Anytype does use IPFS for storage which is a technology, along with QRI that AppShare is considering for data storage.



### How does AppShare compare to Retool?
As of January 2020 Retool is a great SAAS offering



### How does AppShare compare to Javascript frameworks like VueJS, React , and Angular?
First off, AppShare, uses VueJS under the hood to  build UI components. AppShare is very different to all those frameworks as AppShare does not require deep coding skills or knowledge of HTML. You do need to know some Javascript to use AppShare though.

### Is it planned to support other languages than Javascript in AppShare?
No


### How does AppShare compare to Airtable?
It doesn't. Well, Airtable is a database tool which can have apps built on top of as well, whereas AppShare really is to build apps on top of enterprise APIs and databases.



### How does AppShare compare to Anvil?
Anvil uses Python to build apps whereas AppShare uses Javascript. But Anvil is very good, try it!


### How does AppShare compare to Mendix?
Mendix is a commercial low code product owned by Siemens, and is a very different thing since it is closed source.





### How does AppShare compare to Outsystems?
Outsystems is a commercial low code product and is a very different thing since it is closed source.



### How does AppShare compare to Node Red?
Node Red is a very intuitive system to process events and actions by linking nodes together. It has a different use case than AppShare.





### How does AppShare compare to Huginn
Huginn is a very intuitive personal task handler




### How does AppShare compare to IFTTT
IFTTT is a web only SAAS task automator




### How does AppShare compare to Zapier
Zapier is a web only SAAS task automator




### How does AppShare compare to Stdlib
Stdlib is great cross platform event handler



### How does AppShare compare to Delphi
Delphi was a desktop IDE from the 1990s using Pascal as the programming language, and had a great set of controls and was even VBX (Visual Basic Custom Controls) comptible. Not many people use Deplhi today a it is mostly used for desktop Windows apps



### Do Visual Basic apps run on AppShare?
No




### Can I use my VBX/OLE controls in a AppShare app?
No


### Is it true that AppShare switched to Javascript, even though they publicly spoke out against it?
Yes, we were wrong... here is what we wrote earlier against Javascript:

What is a connected client? A connected client is a device which connects to the world of realtime data from any Connected Client, whether it is a phone, a watch, a web browser, or anything else. But Chris Schmidt of Meteor says it far better than I ever could in this must see video:

https://www.youtube.com/watch?v=8G2SMVIUNNk

In the video Chris Schmidt talks about how the Meteor platform based on Javascript will solve the problems of the connected web. I agree that you can build amazing things with Meteor, but I do not necessary agree that Javascript is the most productive language in which to do this. I think that Clojure and Clojurescript can be used to let you build Connected Clients much faster, and all without Javascript.

But how can we say that Javascript is not the right language for this? Well, Javascript is very much like the early 8088 assembly languages of 40 years ago, where it can run in many places, but over time more and more high level languages were built on top of it, like C, C++, Basic, Java, etc. Javascript is going through exactly the same thing now and more and more languages are appearing on top of it. Like any challenged technology Javascript is evolving rapidly with ES6, to fight off any newcomers.




### Why did AppShare switch to Javascript from Clojure/Clojurescript?
We were limiting ourselves to a very small subset of developers by being in Clojure/Clojurescript, whereas Javascript has a much larger developer reach



### Where can I find the app store for AppShare?
It is under development




### Does AppShare work offline?
Yes! One of the great things about AppShare is that it can be run offline in your own datacenter, or on your own PC, totally disconnected from the internet. We have even seen AppShare running on a standalone disconnected Raspberry PI.


### How does AppShare compare to Bubble.io?
As of January 2020 Bubble is a hosted web app builder, one of the first great online CRUD app builders.

### Is there community for AppShare?
You can join us here http://AppShare-workspace.slack.com



### What is the extension for all AppShare apps?
The extension is ".jsa" but you can also use the ".js" extension for loading some simple Javascript apps



<br/><br/><br/>
## Join our Slack group
https://AppShare-workspace.slack.com
