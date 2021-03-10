# How it works this project 
## Installation  
```bash
npm install
```
## configure your .env file based on the .env.example file 

# Install Docker container(optinal)
```bash 
sudo docker run --name mongodb -d  -p 27017:27017 mongo
``` 
## Find container id
```bash 
sudo docker ps -a
```
## Run container 
```bash 
sudo docker start <CONTAINER ID>
```
## Running in dev-mode
```bash
npm run dev
```
## Running in production-mode
```bash
npm start
``` 
## Contributors
- **Victor Chan** - _Maintenance_ - [@victorstarkmar42](https://github.com/victorstarkmar42)
- **Paola Garcia** - _Maintenance_ - [@PaoGS](https://)
- **Angel Ruiz** - _Maintenance_ -[@AngelR](https:// )
- **Cesar Acosta** - _Maintenance_ -[@Sarrus](https:// )

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.