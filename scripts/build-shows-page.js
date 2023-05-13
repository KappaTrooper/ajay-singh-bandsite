
showsUrl = "https://project-1-api.herokuapp.com/showdates?api_key=d141a6e3-78bf-4498-9e93-ae35bb59ac9e"


const showSection = document.querySelector('.show-section'); 

const showTitle = document.createElement('h3');
showTitle.classList.add('show-title');
showTitle.textContent = 'Shows';

const ShowBoxContainer = showSection.querySelector('.show-box');
showSection.insertBefore(showTitle, ShowBoxContainer);





// Axios Promise Get Shows data
axios.get(showsUrl).then((response) => {
  const shows = response.data;




// --------------------  loop start -------------------- 
shows.forEach(show => {

  
  const showBox = document.createElement('div');
  showBox.classList.add('show-box');








  //-------------------- elements for date, venue, and location -------------------- 
  const dateTitle = document.createElement('div');
  dateTitle.classList.add('show-box__title');
  const dateHeader = document.createElement('p');
  dateHeader.classList.add('show-box__header');


  dateHeader.innerHTML = 'Date';
  const dateText = document.createElement('h3');
  dateText.classList.add('show-box__date');

  const dateShow = new Date(show.date);

  const realTime = dateShow.toLocaleDateString();


  dateText.innerHTML = realTime;
  dateTitle.appendChild(dateHeader);
  dateTitle.appendChild(dateText);

  const venueTitle = document.createElement('div');
  venueTitle.classList.add('show-box__title');
  const venueHeader = document.createElement('p');
  venueHeader.classList.add('show-box__header');
  venueHeader.innerHTML = 'Venue';
  const venueText = document.createElement('h3');
  venueText.classList.add('show-box__venue');
  venueText.innerHTML = show.place;
  venueTitle.appendChild(venueHeader);
  venueTitle.appendChild(venueText);

  const locationTitle = document.createElement('div');
  locationTitle.classList.add('show-box__title');
  const locationHeader = document.createElement('p');
  locationHeader.classList.add('show-box__header');
  locationHeader.innerHTML = 'Location';
  const locationText = document.createElement('h3');
  locationText.classList.add('show-box__location');
  locationText.innerHTML = show.location;
  locationTitle.appendChild(locationHeader);
  locationTitle.appendChild(locationText);

  // --------------------  Button creation start -------------------- 
  const buyTicketButton = document.createElement('input');
  buyTicketButton.setAttribute('type', 'submit');
  buyTicketButton.classList.add('show-box__submit');
  buyTicketButton.setAttribute('value', 'Buy Ticket');


  // --------------------  attachin tutle and button to showBox div -------------------- 
  
  showBox.appendChild(dateTitle);
  showBox.appendChild(venueTitle);
  showBox.appendChild(locationTitle);
  showBox.appendChild(buyTicketButton);

  // Append the show box element to the parent element
  showSection.appendChild(showBox);












});
});





