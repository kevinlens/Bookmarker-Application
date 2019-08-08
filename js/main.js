


//Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//Save Bookmark
function saveBookmark(e){
    //Get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    //When you want to store data to localStorage you would most likely use an array of objects to store that data
    var bookmark = {
        name: siteName,
        url: siteUrl
    }
    
    //Local Storage stores only strings 
    //The first string in the local storage method is the name in which you would later call back in order to access the string on the second index which is the data.
    
    /*
    localStorage.setItem('test', 'Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
    */
    
    
    //Test if bookmarks is null
    /*testing to see if the so called 'bookmark' object is empty within the localStorage and if not then its going to create an empty array to add into the storage which will then later be holding all the objects we make. And of course all of these objects and arrays has to be turned into a string in order to be held in local storage */
    if(localStorage.getItem('bookmarks') === null){
        //Init array
        var bookmarks = [];
        //Add to array
        bookmarks.push(bookmark);
        //Set to LocalStorage
        /*You cannot command the local storage to be set like this as the localStorage only accepts strings, therefore you need to manually turn it into a string using the JSON command as shown below. Cannot do this: localStorage.setItem('bookmarks', bookmarks);*/
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        /* Here is where we will be receiving back the local bookmark array in order to update it with a new one */
        
        //JSON.parse() turns the string back into JSON aka the array holding the object
        //Get bookmark from local storage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        //Add bookmark to array 
        //Push new object into array and use that array to replace the old one from the storage with this newly updated one
        bookmarks.push(bookmark);
        //Re-set back to localStorage
        //Send back this array with newly added objects to the localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
  
    fetchBookmarks();
    //This premade method is designed to prevent the page from actually submitting so that we could work with the code
    e.preventDefault();
}
 



//Delete bookmark
function deleteBookmark(url){
    console.log(url);
}

//Fetch bookmarks
function fetchBookmarks(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    //Get output id
    var bookmarksResults = document.getElementById('bookmarksResults');

    //Build output
    bookmarksResults.innerHTML = '';


    for(var i = 0; i < bookmarks.length; i++){
     //Looping through ever objects there is in the array and then accessing their names and url to display on main page
     var name = bookmarks[i].name;
     var url = bookmarks[i].url;   

     bookmarksResults.innerHTML += '<div class="well">'+
                                   '<h3>'+name+
                                   ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>' +
                                   ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a>' +         
                                   '</h3>'+
                                   '</div>';
    }
}

































