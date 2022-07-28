<p align="center">
  <img src="screenshot.png" width="75%">
 </p>
<h1 align="center">Matrix Rain</h1>
<h3 align="center">A customizable matrix rain background</h3>

simply open the app [here](https://imagineeeinc.github.io/matrix-rain/), put it on fullscreen and hack the matrix!

<h2 align="center">Customizing</h2>

to customize go to the top right of the website and and a button will appear, click it.

A window on the top right corner will appear.

<img src="panel.png" width="75%">

Here you can customize the background colour, the foreground colour, the text size and hiding the mouse (do note hiding the mouse will make it harder to navigate the page so be aware)

Then press the button in the top right again to close the panel.

The app also generates a URL in the URL bar so you can copy to save the graphical changes (not the hide mouse setting), read [customizing through url](#customizing) for more on url based customizations.

Now have fun hacking the matrix.

<h2 align="center">Customizing API</h2>
To load your custom settings without tinkering in the menu there is the customizing api.

simply go the the url and add a `#` to the end and add the settings.

The arguments go like this:
```
#ffffff-000000-30-33
   /\       /\ /\ /\
Foreground  |   \  |
colour      |   |  |
     Background | Refresh Rate
     colour     |
         font size
```
this is the order they have to be seperated by a dash.

### Foreground colour
The text colour (Default: #a19dfc)
### Background colour
The background colour (Default: 000014)
### Font size
the size of the font (Default: 15)
### Refresh rate
The fps/ Speed it refreshes at (Default: 50)

Note the colours has to be in a 6 charecter hex colour format not the 3 charecter one. Example: ~~#fff~~ #ffffff
## License
This project is under [MIT License](https://github.com/imagineeeinc/matrix-rain/blob/main/LICENSE)
