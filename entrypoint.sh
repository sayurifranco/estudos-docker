entrypoint.sh
 Shell
 #!/bin/sh -l


 echo "Hello $1"
 time=$(date)
 echo "::set-output name=time::$time"

 // no terminal: $ chmod +x entrypoint.sh