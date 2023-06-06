const posts = [
    { title: 'Post One', body: 'This is the post one'},
    { title: 'Post Two', body: 'This is the post two'}
];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const err = false;
            if(!err){
                resolve();
            }else{
                reject('Error: Something went wrong')
            }
        }, 2000);
    });
}

// createPost({ title: 'Post Three', body: 'This is post three'}).then(getPosts).catch((err)=>{
//     console.log(err)
// });

// Promises

// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 2000, 'Goodbye')});
// Promise.all([promise1, promise2, promise3]).then((values)=>{
//     console.log(values)});

const user = {
    username: 'John',
    lastactivitytime: '6th June'
}
function updateLastUserActivityTime(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
                user.lastactivitytime = new Date().getTime();
                resolve(user.lastactivitytime)
        }, 1000);
    })
}
function deletePost(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(createPost>0){
                const poppedOut = posts.pop()
                resolve(poppedOut)
            }else{
                reject('Error')
            }
        }, 1000);
    })
}
function userupdatesapost(){
    Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()]).then(([createPostResolves, updateLastUserActivityTimerResolves])=>{
        console.log(updateLastUserActivityTimerResolves);
    }).catch((err)=>{
        console.log(err)
    })
}

createPost().then((msg)=>{
    console.log(msg)
    updateLastUserActivityTime().then((time)=>{
        console.log(time)
        deletePost().then(()=>{
            console.log(...new Set(posts));
        })
    })
})