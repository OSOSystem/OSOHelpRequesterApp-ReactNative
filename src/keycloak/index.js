import { Login } from './Login';
import { TokenStorage } from './TokenStorage';

const login = new Login();
login.setTokenStorage(new TokenStorage('react-native-keycloak-tokens'));

export default login;
