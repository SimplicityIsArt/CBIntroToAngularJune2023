# CBIntroToAngularJune2023

### Directions for use:

 ## APP
  ```console 
  npm install
  ng serve
 ```

Then open the app on **http://localhost:4200/members**, to ensure it's working. It may take a few moments to load all the data

 ## API Server
 **- Part 1 -**
   **Using the Python Script**
   
   If you have Python installed and want to run the script for yourself, simply go to the **"python_scripts"** directory in any **Command Terminal** window and run: 
   ```console 
   python generate-members.py
  ```
  
   This will overwrite the existing file and generate a fresh copy( so fee free to toy with the number of entries you can generate ( the default settings will generate 5k entries, but you can go much larger ).
   
   **- Part 2 -**
   
   Finally, don't forget to restart the **json-server** and tell it to watch the new file instead. To do this:
   1. Navigate to the **"rest-api"** directory and run:
      ```console
      json-server --watch members-large.json
      ```
   3. Check it works in a browser: **http://localhost:3000/members**

## NOTE:

 You can see each of the **incremental improvements** by looking at the commits and the accompanying messages.
 **Each individual commit** is at a point which can be built and run individually, if you'd like to examine the refactoring steps more closely. Enjoy!

## Next Improvements  ~~( in progress )~~ ( Completed )
 
  Obviously the **MembersPageComponent** needs a bit of work to
  ( Prep-work )
  1. Prepare services for proper consumption => ( Done ) - [ see commit](https://github.com/SimplicityIsArt/CBIntroToAngularJune2023/commit/a73fa9d4f331c35b60887056336ce5ec54a5e8f9)

  3. **Improve encapsulation** ( right now members is being operated on directly!:/ )
  4. **Implement SRP for properly structured code**. Right now, the component is responsible for interacting with the service, handling UI logic, and dealing with messaging (toast notifications).
    This all needs to be refactored.
  5. **Proper error handling**
  
  **Done**  [Update component (MemberPage) - Commit](https://github.com/SimplicityIsArt/CBIntroToAngularJune2023/commit/5b4b9429597a2de2791f5dc1ce86e89eb53a831e)

 
  ## Possible future improvements
  1. Set up **Environments** and separate out hard coded stuff to **Configs** using best practices
  2. Set up proper **Testing**
  3. Refactor to implement **Lazy Loading** properly.
  4. **Build** - Point ```ng build``` output from **dist** folder to **rest-api/public** directly, as a step, in the build config.
     So it can be served directly when the app is built without having to transfer files
