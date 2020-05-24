npm init for another repository
install two node modules -> json-server, ngrok
create a file name `db.json`

*Inside the package.json modify the `script`

``"scripts": {
    "db" : "json-server -w db.json -p 3000",
    "tunnel" : "ngrok http 3000"
}
``
Terminal 1
To start the json server 
`npm run db`
Terminal 2
To start the server accessible accross application via ngrock
`npm run tunnel`

This will generate the ips
ession Status                online                                                                                                                  
Session Expires               7 hours, 59 minutes                                                                                                     
Version                       2.3.35                                                                                                                  
Region                        United States (us)                                                                                                      
Web Interface                 http://127.0.0.1:4040                                                                                                   
Forwarding                    http://0dfe2b94.ngrok.io -> http://localhost:3000                                                                       
Forwarding                    https://0dfe2b94.ngrok.io -> http://localhost:3000                                                                      
                                                                                                        
