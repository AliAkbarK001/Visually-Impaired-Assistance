<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blind Assistant - Voice Interaction</title>
    <link
      rel="shotcut icon"
      sizes="60x60"
      href="https://www.shutterstock.com/image-vector/blind-person-road-crossing-warning-260nw-2444870009.jpg"
    />

    <style>
      header {
        text-align: center;
        padding: 20px;
        background-color: #f0f0f0;
      }
      button {
        padding: 10px 20px;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: #a4d6b3;
        color: rgb(40, 19, 26);
        margin-top: 10px;
        cursor: pointer;
        font-size: larger;
      }
      body {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        height: 100vh;
      }
      footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        padding: 10px 0;
        background-color: #e8e8e8;
        color: black;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Welcome to Blind Assistant</h1>
    </header>

    <button onclick="startVoiceAssistant()">Start Voice Assistant</button>
    <div id="userMessage"></div>
    <div id="assistantResponse"></div>

    <script src="voiceAs.js"></script>
    <footer id="checkAuthor">
      <p>
        Copyright &copy;
        <script>
          
          document.write(new Date().getFullYear());
        </script>
        
        All rights reserved | This Application
        <i class="icon-heart color-danger" aria-hidden="true"></i>
        Developed by
        <a href="https://ali-akbar-k.github.io/PORTFOLIO/">Mr.Ali Akbar K</a>
      </p>
    </footer>
  </body>
</html>
