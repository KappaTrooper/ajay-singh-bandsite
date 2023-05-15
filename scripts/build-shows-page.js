
showsUrl = "https://project-1-api.herokuapp.com/showdates?api_key=d8f8b182-f03a-4728-8cb0-4ee5d8f0c4aa";


const showSection = document.querySelector('.show-section'); 

const showTitle = document.createElement('h3');
showTitle.classList.add('show-title');
showTitle.textContent = 'Shows';

const ShowBoxContainer = showSection.querySelector('.show-box');
showSection.insertBefore(showTitle, ShowBoxContainer);












let FirstHeader = true;




// Axios Promise Get Shows data
axios.get(showsUrl).then((response) => {
  const shows = response.data;




// --------------------  loop start -------------------- 
shows.forEach(show => {

  
  const showBox = document.createElement('div');
  showBox.classList.add('show-box');

  // adding show-box__top when FirstHeader = false
  if (FirstHeader) {
    showBox.classList.add('show-box__top');
    FirstHeader = false;
  }

  showBox.addEventListener('click', function() {
    
    const showBoxes = document.querySelectorAll('.show-box');
// adds selected stated 
    showBoxes.forEach(sbox => {
      sbox.classList.remove('active');
    });

    showBox.classList.add('active');
  });

  showBox.addEventListener('mouseover', function() { 
    showBox.classList.add('.hover')

  });

  








  //-------------------- elements for date, venue, and location -------------------- 
  const dateTitle = document.createElement('div');
  dateTitle.classList.add('show-box__title');
  const dateHeader = document.createElement('p');
  dateHeader.classList.add('show-box__header');


  dateHeader.innerHTML = 'Date';
  const dateText = document.createElement('h3');
  dateText.classList.add('show-box__date');

  const dateShow = new Date(show.date);

  // -- converting timestamp to normal readable time ------

  const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
  const realTime = dateShow.toLocaleDateString(undefined, options);
  dateText.innerHTML = realTime;


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





