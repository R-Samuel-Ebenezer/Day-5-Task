
//1.Create your own resume data in JSON format

let myResume={
    "basics": {
      "name": "SAMUEL EBENEZER",
      "email": "samebi.akm@gmail.com",
      "phone": 9600500538,
      "degree": "BCA",
      "location": {
        "address": "No,29. Nethaji Nagar Sholingur Road",
        "postalCode": 631003,
        "city": "Arakkonam",
        "District":"Ranipet"
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "https://www.linkedin.com/in/samuel-ebenezer-377a07238/",
          "github":"https://github.com/R-Samuel-Ebenezer"
        }
      ]
    },
    "work": [
      {
        "company": "NEWS J",
        "position": "Journalist",
        "startDate": "2016-07-01",
        "endDate": "2024-02-04",
        "summary": "i am the Vellore Zone Head Collecting News and Current Affair",
      },
    ],
    "education": [
      {
        "Collage": "Sri ram Collage",
        "department": "BCA",
        "studyType": "fulltime",
        "batch start year": 2011,
        "batch end year": 2013,
        
      }
    ],
    "skills": [
      {
        "name": "python,javascript,photoshop,adobe primerpro,aftereffect
        "level": "beginer",
        
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "script writter,youtuber,",
      }
    ]
  }
  console.log(myResume);

//2. For the above JSON, iterate over all for loops (for, for in, for of, forEach)


var json = [{
    "id" : "samuel-1", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen 5 task",
    "mail": "samebi.akm@gmail.com"
},
{
    "id" : "samuel-2", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen 5 task",
    "mail": "samebi.akm@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].msg);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);


 // 3.Read about the difference between window, screen, and document in JavaScript.

 Window
 The JavaScript window object sits at the top of the JavaScript Object hierarchy and represents the browser window. The window object is supported by all browsers. All global JavaScript objects , functions, and variables automatically become members of the window object. The window is the first thing that gets loaded into the browser . This window object has the majority of the properties like length, inner Width, inner Height, name, if it has been closed, its parents, and more.
 
 The window object represents the current browsing context . It holds things like window.location, window.history, window.screen, window.status, or the window.document . Each browser tab has its own top-level window object. Each of these windows gets its own separate global object. window.window always refers to window, but window.parent and window.top might refer to enclosing windows, giving access to other execution contexts. Moreover, the window property of a window object points to the window object itself.
 
 So the following statements all return the same window object:
 
 window.window
 window.window.window
 window.window.window.window
 
 Document
 The Document interface represents any web page loaded in the browser and serves as an entry point into the web page’s content, which is the DOM tree. When an HTML document is loaded into a web browser , it becomes a document object. It is the root node of the HTML document. The document actually gets loaded inside the window object and has properties available to it like title, URL, cookie, etc. HTML documents, served with the “text/html” content type, also implement the HTMLDocument interface, whereas XML and SVG documents implement the XMLDocument interface.
 
 Screen
 Screen is a small information object about physical screen dimensions . It can be used to display screen width, height, colorDepth, pixelDepth etc. It is not mandatory to write window prefix with screen object. It can be written without window prefix.
 
 Properties:
 screen.width
 screen.height
 screen.availWidth
 screen.availHeight
 screen.colorDepth
 screen.pixelDepth
 
 





  