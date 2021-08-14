import React from 'react';
import { connect } from 'react-redux';

import './CharacterPowers.css';




class EsperPowerInfo extends React.Component {

  state = {


  };



  componentDidMount = () => {

    var elem = document.querySelector('.power-info-menu-component-container');

    elem.scrollTop = this.props.prevScrollPosition;

  }; //end componentDidMount


  componentWillUnmount = () => {

    var elem = document.querySelector('.power-info-menu-component-container');

    this.props.setScrollPosition(
      "characterScrollPosition",
      elem.scrollTop
    );

  }; //end componentWillUnmount




  render() {

    return (

      <div className="power-info-menu-component-container">

        <div className="power-info-character-header">
          Esper
        </div>

        <table style={{borderCollapse: 'collapse', border: 'none'}}>
          <tbody>
            <tr>
              <td colSpan={6} style={{width: '467.5pt', border: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Powers/Abilities</p>
              </td>
            </tr>
            <tr>
              <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
              </td>
              <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Type</p>
              </td>
              <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Targets</p>
              </td>
              <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Phase Power Can Be Used</p>
              </td>
              <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Voting Power</p>
              </td>
              <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Effect</p>
              </td>
            </tr>
            <tr>
              <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Telepathy</p>
              </td>
              <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
              </td>
              <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone</p>
              </td>
              <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase</p>
              </td>
              <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
              </td>
              <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Each round, the Esper can choose a MINIMUM of 2 other players to speak secretly with at night.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The Esper sees who is speaking, but the chosen telepathees only see pseudo-names for everyone else and see the name “Esper” for the Esper.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Maximum # of players to mentally connect with:</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>That days’ Mission Team size + 1</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Headache</p>
              </td>
              <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
              </td>
              <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
              </td>
              <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase</p>
              </td>
              <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
              </td>
              <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Instead of using telepathy, the Esper can store psychic energy, to use during the Mission Voting Phase as his/her base voting power.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Each use gives +1 charge.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Psy-Bomb</p>
              </td>
              <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
              </td>
              <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
              </td>
              <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
              </td>
              <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
              </td>
              <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The psychic pressure builds up and results in a devastating headache that finally explodes as a psychic bomb.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Click the Psybomb button to activate its effect for the current mission round only (charge gets reset to 0), and then vote normally (either Mission Success or Mission Failure).</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Your B.V.P. will be as determined below:</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>1 Charge: ±2 B.V.P.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>2 Charges: ±3.5 B.V.P.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>3 Charges: ±5 B.V.P.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>4 Charges: ±7 B.V.P.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>5 Charges: ±8 B.V.P.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>6 Charges: ±10 B.V.P.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>7 Charges: ±12 B.V.P.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
              </td>
            </tr>
          </tbody>
        </table>

        <br></br>

      </div>

    ); //end return


  }; //end render


}; //end <Character>PowerInfo



const mapStateToProps = (state) => {
  
  return (
    { 
      myRole: state.role,
      gamePhase: state.gamePhase,
      mainMenuSelection: state.mainMenuSelection
    }
  );

};


export default connect(mapStateToProps, 
  {

  })
(EsperPowerInfo);

