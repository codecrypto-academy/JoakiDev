CREAR NODO
geth --datadir nodo1 account new --password .\pwd.txt

INICIALIZAR NODO
geth --datadir ./nodo1 init genesis.json

AÑADIR NODO1 CONECTOR A LA RED
geth --datadir nodo1 --syncmode full --http --http.api admin,eth,miner,net,txpool,personal --http.port 8545 --password pwd.txt --port 30034

AÑADIR NODO2 NO CONECTOR A LA RED
geth --datadir nodo2 --syncmode full --password pwd.txt --port 30035 --authrpc.port 8552 --ipcpath "\\.\pipe\geth2.ipc"

AÑADIR NODO3 NO CONECTOR A LA RED
geth --datadir nodo3 --syncmode full --password pwd.txt --port 30036 --authrpc.port 8553 --ipcpath "\\.\pipe\geth3.ipc"