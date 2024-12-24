kubectl apply -f kubernetes/pv.yaml
kubectl apply -f kubernetes/pvc.yaml

kubectl apply -f kubernetes/postgres-deployment.yaml
kubectl apply -f kubernetes/postgres-service.yaml

kubectl apply -f kubernetes/app-deployment.yaml
kubectl apply -f kubernetes/app-service.yaml

kubectl apply -f kubernetes/ingress.yaml

kubectl exec -it $(kubectl get pods | grep '^express' | head -n 1 | awk '{print $1}') -- sh -c "npx prisma migrate dev && npx prisma db push"
