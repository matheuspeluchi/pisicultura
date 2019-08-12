import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

export function getAuthServiceConfigs() {
const config = new AuthServiceConfig([
    {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('292608497160-7slk1uhvtebtk4oatqm98oqku8gk88va.apps.googleusercontent.com')
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('390636005111839')
    }
]);

return config;
}
