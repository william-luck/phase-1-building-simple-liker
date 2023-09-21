// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



// const likeButton = document.querySelector('li')
// likeButton.addEventListener('click', fillHeart)

const likeButtonCollection = document.getElementsByClassName('like')
for (const likeButton of likeButtonCollection) {
  likeButton.addEventListener('click', e => fillHeart(e))
}

function fillHeart(e) {
  const likeButton = e.target
  if (likeButton.lastChild.className === 'like-glyph') { // checks to see if heart is filled
    const response = mimicServerCall()
    .then(() => {
      console.log(likeButton)
      const updatedHeart = likeButton.lastChild
      updatedHeart.textContent = `${FULL_HEART}`
      updatedHeart.className = 'activated-heart'
      console.log("like successful")
    })
    .catch(response => {
      console.log("Like unsuccesful")
      const error = document.querySelector('div')
      error.className = 'notHidden'
      error.textContent = response;
      setTimeout(() => error.className = 'hidden', 3000)
    })
  } else { // if it is filled already, reset back to default class
    likeButton.lastChild.className = 'like-glyph'
    likeButton.lastChild.textContent = `${EMPTY_HEART}`
  }
}

function changeLiker() {
  console.log(likeButton)
  const updatedHeart = likeButton.lastChild
  updatedHeart.textContent = `${FULL_HEART}`
  updatedHeart.className = 'activated-heart'
  console.log("like successful")
  // updatedHeart.addEventListener('click', () => updatedHeart.className = '')
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
