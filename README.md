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
  1. Prepare services for proper consumption => ( Done ) - [ Commit.](https://github.com/SimplicityIsArt/CBIntroToAngularJune2023/commit/a73fa9d4f331c35b60887056336ce5ec54a5e8f9)

  3. **Improve encapsulation** ( right now members is being operated on directly!:/ )
  4. **Implement SRP for properly structured code**. Right now, the component is responsible for interacting with the service, handling UI logic, and dealing with messaging (toast notifications).
    This all needs to be refactored.
  5. Proper error handling
  
  **Done**  [Commit - Update component (MemberPage).](https://github.com/SimplicityIsArt/CBIntroToAngularJune2023/commit/5b4b9429597a2de2791f5dc1ce86e89eb53a831e)

  6. Replace all Member Model objects, used for indicating the shape of the data transferred, with interface "IMember" which is much better for obvious reasons.
  7. Update to error handling to clarify stuff and fix something.
  
  
   **Done** [ Commit - This commit includes all the improvements mentioned thus far.](https://github.com/SimplicityIsArt/CBIntroToAngularJune2023/commit/18b8500e20a1c3896593a6ab076eb1fb474423c4)

 ##NOTES:
  ## Possible future improvements, suggestions and notes ( for this or more advanced apps ).
  **code:**
  
  1. Refactor to **load data in a more user friendly way**. - e.g. **Pagination** or **infinite scrolling**. ( This should suffice for even very large data sets ).
  2. Set up proper **Testing** - unit, integration, etc.
       **NOTE:** If we need to **consume from multiple data sources** in the future - **Implement this using Facade Pattern**. This will be useful in our larger apps. ;-)
  **Build:**

  1. Set up **Environments** and separate out hard coded stuff to **Configs** using best practices. This can be integrated into the build pipelines.
  2. Improve developer experience by makiing it more efficient.
     For example, in the **build process** ```ng build```, the output from **dist** folder could be pointed to **rest-api/public** directly.
     Then it can be served directly when the app is built, without having to manually copy the buld artifacts to the json-server "public" folder. ( **develepment build config** )
     
 ADENDUM: **Realtime comminucation, server-side data streaming, SSE( server-side events), etc** are out of scope here but could be used for certain use cases, if the above does not suffice to fulfill any requirements we may have. ( example, Realtime Dashboards, Chat capability, Change Notifications when underlying data changes,and so on,  etc.....).

 ## All the best guys, I hope you found this useful, James. :-D
 
