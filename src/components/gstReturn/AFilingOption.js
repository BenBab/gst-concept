import React from 'react';
import { Link } from 'react-router';

class AFilingOption extends React.Component {
  
  render() {
    
    return (
      <div>
        <h1 className = "menu-tabs">Filing option</h1>
        <section className="main">
            <table>
                <tbody>
                    <tr>
                        <th>Filing Option</th>
                    </tr>
                    <tr>
                        <td>Are you filing a nil return</td>
                        <td><input type="submit" className ="wide-button" value="Yes"/><input type="submit" className ="wide-button" value="No"/></td>
                        
                    </tr>
                    <tr>
                        <td>Which method suits you best to complete the return</td>
                        <td>
                            <select name = "filing-method">
                                <option value="1">I know my total sales and purchases</option>
                                <option value="2">I don't know my total sales and purchases</option>
                            </select>
                        </td>
                    </tr>
                </tbody>    
            </table>
            <div className="bottom-bar">
            <Link to="/sales-and-income"><span className="button next-button">Next</span></Link>
            </div>
        </section>
      </div>
    );
  }
}


export default AFilingOption;