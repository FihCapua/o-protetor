import { HeaderContainer } from "./style";
import { TitleComponent } from "@/components/Typography";
import { ButtonComponent } from "@/components/Button";
import { useAuth } from "@/providers/AuthProvider";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <HeaderContainer>
      <TitleComponent as="h1">Olá, {user?.email}!</TitleComponent>
      <ButtonComponent size="small" onClick={logout}>Logout</ButtonComponent>
    </HeaderContainer>
  );
};

export default Header;