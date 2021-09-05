import { AuthProvider } from "./Auth/index";
import { GuestsProvider } from "./Guests";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <GuestsProvider>{children}</GuestsProvider>
    </AuthProvider>
  );
};

export default Providers;
