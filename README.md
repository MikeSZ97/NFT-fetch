
# FetchNFTfrom
Near BOS widget for fetching NFTs from a given wallet address.


## Authors

- [@mike-sz.near](https://near.org/near/widget/ProfilePage?accountId=mike-sz.near)


## Usage

type the NEAR wallet address in the input field, and press fetchNFTs to get a list of NFTs owned by the wallet.


## Flowchart

![App Screenshot](https://files.catbox.moe/f5tg20.png)



## Documentation

when typing on the input field the value automatically updates using:
```JavaScript
onChange: (address1) => {
    State.update({ address1 });
setAccVar(address1);
```
then the fetchNFT() function is called, sending the value of the typed in wallet to it.
```JavaScript
        <button onClick={() => fetchNFT(accVar)}>fetchNFTs</button>
```

FetchNFT proceeds to set accountId to the value given and find the contracts of any NFTs linked to the wallet using the     `https://api.kitwallet.app/account/${value}/likelyNFTsFromBlock` API.

the list of contracts is then mapped with contractId as the main value and passed to the NFTCollection widget with accountId and contractId as props.


## Forks

 - [YourNFTs](https://near.org/near/widget/ComponentDetailsPage?src=mob.near/widget/YourNFTs)
 - [NFT collection](https://near.org/near/widget/ComponentDetailsPage?src=mob.near/widget/NftCollection)
 - [NFT image](https://near.org/near/widget/ComponentDetailsPage?src=mob.near/widget/NftImage)
 - [Inputs.Text](https://near.org/near/widget/ComponentDetailsPage?src=nearcon23.near/widget/Inputs.Text)
