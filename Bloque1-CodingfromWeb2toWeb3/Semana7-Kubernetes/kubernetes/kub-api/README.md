CREAR IMAGEN PARA KUBERNETES
----------------------------
minikube image build -t kub-api:0.0.1 .


CREAR DESPLIEGUE CON LA IMAGEN CREADA, EN EL PUERTO 3000 Y CON 3 RÉPLICAS
-------------------------------------------------------------------------
kubectl create deploy api --image kub-api:0.0.1 --port 3000 --replicas 3


EXPONER AL PUERTO 3000 PARA CONEXIONES
--------------------------------------
kubectl expose deploy api --port 3000


VER LOS SERVICIOS
-----------------
kubectl get svc


MAPEAR PUERTO 3000 A PUERTO 7777
--------------------------------
kubectl port-forward svc/api 7777:3000



kubectl apply -f ingress.yml