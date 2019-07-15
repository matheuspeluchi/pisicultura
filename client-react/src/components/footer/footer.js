import React, { Component} from 'react';
import './footer.css';

class FooterHome extends Component{

    render(){
        return <footer className="page-footer font-small blue bg-light fixed-bottom text-center">
                    <div className="footer-copyright text-center py-1">© 2019 Copyright:
                    <a href="https://facebook.com/matheuspeluchi/"> Matheus Peluchi</a>
                    </div>                
                </footer>
    
    }
}

export default FooterHome;