There are a few simple steps to make it work:

1. First, you need to have NodeJS installed on your machine:
    - the latest version to be installed might be found here: https://nodejs.org/en/
    
2. After cloning repository locally go to "FileGenerator" folder
3. Then you need to install all the required dependencies
    - that can be done with the following command in the terminal: npm install
    
4. Since all deps are installed we are just a couple steps away from running the app:
    -  provide an absolute path to the browser folder and set it as the environment variable (ex: ENTRY_POINT_PATH="/Users/katarinish/Documents/uni/chromium" )
    -  configure desired service name (ex: SERVICE_NAME="web app internals")
    -  run next command: ENTRY_POINT_PATH="/Users/katarinish/Documents/uni/chromium" SERVICE_NAME="web app internals" npm start
    -  if none of the named earlier environment variables were provided - the default setting will be used from the configuration file
    
5. PROFIT!(но это не точно)