const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Brisbane QLD',
    image: 'https://randomuser.me/api/portraits/men/72.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'female',
    location: 'Melbourne VIC',
    image: 'https://randomuser.me/api/portraits/women/69.jpg'
  },
  {
    name: 'Richard Johnson',
    age: 37,
    gender: 'male',
    lookingfor: 'female',
    location: 'Perth WA',
    image: 'https://randomuser.me/api/portraits/men/34.jpg'
  },
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event 
document.getElementById('next').addEventListener('click',nextProfile);

// Next Profile display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
      </ul>
      <ul class="list-group">
        <li class="list-group-item">Age: ${currentProfile.age}</li>
      </ul>
      <ul class="list-group">
        <li class="list-group-item">Location: ${currentProfile.location}</li>
      </ul>
      <ul class="list-group">
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
      `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      { done: true}
    }
  };
}