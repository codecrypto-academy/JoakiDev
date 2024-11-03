## Desplegar una organización `Peer`

### Variables de entorno

```bash
export PEER_IMAGE=hyperledger/fabric-peer
export PEER_VERSION=2.4.3

```

### Desplegar una autoridad de certificación

```bash
kubectl hlf ca create --storage-class=standard --capacity=1Gi --name=org1-ca \
 --enroll-id=enroll --enroll-pw=enrollpw

kubectl wait --timeout=180s --for=condition=Running fabriccas.hlf.kungfusoftware.es --all

```

### Registrar un usuario en la autoridad de certificación de la organización Peer (Org1MSP)

```bash
# registrar usuario en la CA para los peers
kubectl hlf ca register --name=org1-ca --user=peer --secret=peerpw --type=peer \
 --enroll-id enroll --enroll-secret=enrollpw --mspid Org1MSP

```

### Desplegar un peer

```bash
kubectl hlf peer create --statedb=couchdb --image=$PEER_IMAGE --version=$PEER_VERSION --storage-class=standard --enroll-id=peer \
 --mspid=Org1MSP --enroll-pw=peerpw --capacity=5Gi --name=org1-peer0 --ca-name=org1-ca.default

kubectl wait --timeout=180s --for=condition=Running fabricpeers.hlf.kungfusoftware.es --all

```