const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 3rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  border-radius: 0.5rem;
  border: 1px solid var(--ui-elements-light, #eceef0);
  background: var(--background-light, #fafafa);
`;

const acc = "mike-sz.near";
const [accVar, setAccVar] = useState("");
const [accVar2, setAccVar2] = useState("");
const [NFTarr, setNFTarr] = useState([]);
const [NFTarr2, setNFTarr2] = useState([]);
const [accountId, setaccountId] = useState("");

function fetchNFT(value) {
  setaccountId(accVar);
  asyncFetch(
    `https://api.kitwallet.app/account/${value}/likelyNFTsFromBlock`
  ).then((res) => {
    setNFTarr(res.body.list);
  });
}
function fetchNFT2(value) {
  setaccountId(accVar2);
  asyncFetch(
    `https://api.kitwallet.app/account/${value}/likelyNFTsFromBlock`
  ).then((res) => {
    setNFTarr2(res.body.list);
  });
}

const data = (
  <>
    <div className="row mb-3 w-100">
      <div className="col-xl-3 p-2">
        <Widget
          src={`mike-sz.near/widget/Inputs.Text`}
          props={{
            label: "Wallet Adress",
            placeholder: "Address 1",
            value: state.address1,
            onChange: (address1) => {
              State.update({ address1 });
              setAccVar(address1);
            },
          }}
        />

        <button onClick={() => fetchNFT(accVar)}>fetchNFT</button>
        <div className="d-flex gap-1 flex-wrap">
          {NFTarr.map((contractId, i) => (
            <Widget
              key={i}
              src={
                thumbnails
                  ? "mob.near/widget/NftCollectionThumbs"
                  : "mob.near/widget/NftCollection"
              }
              props={{ accountId, contractId }}
            />
          ))}
        </div>
      </div>
      <div className="col-xl-6 p-2">
        <p>space</p>
      </div>
      <div className="col-xl-3 p-2">
        <Widget
          src={`mike-sz.near/widget/Inputs.Text`}
          props={{
            label: "Wallet Adress",
            placeholder: "Address 2",
            value: state.address2,
            onChange: (address2) => {
              State.update({ address2 });
              setAccVar2(address2);
            },
          }}
        />
        <button onClick={() => fetchNFT2(accVar2)}>fetchNFT</button>
        <div className="d-flex gap-1 flex-wrap">
          {NFTarr2.map((contractId, i) => (
            <Widget
              key={i}
              src={
                thumbnails
                  ? "mob.near/widget/NftCollectionThumbs"
                  : "mob.near/widget/NftCollection"
              }
              props={{ accountId, contractId }}
            />
          ))}
        </div>
      </div>
    </div>
  </>
);

return <Container>{data}</Container>;
