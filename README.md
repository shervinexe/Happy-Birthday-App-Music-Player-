<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Happy Birthday Music Player</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #fff8f0;
        color: #333;
        margin: 0;
        padding: 20px;
        line-height: 1.6;
    }
    h1, h2, h3 {
        color: #d35400;
    }
    h1 {
        text-align: center;
    }
    h2 {
        border-bottom: 2px solid #ddd;
        padding-bottom: 5px;
        margin-top: 25px;
    }
    p, ul, li {
        margin: 8px 0;
    }
    pre {
        background: #333;
        color: #f4f4f4;
        padding: 10px;
        overflow-x: auto;
        border-radius: 5px;
    }
    code {
        background: #eee;
        padding: 2px 5px;
        border-radius: 3px;
    }
    .center {
        text-align: center;
    }
    .badge {
        display: inline-block;
        padding: 4px 10px;
        border-radius: 5px;
        background-color: #27ae60;
        color: white;
        margin-right: 5px;
        font-size: 0.9em;
    }
    img {
        display: block;
        margin: 10px auto;
        max-width: 120px;
    }
</style>
</head>
<body>

<div class="center">
    <img src="https://img.icons8.com/color/96/000000/birthday.png" alt="Music Icon">
    <h1>🎵 Happy Birthday Music Player</h1>
    <p>A customizable music player for birthday celebrations! Import songs, change icons, album/artist info, and app texts.</p>
</div>

<div class="center">
    <span class="badge">Node.js</span>
</div>

<h2>⚠️ Important Notes</h2>
<ul>
    <li>Put your songs in <code>albums</code> folders inside the <code>assets</code> directory.</li>
    <li>You can customize:
        <ul>
            <li>App icon</li>
            <li>App texts</li>
            <li>Album & artist names</li>
            <li>Songs & their icons</li>
            <li>Give it to someone who deserves it</li>
        </ul>
    </li>
</ul>

<h2>📦 Requirements</h2>
<ul>
    <li><a href="https://nodejs.org/">Node.js</a></li>
</ul>

<h2>🛠️ Installation</h2>
<pre><code>npm install</code></pre>
<p>Installs all required packages.</p>

<h2>🚀 Run the App</h2>
<pre><code>node main.js</code></pre>
<p>Start the music player using Node.js.</p>

<h2>🖥️ Build EXE</h2>
<pre><code>npm install --save-dev electron-packager
npx electron-packager . MyPlayer --platform=win32 --arch=x64</code></pre>
<p>(Optional: if you want an executable version, use the commands above.)</p>

<h2>🎨 Customization</h2>
<ul>
    <li>Add songs in <code>assets</code> → organize by album folders.</li>
    <li>Change icons for the app and each song.</li>
    <li>Update album & artist names in your code files.</li>
    <li>Modify app text and styling via your HTML/CSS files.</li>
</ul>

<h2>👨‍💻 Contributing</h2>
<ul>
    <li>Contributions are welcome!</li>
    <li>Open issues or submit pull requests for improvements or bug fixes.</li>
</ul>

<h2>📄 License</h2>
<p>MIT License — see <code>LICENSE</code> file.</p>

</body>
</html>
