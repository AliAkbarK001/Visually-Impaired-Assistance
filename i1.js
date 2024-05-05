// Function to show loading message
function showLoading() {
  const text = document.getElementById("text");
  text.classList.add("text");
  text.innerHTML = "Loading...";
}

// Function to convert image to text
function convertImageToText(file) {
  return Tesseract.recognize(file);
}

// Function to handle the "Convert" button click event
document.getElementById("btn").addEventListener("click", async () => {
  const imageInput = document.getElementById("image");
  const textArea = document.getElementById("textarea");
  const speakBtn = document.getElementById("speakBtn");
  const copyBtn = document.getElementById("copyBtn");

  if (imageInput.files.length === 0) {
    alert("Please select an image");
    return;
  }

  const file = imageInput.files[0];
  showLoading();

  try {
    const {
      data: { text },
    } = await convertImageToText(file);

    // Display the extracted text
    textArea.classList.remove("hidden");
    textArea.value = text;

    // Show Speak and Copy buttons
    speakBtn.classList.remove("hidden");
    copyBtn.classList.remove("hidden");

    // Enable text-to-speech
    speakBtn.addEventListener("click", () => {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    });

    // Enable text copying
    copyBtn.addEventListener("click", () => {
      textArea.select();
      document.execCommand("copy");
      alert("Text copied to clipboard");
    });

    // Clear loading message
    const loadingText = document.getElementById("text");
    loadingText.classList.remove("text");
    loadingText.innerHTML = "";
  } catch (error) {
    console.error("Error processing image:", error);
    alert("Error processing image. Please try again.");
    // Clear loading message
    const loadingText = document.getElementById("text");
    loadingText.classList.remove("text");
    loadingText.innerHTML = "";
  }
});

// Check author link (optional)
const checkAuthor = document.getElementById("checkAuthor");
if (checkAuthor.children[0].children[0].textContent !== "@aliakbark") {
  window.location.href = "#";
}

