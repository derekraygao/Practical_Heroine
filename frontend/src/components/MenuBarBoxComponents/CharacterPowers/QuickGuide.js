import React from 'react';
import { connect } from 'react-redux';

import './CharacterPowers.css';



class QuickGuide extends React.Component {

  state = {


  };


  componentDidMount = () => {

    var elem = document.querySelector('.power-info-menu-component-container');

    elem.scrollTop = this.props.prevScrollPosition;

  }; //end componentDidMount


  componentWillUnmount = () => {

    var elem = document.querySelector('.power-info-menu-component-container');

    this.props.setScrollPosition(
      "quickGuideScrollPosition",
      elem.scrollTop
    );

  }; //end componentWillUnmount



  render() {

    return (

      <div className="power-info-menu-component-container">

        <div className="power-info-character-header">Quick Guide</div>

        <a href="https://drive.google.com/file/d/1EmCMKPykHVAcfy-rdpwVJ29UEXVilVqj/view?usp=sharing" target="_blank">PDF Quick Guide</a>
        <br></br> 

        <div>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red'}}>*I suggest just reading the ‘Objective’ (~1 minute). The core gameplay is extremely easy to understand, but the finer details make the game quite complicated. It’s much easier (and more fun!) to learn by playing the game.&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red'}}>The game was designed with Bushnell’s Law “easy to learn, hard to master” in mind.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red'}}>Remember, you can look things up with your browser window’s ‘Find’ function: CTRL + F on Windows and&nbsp;</span><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Cambria Math",serif', color: 'red'}}>⌘ + F on Mac.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}><span style={{textDecoration: 'none'}}>&nbsp;</span></span></u></strong></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Objective</span></u></strong></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>There can be a lot of different strategies and factors in this game, which can make it confusing. However, the basic/core gameplay is very simple:<br />&nbsp;</span></p>
          <ul style={{listStyleType: 'disc'}}>
            <li><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px'}}>Based upon a pre-determined order (which stays the same the entire game), players take turns proposing a “Mission Team”. <br />&nbsp;<br />&nbsp;</span></li>
            <li><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px'}}>If you are a Villain, you want to put fellow villainous teammates onto the Mission Team, but you must be careful not to reveal your identity, since there are more heroes than villains and they can outvote you. <br />&nbsp;<br />&nbsp;</span></li>
            <li><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px'}}>5 failed Mission Team proposals in a single round means the Villains win, so ALL players MUST vote to accept the 5<sup>th</sup> proposed team in a single round. Villains must also vote to accept the team because not doing so would reveal that the player is evil.<br />&nbsp;<br />&nbsp;</span></li>
          </ul>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Note: Until the ‘Umbra Lord’ (a villainous role in every single game) uses his “Absolute Team Rejection” power, a power that he can use ONCE per game to forcibly reject a team, ALL players MUST vote to accept the 4<sup>th</sup> proposed team.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <ul style={{listStyleType: 'disc'}}>
            <li><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px'}}>The Villains’ advantage is that all villainous players know of each other, while good/heroic players have no idea of everyone’s allegiances. <br />&nbsp;<br />&nbsp;</span></li>
            <li><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px'}}>The ‘Princess’ (a heroic role in every single game) knows of all the identities of the Heroes and Villains. However, she must not reveal her identity, because if the Heroes manage to satisfy a win condition, the Villains are allowed to guess on the Princess’s identity. If they guess correctly, the Villains win!&nbsp;</span></li>
          </ul>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
            <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px'}}>If you are selected for a Mission, Heroes wants to vote for Mission Success, while Villains wants to vote for Mission Failure.&nbsp;</span></li>
            </ul>
          </div>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
            <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px'}}>Villains wants to maximize negative votes/voting power (voting for Mission Failure gives negative voting power).&nbsp;</span></li>
            </ul>
          </div>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
            <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px'}}>Heroes wants to maximize positive votes/voting power (voting for Mission Success gives positive voting power).&nbsp;</span></li>
            </ul>
          </div>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
            <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px'}}>If the Mission Team’s total/summed voting power of all players selected for the mission is greater than or equal to 0, then the mission is a “Success”. Otherwise the mission is a “Fail’.&nbsp;</span></li>
            </ul>
          </div>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
            <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px'}}>4 “Success” missions total or 3 consecutive “Success” missions means the Heroes win.&nbsp;</span></li>
            </ul>
          </div>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
            <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px'}}>4 “Fail” missions total or 3 consecutive “Fail” missions means the Villains win.<br />&nbsp;<br />&nbsp;</span></li>
            </ul>
          </div>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}><span style={{textDecoration: 'none'}}>&nbsp;</span></span></u></strong></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Mission Team Size</span></u></strong></p>
          <table style={{marginLeft: '.25pt', borderCollapse: 'collapse', border: 'none'}}>
            <tbody>
              <tr>
                <td colSpan={2} rowSpan={2} style={{width: '98.1pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'white', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td colSpan={5} style={{width: '232.75pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', background: 'rgb(255, 214, 83)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Number of Players</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 214, 83)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>6</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 214, 83)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>7</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 214, 83)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>8</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 214, 83)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>9</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 214, 83)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>10</span></p>
                </td>
              </tr>
              <tr>
                <td rowSpan={7} style={{width: '49.5pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Mission&nbsp;</span></p>
                </td>
                <td style={{width: '48.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>1</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>3</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>3</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>3</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>4</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>5</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '48.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>2</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>4</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>4</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>5</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>2</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>6</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '48.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>3</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>2</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>3</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>4</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>5</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>2</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '48.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>4</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>5</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>2</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>2</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>3</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>3</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '48.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>5</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>3</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>5</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>3</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>6</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>4</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '48.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>6</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>2</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>3</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>5</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>2</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>6</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '48.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>7</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>5</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>5</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>6</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>7</span></p>
                </td>
                <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>8</span></p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Good:Evil Players Ratio</span></u></strong></p>
          <table style={{marginLeft: '.25pt', borderCollapse: 'collapse', border: 'none'}}>
            <tbody>
              <tr>
                <td style={{width: '103.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '99pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', background: 'rgb(255, 217, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}># Good</span></p>
                </td>
                <td style={{width: '1.25in', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', background: 'rgb(255, 217, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}># Evil</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '103.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>6 Players</span></p>
                </td>
                <td style={{width: '99pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>4</span></p>
                </td>
                <td style={{width: '1.25in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>2</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '103.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>7 Players</span></p>
                </td>
                <td style={{width: '99pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>4</span></p>
                </td>
                <td style={{width: '1.25in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>3</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '103.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>8 Players</span></p>
                </td>
                <td style={{width: '99pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>5</span></p>
                </td>
                <td style={{width: '1.25in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>3</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '103.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>9 Players</span></p>
                </td>
                <td style={{width: '99pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>5</span></p>
                </td>
                <td style={{width: '1.25in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>4</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '103.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>10 Players</span></p>
                </td>
                <td style={{width: '99pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>6</span></p>
                </td>
                <td style={{width: '1.25in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>4</span></p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Win Conditions</span></u></strong></p>
          <table style={{borderCollapse: 'collapse', border: 'none'}}>
            <tbody>
              <tr>
                <td style={{width: '233.75pt', border: 'solid windowtext 1.0pt', background: '#68FE7D', padding: '0in 5.4pt 0in 5.4pt', height: '35.0pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '20px', fontFamily: '"Times New Roman",serif'}}>Villains</span></p>
                </td>
                <td style={{width: '233.75pt', border: 'solid windowtext 1.0pt', borderLeft: 'none', background: '#68FE7D', padding: '0in 5.4pt 0in 5.4pt', height: '35.0pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '20px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Heroes</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>4 Mission Failures</span></p>
                </td>
                <td rowSpan={2} style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>4 Mission Successes</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>3 Consecutive Mission Failures</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>5 Failed Team Proposals In A Single Round</span></p>
                </td>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>3 Consecutive Mission Successes</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Kaguya’s Dark Destiny</span></p>
                </td>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Pharaoh’s Summon ‘The Forbidden One’</span></p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Roles</span></u></strong></p>
          <table style={{borderCollapse: 'collapse', border: 'none'}}>
            <tbody>
              <tr>
                <td style={{width: '116.75pt', border: 'solid windowtext 1.0pt', background: '#68FE7D', padding: '0in 5.4pt 0in 5.4pt', height: '35.0pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '20px', fontFamily: '"Times New Roman",serif'}}>Villains</span></p>
                </td>
                <td style={{width: '1.75in', border: 'solid windowtext 1.0pt', borderLeft: 'none', background: '#68FE7D', padding: '0in 5.4pt 0in 5.4pt', height: '35.0pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '20px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Heroes</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '116.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Umbra Lord</span></p>
                </td>
                <td style={{width: '1.75in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Princess</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '116.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Noah</span></p>
                </td>
                <td style={{width: '1.75in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Saintess</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '116.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Hecate</span></p>
                </td>
                <td style={{width: '1.75in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Ichigo</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '116.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Bomberman</span></p>
                </td>
                <td style={{width: '1.75in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Marcus</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '116.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Lieutenant Blitz</span></p>
                </td>
                <td style={{width: '1.75in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Lottie</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '116.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Delayer</span></p>
                </td>
                <td style={{width: '1.75in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Lan</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '116.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Persequor</span></p>
                </td>
                <td style={{width: '1.75in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Pear</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '116.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Reverser</span></p>
                </td>
                <td style={{width: '1.75in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Pharaoh</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '116.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Spiritualist</span></p>
                </td>
                <td style={{width: '1.75in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Seer</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '116.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Baby Doll</span></p>
                </td>
                <td style={{width: '1.75in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Aura Knight</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '116.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Toxiturtle</span></p>
                </td>
                <td style={{width: '1.75in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Oracle</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '116.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Backstabber</span></p>
                </td>
                <td style={{width: '1.75in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Sensor</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '116.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Psychologist</span></p>
                </td>
                <td style={{width: '1.75in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Detective Chat</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '116.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Kaguya</span></p>
                </td>
                <td style={{width: '1.75in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Balancer</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '116.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Unknown (???)</span></p>
                </td>
                <td style={{width: '1.75in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Ranger</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '116.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '1.75in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Esper</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '116.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '1.75in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Scientist</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '116.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '1.75in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Jailer</span></p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '75.3pt', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><u><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}><span style={{textDecoration: 'none'}}>&nbsp;</span></span></u></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Phases</span></u></strong><u><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></u></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>The game is broken down into 10 distinct phases:<br />&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Game Phase 1:</span></strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;1<sup>st</sup> Powers Phase: Characters can have multiple powers and they may be only accessible in different phases</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></strong></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Game Phase 2:&nbsp;</span></strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Team Proposal Phase: Team Leader chooses his/her team to send on the mission.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Game Phase 3:</span></strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;Team Vote Phase: Everyone votes on the leader’s team. If the team is successfully approved (number of approval votes is greater than or equal to number of rejection votes), then move on to phase 4. Otherwise, a new team leader is chosen to propose a new team. The order of team leaders follows the published order of players and loops.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>If 5 team proposals in a row are rejected, then evil automatically wins!<br />&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Game Phase 4:</span></strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;View Team Vote Results: Everyone will see how everyone else voted – that is, whether he/she voted to accept or reject the team.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></strong></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Game Phase 5:</span></strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;2<sup>nd</sup> Powers Phase: Characters can have multiple powers and they may be only accessible in different phases. Some characters’ powers can only be used depending on whether they are chosen for the Mission Team or not. For those who don’t have powers, they must wait for Game Phase 5 to end.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></strong></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Game Phase 6:</span></strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;Mission Vote Phase: Players chosen for the mission team can vote for the mission to succeed or fail (if sum of votes &gt;= 0, then mission succeeds!) AND can also use powers if they have any. For those players not selected for the Mission Team, they simply wait.<br />&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Game Phase 7:</span></strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;View Mission Results Phase: Players are notified whether the mission succeeded or failed. They are given the Mission Team’s total vote sum, as well as the sum of negative votes and the sum of positive votes. Individual voting powers are not given.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Note, some characters have powers affecting the total vote sum, so sometimes the negative sum + the positive sum might not add up to the total vote sum.<br />&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Game Phase 8:</span></strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;Night Phase: The general chat box and video chat is disabled (although voice chat still works). The heroes can analyze the mission results and look at mission approval/rejection voting patterns to identify the villains. The villains are capable of chatting with each other secretly. Certain roles like jailer/telepath allow nighttime chat as well.<br />&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Game Phase 9:</span></strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;Assassinate the Princess Phase: If the Heroes successfully satisfy a victory/win condition, then the Villains get one last chance to steal the win. All villains get to guess on who the Princess is. If there is disagreement among the Villains, the person with the highest number of votes is selected as the Evil Team’s guess for the Princess. If there is a tie, it will be a random selection between the tied choices.<br />&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Game Phase 10:</span></strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;Game Over Phase: All is revealed! Players find out which team won and everyone’s roles and identities.&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Tips</span></u></strong></p>
          <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
            <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '16px'}}>5 failed team proposals in a single mission means the Villains automatically win. Thus, if there have been 4 rejected proposed teams, you MUST accept the 5<sup>th</sup> team. However, because the Umbra Lord has an “Absolute Team Rejection” power, technically you can only reject 3 proposed teams. You MUST accepted the 4<sup>th</sup> proposed team, otherwise the Umbra Lord can reject the 5<sup>th</sup> proposed team with his power.&nbsp;</span></li>
            </ul>
          </div>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>The Umbra Lord can only use his “Absolute Team Rejection” Power once per game, so after he uses it (everyone will be notified it was used), you can then reject 4 proposed teams and accept the 5<sup>th&nbsp;</sup>proposed team.<br />&nbsp;</span></p>
          <ul style={{listStyleType: 'disc'}}>
            <li><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '16px'}}>If you don’t have a lot of information regarding who is good or evil, you should always reject as many proposed Mission Teams as possible, unless the Team Leader puts you on the team, since you know you are good! Seeing how people propose Mission Teams and who votes/rejects them is a powerful source of information! The more information the better! Thus, you want to force people to propose teams and to vote on these proposed teams as much as possible.<br />&nbsp;<br />&nbsp;</span></li>
            <li><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '16px'}}>Some powers have negative side effects or carry a risk. Don’t be too hasty about using your powers. Sometimes the best move is to not use a power at all!<br />&nbsp;<br />&nbsp;</span></li>
            <li><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '16px'}}>There is no rule regarding revealing one’s identity/role. Some roles have the ability to 100% confirm their identity. As an example, Pear’s “Invisible Spy” ability alerts everyone that the ability was used. The player who is Pear could say “I am Pear and I will prove it by using ‘Invisible Spy’.” However, the main reason you don’t want to 100% confirm your identity is because even if the Heroes satisfy a win condition, the Villains can steal victory by correctly guessing the identity of the Princess. The more Heroes who confirm their roles, the easier it is for the Villains to guess who the Princess is.<br />&nbsp;<br />&nbsp;</span></li>
            <li><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '16px'}}>Each game, the roles are random, except for ‘Princess’ and ‘Umbra Lord’, which are in every game. There is power in keeping your role hidden, to launch sneak attacks and strategies. If people are aware that a role is in the game (even if they don’t know who it is), they can come up with counter strategies.&nbsp;</span></li>
          </ul>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Additionally, some roles have powers which can only be activated IF the player is chosen for the Mission Team, and everyone is notified the power was activated. If you are evil, this will confirm that the Mission Team has an evil person. If you continue to use your power, by looking at the team composition each time that power was activated, it’s possible that the Heroes can figure out your identity.&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
            <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '16px'}}>There is a special role known as “Delayer”. Every time he/she is not put on the Mission Team, he/she gains +1 to his/her Temporal Charge, which increases his/her Team and Mission Voting Power.&nbsp;</span></li>
            </ul>
          </div>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>If Delayer avoids being put on a Mission Team through 4 consecutive missions, then his/her Team Vote Power will count as either 2.33 or 2.66 (depends on the number of players in the game). Thus, evil will have enough team votes to completely reject every single proposed team. Remember, 5 failed team proposals in a single mission means the Villains automatically win.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Only the Princess is notified Delayer is in the game (but not his/her exact identity). However, every player should try to be on the Mission Team, since you know you, yourself is good, and you only want good players on the team.&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Thus, if you notice someone who is trying to avoid being placed upon the Mission Team, he/she could be Delayer, and you should put him/her on the Mission Team before it is too late! Once Delayer is forced onto a Mission Team, his/her Temporal Charge forcibly activates, increasing his/her Mission Voting Power for the current mission only, and then Temporal Charge drops back down to 0 after the mission has ended.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Understanding Character Powers Chart</span></u></strong></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Below is an example chart of a fake Villain role “Empress Iarannia”</span></p>
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
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Tyranny</p>
                </td>
                <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                </td>
                <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                </td>
                <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Beginning of every round</p>
                </td>
                <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                </td>
                <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>At the beginning of every round, gain +1.5 Boost.</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Sovereignty</p>
                </td>
                <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                </td>
                <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (excluding self)</p>
                </td>
                <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                </td>
                <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                </td>
                <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Ice Beam</p>
                </td>
                <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                </td>
                <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>All Heroes</p>
                </td>
                <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                </td>
                <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                </td>
                <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Knight Guard</p>
                </td>
                <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                </td>
                <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team&nbsp;</p>
                </td>
                <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase (not on the Mission Team)</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                </td>
                <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                </td>
                <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Execute</p>
                </td>
                <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                </td>
                <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                </td>
                <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase</p>
                </td>
                <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                </td>
                <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Blizzard</p>
                </td>
                <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                </td>
                <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team (excluding self)</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                </td>
                <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                </td>
                <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>+2 B.V.P.</p>
                </td>
                <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Inflict Freeze on everyone on the Mission Team (excluding yourself).</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The Umbra Lord and the Saintess are not affected.&nbsp;</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Cold Wave</p>
                </td>
                <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                </td>
                <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team (only Heroes)</p>
                </td>
                <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                </td>
                <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                </td>
                <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Same effect as:<br />&nbsp;</p>
                  <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                    <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Meteor</li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Psybomb</li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Final Heaven</li>
                    </ul>
                  </div>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>As discussed in the <strong>Phases</strong> section, there are 3 phases where players can use their powers: Phase 1, Phase 5, and Phase 6.<br />&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>For almost all powers, unless stated otherwise, you can only activate one power per phase.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Iarannia has the abilities ‘Sovereignty’ and ‘Ice Beam’, which can be used during PP1. However, you can only use one ability per round.<br />&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>You can only use “Active” powers. “Passive” powers are activated automatically.<br />&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>As will be discussed deeper in detail, in the <strong>Vote Calculation</strong> section, almost all roles have a natural B.V.P. (base voting power) of ±1.&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>This means if you vote for mission “Success”, your B.V.P. is converted to a V.P. (voting power) of +1.&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>If you vote for mission “Failure”, your B.V.P. is converted to a V.P. (voting power) of -1.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>However, instead of voting for Mission Success/Failure, which uses your natural B.V.P., you can instead choose to use a power. Iarannia’s Blizzard has a B.V.P. of +2. This means your B.V.P. will count as a V.P. of +2 when you choose to use Blizzard.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>As a Villain, you want your V.P. to be negative (and vice versa for Heroes), so you must think carefully when to use the powers that are available during the Mission Vote Phase.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Some powers available during the Mission Vote Phase, like ‘Cold Wave’, can be activated and then you still vote normally. You can activate a power and still vote normally if there is no number (ie: -1.5 B.V.P.) in the Voting Power box.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Status Conditions</span></u></strong></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Skip to “Vote Calculation” section if you do not understand terms like “B.V.P.” or types like base/core/special.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Hecate’s Exchange of the Spirits swaps ALL status conditions of two players (though the targets cannot include the Umbra Lord or the Saintess).</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Ranger’s Anti-Mana Ray removes ALL status conditions EXCEPT for ‘Corruption’.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Voting for the mission’s “Failure”, as in physically clicking the “Fail” button when on the Mission Team, will heal/remove the following status conditions:&nbsp;</span></p>
          <ul style={{listStyleType: 'disc'}}>
            <li><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '16px'}}>Soul Mark</span></li>
            <li><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '16px'}}>Zombie (status changed to “Recovered”)</span></li>
            <li><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '16px'}}>Injury</span></li>
            <li><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '16px'}}>Bomb</span></li>
            <li><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '16px'}}>Burn</span></li>
            <li><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '16px'}}>Shrink</span></li>
            <li><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '16px'}}>Entrancement</span></li>
            <li><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '16px'}}>Marked Man.&nbsp;</span></li>
          </ul>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>The healing effect occurs immediately, even for the current mission vote.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Unless stated otherwise, all status conditions automatically take effect (“used up”) when a person is chosen for a Mission Team. For example, if you have a status effect of +3 Energy Pool, +3 will be added to your voting power regardless if you want it to activate this Mission or not. There’s no “saving” it for the future/another mission. Once used up, your status will go back to normal. If you are not chosen for the Mission Team, it will stay with you forever, unless healed/removed by another power/ability or because it is a “one turn only” effect.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <table style={{width: '467.5pt', borderCollapse: 'collapse', border: 'none'}}>
            <tbody>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Status</span></p>
                </td>
                <td style={{width: '53.8pt', border: 'solid windowtext 1.0pt', borderLeft: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Type</span></p>
                </td>
                <td style={{width: '170.15pt', border: 'solid windowtext 1.0pt', borderLeft: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Effect</span></p>
                </td>
                <td style={{width: '78.9pt', border: 'solid windowtext 1.0pt', borderLeft: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Duration</span></p>
                </td>
                <td style={{width: '78.35pt', border: 'solid windowtext 1.0pt', borderLeft: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Roles Capable of Inflicting</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Corruption</span></p>
                </td>
                <td rowSpan={6} style={{width: '53.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Base</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 192, 0)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Reverses B.V.P.&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>As an example, if your natural B.V.P. is ±1 and you vote for Mission Success, your B.V.P. for the mission becomes +1.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}><br />&nbsp;However, Corruption will turn that +1 into a -1. Vice versa for if you vote for Mission Failure.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Can only be healed by Purify and Star Healing Activation.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Permanent (until healed)</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Umbra Lord</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Soul Mark</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 192, 0)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Increases the Spiritualist’s B.V.P. by 1.25 per number of Soul Marks and allows him/her to use his/her ‘Soul Release’ ability.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>This has no direct effect on the affected player. However, the Spiritualist can increase his/her strength depending on the number of affected players.&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Permanent (until healed or released by the Spiritualist)</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Spiritualist</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Poison</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 192, 0)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Ignores all other base effects and special abilities and forces the affected player’s B.V.P. to be negative, depending on Poison Count (P.C.)</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>3 P.C. = -5 B.V.P.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>2 P.C. = -3 B.V.P.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>1 P.C. = -1 B.V.P.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Can only be healed by Purify and Star Healing Activation, or through waiting until P.C. drops to 0. At the end of every round, P.C. decreases by 1.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Clarification: Poison will use up the abilities of Meteor, Psybomb, Final Heaven, Delayed Gratification, etc., and the status condition ‘Boost’, but they will have no effect. B.V.P. will be solely determined by Poison Count.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>However, ‘Reduce B.V.P. to 0’ Base effects will work, such as being jailed or ‘Injury’.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Core and Special Effects will still work since they affect V.P. and not B.V.P.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts for as long as the Poison Count &gt; 0 (Poison Count decreases by 1 at the end of every round)</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Toxiturtle, Persequor</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Zombie</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Reverses B.V.P.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Once healed, player immediately enters a “recovered” state, where he/she gets a core effect of +2.5 to his/her V.P.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Zombie – Permanent, until healed</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Recovered – Permanent, until automatically used up by the player being chosen for the Mission Team</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Noah, Persequor</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Confusion</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 192, 0)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>There is a 75% chance the player’s B.V.P. will be reversed.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Can only be healed by ‘Esuna’.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts for one round</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Lan, Seer, Persequor</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Injury</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>B.V.P. reduced to 0 as long as player’s Injury Count is above 0.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>At the end of every round, the Injury Count reduces by 1.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts for as long as the Injury Count is &gt; 0 (Injury Count decreases by 1 at the end of every round)</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Lieutenant Blitz, Persequor, Pharaoh</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Boost</span></p>
                </td>
                <td style={{width: '53.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 192, 0)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Increases the player’s B.V.P. by the Boost factor.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>0 is considered to be positive.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Example:</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Your B.V.P. is ±1</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Your Boost is ±2</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>You vote for Mission Success, so your B.V.P. becomes +1.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>+1 B.V.P. + 2 Boost = +3 B.V.P.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>You use a Power with B.V.P. of 0</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>0 B.V.P. + 2 Boost = +2 B.V.P.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>You vote for Mission Failure so your B.V.P. becomes -1</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>-1 B.V.P. + 2 Boost = -3 B.V.P.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Permanent (is automatically ‘used up’ when the player is chosen for the Mission Team)</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Aura Knight, Hecate, Persequor, Pharaoh</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Bomb</span></p>
                </td>
                <td rowSpan={10} style={{width: '53.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>When a player with a bomb is selected for the Mission Team, the bomb will explode: -3 to his V.P.</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Permanent (is automatically ‘used up’ when the player is chosen for the Mission Team)</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Bomberman, Persequor</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Burn</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Decrease the player’s V.P. by 0.75 x Burn Count.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Example:</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>2 V.P. – (2 Burn Count x 0.75) = 0.5 V.P.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Until Burn is healed, the Burn &nbsp;Count increases by 1 at the end of every round.&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Permanent (until healed, and Burn Count increases by 1 at the end of every round)</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Bomberman, Persequor</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Energy Pool</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Add whatever number is in Energy Pool to the vote power.&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}><br />&nbsp;Energy Pool is stackable and can be either negative or positive.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><u><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Example</span></u></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Normal Energy Pool = 0</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>If a special ability adds -3 to Energy Pool and another ability adds +2 to it, then Energy Pool’s final value is -1, which will be added to the player’s voting power the next time he/she is on the Mission Team.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Permanent (is automatically ‘used up’ when the player is chosen for the Mission Team)</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Delayer, Persequor</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Multiplier</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Increase the player’s V.P. by the multiplication factor.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Multiplier is stackable (multiplication factor will be multiplied together).</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Example:</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Normal Multiplier = 1</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>If Hecate casts multiplier twice on the same target (1<sup>st</sup> time: 2x and 2<sup>nd</sup> time: 3x), then the final multiplier will be 6x.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>2 (V.P.) x 6 (Multiplier) = 12 V.P.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Permanent (is automatically ‘used up’ when the player is chosen for the Mission Team)</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Hecate, Persequor, Pharaoh</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Shrink</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>As long as Shrink Count is above 0, halve (½) the player’s Mission V.P. AND Team V.P.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Shrink Count decreases by 1 at the end of every round.</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts for as long as the Shrink Count &gt; 0 (Shrink Count decreases by 1 at the end of every round)</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Ranger, Persequor</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Bless</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Double the player’s Mission AND Team V.P.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Cannot be healed by anything.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts for one round</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Saintess, Persequor, Pharaoh</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Curaga Boost</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Add +3.5 to the player’s V.P.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Cannot be healed by anything.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts for one round</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Saintess</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Heartache Defense</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Add +5 to the player’s V.P.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Cannot be healed by anything.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts for one round</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Princess, Pharaoh</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Therapy</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Add +3.5 to the player’s V.P.&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Cannot be healed by anything.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts for one round</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Lottie, Pharaoh</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Group Hug</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Add +1.25 to the player’s V.P.&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Cannot be healed by anything.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts for one round</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Lottie, Pharaoh</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Entrancement</span></p>
                </td>
                <td rowSpan={4} style={{width: '53.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Special</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>If both Kaguya and the “entranced” hero are on the Mission Team, there is a 67% chance the afflicted player’s final V.P. will be reversed!</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Permanent (until healed)</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Kaguya</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Marked Man</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>If both Backstabber and the ‘Marked’ player are on the Mission Team together, the Backstabber can use his “Assassinate” skill.&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>-5 to the Mission Team’s vote sum.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Permanent (until healed or Backstabber uses his ‘Assassinate’ ability)</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Backstabber</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Slow</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>When the afflicted player is chosen for the Mission Team, reduce his/her final V.P. to 0.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Take his/her original F.V.P. (before reducing to 0), multiply by 1.5, then store into “Energy Pool”.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Can only be healed by Dispel and Star Healing Activation.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts for one round</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Delayer, Persequor, Pharaoh</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Safeguard</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>The player’s final V.P. is guaranteed to be positive. If it’s negative, multiply by -1 to convert to a positive number.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Cannot be healed by anything.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts for one round</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Saintess, Persequor, Pharaoh</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt', height: '4.45pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Paralysis</span></p>
                </td>
                <td rowSpan={2} style={{width: '53.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt', height: '4.45pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Team</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', height: '4.45pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>The paralyzed player cannot be the Mission Team Leader for the current round. He/she will be skipped.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Can only be healed by ‘Esuna’.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt', height: '4.45pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts for one round</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt', height: '4.45pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Noah, Toxiturtle, Persequor</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '86.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Freeze</span></p>
                </td>
                <td style={{width: '170.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>The frozen player is unable to use any of his/her special powers and abilities for the current round.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Can only be healed by ‘Esuna’.</span></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
                <td style={{width: '78.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts for one round</span></p>
                </td>
                <td style={{width: '78.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Noah, Persequor</span></p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Vote Calculation</span></u></strong></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>For both Mission &amp; Team Proposal voting, mission failure or team rejection counts as a negative number. Voting for mission success or team acceptance counts as a positive number.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>The numbers are added together, and 0 or above means success/acceptance.&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Most roles (some roles are special, like Lt. Blitz) have a natural <u>base voting power</u> (B.V.P.) of ±1.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>If you had a B.V.P. of ±2, then that means voting for mission success would be +2, and voting for mission failure would be -2.&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>B.V.P. has no mathematical sign. It is neither negative or positive. It becomes negative/positive depending on whether you vote for acceptance/success, or rejection/failure.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><u><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Voting power</span></u><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;(V.P.), on the other hand, does have a predetermined, single, mathematical directionality (either + or -).&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>‘Base’ status conditions which affect B.V.P., like ‘Boost’, will increase your voting power, irrespective of mathematical sign. For example, if your natural B.V.P. is ±1 and you have a ‘Boost’ status condition of 2, then:</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>1) If you vote for Mission Success, your B.V.P. becomes +1 + 2 Boost = +3 V.P.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>2) If you vote for Mission Failure, your B.V.P. becomes -1 + 2 Boost = -3 V.P.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>‘Core’ status conditions DO have directionality/mathematical sign. Thus, a ‘Core’ status effect of +3 Energy Pool, will always make your voting power more positive (success), while a ‘Core’ status effect of -2 Energy Pool will always make your voting power more negative (failure).</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>‘Core’ status conditions follow the order of Addition/Subtraction first, then Multiplication/Division.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>‘Special’ status conditions are applied after ‘Base’ and ‘Core’ effects, and have special conditions. You will need to read about their effects in the full Rule book.&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Your F.V.P. (<u>Final Voting Power</u>) is calculated after all base, core, and special status conditions, AND role abilities have been applied.&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>For everyone chosen for the mission team, their final voting powers are separated by positive and negative votes, which are added together to create a positive vote sum and a negative vote sum.&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Some characters’ abilities/powers can directly affect the negative, positive, or total mission vote sum. These ‘Neutral’ votes are added together with the positive and negative vote sum to get the overall mission vote sum/total.</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>After all calculations, if the Mission Team’s vote sum is positive (0 or greater), the mission succeeds! If the vote sum is negative, the mission fails!</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Order of Status Effects/Powers/Abilities (From Top to Bottom)</span></strong></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><u><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Saintess not on the Mission Team</span></u></p>
          <table style={{borderCollapse: 'collapse', border: 'none'}}>
            <tbody>
              <tr>
                <td style={{width: '233.75pt', border: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '19px', fontFamily: '"Times New Roman",serif'}}>Effect/Power Type</span></p>
                </td>
                <td style={{width: '233.75pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '19px', fontFamily: '"Times New Roman",serif'}}>Status Effect/Ability/Power</span></p>
                </td>
              </tr>
              <tr>
                <td rowSpan={5} style={{width: '233.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFE599', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Base</span></p>
                </td>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 229, 153)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}><span style={{textDecoration: 'none'}}>&nbsp;</span></span></u></strong></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Same Priority</span></u></strong></p>
                  <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                    <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Lan’s Final Heaven</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Kaguya’s Moonblast</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Umbra Lord’s Bide/Meteor</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Esper’s Psybomb</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Lt. Blitz’s Power</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Delayer’s Temporal Charge</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Backstabber’s Vengeance</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Spiritualist’s Soul Mark Increase</span></li>
                    </ul>
                  </div>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 229, 153)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Boost</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 229, 153)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}><span style={{textDecoration: 'none'}}>&nbsp;</span></span></u></strong></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Same Priority</span></u></strong></p>
                  <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                    <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Corruption</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Mirror World</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Nightmare Syndrome</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Confusion</span></li>
                    </ul>
                  </div>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 229, 153)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Poison</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 229, 153)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}><span style={{textDecoration: 'none'}}>&nbsp;</span></span></u></strong></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Same Priority</span></u></strong></p>
                  <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                    <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Injury</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Jailer’s Jailed Player</span></li>
                    </ul>
                  </div>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
              </tr>
              <tr>
                <td rowSpan={2} style={{width: '233.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Core</span></p>
                </td>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}><span style={{textDecoration: 'none'}}>&nbsp;</span></span></u></strong></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Same Priority</span></u></strong></p>
                  <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                    <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Burn</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Bomb</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Energy Pool</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Recovered from Zombie Boost</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Therapy</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Group Hug</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Heartache Defense</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Curaga Boost</span></li>
                    </ul>
                  </div>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}><span style={{textDecoration: 'none'}}>&nbsp;</span></span></u></strong></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Same Priority</span></u></strong></p>
                  <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                    <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Bless</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Shrink</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Multiplier</span></li>
                    </ul>
                  </div>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
              </tr>
              <tr>
                <td rowSpan={8} style={{width: '233.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Special</span></p>
                </td>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Persequor’s Copycat</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Marcus’s Berserk (Both -6 and +6)</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}><span style={{textDecoration: 'none'}}>&nbsp;</span></span></u></strong></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Same Priority</span></u></strong></p>
                  <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                    <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Reverser’s Reverse Vote</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Entrancement</span></li>
                    </ul>
                  </div>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}><span style={{textDecoration: 'none'}}>&nbsp;</span></span></u></strong></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Same Priority</span></u></strong></p>
                  <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                    <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Marcus’s Transcendence</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Ichigo’s Holy Strike</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Lottie’s Moral Conscience</span></li>
                    </ul>
                  </div>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}><span style={{textDecoration: 'none'}}>&nbsp;</span></span></u></strong></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Same Priority</span></u></strong></p>
                  <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                    <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Pear’s Vanish Vote</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Baby Doll’s Perish Song</span></li>
                    </ul>
                  </div>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Safeguard</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Baby Doll’s Lullaby</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Slow</span></p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;</span></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><u><span style={{fontSize: '16px', lineHeight: '107%'}}>Saintess on the Mission Team (Sanctuary)</span></u></p>
          <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>When the Saintess is on the Mission Team, certain powers, abilities, and effects will be skipped or nullified. For instance, Flame Seal Bomb always adds -3 when the affected player is on the Mission Team, and then the status condition is reset to normal. With the Saintess on the Mission Team, the status condition is neither used nor reset to normal, but simply skipped. The next time the F.S. Bomb afflicted player is on a Mission WITHOUT the Saintess, then the bomb will go off and -3 to the player’s voting power.</span></p>
          <table style={{borderCollapse: 'collapse', border: 'none'}}>
            <tbody>
              <tr>
                <td style={{width: '233.75pt', border: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '19px', fontFamily: '"Times New Roman",serif'}}>Effect/Power Type</span></p>
                </td>
                <td style={{width: '233.75pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '19px', fontFamily: '"Times New Roman",serif'}}>Status Effect/Ability/Power</span></p>
                </td>
              </tr>
              <tr>
                <td rowSpan={3} style={{width: '233.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFE599', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Base</span></p>
                </td>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 229, 153)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}><span style={{textDecoration: 'none'}}>&nbsp;</span></span></u></strong></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Same Priority</span></u></strong></p>
                  <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                    <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Lan’s Final Heaven</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Kaguya’s Moonblast</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Umbra Lord’s Bide/Meteor</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Esper’s Psybomb</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Lt. Blitz’s Power</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Delayer’s Temporal Charge</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Backstabber’s Vengeance</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Spiritualist’s Soul Mark Increase</span></li>
                    </ul>
                  </div>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 229, 153)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Boost</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 229, 153)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Jailer’s Jailed Player</span></p>
                </td>
              </tr>
              <tr>
                <td rowSpan={2} style={{width: '233.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Core</span></p>
                </td>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}><span style={{textDecoration: 'none'}}>&nbsp;</span></span></u></strong></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Same Priority</span></u></strong></p>
                  <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                    <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Therapy</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Group Hug</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Heartache Defense</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Curaga Boost</span></li>
                    </ul>
                  </div>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}><span style={{textDecoration: 'none'}}>&nbsp;</span></span></u></strong></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Same Priority</span></u></strong></p>
                  <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                    <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Bless</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Multiplier</span></li>
                    </ul>
                  </div>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
              </tr>
              <tr>
                <td rowSpan={4} style={{width: '233.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Special</span></p>
                </td>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Marcus’s Berserk (Both -6 and +6)</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}><span style={{textDecoration: 'none'}}>&nbsp;</span></span></u></strong></p>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Same Priority</span></u></strong></p>
                  <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                    <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Marcus’s Transcendence</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Ichigo’s Holy Strike</span></li>
                      <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Lottie’s Moral Conscience</span></li>
                    </ul>
                  </div>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Pear’s Vanish Vote</span></p>
                </td>
              </tr>
              <tr>
                <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                  <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Safeguard</span></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      
        <br></br>

      </div> //end div power-info-menu-component-container

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
(QuickGuide);

