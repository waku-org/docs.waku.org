
```mermaid
sequenceDiagram
    Alice->>DNS Server: (1) Execute DNS Discovery
    DNS Server-->>Alice: (2) Bob's connection details (UDP + TCP)
    activate Alice
    Alice->>Bob: (3) Execute Discv5 over UDP
    Bob-->>Alice: (4) ENRs (UDP + TCP): Carol, David, Erin
    Alice->>Alice: (5) Decode ENRs
    Alice->>Carol: (6) Execute Discv5 over UDP
    Carol-->>Alice: (7) ENRs (UDP + TCP): Frank, Gwen, Harry
    Alice->>Alice: (8) Decode ENRs
    deactivate Alice
    Alice->>Alice: (9) Select peers to dial
    Alice->>David: (10) Libp2p dial (TCP)
    Alice->>Frank: (10) Libp2p dial (TCP)
    Alice->>Gwen: (10) Libp2p dial (TCP)
```

1. DNS Discovery protocol is executed.
2. Alice's retrieves Bob's ENR (Ethereum Node Record) from DNS Server.
3. Alice executes Discv5 protocol with Bob using UDP connection details from ENR.
4. Bob returns Carol's, David's and Erin's ENRs to Alice.
5. Alice Decodes ENRs and extracts Carol's, David's and Erin's TCP and UDP connections details.
6. Alice executes Discv5 protocol with Carol using UDP connection details from ENR.
7. Carol returns Frank's, Gwen's and Harry's ENRs to Alice.
8. Alice Decodes ENRs and extracts Frank's, Gwen's and Harry's TCP and UDP connections details.
9. Alice selects to dial David, Frank and Gwen.
10. Alice dials David, Frank and Gwen over libp2p using TCP connections details from ENRs.
