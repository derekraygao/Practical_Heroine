import React from 'react';
import { connect } from 'react-redux';

import './CharacterPowers.css';




class SpiritualistPowerInfo extends React.Component {

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
          Spiritualist
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
              <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Effect</p>
              </td>
            </tr>
            <tr>
              <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Soul Mark</p>
              </td>
              <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
              </td>
              <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team (only Heroes)</p>
              </td>
              <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase</p>
              </td>
              <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
              </td>
              <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Mark the Soul Sea of a fellow heroic teammate; the Hero is planted with a Soul Mark starting next mission round.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Your mission Base Voting Power (B.V.P.) is increased by: (# of soul marks amongst all players) x 1.25</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Example:</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Spiritualist naturally has a B.V.P. of ??1.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>2 Heroes have a Soul Mark planted.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>B.V.P. = ??1 + (??1.25 x 2 Soul Marks) =&gt; ??3.5</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>*cannot be stacked on the same person</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>A Soul Mark cannot be placed upon the Saintess.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Soul Scan</p>
              </td>
              <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
              </td>
              <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission &nbsp;Team (only Heroes)</p>
              </td>
              <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase</p>
              </td>
              <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
              </td>
              <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Scan the soul of a fellow mission teammate, and receive two possible roles he/she could be.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the role is Princess, Seer, Oracle, or Aura Knight, then you will receive all 4 of these roles.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the role is Saintess, you will be repelled by her holy light and will thus know it is her.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Soul Release</p>
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
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
              </td>
              <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Starting round 2, you can choose to remove the Soul Marks from every single afflicted player.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>You will learn the names of all players whose soul was released.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose one of 2 options:</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><u>1) Soul Cannon</u></p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>For every player whose Soul Mark was removed, -2.5 to this round???s Mission Team vote sum ONLY if you are chosen for the Mission Team as well.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>(-2.5 x # of players released)</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If you are NOT chosen for the Mission Team, then you released everyone???s souls for nothing.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><u>2) Resonance</u></p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>All players whose team is listed as ???Villain??? will immediately receive a (-1.25 x # of players released) Energy Pool charge.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>e.g. if 2 players had their souls released, then EACH villain gets -2.5 added to his/her Energy Pool.</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The soul release happens immediately, during the 1<sup>st</sup> Powers Phase, meaning if you are chosen for the Mission Team, you will NOT receive the Soul Mark ??1.25 boost/per player to your B.V.P.</p>
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
(SpiritualistPowerInfo);

