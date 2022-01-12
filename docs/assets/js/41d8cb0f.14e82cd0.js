"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[971],{8401:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=n(3138),l=["components"],s={title:"Photos",hide_title:!0},p="[Photos](https://github.com/nacular/doodle-tutorials/tree/master/Photos) Tutorial",d={unversionedId:"photos",id:"photos",title:"Photos",description:"We will build a simple photo app that lets you view and manipulate images using a pointer or multi-touch. Images will be added to the app via drag-drop.",source:"@site/docs/photos.mdx",sourceDirName:".",slug:"/photos",permalink:"/doodle-tutorials/docs/photos",tags:[],version:"current",frontMatter:{title:"Photos",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Todo",permalink:"/doodle-tutorials/docs/todo"},next:{title:"Photo Stream",permalink:"/doodle-tutorials/docs/photostream"}},c=[{value:"Project Setup",id:"project-setup",children:[],level:2},{value:"The Application",id:"the-application",children:[],level:2},{value:"Creating A Full Screen App",id:"creating-a-full-screen-app",children:[],level:2},{value:"Drag-drop Support",id:"drag-drop-support",children:[],level:2},{value:"Importing An Image",id:"importing-an-image",children:[],level:2},{value:"Using Gestures",id:"using-gestures",children:[{value:"Capturing Initial Gesture State",id:"capturing-initial-gesture-state",children:[],level:3},{value:"Handling Gesture Updates",id:"handling-gesture-updates",children:[],level:3}],level:2}],h={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"photos-tutorial"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/nacular/doodle-tutorials/tree/master/Photos"},"Photos")," Tutorial"),(0,i.kt)("p",null,"We will build a simple photo app that lets you view and manipulate images using a pointer or multi-touch. Images will be added to the app via drag-drop.\nYou can then move, size, and rotate them with a mouse, pointer, touch, or via an info overlay."),(0,i.kt)("p",null,"Here is the end result."),(0,i.kt)(r.B,{functionName:"photos",height:"700",mdxType:"DoodleCodeBlock"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can also see the full-screen app ",(0,i.kt)("a",{parentName:"p",href:"https://nacular.github.io/doodle-tutorials/photos"},"here"),"."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"project-setup"},"Project Setup"),(0,i.kt)("p",null,"We will use a JS only-setup for this app."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nacular/doodle-tutorials/blob/master/Photos/build.gradle.kts"},(0,i.kt)("strong",{parentName:"a"},"build.gradle.kts"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n    kotlin("js")\n}\n\nkotlin {\n    jsTargets()\n\n    // Defined in gradle.properties\n    val doodleVersion    : String by project\n    val coroutinesVersion: String by project\n\n    sourceSets {\n        val commonMain by getting {\n            dependencies {\n                implementation("org.jetbrains.kotlin:kotlin-stdlib-js")\n                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:$coroutinesVersion") // async image loading\n\n                implementation("io.nacular.doodle:core:$doodleVersion"     ) // required for Doodle\n                implementation("io.nacular.doodle:browser:$doodleVersion"  ) // required for Doodle in the browser\n                implementation("io.nacular.doodle:controls:$doodleVersion" ) // provides things like buttons and panels\n                implementation("io.nacular.doodle:animation:$doodleVersion") // animations\n                implementation("io.nacular.doodle:themes:$doodleVersion"   ) // for Basic theme\n            }\n        }\n    }\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"the-application"},"The Application"),(0,i.kt)("p",null,"All Doodle apps must implement the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nacular/doodle/blob/master/Core/src/commonMain/kotlin/io/nacular/doodle/application/Application.kt#L4"},(0,i.kt)("inlineCode",{parentName:"a"},"Application")),"\ninterface. The framework will then initialize our app via the constructor."),(0,i.kt)("p",null,"The app's structure is fairly simple. It has a main Container that holds the images and supports drag-drop, and a panel with controls for manipulating\na selected image."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nacular/doodle-tutorials/blob/master/Photos/src/commonMain/kotlin/io/nacular/doodle/examples/PhotosApp.kt#L11"},(0,i.kt)("strong",{parentName:"a"},"PhotosApp.kt"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class PhotosApp(/*...*/): Application {\n    init {\n        // ...\n\n        val panelToggle                 // Button used to show/hide the panel\n        val panel                       // Has controls for manipulating images\n        val mainContainer = container { // container that holds images\n            // ...\n\n            dropReceiver = object: DropReceiver {\n                // support drag-drop importing\n            }\n\n            GlobalScope.launch {\n                listOf("tetons.jpg", "earth.jpg").forEachIndexed { index, file ->\n                    // load default images\n                }\n            }\n        }\n\n        display += listOf(mainContainer, panel, panelToggle)\n\n        // ...\n    }\n\n    override fun shutdown() {}\n}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"shutdown")," is a no-op, since we don't have any cleanup to do when the app closes."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"creating-a-full-screen-app"},"Creating A Full Screen App"),(0,i.kt)("p",null,"Doodle apps can be ",(0,i.kt)("a",{parentName:"p",href:"https://nacular.github.io/doodle/docs/applications"},"launched")," in a few different ways.\nWe create a helper to launch the app in ",(0,i.kt)("a",{parentName:"p",href:"https://nacular.github.io/doodle/docs/applications#top-level-apps"},"full screen"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nacular/doodle-tutorials/blob/master/Photos/src/main/kotlin/io/nacular/doodle/examples/FullScreen.kt#L22"},(0,i.kt)("strong",{parentName:"a"},"FullScreen.kt"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'package io.nacular.doodle.examples\n\n//...\n\nfun fullscreen() {\n    application(modules = listOf(\n        FocusModule,\n        KeyboardModule,\n        DragDropModule,\n        basicLabelBehavior(),\n        nativeTextFieldBehavior(spellCheck = false),\n        basicMutableSpinnerBehavior(),\n        basicCircularProgressIndicatorBehavior(thickness = 18.0),\n        Module(name = "AppModule") {\n            bindSingleton<Animator>    { AnimatorImpl   (instance(), instance()) }\n            bindSingleton<ImageLoader> { ImageLoaderImpl(instance(), instance()) }\n        }\n    )) {\n        // load app\n        PhotosApp(instance(), instance(), instance(), instance(), instance(), instance())\n    }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Normally this would just be your ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function. But ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," would prevent the app from being used as a library. Which\nis what happens to allow both an embedded (in the docs) and full-screen version."))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"application")," function launches apps. It takes a list of modules, and a lambda that builds the\napp. This lambda is within a Kodein injection context, which means we can inject dependencies into our app via\n",(0,i.kt)("inlineCode",{parentName:"p"},"instance"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"provider"),", etc."),(0,i.kt)("p",null,"Notice that we have included several modules for our app. This includes one for focus, keyboard, drag-drop and several for various\nView ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nacular/doodle/blob/master/Core/src/commonMain/kotlin/io/nacular/doodle/core/Behavior.kt#L7"},(0,i.kt)("inlineCode",{parentName:"a"},"Behaviors")),"\n(i.e. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nacular/doodle/blob/master/Browser/src/jsMain/kotlin/io/nacular/doodle/theme/native/NativeTheme.kt#L108"},(0,i.kt)("inlineCode",{parentName:"a"},"nativeTextFieldBehavior()")),")\nwhich loads the native behavior for TextFields. We also define some bindings directly in a new module. These are items with no\nbuilt-in module, or items that only exist in our app code."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Check out Kodein to learn more about how it handles dependency injection."))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"application")," function also takes an optional HTML element within which the app will be hosted. The app will be hosted in\n",(0,i.kt)("inlineCode",{parentName:"p"},"document.body")," if you do not specify an element."),(0,i.kt)("p",null,"App launching is the only part of our code that is platform-specific; since it is the only time we might care\nabout an HTML element. It also helps support embedding apps into non-Doodle contexts."),(0,i.kt)("h2",{id:"drag-drop-support"},"Drag-drop Support"),(0,i.kt)("p",null,"Drag-drop support requires the ",(0,i.kt)("inlineCode",{parentName:"p"},"DragDropModule")," (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nacular/doodle/blob/master/Browser/src/jsMain/kotlin/io/nacular/doodle/application/Modules.kt#L94"},"Browser")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nacular/doodle/blob/master/Desktop/src/jvmMain/kotlin/io/nacular/doodle/application/Modules.kt#L81"},"Desktop")," to work. It then requires setting up drag/drop recognizers on the source/target Views. We created\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"mainContainer")," for this. You can see that the ",(0,i.kt)("inlineCode",{parentName:"p"},"dropReceiver")," property is set to a ",(0,i.kt)("inlineCode",{parentName:"p"},"DropReceiver")," that controls how the ",(0,i.kt)("inlineCode",{parentName:"p"},"mainContainer")," handles\ndrop events."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class PhotosApp(/*...*/ private val images: ImageLoader /*...*/): Application {\n    init {\n        // ...\n        val mainContainer = container {\n            // ...\n\n            dropReceiver = object: DropReceiver {\n                private  val allowedFileTypes                    = Files(ImageType("jpg"), ImageType("jpeg"), ImageType("png"))\n                override val active                              = true\n                private  fun allowed          (event: DropEvent) = allowedFileTypes in event.bundle\n                override fun dropEnter        (event: DropEvent) = allowed(event)\n                override fun dropOver         (event: DropEvent) = allowed(event)\n                override fun dropActionChanged(event: DropEvent) = allowed(event)\n                override fun drop             (event: DropEvent) = event.bundle[allowedFileTypes]?.let { files ->\n                    val photos = files.map { GlobalScope.async { images.load(it)?.let { FixedAspectPhoto(it) } } }\n\n                    GlobalScope.launch {\n                        photos.mapNotNull { it.await() }.forEach { photo ->\n                            import(photo, event.location)\n                        }\n                    }\n                    true\n                } ?: false\n            }\n        }\n    }\n\n    // ...\n}\n')),(0,i.kt)("p",null,"Our ",(0,i.kt)("inlineCode",{parentName:"p"},"DropReceiver")," specifies the supported file-types (jpg, jpeg, and png). It then checks that any drop event contains valid files before accepting it. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"drop(event: DropEvent)")," method is called when the user attempts the final drop. Here, the receiver fetches all the allowed files in the bundle,\nand tries to load and import each one. Notice that the receiver converts raw Image returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"ImageLoader")," into a ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedAspectPhoto"),"."),(0,i.kt)("h2",{id:"importing-an-image"},"Importing An Image"),(0,i.kt)("p",null,"We import images using a local ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," function inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"mainContainer")," creation block. This simplifies access to local state. The ",(0,i.kt)("inlineCode",{parentName:"p"},"import"),"\nfunction takes a photo, which is a ",(0,i.kt)("inlineCode",{parentName:"p"},"View"),", and a location to place it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val import = { photo: View, location: Point ->\n\n}\n")),(0,i.kt)("p",null,"Import resizes and centers the photo at the given point. It is center-rotates it between -15\xb0 and 15\xb0. Finally, a listener is added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"pressed"),"\npointer event. This moves the photo to the foreground and updates the panel."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"photo.width           = 400.0\nphoto.position        = location - Point(photo.width / 2, photo.height / 2)\nphoto.transform       = Identity.rotate(location, (Random.nextFloat() * 30 - 15) * degrees)\nphoto.pointerChanged += pressed {\n    children.move(photo, to = children.size - 1)\n    panel.setPhoto(photo)\n}\n")),(0,i.kt)("h2",{id:"using-gestures"},"Using Gestures"),(0,i.kt)("p",null,"Import also registers a custom gesture listener to support multi-touch scaling and rotations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"GestureRecognizer(photo).changed += object: GestureListener<GestureEvent> {\n    // ...\n\n    override fun started(event: GestureEvent) {\n        // capture initial state\n        event.consume()\n    }\n\n    override fun changed(event: GestureEvent) {\n        // 1) calculate rotation angle\n        // 2) update photo transform to include rotation\n        // 3) update photo bounds based on scaling\n        event.consume()\n    }\n\n    override fun ended(event: GestureEvent) {\n        // simply consume event\n        event.consume()\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GestureRecognizer")," takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"View")," and emits events whenever it detects motion from 2 or more pointers in that ",(0,i.kt)("inlineCode",{parentName:"p"},"View"),". It also calculates\na scale value by comparing the distance between the selected pointers over time."),(0,i.kt)("p",null,"We register a listener that uses the events to update the photo's ",(0,i.kt)("inlineCode",{parentName:"p"},"transform")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"bounds"),". The listener also consumes events to avoid\nthem making it to subsequent pointer listeners (the ",(0,i.kt)("inlineCode",{parentName:"p"},"Resizer")," used for single pointer manipulation in this case)."),(0,i.kt)("h3",{id:"capturing-initial-gesture-state"},"Capturing Initial Gesture State"),(0,i.kt)("p",null,"We record the state of our photo, and the pointers provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"GestureRecognizer")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"started")," event. Notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"GestureRecognizer"),"\nprovides locations in the photo's local coordinate. This makes sense for a general-purpose utility and matches the way Doodle reports\npointer events. We use these values to modify the photo's bounds though, which is defined in its parent's coordinates. So we map the points\ninto the parent before our calculations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"override fun started(event: GestureEvent) {\n    // Capture initial state to apply deltas with in `changed`\n    originalSize     = photo.size\n    originalCenter   = this@container.toLocal(event.center, photo)\n    originalVector   = event.initial[1].inParent(photo) - event.initial[0].inParent(photo)\n    originalPosition = photo.position\n    initialTransform = photo.transform\n\n    event.consume() // ensure event is consumed from Resizer\n}\n")),(0,i.kt)("h3",{id:"handling-gesture-updates"},"Handling Gesture Updates"),(0,i.kt)("p",null,"The values recorded in ",(0,i.kt)("inlineCode",{parentName:"p"},"started")," are used--along with the new state--in the ",(0,i.kt)("inlineCode",{parentName:"p"},"changed")," event to update the selected photo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"override fun changed(event: GestureEvent) {\n    val currentVector = event.current[1].inParent(photo) - event.current[0].inParent(photo)\n\n    // Angle between initial set of points and their current locations\n    val transformAngle = atan2(\n        originalVector.x * currentVector.y - originalVector.y * currentVector.x,\n        originalVector.x * currentVector.x + originalVector.y * currentVector.y\n    )\n\n    // Use transform for rotation\n    photo.transform = initialTransform.rotate(around = originalCenter, by = transformAngle)\n\n    // Update bounds instead of scale transformation\n    photo.bounds = Rectangle(\n            originalPosition - ((originalPosition - originalCenter) * (1 - event.scale)),\n            originalSize * event.scale)\n\n    event.consume() // ensure event is consumed from Resizer\n}\n")))}u.isMDXComponent=!0}}]);