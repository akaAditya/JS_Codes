
console.log('person1 : Shows ticket');
console.log('person2 : Shows ticket');

let preMovie = async()=>{
    const promiseWifeBringMovieTickets = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // console.log('person3 : Shows ticket'); 
            resolve('ticket')
            // reject('ticket')
        }, 3000)
    });
    const getPopcorn = new Promise((resolve, reject)=> resolve(`popcorn`));
    const addButter = new Promise((resolve, reject)=> resolve(`butter`));
    const getCandy = new Promise((resolve, reject)=> resolve(`candy`));
    const getColdDrinks = new Promise((resolve, reject)=> resolve(`cold drink`));
    let ticket 
    try{
        ticket = await promiseWifeBringMovieTickets;
    } catch(e){
        ticket = 'sad face'
    }

    let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getColdDrinks]);
    console.log(`${popcorn}, ${candy}, ${coke}`);

    // console.log(`wife : I have the ${ticket}`);
    // console.log('husband : lets go in');
    // console.log('wife : no I am hungry, want popcorn');

    // let popcorn = await getPopcorn;
    // console.log(`I got some ${popcorn}`)
    // console.log('husband : we should go in');
    // console.log('wife : I want butter on Popcorn');

    // let butter = await addButter;
    // console.log(`husband : I got some ${butter} on popcorn`);
    // console.log(`husband : anything else darling`);
    // console.log(`wife : lets go we are getting late`);
    // console.log(`husband : thank you for the reminder *grins*`);

    // let coldDrink = await getColdDrinks;
    // console.log(`wife : wait wait wait, I also want ${coldDrink}`);
    // console.log(`husband : OMG, Just wait here, I will be back with cold drink`)
    // console.log(`husband : here is your cold drink, now shall we go?`);
    // console.log(`wife : okay fine`);

    return ticket;
}

async function deletePost() {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (posts.length > 0) {
          const poppedElement = posts.pop();
          resolve(poppedElement);
        } else {
          reject("ERROR: ARRAY IS EMPTY");
        }
      }, 1000);
    });
  }
async function createPost(post){
    return await new Promise((resolve, reject)=>{
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


// const getPopcorn = promiseWifeBringMovieTickets.then((t)=>{
//     // console.log(`person3 : Shows ${t}`)
//     console.log('wife : I have the tickets');
//     console.log('husband : lets go in');
//     console.log('wife : no I am hungry, want popcorn');
//     return new Promise((resolve, reject)=>{
//         resolve(`${t}, Popcorn`);
//     });
// });
// const getButter = getPopcorn.then((t)=>{
//     console.log("I got some Popcorn")
//     console.log('husband : we should go in');
//     console.log('wife : I want butter on Popcorn');
//     return new Promise((resolve, reject)=>{
//         resolve(`${t}, Butter with Popcorn`)
//     });
// });

preMovie().then((t)=>{console.log(`person3 : shows ${t}`)})
console.log('person4 : Shows ticket');
console.log('person5 : Shows ticket');