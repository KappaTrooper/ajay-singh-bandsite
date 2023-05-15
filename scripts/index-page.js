
// API Key DO not Deletus, get new key with "com/register"
const commentUrl = "https://project-1-api.herokuapp.com/comments?api_key=56a5e96d-0610-400e-8284-b0f71dce3b19";
const form = document.querySelector('.form');
const commentSection = document.querySelector('.comment-section');

    // create elements  -------------------- start -------------------- 
function createCommentElement(item) {
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

    // grey image / name / comment
  avatarImg.src = 'assets/Images/grey.jpeg';
  avatarImg.alt = 'Avatar';
  nameSpan.innerHTML = item.name;
  commentSpan.innerHTML = item.comment;
    // converting timestamp to localtime

  let date = new Date(item.timestamp);
  dateSpan.innerHTML = date.toLocaleDateString();

  // -------------Adding name and date to divs (top and bottom)------
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

  
  
  
}


// Getting api data
function getAPIComment() {
  axios.get(commentUrl)
    .then((response) => {
      const comments = response.data;

      // Sort array by data recenty date -> oldest comments
      comments.sort((a, b) => b.timestamp - a.timestamp);

      comments.forEach((item) => {
        createCommentElement(item);
      });
    })
  
}



// --------------form submission--------------
function handleFormSubmit(event) {
  event.preventDefault();

  const nameInput = document.querySelector('input[name="commentName"]');
  const commentInput = document.querySelector('textarea[name="bio"]');

  // Form Validation
  if (nameInput.value.trim() === '' || commentInput.value.trim() === '') {
    console.log('Please fill in both name and comment fields');
    return;
  }

  const newComment = {
    name: nameInput.value,
    comment: commentInput.value,
  };

  // --------- getting new comment-----------------
  axios.post(commentUrl, newComment, {
    RequiredRequestHeaders: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      const item = response.data;
      createCommentElement(item);

      // ---- " " clears form values
      nameInput.value = '';
      commentInput.value = '';

      // takes last comment added and putts it to the top 
      const firstComment = commentSection.firstChild;
      commentSection.insertBefore(commentSection.lastChild, firstComment);
    })
   
}


// Add event listener to form submit event
form.addEventListener('submit', handleFormSubmit);

// Fetch and display existing comments when the page loads
getAPIComment();