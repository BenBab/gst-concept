import React from 'react';
import { Link } from 'react-router';

class FDeclaration extends React.Component {
  
  render() {
    
    return (
      <div>
        <h1 className = "menu-tabs">Filing option >> Sales and Income >> Purchases and Income >> Review >> Declaration</h1>
        <section className="main">
            <table>
                <tbody>
                    <tr>
                        <td>Declaration</td>
                    </tr>
                    <tr>
                        <td><input type= "checkbox" /><label>I declare to the best of my knowledge, the information I have supplied is true and correct.</label></td>
                    </tr>
                </tbody>    
            </table>
            <div className="bottom-bar">
            <Link to="/review"><span className="button next-button">Back</span></Link>
            <Link to="/"><span className="button next-button" >Submit</span></Link>
            </div>
        </section>
      </div>
    );
  }
}


export default FDeclaration;