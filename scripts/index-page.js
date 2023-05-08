let comment = [
      
      {
        "name": "Connor Walton",
        "date": "02/17/2021",
        "comment": "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
      },

  
      {
        "name": "Emilie Beach",
        "date": "01/09/2021",
        "comment": "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
      },

      {
        "name": "Miles Acosta",
        "date": "12/20/2020",
        "comment": "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
      },
]


const form = document.querySelector('.form');
const commentSection = document.querySelector('.comment-section');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const nameInput = event.target.querySelector('input[name="commentName"]');
  const commentInput = event.target.querySelector('textarea[name="bio"]');
  
  if (!nameInput || !commentInput) {
    return; // undefiened 
  }
  
  const name = nameInput.value;
  const commentText = commentInput.value;
  
  // alert section -------------------- start -------------------- 
  if (!name || !commentText) {
    alert('Please enter both your name and comment.'); 
    return; 
  }

  // alert section -------------------- Ends -------------------- 
  

  // local tim
  const date = new Date().toLocaleDateString(); 
  
  const newComment = {
    name: name,
    comment: commentText,
    date: date
  };
  
  // array [0]
  comment.unshift(newComment); 
  
  // clear form
  nameInput.value = '';
  commentInput.value = '';
  
  updateComments();
});

function updateComments() {
  
  while (commentSection.firstChild) {
    // removing first child
    commentSection.removeChild(commentSection.firstChild);
    
  }
 
  // create elements  -------------------- start -------------------- 
  
  comment.forEach((item) => {
    const hr = document.createElement('hr');
    const commentItem = document.createElement('section');
    const avatarDiv = document.createElement('div');
    const avatarImg = document.createElement('img');
    const commentDiv = document.createElement('div');
    const topDiv = document.createElement('div');
    const nameDiv = document.createElement('div');
    const nameSpan = document.createElement('span');
    const dateDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const bottomDiv = document.createElement('div');
    const commentSpan = document.createElement('span');


  //create element -------------------- end -------------------- 


  // -------------------- class name
    hr.className = 'comment-divider';
    commentItem.className = 'comment-item';
    avatarDiv.className = 'comment-item__avatar';
    avatarImg.className = 'comment-item__avatarimg';
    commentDiv.className = 'comment-item__comment';
    topDiv.className = 'comment-item__top';
    nameDiv.className = 'comment-item__divname';
    nameSpan.className = 'comment-item__name';
    dateDiv.className = 'comment-item__divdate';
    dateSpan.className = 'comment-item__date';
    bottomDiv.className = 'comment-item__bottom';
    commentSpan.className = 'comment-item__comment';
    
    // grey image 
    avatarImg.src = 'assets/Images/grey.jpeg';
    avatarImg.alt = 'Avatar';
    nameSpan.innerHTML = item.name;
    dateSpan.innerHTML = item.date;
    commentSpan.innerHTML = item.comment;


    
    nameDiv.appendChild(nameSpan);
    dateDiv.appendChild(dateSpan);
    topDiv.appendChild(nameDiv);
    topDiv.appendChild(dateDiv);
    commentDiv.appendChild(topDiv);
    commentDiv.appendChild(bottomDiv);
    bottomDiv.appendChild(commentSpan);
    avatarDiv.appendChild(avatarImg);
    commentItem.appendChild(avatarDiv);
    commentItem.appendChild(commentDiv);
    commentSection.appendChild(hr);
    commentSection.appendChild(commentItem);
  });
}


updateComments();
