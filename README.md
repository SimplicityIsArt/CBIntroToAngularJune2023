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

## Next Improvements 
  Obviously the **MembersPageComponent** needs a bit of work to
  1. Consume the improved Service properly
  2. **Improve encapsulation** ( right now members is being operated on directly!:/ )
  3. **Implement SRP for properly structured code**. Right now, the component is responsible for interacting with the service, handling UI logic, and dealing with messaging (toast notifications).
    This all needs to be refactored.
  4. **Proper error handling**
  5. Set up **enviroments** and separate out hard coded stuff to **configs** using best practices
 
  ## Possible future improvements
  1. Set up proper **testing**
  2. Refactor to implement **Lazy Loading** propely.
  

  