import React from 'react';
import { connect } from 'react-redux';

import './CharacterPowers.css';




class JailerPowerInfo extends React.Component {

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
          Jailer
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
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Arrest</p>
              </td>
              <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
              </td>
              <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (excluding self)</p>
              </td>
              <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase</p>
              </td>
              <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
              </td>
              <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose one player to jail, allowing you to communicate with him/her at night.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The jailed player only sees the jailer’s name as “Jailer”.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The jailed player cannot participate in any other night chats (ie: Villain chat and Esper chat).</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If selected for the Mission Team, the jailed player’s base voting power is reduced to 0.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>All other status effects &amp; powers will apply to his/her voting power.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Capital Punishment</p>
              </td>
              <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
              </td>
              <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team (excluding self)</p>
              </td>
              <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
              </td>
              <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>0 B.V.P.</p>
              </td>
              <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Execute the negatives!</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose a fellow mission teammate.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If his/her final voting power is 0 or positive, then you accidentally executed an ally. For your mistake, -2.5 to the mission vote sum.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If his/her final voting power is negative (&lt; 0), then you correctly executed a harmful teammate! +2 to the mission vote sum.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>You will be notified of the result.</p>
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
(JailerPowerInfo);

