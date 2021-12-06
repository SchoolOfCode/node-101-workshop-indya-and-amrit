import myCollection from "./collection.js"


console.log(myCollection);


function describeItem(item){
  if(item.count > 1){
  console.log(`I have ${item.count} ${item.name}'s. Here's what I like about them: ${item.whatILike}`)
  } else {
    console.log(`I have a ${item.name}. Here's what I like about it: ${item.whatILike}`)
  }
}

describeItem(myCollection[0])


function describeCollection(array) {
    array.forEach(element => {
        describeItem(element);
    });;
}

describeCollection(myCollection); 
