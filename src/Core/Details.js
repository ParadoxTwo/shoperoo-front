import React from 'react';
import {Image} from 'react-bootstrap'
import './popupStyles.css';

class Details extends React.Component {
    async componentDidMount(){
    }
  render() {
    return (
    <div>
      {this.props.popup?<div className='popup'>
        <div className='popup_inner'>
            <div className="close">
                <button type="button" class="btn btn-info close-button" onClick={this.props.closePopup}>X</button><br/><br/>
            </div>
            
            <h5 className="text-center">Details</h5>
            <form className="mx-auto my-5" style={{width:"70%"}}>
                <div class="form-group align-center">
                    <label for="deets">Deets</label>
                    <div id="deets">
                        <span class="form-control" id="deet1">{this.props.custom.fname}</span>
                        <span class="form-control" id="deet2">{this.props.custom.lname}</span>
                        <span class="form-control" id="deet3">{this.props.custom.description}</span>
                        <hr/>
                        <div style={{textAlign: 'center', height: '360px', width: '500px'}}>
                          <a href={this.props.custom.image} target="_blank" rel="noopener noreferrer"><Image style={{height: '100%', width: '100%'}} src={this.props.custom.image} id="deet4"/></a>
                        </div>
                    </div>
                </div>
                {/* <button type="submit" class="btn btn-primary" onClick={async()=>{await this.modifyTenement(
                    "[[\""+document.getElementById("nLatitude").value+"\", \""+document.getElementById("nLongitude").value+"\"]]",
                    document.getElementById("newSequestrationRate").value
                )}}>Modify</button> */}
            </form>
        </div>
      </div>
      :null}
    </div>
    );
  }
}

export default Details;