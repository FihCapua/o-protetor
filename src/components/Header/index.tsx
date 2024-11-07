import { HeaderContainer } from "./style";
import { TitleComponent } from "@/components/Typography";
import { ButtonComponent } from "@/components/Button";
import { useAuth } from "@/providers/AuthProvider";

const Header = () => {
  const { user, logout } = useAuth();

  const formattedName = (user?.name || "Usuário")
  .split(" ")[0]
  .toLowerCase()
  .replace(/^./, (char) => char.toUpperCase())

  return (
    <HeaderContainer>
      <TitleComponent as="h1">Olá, {formattedName}!</TitleComponent>
      <ButtonComponent size="small" onClick={logout}>Logout</ButtonComponent>
    </HeaderContainer>
  );
};

export default Header;