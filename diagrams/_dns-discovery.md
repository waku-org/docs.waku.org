```mermaid
sequenceDiagram
    Waku Node->>DNS Server: (1) Lookup TXT example.com
    DNS Server-->>Waku Node: (2) enrtree-root:v1 e=U3...3Y ...
    Waku Node->>DNS Server: (3) Lookup TXT U3...3Y.example.com
    DNS Server-->>Waku Node: (4) enrtree-branch:DU...VQ,J3..HU,IC...WE
    Waku Node->> DNS Server: (5) Lookup TXT DU...VQ.example.com
    DNS Server-->>Waku Node: (6) enr:-M-4QLdAB-Kyz...Wt1Mg8
    Waku Node ->> Waku Node: (7) Decode ENR: Peer's connection details
```

1. DNS lookup query to retrieve TXT data stored on `example.com` domain.
2. `entree-root` is returned, value of `e` is the `enr-root`, root hash of the node subtree.
3. DNS lookup query to retrieve TXT data stored on `<enr-root>.example.com` domain.
4. `entree-branch` is returned, this tree contains hashes of node subtrees.
5. DNS lookup query to retrieve TXT data stored on, `DU...VQ.example.com` domain,  the first leaf of `entree-branch`.
6. `enr` record is returned.
7. Returned value is decoded, peer connection details such as ip address and port are learned.
