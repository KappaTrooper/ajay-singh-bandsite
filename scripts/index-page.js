// API Key DO not Deletus, get new key with "com/register"
const commentUrl = "https://project-1-api.herokuapp.com/comments/?api_key=a0f613e9-9a3f-4cbf-ab82-c0cc9a258ef4";
const form = document.querySelector('.form');
const commentSection = document.querySelector('.comment-section');

// Axios getting data with then
axios.get(commentUrl).then((response) => {
  const comments = response.data;

    // create elements  -------------------- start -------------------- 

  comments.forEach((item) => {
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
    
    // converting timestamp to localtime
    const date = new Date(item.timestamp);
    dateSpan.innerHTML = date.toLocaleDateString();
    
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
    commentDiv.appendChild(topDiv);
    commentDiv.appendChild(bottomDiv);
    bottomDiv.appendChild(commentSpan);
  });
});