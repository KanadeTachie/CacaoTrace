# 🍫Cacaotrace
## :computer: Hackathon submission by Team CacaoTrace 

🚀 **About CacaoTrace** \
CacaoTrace is a revolutionary service, it provides a platform that enables a system of trust between consumers, investors and cooperatives. By using blockchain technology under ICP platform, we utilize Supply Chain Transparency and Digital Tokenization to help empower Cacao farming and manaufacturing in Davao.

:gear: **Key Features**
* Digital Tokenization
* Supply chain Transparency (Inventory and Financial Transaction)
* Uses Distributed Ledger Technology (Cooperatives:Sharing of Information)
* Laser Proof Tampered QR Codes (Authentication)
  
:bulb: **General Info**
* This project is made using Javascript, HTML 5, and CSS 3. To be deployed to the Internet Computer using DFX
* This is the official Hakathon submission by Team CacaoTrace 
* This project has yet to be deployed in the Internet Computer and backend has yet to receive the free cycles promised


## :computer: Local Installation 
### :gear: Required Prerequisites
You must have the following installed in your machine:
1. Windows Subsystem for Linux
2. Github Desktop
3. Node.js
4. Visual Studio Code

### :gear: Setting up
Firstly, clone this Github repo to your local drive using either of the following:
* Open this link using Github desktop https://github.com/KanadeTachie/CacaoTrace.git
* Using Github CLI, input this code 
```gh repo clone KanadeTachie/Hackathon-Ohana```

With Github Desktop opened, use **Ctrl + Shift + A** to open the repo in Visual Studio Code

Then, open a new console in Visual Studio Code and type ```wsl``` to use Windows Subsystem for Linux

Then do the following commands:

dfx start --clean --background
# This starts the dfx replica in a clean start, and running in the background

dfx deploy
# deploys the project canister to the replica
```
A link will appear in the console similar to
 ```http://localhost:{available local host port}?canisterId={asset_canister_id}```
 **Ctrl + click** this link in the console to open
### :gear: Deploying in DFX playground
For playground deployment, do the following commands:
```
dfx deploy --playground
```
This temporary canister in the Internet Computer Playground only lasts 20mins
## :clap: Acknowledgements 
* Sir Eliezer Rabadon for mentorship
* ICP Philippines for the hackathon
* Davao DeFi Community
## :pen: Authors and Contributors 
* **Aaron Dave A. Siapuatco** (Team Leader, Backend Assistant) [@ewandeyb](https://github.com/ewandeyb)
* **King Igmedio Nicolai N. Behimino** (Backend Dev, Github Manager) [@KanadeTachie](https://github.com/KanadeTachie)
* **Mohammad Muraya S. Tampugao** (Head Content Manager / Pitch Head) [@EmTampz](https://github.com/EmTampz)
* **Phillip Ian John Hufana** (Assistant Idea Manager)
* **Owen Y. Cariño** (Frontend Dev) [@MediumCoffee](https://github.com/MediumCoffee)
* **Jeffer John P. Mezo** (Pitch video editor, Assistant Content Manager, Assistant Frontend) [@jeff-mezo](https://github.com/jeff-mezo)
## :book: References
* [Internet Computer](https://internetcomputer.org/)
* [DFX](https://internetcomputer.org/docs/current/references/cli-reference/dfx-parent)
* [DFX Developer Docs](https://internetcomputer.org/docs/current/developer-docs/)
