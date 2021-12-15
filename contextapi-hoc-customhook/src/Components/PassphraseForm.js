import { useContext } from "react";
import { PasscodeContext } from "../Contexts/Passcode";

function PassphraseForm() {
  const { setIsAuthencticated } = useContext(PasscodeContext);

  const handleInput = (event) => {
    if (event.target.value === "top-secret") {
      setIsAuthencticated(true);
    }
  };

  return (
    <input
      type="password"
      placeholder="Give secret code"
      onChange={handleInput}
    />
  );
}

export default PassphraseForm;
