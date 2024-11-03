CREAR IMAGEN PARA KUBERNETES
----------------------------
minikube image build -t kub-react:0.1.0 .


CREAR DESPLIEGUE CON LA IMAGEN CREADA
-------------------------------------
kubectl create deployment front --image kub-react:0.1.0


EXPONER AL PUERTO 80 PARA CONEXIONES
------------------------------------
kubectl expose deployment front --port 80


MAPEAR PUERTO 80 A PUERTO 8877
------------------------------
kubectl port-forward svc/front 8877:80



kubectl apply -f ingress.yml