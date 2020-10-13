const getUsers = async () =>{
    const usersResponse = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    );
    const users = await usersResponse.json();
    return users;
};

const getPosts = async () => {
    const postResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = await postResponse.json();
    return posts;
};


const displayPosts = (posts,users)=>{

    const result =document.querySelector(".results");
    const postContent = posts.map(post =>{
    const foundUser= users.find((user)=>
                   user.id === post.userId
        );
     return `<div class ="title"><h1>${post.title}</h1></div><div class ="author"> Author: ${foundUser.name}</div><div class ="postBody">${post.body}</div>`;
        
    });
      result.innerHTML += postContent.join("");

   
};

const showPosts = async () => {
    try{
        const users = await getUsers();
        const posts =await getPosts();
        displayPosts(posts,users);
    }catch(error){
        document.body.innerHTML =`HerpDerp apologies, a snake got in the server room and caused an error:${error}`;
    }

};

showPosts();

