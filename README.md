Hello!  
This is a little work in progress project I'm doing to fine tune some subtleties in the PivotalWeather UI. 
Don't get me wrong, I love PW... (paid subscriber)...but there are a few things I've tweaked to clean up the UI a bit. 

NEW FEATURES
-options page to turn features on/off
-Choose Models to hide in menu
-Colorize 00z steps in the grid

Features: 
1. Remove the Step Time "hover links" above the slider, so you don't accidently mouse over and jump away from the spot you want
2. Change the slider behavior so when you let go, it loses focus. Currently the slider "button" stays in focus and when you use arrows or scroll on the page, the slider will move. Workaround, you have to click away from the slider each time.  This feature removes the workaround.
3. Choose which Models show in the Menu (can speed up hiding menu if you accidentally hover over it)
4. Colorize 00z steps in the grid

   
Ideas for future development:
-(idea) default page load to a certain model or Animation(e.g. Forecast Loop) <-- this can be accomplished today by bookmarking fh=loop in the querystring. Example: https://www.pivotalweather.com/model.php?m=ecmwf_full&fh=loop&pwplus=1

INSTALLATION
1. Download the all of the files as Zip
2. Unzip the folder somewhere on your hard drive
3. Rename folder to "PWSimply"
4. From the Chrome menu, select Extensions > Manage Extensions
5. On the Extensions page, ensure Developer Mode is selected in upper right
6. Choose "Load unpacked"
7. Select the "PWSimply" folder
8. TADA!

Now go visit PivotalWeather and see the changes!

Click the three dots next to PW Simplify and choose Options. (to view extensions that aren't pinned, click the puzzle icon in upper left)  

UNINSTALL
1. From the Chrome menu, select Extensions > Manage Extensions
2. Find "PW Simplify x.xx"
3. Either disable via toggle OR click Remove

If you have any questions or ideas, send them my way: eric@mnchaser.com
