import Wrapper from "./components/Wrapper/Wrapper";
import Screen from "./components/Screen/Screen";
import Button from "./components/Button/Button";
import ButtonBox from "./components/BoxButton/BoxButton";

const btVal = [
    ["MC", "MR", "M-", "M+"],
    ["C", "MAGIC", "ROUND", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
];

const App = () => {
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
          {
              btVal.flat().map((btn, i) => {
                return (
                  <Button
                    key={i}
                    className={btn === "=" ? "equals" : ""}
                    value={btn}
                    onClick={() => {
                      console.log(`${btn} clicked!`);
                    }}
                  />
                );
              })
          }
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
