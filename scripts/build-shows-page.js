let showsItems = [
    {
        "date": "Mon Sept 06 2021",
        "venue": "Ronald Lane",
        "location": "San Francisco, CA"
      },

      {
        "date": "Tue Sept 21 2021",
        "venue": "Pier 3 East",
        "location": "San Francisco, CA"
      },

      {
        "date": "Fri Oct 15 2021",
        "venue": "View Lounge",
        "location": "San Francisco, CA"
      },

      {
        "date": "Sat Nov 06 2021",
        "venue": "Hyatt Agency",
        "location": "San Francisco, CA"
      },

      {
        "date": "Fri Nov 26 2021",
        "venue": "Moscow Center",
        "location": "San Francisco, CA"
      },

      {
        "date": "Wed Dec 15 2021",
        "venue": "Press Club",
        "location": "San Francisco, CA"
      },
]


// Select the parent element where the show boxes will be appended
const showSection = document.querySelector('.show-section');

// Loop through the showsItems array to create and append the show boxes
showsItems.forEach(show => {
  // Create the show box element
  const showBox = document.createElement('div');
  showBox.classList.add('show-box');

  // Create the title elements for date, venue, and location
  const dateTitle = document.createElement('div');
  dateTitle.classList.add('show-box__title');
  const dateHeader = document.createElement('p');
  dateHeader.classList.add('show-box__header');
  dateHeader.innerHTML = 'Date';
  const dateText = document.createElement('h3');
  dateText.classList.add('show-box__date');
  dateText.innerHTML = show.date;
  dateTitle.appendChild(dateHeader);
  dateTitle.appendChild(dateText);

  const venueTitle = document.createElement('div');
  venueTitle.classList.add('show-box__title');
  const venueHeader = document.createElement('p');
  venueHeader.classList.add('show-box__header');
  venueHeader.innerHTML = 'Venue';
  const venueText = document.createElement('h3');
  venueText.classList.add('show-box__venue');
  venueText.innerHTML = show.venue;
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

  // Create the buy ticket button element
  const buyTicketButton = document.createElement('input');
  buyTicketButton.setAttribute('type', 'submit');
  buyTicketButton.classList.add('show-box__submit');
  buyTicketButton.setAttribute('value', 'Buy Ticket');

  // Append the title and button elements to the show box element
  showBox.appendChild(dateTitle);
  showBox.appendChild(venueTitle);
  showBox.appendChild(locationTitle);
  showBox.appendChild(buyTicketButton);

  // Append the show box element to the parent element
  showSection.appendChild(showBox);
});





