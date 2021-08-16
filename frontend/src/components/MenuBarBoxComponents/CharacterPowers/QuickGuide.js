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

        <a href="https://drive.google.com/file/d/1VUKwkA28B4qW4MW9sVCzDMfMZYEOsk8I/view?usp=sharing" target="_blank">PDF Quick Guide</a>
        <br></br> 

          <div>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Mission Team Size</span></u></strong></p>
            <table style={{marginLeft: '.25pt', borderCollapse: 'collapse', border: 'none'}}>
              <tbody>
                <tr>
                  <td colSpan={2} rowSpan={2} style={{width: '1.35in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'white', padding: '0in 5.4pt', verticalAlign: 'top'}}>
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
                  <td rowSpan={7} style={{width: '48.6pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
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
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Win Conditions</span></u></strong></p>
            <table style={{borderCollapse: 'collapse', border: 'none'}}>
              <tbody>
                <tr>
                  <td style={{width: '233.75pt', border: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '20px', fontFamily: '"Times New Roman",serif'}}>Villains</span></p>
                  </td>
                  <td style={{width: '233.75pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>5 Failed Team Proposals In A Single Mission</span></p>
                  </td>
                  <td rowSpan={2} style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>3 Consecutive Mission Successes</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Kaguya’s Dark Destiny</span></p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
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
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Game Phase 6:</span></strong><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;Mission Vote Phase: Players chosen for the mission team can vote for the mission to succeed or fail (if sum of votes &gt;= 0, then mission succeeds!) AND can also use powers if they have any. For those players not selected for the mission team, they simply wait.<br />&nbsp;</span></p>
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
              <li><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '16px'}}>There is no rule regarding revealing one’s identity/role. Some roles have the ability to 100% confirm their identity. As an example, Pear’s “Invisible Spy” ability alerts everyone that the ability was used. The player who is Pear could say “I am Pear and I will prove it by using ‘Invisible Spy’.” However, the main reason you don’t want to 100% confirm your identity is because even if the Heroes satisfy a win condition, the Villains can steal victory by correctly guessing the identity of the Princess. The more Heroes who confirm their roles, the easier it is for the Villains to guess who the Princess is.</span></li>
            </ul>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
            <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
              <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '16px'}}>There is a special role known as “Delayer”. Every time he/she is not put on the Mission Team, he/she gains +1 to his Temporal Charge, which increases his/her Team and Mission Voting Power. If Delayer avoids being put on a Mission Team through Missions 1-4, then his/her Team Vote Power will count as either 2.33 or 2.66 (depends on the number of players in the game). Thus, evil will have enough team votes to completely reject every single proposed team. Remember, 5 failed team proposals in a single mission means the Villains automatically win.</span></li>
              </ul>
            </div>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Only the Princess is notified Delayer is in the game. However, every player should try to be on the Mission Team, since you know you, yourself is good, and you only want good players on the team. Thus, if you notice someone who is trying to avoid being placed upon the Mission Team, he/she could be Delayer, and you should put him/her on the Mission Team before it’s too late! Once Delayer is forced onto a Mission Team, his/her Temporal Charge forcibly activates, increasing his/her Mission Voting Power, but then dropping back down to 0 after the mission has ended.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Status Conditions</span></u></strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Skip to “Vote Calculation” section if you do not understand terms like “B.V.P.” or types like base/core/special.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Hecate’s Exchange of the Spirits swaps ALL status conditions of two players (though the targets cannot include the Umbra Lord or the Saintess).</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Ranger’s Anti-Mana Ray removes ALL status conditions EXCEPT for ‘Corruption’.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Voting for the mission’s “Failure”, as in physically clicking the “Fail” button when on the Mission Team, will heal/remove the following status conditions: Soul Mark, Zombie (status changed to “Recovered”), Injury, Bomb, Burn, Shrink, Entrancement, and Marked Man. The healing effect occurs immediately, even for the current mission vote.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
            <table style={{width: '490.25pt', borderCollapse: 'collapse', border: 'none'}}>
              <tbody>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Status</span></p>
                  </td>
                  <td style={{width: '58.5pt', border: 'solid windowtext 1.0pt', borderLeft: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Type</span></p>
                  </td>
                  <td style={{width: '195.6pt', border: 'solid windowtext 1.0pt', borderLeft: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Effect</span></p>
                  </td>
                  <td style={{width: '146.4pt', border: 'solid windowtext 1.0pt', borderLeft: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>Roles Capable of Inflicting</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Corruption</span></p>
                  </td>
                  <td rowSpan={6} style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Base</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 192, 0)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Reverses B.V.P.&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Can only be healed by Purify and Star Healing Activation.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Umbra Lord</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Soul Mark</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 192, 0)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Increases the Spiritualist’s B.V.P. by 1.25 per number of Soul Marks.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Spiritualist</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Poison</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 192, 0)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Ignores all other base effects and special abilities and forces the affected player’s B.V.P. to be negative, depending on Poison Count (P.C.)</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>3 P.C. = -5 B.V.P.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>2 P.C. = -3 B.V.P.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>1 P.C. = -1 B.V.P.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Can only be healed by Purify and Star Healing Activation, or through waiting until P.C. drops to 0. At the end of every round, P.C. decreases by 1.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Toxiturtle, Persequor</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Zombie</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 192, 0)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Reverses B.V.P.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Once healed, player immediately enters a “recovered” state, where he/she gets a core effect of +2.5 to his/her V.P.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Noah, Persequor</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Confusion</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 192, 0)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>There is a 75% chance the player’s B.V.P. will be reversed.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts one round.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Can only be healed by ‘Esuna’.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Lan, Seer, Persequor</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Injury</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 192, 0)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>B.V.P. reduced to 0 as long as player’s Injury Count is above 0.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>At the end of every round, the Injury Count reduces by 1.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Lieutenant Blitz, Persequor</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Boost</span></p>
                  </td>
                  <td style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 192, 0)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Increases the player’s B.V.P. by the Boost factor.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Example:</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>1 (B.V.P.) + 3 (Boost) = 4 B.V.P.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFC000', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Aura Knight, Hecate, Persequor</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Multiplier</span></p>
                  </td>
                  <td rowSpan={10} style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Core</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Increase the player’s V.P. by the multiplication factor.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Example:</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>2 (V.P.) x 3 (Multiplier) = 6 V.P.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Hecate, Persequor</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Bomb</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>When a player with a bomb is selected for the Mission Team, the bomb will explode: -3 to his V.P.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Bomberman, Persequor</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Burn</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Decrease the player’s V.P. by 0.75 x Burn Count.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Example:</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>2 V.P. – (2 Burn Count x 0.75) = 0.5 V.P.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Until Burn is healed, the Burn &nbsp;Count increases by 1 at the end of every round.&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Bomberman, Persequor</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Slow Charge</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Add the Slow Charge to the player’s voting power.&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Slow Charge is based on the player’s voting power on the Mission he was inflicted with slow.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}><br />&nbsp;Slow Charge can thus be negative or positive.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Delayer, Persequor</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Shrink</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>As long as Shrink Count is above 0, halve (½) the player’s Mission V.P. AND Team V.P.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Shrink Count decreases by 1 at the end of every round.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Ranger, Persequor</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Bless</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Double the player’s Mission AND Team V.P.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts one round.&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Cannot be healed by anything.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Saintess, Persequor</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Curaga Boost</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Add +3.5 to the player’s V.P.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts one round.&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Cannot be healed by anything.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Saintess</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Heartache Defense</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Add +5 to the player’s V.P.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts one round.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Cannot be healed by anything.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Princess</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Therapy</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Add +3.5 to the player’s V.P.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts one round.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Cannot be healed by anything.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Lottie</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Group Hug</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Add +1.25 to the player’s V.P.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts one round.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Cannot be healed by anything.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Lottie</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Entrancement</span></p>
                  </td>
                  <td rowSpan={4} style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Special</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>If both Kaguya and the “entranced” hero are on the Mission Team, there is a 67% chance the afflicted player’s final V.P. will be reversed!</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Kaguya</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Marked Man</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>If both Backstabber and the “marked” player are on the Mission Team together, the Backstabber can use his “Assassinate” skill.&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>-5 to the Mission Team’s vote sum.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Backstabber</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Slow</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>When the afflicted player is chosen for the Mission Team, reduces his/her final V.P. to 0.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Take that final V.P., multiply by 1.5, then store into “Slow Charge”.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts one round.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Can only be healed by Dispel and Star Healing Activation.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Delayer, Persequor</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Safeguard</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>The player’s final V.P. is guaranteed to be positive. If it’s negative, multiply by -1 to convert to a positive number.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts one round.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Cannot be healed by anything.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Saintess, Persequor</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt', height: '4.45pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Paralysis</span></p>
                  </td>
                  <td rowSpan={2} style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt', height: '4.45pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Team</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', height: '4.45pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>The paralyzed player cannot be the Mission Team Leader for the current round. He/she will be skipped.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts one round.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Can only be healed by ‘Esuna’.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt', height: '4.45pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Noah, Toxiturtle, Persequor</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '89.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Freeze</span></p>
                  </td>
                  <td style={{width: '195.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>The frozen player is unable to use any of his/her special powers and abilities for the current round.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Only lasts one round.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Can only be healed by ‘Esuna’.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                  </td>
                  <td style={{width: '146.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
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
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Most roles (some roles are special, like Lt. Blitz) have a base voting power (B.V.P.) of ±1.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>If you had a B.V.P. of ±2, then that means voting for mission success would be +2, and voting for mission failure would be -2.&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>B.V.P. has no mathematical sign. It is neither negative or positive. It becomes negative/positive depending on whether you vote for acceptance/success, or rejection/failure.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>‘Base’ status conditions affect B.V.P. and increase your voting power regardless if you vote for success or failure.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>‘Core’ status conditions DO have directionality/mathematical sign. Thus, a ‘Core’ status effect of +3, will always make your voting power more positive (success), while a ‘Core’ status effect of -2 will always make your voting power more negative (failure).</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>‘Core’ status conditions follow the order of Addition/Subtraction first, then Multiplication/Division.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>‘Special’ status conditions are applied after ‘Base’ and ‘Core’ effects, and have special conditions. You will need to read about their effects in the full Rule book.&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Your final V.P. (voting power) is calculated after all base, core, and special status conditions, AND role abilities have been applied.&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>For everyone chosen for the mission team, their final V.P.’s are separated by positive and negative votes, which are added together to create a positive vote sum and a negative vote sum. The positive and negative vote sum are then added together to get the overall mission vote sum.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>Then, some character powers are applied, which can either add to or subtract from the mission vote sum.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>After all calculations, if the Mission Team’s vote sum is positive (0 or greater), the mission succeeds! If the vote sum is negative, the mission fails!</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '17px', lineHeight: '107%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Same Priority</span></u></strong></p>
                    <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                      <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Injury</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Jailer’s Jailed Player</span></li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={2} style={{width: '233.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Core</span></p>
                  </td>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Same Priority</span></u></strong></p>
                    <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                      <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Burn</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Bomb</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Slow Charge Boost</span></li>
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
                  <td rowSpan={7} style={{width: '233.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Special</span></p>
                  </td>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Marcus’s Berserk (Both -6 and +6)</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', fontFamily: '"Times New Roman",serif', color: 'black'}}>Same Priority</span></u></strong></p>
                    <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                      <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Reverser’s Reverse Vote</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '12.0pt', color: 'black'}}>Entrancement</span></li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
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
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>*Persequor’s Copycat explained: Copycat copies the very final voting power (V.P.) of her target, but guaranteed negative. However, Persequor is still affected by every single power/condition starting from Pear’s Vanish Vote, and going down the table.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Example: Persequor copies John, whose final voting power (F.V.P.), after all base, core, and special effects is +3. Copycat gives Persequor a V.P. of -3. But if Persequor is under the effects of Safeguard, her F.V.P. become +3. If she is the target of Pear’s Vanish Vote, her F.V.P. becomes 0, and so on for Perish Song, Lullaby, and Slow.</span></p>
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

