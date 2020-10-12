const result =document.querySelector(".results");

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const postTitles = posts.map(post =>
    `<div class ="title"><h1>${post.title}</h1></div><div class ="author"> Author: ${post.userId}</div><div class ="postBody">${post.body}</div>`);
      result.innerHTML += postTitles.join("");
  return postTitles;
   
};

getPosts();
/*const getUsers = async (Users) =>{
    
    const usersResponse = await fetch(
    'https://jsonplaceholder.typicode.com/users'
    );
    
    const users = await response.json();
};*/




//use find to get the username iD

/*const getUserName = (idUser) =>{
    const foundUserName = users.find((id)=> {
        return idUser=== users.id;
    });
};*/

// first publish all posts on the page
// for each go in and replace the user ID with the userName