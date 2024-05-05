document.addEventListener("DOMContentLoaded", () => {
  const contacts = [
    { name: "Emergency Services", phone: "911" },
    { name: "Police", phone: "100" },
    { name: "Fire Department", phone: "101" },
    { name: "Ambulance", phone: "108" },
    { name: "Poison Control", phone: "1-800-222-1222" },
    { name: "Father", phone: "8585585854" },
  ];

  const contactList = document.getElementById("contactList");

  // Render emergency contacts
  contacts.forEach(contact => {
    const listItem = document.createElement("li");
    listItem.textContent = `${contact.name}: `;
    const phoneLink = document.createElement("a");
    phoneLink.href = `tel:${contact.phone}`;
    phoneLink.textContent = contact.phone;
    listItem.appendChild(phoneLink);
    contactList.appendChild(listItem);
  });

  // Function to read the entire webpage content using text-to-speech
  async function readPageAloud() {
    // Get all text content from the webpage
    var entirePageText = document.body.innerText;

    // Create a new SpeechSynthesisUtterance instance
    var utterance = new SpeechSynthesisUtterance();

    // Set the text that will be read aloud
    utterance.text = entirePageText;

    // Using speech synthesis to read the text
    window.speechSynthesis.speak(utterance);
  }

  // Attach an event listener to the button
  document.getElementById("speakButton").addEventListener("click", function () {
    // Call the readPageAloud function when the button is clicked
    readPageAloud();
  });
});
