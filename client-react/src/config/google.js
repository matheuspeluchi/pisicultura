import {google} from 'googleapis'
import { oauth2 } from 'googleapis/build/src/apis/oauth2';


oauth2 = new google.auth.OAuth2(
    '292608497160-7slk1uhvtebtk4oatqm98oqku8gk88va.apps.googleusercontent.com',
    'y26u0fqEt70zcRX3JfBUbSf5',
    'http://localhost:3000'
);

const scopes = ['https://www.googleapis.com/auth/pisicadmin']

const url = oauth2.generateAuthUrl({
    access_type: 'online',
    scope: scopes
})

const {tokens} = oauth2.getToken(code)

oauth2.setCredentials(tokens)

export default oauth2
