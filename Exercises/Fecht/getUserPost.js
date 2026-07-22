async function getUserPost(UserId) {
    const Response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const Post = await Response.json();
    const UserPost = Post.filter(Post => Post.userId === UserId)
    return UserPost
}

async function getUserById(Id) {
    
     const Response = await fetch("https://jsonplaceholder.typicode.com/users");
     const User = await Response.json();
     const UserId = User.find(User => User.id === Id)
    return UserId
    

}

async function showUserProfile(Id){
  const userData = await getUserById(Id)
  if(!userData){
    return console.log("user not existent")
  }
  const userPost = await getUserPost(userData.id)
  return console.log(userPost)
}

showUserProfile(1000000000)
