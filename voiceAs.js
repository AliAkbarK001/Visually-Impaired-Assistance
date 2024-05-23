// Check browser support for SpeechRecognition and SpeechSynthesis
if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.continuous = false; // Listen for a single speech recognition result

  recognition.onstart = () => {
    console.log("Voice assistant started listening");
  };

  recognition.onresult = event => {
    const spokenText = event.results[0][0].transcript.trim().toLowerCase();
    console.log("User said:", spokenText);
    document.getElementById(
      "userMessage"
    ).textContent = `You said: ${spokenText}`;

    processVoiceCommand(spokenText);
  };

  recognition.onerror = event => {
    console.error("Speech recognition error:", event.error);
  };

  function startVoiceAssistant() {
    recognition.start();
  }

  function processVoiceCommand(spokenText) {
    const commands = {
      "open whatsapp": openWhatsApp,
      "open google maps": openGoogleMaps,
      "open google photos": openGooglePhotos,
      "open youtube": openYouTube,
      "open chat assistant": openChatGPT,
      "open google": openGoogle,
      "open object detection": openObjectDetection,
      "open voice assistance": openVoiceAssistance,
      "open message writer": openMessageWriter,
      "open image to text": openImageToText,
      "open contact details": openContactDetails,
      // Add more commands and corresponding functions here...
    };

    if (commands.hasOwnProperty(spokenText)) {
      const action = commands[spokenText];
      action();
    } else {
      respond("Sorry, I didn't understand that command.");
    }
  }

  function respond(message) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(message);
    synth.speak(utterance);
    document.getElementById(
      "assistantResponse"
    ).textContent = `Assistant: ${message}`;
  }

  // Functions to open various services
  function openGoogle() {
    window.open("https://www.google.com/", "_blank");
    respond("Opening Google.");
  }

  function openWhatsApp() {
    window.open("https://web.whatsapp.com", "_blank");
    respond("Opening WhatsApp.");
  }

  function openGoogleMaps() {
    window.open("https://www.google.com/maps", "_blank");
    respond("Opening Google Maps.");
  }

  function openGooglePhotos() {
    window.open("https://photos.google.com", "_blank");
    respond("Opening Google Photos.");
  }

  function openYouTube() {
    window.open("https://www.youtube.com", "_blank");
    respond("Opening YouTube.");
  }

  function openObjectDetection() {
    window.open(
      "http://127.0.0.1:5500/Visually-Impaired-Assistance-main/ObjectDectetion.html",
      "_blank"
    );
    respond("Opening Object Detection.");
  }

  function openVoiceAssistance() {
    window.open(
      "http://127.0.0.1:5500/Visually-Impaired-Assistance-main/voiceAssi.html",
      "_blank"
    );
    respond("Opening Voice Assistance.");
  }

  function openMessageWriter() {
    window.open(
      "http://127.0.0.1:5500/Visually-Impaired-Assistance-main/speech.html",
      "_blank"
    );
    respond("Opening Message Writer.");
  }

  function openImageToText() {
    window.open(
      "http://127.0.0.1:5500/Visually-Impaired-Assistance-main/i1.html",
      "_blank"
    );
    respond("Opening Image To Text.");
  }

  function openContactDetails() {
    window.open(
      "http://127.0.0.1:5500/Visually-Impaired-Assistance-main/contact.html",
      "_blank"
    );
    respond("Opening Contact Details.");
  }

  function openChatGPT() {
    // Implement chat with ChatGPT functionality
    // Example: Use ChatGPT API to interact with a chatbot
    respond("Opening ChatGPT for chatting.");
  }
} else {
  console.error(
    "Speech recognition and synthesis not supported by this browser."
  );
}
