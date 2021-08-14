import React from 'react';
import { connect } from 'react-redux';

import './CharacterPowers.css';



class Rules extends React.Component {

  state = {


  };


  componentDidMount = () => {

    var elem = document.querySelector('.power-info-menu-component-container');

    elem.scrollTop = this.props.prevScrollPosition;

  }; //end componentDidMount


  componentWillUnmount = () => {

    var elem = document.querySelector('.power-info-menu-component-container');

    this.props.setScrollPosition(
      "rulesScrollPosition",
      elem.scrollTop
    );

  }; //end componentWillUnmount
  


  render() {

    return (

      <div className="power-info-menu-component-container">

        <div className="power-info-character-header">Full Rules</div>

          <div>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><span style={{fontSize: '26px', lineHeight: '107%'}}>Practical Hero(ine)</span></strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '20px', lineHeight: '107%'}}>Background</span></u></strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>John isn’t orphaned, abused, or bullied. But he wishes he were. In fact, his life was pretty awesome – he was &nbsp;captain of the Raging Rockets, the #1 Underworld Legends team in the world. His share of the prize money for winning the World Championships? $300k USD. After taxes. Not bad for a 19 year old college student, referred to as the G-GOAT (Greatest Gamer of All Time) by the video gaming community.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>But good times die as quickly as a pre-elected politician’s promises. After getting hit by a truck, John’s soul transmigrates into Azurea, the world of the only video game the G-GOAT has never beaten: <em>The Umbra Lord’s Revenge</em>. &nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>John had always thought that if he did transmigrate into another world, he would become some sort of overpowered Demon Lord with a large harem, but instead, he finds himself waking up inside the magic-less body of Princess Serenity, a minor villainess hated across the kingdom.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>She has no allies apart from her personal bodyguard, Knight Colonel Marcus, and her maid, Lottie. The only other person that has treated her with kindness is her fiancé, Noru Til Everstein, heir of the Everstein Duchy.&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Noru, like most of the important male characters in the game, is enamored with the game’s lead female protagonist, Lilith (Lily) Liumen. Due to her jealousy, Serena attempts to harm Lily multiple times, eventually escalating into attempted murder. Her schemes are ultimately exposed, and she is condemned by everyone, including the King and Noru. Serena is executed for her crimes and becomes nothing more than a footnote in the history of the Enlustrian Kingdom – barely worthy of a wiki entry for minor villains.&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>John initially suffers great depression from his plight, but he soon meets Eo, the Starlight Princess, who is mysteriously on the run from the Spirit Realm. John learns that it’s not the lack of orphaning and abuse that has led to his powerless state, but it’s due to his extremely rare Void Soul, which means he will never naturally be able to manipulate mana.&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Eo grants John the Star Brooch, which allows him to channel her starlight mana and to transform into Star Practical, an unlicensed Adventurer hero. In exchange, he must perform heroic duties and gather feelings of love, happiness, and gratitude to heal Eo’s damaged soul. With her fully restored powers, Eo will be able to restore John’s manhood and to send him back to Earth.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>In the meantime, Azurea has much to offer, like a kingdom populated with living fruits, and governed by its human ruler, Princess Pear (daughter of King Pineapple and Queen Jessica).&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>There’s a brutal, bloodthirsty (and yet totally legal and government-sanctioned) sport known as WonderSphere, of which Marcus is a famous player.&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>In Enlustria, there’s Paupserry Academy of Witchcraft and Wizardry, but true magic lies in Ruthenia – a floating island nation, in which every citizen is a magician, ruled by a mage’s council that includes Noah, a teenage prodigy of mana.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>But evil and good must coexist in a delicate balance. Despite Azurea’s wonders, there are also some nasty airship pirates like Lan Feng, first female captain of the terrifying Wind Razors, and a self-righteous prick, which is totally ironic, because she’s a common criminal, and yet she dares lecture others on morality and principles.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>And oh yes, every few decades, a king emerges from the Umbras, creatures capable of using dark mana. That king becomes known as the Umbra Lord, and his evil encroaches upon good’s territory. Thankfully, there’s also Heroes like Ichigo, who rise forth to maintain the balance of the world. And yet, Ichigo, who attends the Enlustrian Royal Academy along with John and Lan, is nearly out of a job.&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>130 years ago, the 17<sup>th</sup> Umbra Lord came into being, and so great was his power that not even the combined forces of the 7 Great Nations and the 17<sup>th</sup> Hero could defeat him. Perhaps the Luces, in sensing the great discord, wove the threads of fate and birthed the Saintess – the only person who has ever managed to repel the Umbra Lord.&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>With neither good nor evil capable of advancing, the Eternal Armistice was born – a period of eternal peace.&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>And for 129 years, Azurea has rejoiced. But recently, girls from all over the world are mysteriously disappearing. When the kidnappers strike a little too close to home, John finds himself drawn into a sinister plot with inter-world consequences. It’s a race against time as John rushes to rescue the missing girls, accompanied by Marcus, Lan, Pear, and Noah.&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>As the heroes conquer one impossible task after another, John can’t help wondering how a bunch of teenagers and young adults are succeeding where more skilled adults have failed – John knows he’s no plot-armor protected protagonist. It’s almost as though some unseen mastermind is carefully crafting the plot of this unrealistic story – a mastermind with ties to Earth.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>But no matter who it is, John will triumph! This Practical Princess and Hero(ine) will use all immoral tactics at her disposal – blackmail, racketeering, violence, and even killing – to achieve her goals!&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>“Stop right there, evil doer! I am Star Practical, a champion of practicality and rationality. On behalf of the stars, I will right wrongs and triumph over evil…. I will kill you! Huh? What’s that? No, I didn’t misspeak. Yes, kill you, not punish or arrest you. I never really believed in that no-kill rule nonsense…. I’m a practical hero you see!”&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '20px', lineHeight: '107%'}}>Game Rules</span></u></strong><span style={{fontSize: '20px', lineHeight: '107%'}}><br />&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%'}}>Objective</span></strong><span style={{fontSize: '17px', lineHeight: '107%'}}>&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Practical Heroine is a social deduction game, mixing intelligent analysis with lazy powers and luck. You will be assigned to one of two factions/teams – belonging to the Heroes (good) or belonging to the Villains/Umbras (evil). The goal for each team is to conquer 4 out of 7 missions. For good, that means succeeding the missions. For evil, that means failing the missions.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>In addition, you will receive a special role that comes with special powers.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>At the start of the game, ALL Villains know each other. The “Princess” role also knows who all the Villains are (but not their roles) and should secretly guide the Heroes in discovering who the Villains are. However, it is <strong>extremely</strong> <strong>important&nbsp;</strong>that the princess keeps her identity/role hidden, so she should not be too obvious.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Each game has a Princess and a Umbra Lord role, but the other roles are random.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}><br />&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%'}}>Phases</span></strong><span style={{fontSize: '17px', lineHeight: '107%'}}>&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>The game is broken down into 10 distinct phases:</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '16px', lineHeight: '107%'}}>Game Phase 1:</span></strong><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;1<sup>st</sup> Powers Phase: Characters can have multiple powers and they may be only accessible in different phases.<br />&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '16px', lineHeight: '107%'}}>Game Phase 2:&nbsp;</span></strong><span style={{fontSize: '16px', lineHeight: '107%'}}>Team Proposal Phase: Team Leader chooses his/her team to send on the mission.<br />&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '16px', lineHeight: '107%'}}>Game Phase 3:</span></strong><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;Team Vote Phase: Everyone votes on the leader’s team. If the team is successfully approved (number of approval votes is greater than or equal to number of rejection votes), then move on to phase 4. Otherwise, a new team leader is chosen to propose a new team. The order of team leaders follows the published order of players and loops.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>If 5 team proposals in a row are rejected, then evil automatically wins!<br />&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '16px', lineHeight: '107%'}}>Game Phase 4:</span></strong><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;View Team Vote Results: Everyone will see how everyone else voted – that is, whether he/she voted to accept or reject the team.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;</span></strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '16px', lineHeight: '107%'}}>Game Phase 5:</span></strong><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;2<sup>nd</sup> Powers Phase: Characters can have multiple powers and they may be only accessible in different phases. Some characters’ powers can only be used depending on whether they are chosen for the Mission Team or not. For those who don’t have powers, they must wait for Game Phase 5 to end.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;</span></strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '16px', lineHeight: '107%'}}>Game Phase 6:</span></strong><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;Mission Vote Phase: Players chosen for the mission team can vote for the mission to succeed or fail (if sum of votes &gt;= 0, then mission succeeds!) AND can also use powers if they have any. For those players not selected for the mission team, they simply wait.<br />&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '16px', lineHeight: '107%'}}>Game Phase 7:</span></strong><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;View Mission Results Phase: Players are notified whether the mission succeeded or failed. They are given the Mission Team’s total vote sum, as well as the sum of negative votes and the sum of positive votes. Individual voting powers are not given.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Note, some characters have powers affecting the total vote sum, so sometimes the negative sum + the positive sum might not add up to the total vote sum.<br />&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '16px', lineHeight: '107%'}}>Game Phase 8:</span></strong><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;Night Phase: The general chat box and video chat is disabled (although voice chat still works). The heroes can analyze the mission results and look at mission approval/rejection voting patterns to identify the villains. The villains are capable of chatting with each other secretly. Certain roles like jailer/telepath allow nighttime chat as well.<br />&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '16px', lineHeight: '107%'}}>Game Phase 9:</span></strong><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;Assassinate the Princess Phase: If the Heroes successfully satisfy a victory/win condition, then the Villains get one last chance to steal the win. All villains get to guess on who the Princess is. If there is disagreement among the Villains, the person with the highest number of votes is selected as the Evil Team’s guess for the Princess. If there is a tie, it will be a random selection between the tied choices.<br />&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '16px', lineHeight: '107%'}}>Game Phase 10:</span></strong><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;Game Over Phase: All is revealed! Players find out which team won and everyone’s roles and identities.&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}><br />&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%'}}>Voting</span></strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Almost every player has a base voting power (B.V.P.) of ±1 for both team and mission voting. B.V.P. has no mathematical sign (no negative or positive value).&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>An Accept Team/Mission Success vote will convert your B.V.P. into positive, while a Reject Team/Fail Mission vote will convert your B.V.P. into a negative.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>The team/mission votes are added together and if the sum is greater than or equal to 0, the team proposal/mission is successful.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>For the mission, Heroes want positive votes, while Villains want negative votes.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Certain roles can increase or decrease the voting power of themselves or that of others through their special powers. They can affect the votes in many different ways.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Alternatively, instead of voting for “Success” or “Fail”, some characters have powers which they can use in lieu of voting. These powers have a certain B.V.P. which may be positive or negative. For example, using the Umbra Lord’s “Bide” ability results in a B.V.P. of +1 for the Mission. Using the Princess’s “Star Prism Power” ability results in a B.V.P. of -2 for the Mission.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Status Effects/Conditions/Abilities fall under 3 categories: Base, Core, and Special.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>The order in which these conditions are applied is: Base, Core, and Special.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Base effects affect the B.V.P. and have no mathematical sign, since players choose whether to turn their B.V.P. negative/positive by voting for Mission Success or Mission Failure. Thus, it can be seen as a neutral effect.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Core Effects have a mathematical sign and is always good or always bad. For example, Lottie’s Therapy always adds +3 to the player’s voting power, while Bomberman’s Flame Seal Bomb adds -3. For Core Effects, Addition/Subtraction happens first, then multiplication/division.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Special Effects occur after Base &amp; Core and have some strange rules. You’ll need to read about the powers specifically.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>After all calculations have been applied, you end up with the Final Vote Power (F.V.P.).&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>The Mission Team’s F.V.P. is added up together, with negative and positive votes separately, creating the Mission Team’s Positive Vote Sum and the Mission Team’s Negative Vote Sum.&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Some powers can affect the Positive &amp; Negative Vote Sum.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Afterwards, the Positive Vote Sum and Negative Vote Sum are added together to create the Mission Team’s Vote Sum/Total.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Some powers are then applied to the Vote Sum/Total (e.g. Ichigo’s Hylian Shield, Lan’s Intimidate, Balancer’s Equilibrium, etc.).</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>If the very final Vote Sum/Total is &gt;= 0, then the mission was a Success! If &lt; 0, the mission was a failure.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}><br />&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '16px', lineHeight: '107%'}}>Order of Status Effects/Powers/Abilities (From Top to Bottom)</span></strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><u><span style={{fontSize: '16px', lineHeight: '107%'}}>Saintess not on the Mission Team</span></u></p>
            <table style={{borderCollapse: 'collapse', border: 'none'}}>
              <tbody>
                <tr>
                  <td style={{width: '233.75pt', border: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '19px'}}>Effect/Power Type</span></p>
                  </td>
                  <td style={{width: '233.75pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '19px'}}>Status Effect/Ability/Power</span></p>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={5} style={{width: '233.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFE599', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Base</span></p>
                  </td>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 229, 153)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', color: 'black'}}>Same Priority</span></u></strong></p>
                    <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                      <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Lan’s Final Heaven</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Kaguya’s Moonblast</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Umbra Lord’s Bide/Meteor</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Esper’s Psybomb</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Lt. Blitz’s Power</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Delayer’s Temporal Charge</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Backstabber’s Vengeance</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Spiritualist’s Soul Mark Increase</span></li>
                      </ul>
                    </div>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>&nbsp;</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 229, 153)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Boost</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 229, 153)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', color: 'black'}}>Same Priority</span></u></strong></p>
                    <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                      <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Corruption</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Mirror World</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Nightmare Syndrome</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Confusion</span></li>
                      </ul>
                    </div>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>&nbsp;</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 229, 153)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Poison</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 229, 153)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', color: 'black'}}>Same Priority</span></u></strong></p>
                    <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                      <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Injury</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Jailer’s Jailed Player</span></li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={2} style={{width: '233.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Core</span></p>
                  </td>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', color: 'black'}}>Same Priority</span></u></strong></p>
                    <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                      <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Burn</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Bomb</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Slow Charge Boost</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Recovered from Zombie Boost</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Therapy</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Group Hug</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Heartache Defense</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Curaga Boost</span></li>
                      </ul>
                    </div>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>&nbsp;</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', color: 'black'}}>Same Priority</span></u></strong></p>
                    <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                      <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Bless</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Shrink</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Multiplier</span></li>
                      </ul>
                    </div>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>&nbsp;</span></p>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={8} style={{width: '233.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Special</span></p>
                  </td>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Marcus’s Berserk (Both -6 and +6)</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', color: 'black'}}>Same Priority</span></u></strong></p>
                    <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                      <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Reverser’s Reverse Vote</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Entrancement</span></li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', color: 'black'}}>Same Priority</span></u></strong></p>
                    <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                      <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Marcus’s Transcendence</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Ichigo’s Holy Strike</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Lottie’s Moral Conscience</span></li>
                      </ul>
                    </div>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>&nbsp;</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>*Persequor’s Copycat</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', color: 'black'}}>Same Priority</span></u></strong></p>
                    <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                      <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Pear’s Vanish Vote</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Baby Doll’s Perish Song</span></li>
                      </ul>
                    </div>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>&nbsp;</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Safeguard</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Baby Doll’s Lullaby</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Slow</span></p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>*Persequor’s ‘Copycat’ ability copies the target’s final vote power (F.V.P.), but negative, after all the base, core, and special effects/powers/abilities have been applied to the target. However, Persequor herself is still vulnerable to all the Special Effects occurring in the table after Copycat (Vanish, Perish Song, Safeguard, Lullaby, and Slow).</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><u><span style={{fontSize: '16px', lineHeight: '107%'}}>Saintess on the Mission Team (Sanctuary)</span></u></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>When the Saintess is on the Mission Team, certain powers, abilities, and effects will be skipped or nullified. For instance, Flame Seal Bomb always adds -3 when the affected player is on the Mission Team, and then the status condition is reset to normal. With the Saintess on the Mission Team, the status condition is neither used nor reset to normal, but simply skipped. The next time the F.S. Bomb afflicted player is on a Mission WITHOUT the Saintess, then the bomb will go off and -3 to the player’s voting power.</span></p>
            <table style={{borderCollapse: 'collapse', border: 'none'}}>
              <tbody>
                <tr>
                  <td style={{width: '233.75pt', border: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '19px'}}>Effect/Power Type</span></p>
                  </td>
                  <td style={{width: '233.75pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '19px'}}>Status Effect/Ability/Power</span></p>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3} style={{width: '233.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFE599', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Base</span></p>
                  </td>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 229, 153)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', color: 'black'}}>Same Priority</span></u></strong></p>
                    <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                      <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Lan’s Final Heaven</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Kaguya’s Moonblast</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Umbra Lord’s Bide/Meteor</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Esper’s Psybomb</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Lt. Blitz’s Power</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Delayer’s Temporal Charge</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Backstabber’s Vengeance</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Spiritualist’s Soul Mark Increase</span></li>
                      </ul>
                    </div>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>&nbsp;</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 229, 153)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Boost</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 229, 153)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Jailer’s Jailed Player</span></p>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={2} style={{width: '233.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Core</span></p>
                  </td>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', color: 'black'}}>Same Priority</span></u></strong></p>
                    <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                      <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Therapy</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Group Hug</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Heartache Defense</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Curaga Boost</span></li>
                      </ul>
                    </div>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>&nbsp;</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', color: 'black'}}>Same Priority</span></u></strong></p>
                    <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                      <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Bless</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Multiplier</span></li>
                      </ul>
                    </div>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>&nbsp;</span></p>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={4} style={{width: '233.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#A7FFFF', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Special</span></p>
                  </td>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Marcus’s Berserk (Both -6 and +6)</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><strong><u><span style={{fontSize: '16px', color: 'black'}}>Same Priority</span></u></strong></p>
                    <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                      <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Marcus’s Transcendence</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Ichigo’s Holy Strike</span></li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', color: 'black'}}>Lottie’s Moral Conscience</span></li>
                      </ul>
                    </div>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>&nbsp;</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Pear’s Vanish Vote</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '233.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(167, 255, 255)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Safeguard</span></p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;</span></strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Example Calculation:</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Umbra Lord Status Conditions: Bide = 3, Boost = 2, Flame Seal Bomb, Multiplier = 4, Safeguard, Slow</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Powers In Effect: Mirror World (Reverse)</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><u><span style={{fontSize: '16px', lineHeight: '107%'}}>Base Effects</span></u></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>1) The Umbra Lord has a B.V.P. of ±1</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>2) The Umbra Lord activates “Meteor” and votes for “Mission Failure”.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>3) By voting for Mission Failure, the Umbra Lord’s B.V.P. is now -1.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>4) Meteor: -1 B.V.P. – 3 Bide = -4 B.V.P.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>5) Boost: -4 B.V.P. – 2 Boost = -6 B.V.P.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>6) Mirror World (Reverse) reverses everyone’s B.V.P., so the Umbra Lord’s -6 B.V.P. becomes +6 B.V.P.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><u><span style={{fontSize: '16px', lineHeight: '107%'}}>Core Effects</span></u></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>7) Flame Seal Bomb: +6 V.P. – 3 (F.S. Bomb) = +3 V.P. (voting power)</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>8) Multiplier: +3 V.P. x 4 (Multiplier) = +12 V.P.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><u><span style={{fontSize: '16px', lineHeight: '107%'}}>Special Effects</span></u></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>8) Safeguard: Safeguard always ensures a positive (+) voting power. The Umbra Lord’s V.P. is +12, already positive, so Safeguard does nothing. However, if his V.P. were -12, it would have been converted to +12.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>9) Slow: Slow takes the V.P., multiplies it by 1.5, and stores it in Slow Charge.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>+12 V.P. x 1.5 = +18 V.P.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>Umbra Lord’s Slow Charge = +18 (will be added to his voting power the next time he is on a Mission Team)</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>However, Slow reduces his V.P. for this current mission to 0.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>So the Umbra Lord’s F.V.P. (final voting power) for this mission is 0.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><u><span style={{fontSize: '17px', lineHeight: '107%'}}>Order is important: Follow the order/priority from top to bottom of the charts.</span></u></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '19px', lineHeight: '107%'}}>&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%'}}>Game Over/Win Conditions</span></strong></p>
            <ul style={{listStyleType: 'disc', marginLeft: '28.5px'}}>
              <li><span style={{lineHeight: '107%', fontSize: '16px'}}>When Heroes or Villains successfully conquer 4 missions. For Heroes, that means 4 Mission Successes, and for Villains, that means 4 Mission Fails.</span></li>
              <li><span style={{lineHeight: '107%', fontSize: '16px'}}>When Heroes or Villains successfully conquer 3 consecutive missions.</span></li>
              <li><span style={{lineHeight: '107%', fontSize: '16px'}}>During Phases 2 &amp; 3, when a Team Leader proposes a Mission Team, players get to vote whether to accept or reject that team. If a team is rejected, a new Team Leader gets to propose another team.&nbsp;</span></li>
            </ul>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '38.5pt', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '38.5pt', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>5 rejected proposed teams in a single mission results in victory for the Villains! Thus, everyone MUST vote to accept the 5<sup>th</sup> Team Leader’s proposed team in a given mission. However, remember that the Umbra Lord (in every game) has an “Absolute Team Acceptance &amp; Rejection” power that he can only use once per game (one time for acceptance and one time for rejection). Thus, until the Umbra Lord uses his absolute team rejection power, everyone MUST vote to accept the 4<sup>th</sup> Team Leader’s proposed team.<br />&nbsp;</span></p>
            <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
              <ul style={{marginBottom: '0in', listStyleType: 'disc', marginLeft: '28.5px'}}>
                <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{lineHeight: '107%', fontSize: '16px'}}>If the Heroes satisfy a win condition, the Villains can still snatch victory from the jaws of defeat! If the Villains correctly guess the identity of Princess Serenity (John), then the villains win! Every Villain submits a guess. The Villains are allowed to discuss with each other and with the Heroes. The guess with the greatest number of votes will be the Villain Team’s submission. If there’s a tie, then the submission will be randomly chosen &nbsp;from the tied choices.</span></li>
              </ul>
            </div>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '38.5pt', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;</span></p>
            <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
              <ul style={{marginBottom: '0in', listStyleType: 'disc', marginLeft: '28.5px'}}>
                <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{lineHeight: '107%', fontSize: '16px'}}>One of the Villains, Kaguya, has a special power called “Dark Destiny”. Kaguya can choose any player in the game (Hero or Villain). If that player is chosen for 3 consecutive Mission Teams, then the Villains automatically win! Everyone is notified that “Dark Destiny” was used, but they do not know who the selected player is. However, the Princess role is notified who the selected player is.</span></li>
              </ul>
            </div>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}><br />&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%'}}>Number of Villains/Heroes&nbsp;</span></strong></p>
            <table style={{borderCollapse: 'collapse', border: 'none'}}>
              <tbody>
                <tr>
                  <td style={{width: '94.25pt', border: '1pt solid windowtext', background: 'rgb(255, 192, 0)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>P<span style={{color: 'black'}}>layer Count</span></span></p>
                  </td>
                  <td style={{width: '1.25in', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', background: 'rgb(255, 192, 0)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Heroes</span></p>
                  </td>
                  <td style={{width: '85.5pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', background: 'rgb(255, 192, 0)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Villains</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '94.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>6</span></p>
                  </td>
                  <td style={{width: '1.25in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>4</span></p>
                  </td>
                  <td style={{width: '85.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>2</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '94.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>7</span></p>
                  </td>
                  <td style={{width: '1.25in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>4</span></p>
                  </td>
                  <td style={{width: '85.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>3</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '94.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>8</span></p>
                  </td>
                  <td style={{width: '1.25in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>5</span></p>
                  </td>
                  <td style={{width: '85.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>3</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '94.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>9</span></p>
                  </td>
                  <td style={{width: '1.25in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>5</span></p>
                  </td>
                  <td style={{width: '85.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>4</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '94.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>10</span></p>
                  </td>
                  <td style={{width: '1.25in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>6</span></p>
                  </td>
                  <td style={{width: '85.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>4</span></p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;</span></strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;</span></strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%'}}>Number of Team Members For Mission</span></strong></p>
            <table style={{marginLeft: '.25pt', borderCollapse: 'collapse', border: 'none'}}>
              <tbody>
                <tr>
                  <td colSpan={2} rowSpan={2} style={{width: '1.35in', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'white', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>&nbsp;</span></p>
                  </td>
                  <td colSpan={5} style={{width: '232.75pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', background: 'rgb(255, 214, 83)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Number of Players</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 214, 83)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>6</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 214, 83)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>7</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 214, 83)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>8</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 214, 83)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>9</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 214, 83)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>10</span></p>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={7} style={{width: '48.6pt', border: 'solid windowtext 1.0pt', borderTop: 'none', background: '#FFFF66', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>Mission</span></p>
                  </td>
                  <td style={{width: '48.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>1</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>3</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>3</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>3</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>4</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>5</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '48.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>2</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>4</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>4</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>5</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>2</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>6</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '48.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>3</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>2</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>3</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>4</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>5</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>2</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '48.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>4</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>4</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>2</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>2</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>3</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>3</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '48.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>5</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>3</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>5</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>3</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>6</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>4</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '48.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>6</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>2</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>3</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>5</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>2</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>6</span></p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '48.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', background: 'rgb(255, 255, 102)', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px', color: 'black'}}>7</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>5</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>5</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>6</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>7</span></p>
                  </td>
                  <td style={{width: '46.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}><span style={{fontSize: '16px'}}>8</span></p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}><br />&nbsp;</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '17px', lineHeight: '107%'}}>Other Important Information &amp; Tips</span></strong></p>
            <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
              <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{lineHeight: '107%', fontSize: '16px'}}>The Princess role not only knows who all the villains are (but not their exact roles), but she is able to view the status conditions affecting every single player.</span></li>
              </ul>
            </div>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;</span></p>
            <ul style={{listStyleType: 'disc'}}>
              <li><span style={{lineHeight: '107%', fontSize: '16px'}}>Villains are outnumbered by Heroes. To attempt to sabotage a mission, they rely on inflicting “status conditions” on the Heroes. Status conditions can do things like “reverse B.V.P.” or “add -2 to voting power”. If the Mission Team’s vote sum or negative/positive vote sum looks funny, one or more of the team members might be afflicted with a status condition!<br />&nbsp;<br />&nbsp;</span></li>
              <li><span style={{lineHeight: '107%', fontSize: '16px'}}>Many/most negative status conditions can be healed/nullified through voting for Mission Failure. Regardless if you are afflicted with a “reversing” status condition, physically clicking the red “Fail” button will activate this healing effect.<br />&nbsp;<br />&nbsp;</span></li>
              <li><span style={{lineHeight: '107%', fontSize: '16px'}}>One time (and any time) during the game, the Umbra Lord can choose to “corrupt” another player, which means his/her Mission B.V.P. becomes permanently reversed (ie: voting for success will result in a negative B.V.P, while voting for failure will result in a positive B.V.P.). Corruption is one of the few status conditions that cannot be healed by voting for Mission Failure. Only other characters’ special abilities can get rid of it.</span></li>
            </ul>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>&nbsp;</span></p>
            <ul style={{listStyleType: 'disc'}}>
              <li><span style={{lineHeight: '107%', fontSize: '16px'}}>The Umbra Lord can choose to forcefully accept and reject (one time each) a proposed Mission Team. However, he cannot use “Absolute Team Acceptance” if the Villains are on the edge of victory; the ability has no effect (but will not be used up) if the Villains have won 3 missions, or have won the last 2 missions, or Kaguya’s “Dark Destiny” player has been chosen for the past 2 missions.<br />&nbsp;<br />&nbsp;</span></li>
              <li><span style={{lineHeight: '107%', fontSize: '16px'}}>Because each role has unique powers, it is possible for some players to confirm their alignment (good or evil) through usage of powers. For example, the Scientist role can say “I was chosen for the team and will reveal the individual votes this mission round by using my powers as the Scientist.”. By successfully revealing the individual votes for the mission, the player can confirm he/she is the Scientist (and thus good).<br />&nbsp;<br />&nbsp;</span></li>
            </ul>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '.5in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', lineHeight: '107%'}}>HOWEVER, the more people who confirm their roles, the less people there are for the Princess to blend in with. Remember, at the end of the game, if the Villains successfully guess the identity of the princess, then the Villains win.<br />&nbsp;</span></p>
            <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
              <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{lineHeight: '107%', fontSize: '16px'}}>For games with an odd number of players, ONE of two special, good roles will always be in the game: Ichigo or Saintess. These two roles are very powerful and help balance the game since games odd numbered players have only 1 more hero than number of villains.</span></li>
              </ul>
            </div>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '20px', lineHeight: '107%'}}><span style={{textDecoration: 'none'}}>&nbsp;</span></span></u></strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '20px', lineHeight: '107%'}}><span style={{textDecoration: 'none'}}>&nbsp;</span></span></u></strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '20px', lineHeight: '107%'}}>Character Powers - Heroes</span></u></strong><strong><u><span style={{fontSize: '16px', lineHeight: '107%'}}><br />&nbsp;</span></u></strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Princess/John&nbsp;</strong></p>
            <table style={{borderCollapse: 'collapse', border: 'none'}}>
              <tbody>
                <tr>
                  <td colSpan={6} style={{width: '467.5pt', border: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Powers/Abilities</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '62.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Type</p>
                  </td>
                  <td style={{width: '81.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Targets</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Phase Power Can Be Used</p>
                  </td>
                  <td style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Voting Power</p>
                  </td>
                  <td style={{width: '139.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Effect</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '62.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Eo’s Mana Sense</p>
                  </td>
                  <td style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                  </td>
                  <td style={{width: '81.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (including self)</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Updated after the 1<sup>st</sup> Powers Phase and after the Mission Vote Phase</p>
                  </td>
                  <td style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '139.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Thanks to Eo, the Starlight Princess of the Spirit Realm, John knows the identities of all the villains and is able to view the status conditions of all players, as seen in the table below.</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '62.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Star Prism Power</p>
                  </td>
                  <td style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '81.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Self</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>-2 B.V.P.</p>
                  </td>
                  <td style={{width: '139.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>By channeling Eo’s starlight magic, John can transform into the Practical Hero(ine), Star Practical!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The transformation lasts for 3 full rounds, starting next mission round.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Be careful! It will be announced to everyone that John has transformed into Star Practical, meaning everyone will know the Princess role was on the Mission Team.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Remember, if Heroes satisfy a win condition, the Villains can still steal victory by correctly guessing the Princess’s identity.</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Star Practical Powers &amp; Abilities</strong></p>
            <table style={{borderCollapse: 'collapse', border: 'none'}}>
              <tbody>
                <tr>
                  <td colSpan={6} style={{width: '467.5pt', border: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Powers/Abilities</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '62.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Type</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Targets</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Phase Power Can Be Used</p>
                  </td>
                  <td style={{width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Voting Power</p>
                  </td>
                  <td style={{width: '152.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Effect</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '62.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt', height: '43.6pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Eo’s Mana Sense</p>
                  </td>
                  <td style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '43.6pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '43.6pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (including self)</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '43.6pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Updated after the 1<sup>st</sup> Powers Phase and after the Mission Vote Phase</p>
                  </td>
                  <td style={{width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '43.6pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '152.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', height: '43.6pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Same effect as before (see table below).</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '62.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Starlight Power Up</p>
                  </td>
                  <td style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Self</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Team Vote</p>
                  </td>
                  <td style={{width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2x Team Voting Power</p>
                  </td>
                  <td style={{width: '152.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The starlight elementals enhance John’s physical abilities, doubling (2x) his team voting power.</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '62.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Star Healing Activation</p>
                  </td>
                  <td style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (including self)</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>0 B.V.P.</p>
                  </td>
                  <td style={{width: '152.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Use the mysterious Love Scepter to unleash a torrent of light elemental magic. You can heal your target of every single negative status condition.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The target will be notified he/she was healed. Remember, sometimes the villains cast negative status effects on themselves, like Flame Seal Bomb.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If you choose to purify it, the enemy will know you were on the mission team. Don’t expose your identity!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Status Effects Healed:</p>
                    <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                      <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Corruption</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Flame Seal Bomb</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Burn</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Poison</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Shrink</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Soul Mark</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Marked Man/Bounty</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Slow &amp; Slow Charge</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Injury</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Confusion</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Entranced</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Zombie</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the target’s role is Delayer, his Temporal Charge is reset back to 0.</li>
                      </ul>
                    </div>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Does not work on the Umbra Lord.</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '62.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Starlight Shuriken</p>
                  </td>
                  <td style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>+3 B.V.P.</p>
                  </td>
                  <td style={{width: '152.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Attack with a +3 B.V.P. for this mission round.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Star Practical’s left star-shaped earring gathers starlight elementals and glows yellow. It grows into the size of a pizza, begins spinning like a saw, and then Star Practical tosses it like a frisbee at her enemies. The shuriken slices the target into pieces before the target explodes into a shower of stardust.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Unlike other abilities (Final Heaven, Psybomb, Bide, etc.) your B.V.P. is always +3, so if you are under a status effect like corruption or Mirror World is activated, etc., your B.V.P. will be reversed and turn negative!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '62.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Heartache Defense</p>
                  </td>
                  <td style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (including self)</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>0 B.V.P.</p>
                  </td>
                  <td style={{width: '152.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Core Effect.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The Love Scepter summons a large, pink heart as a shield to ward off negative energy.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose any one player. For the next mission round ONLY, if your target is selected for the Mission Team, +5 to his/her voting power.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Does not work on the Umbra Lord.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><br /></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Saintess</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Sacred Body</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Self</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The Saintess is unable to be afflicted with any negative status effects.</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Sanctuary</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;Mission Vote</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the Saintess is on the mission team, certain status effects and abilities will fail/be skipped (check order of status effects/abilities chart to see which effects will fail).</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><br />&nbsp;An example for what “skip” means: usually a Flame Seal Bomb will always explode when the person is on the Mission Team, but with the Saintess on the team, it is not used up even though it doesn’t take effect. The next time that player is on a Mission Team without the Saintess, the bomb will explode.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>All players on the Mission Team will be notified that the Saintess was on the team.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Sense</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                  </td>
                  <td rowSpan={7} style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (excluding self)</p>
                  </td>
                  <td rowSpan={7} style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase (starting round 2)</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Senses all players to see if they have a status condition of:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                      <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Corruption</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Soul Mark</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Zombie</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Poison</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Flame Seal Bomb</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Burn</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Freeze</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Paralysis</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Confusion</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Entrancement</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Injury</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Bounty/Marked Man</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Temporal Charge</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Slow</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Slow Charge</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Shrink</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Multiplier</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Boost</li>
                      </ul>
                    </div>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>However, does not know WHICH condition the player has been afflicted with, simply that they have been afflicted with something.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Purify</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Removes Corruption, Soul Mark, Zombie, and Poison</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Esuna</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Removes Flame Seal Bomb, Burn, Freeze, Paralysis, Confusion, and Entrancement</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Curaga</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Heals Injury, Bounty/Marked Man, and for this round only, adds +3 to mission voting power</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Dispel</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Resets Temporal Charge, Slow &amp; Slow Charge, Shrink, and Multiplication enhancement back to normal</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Bless</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>For this round only, 2xs team vote and mission vote power</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Safeguard</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>For this round only, end mission vote power of the target will be converted to a positive.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>This does not affect the Umbra Lord.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Ichigo Namikaze</strong></p>
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
                  <td style={{width: '63.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Targets</p>
                  </td>
                  <td style={{width: '1.0in', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Phase Power Can Be Used</p>
                  </td>
                  <td style={{width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Voting Power</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Effect</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Hylian Shield</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '63.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '1.0in', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>0 B.V.P.</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>This is the very last thing that occurs before the mission is deemed a ‘Success’ or a ‘Fail’.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the Mission Team’s total vote sum is &lt; 0, then +4 to the sum. If &gt;= 0, then -4 to the sum.</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Holy Strike</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '63.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '1.0in', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>+4 B.V.P.</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>One time usage.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Instead of voting, attack with the holy daggers, Protekis + Sanctis, to launch an attack with a B.V.P. of +4!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>All Base and Core Effects are used up and disregarded. However, Special Effects will still affect Holy Strike.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Navi</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                  </td>
                  <td style={{width: '63.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Ichigo</p>
                  </td>
                  <td style={{width: '1.0in', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Updated after the 1<sup>st</sup> Powers Phase and after the Mission Vote Phase</p>
                  </td>
                  <td style={{width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Ichigo’s companion fairy, Navi, notifies Ichigo if he’s affected with any status conditions. They can be viewed in the table below.</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Umbra Slayer</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                  </td>
                  <td style={{width: '63.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Positive Mission Votes</p>
                  </td>
                  <td style={{width: '1.0in', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If Ichigo is on the Mission Team, then the Mission Team’s positive vote sum will be increased by 1.5xs, rounded up to the nearest integer.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>This ability is the exact opposite of the Umbra Lord’s Shadow Domain.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Individual votes are not affected, only the sum of the total positive votes.</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Marcus</strong></p>
            <table style={{borderCollapse: 'collapse', border: 'none'}}>
              <tbody>
                <tr>
                  <td colSpan={6} style={{width: '467.5pt', border: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Powers/Abilities</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '78.45pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '60.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Type</p>
                  </td>
                  <td style={{width: '66.95pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Targets</p>
                  </td>
                  <td style={{width: '75.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Phase Power Can Be Used</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Voting Power</p>
                  </td>
                  <td style={{width: '145.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Effect</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '78.45pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Guardian</p>
                  </td>
                  <td style={{width: '60.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                  </td>
                  <td style={{width: '66.95pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Princess</p>
                  </td>
                  <td style={{width: '75.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Beginning of Game</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '145.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>As Princess Serenity’s personal knight, Marcus knows the identity of the Princess.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>However, if Persequor is in the game, Marcus is given both their names and does not know who is the real princess.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '78.45pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Transcendence</p>
                  </td>
                  <td style={{width: '60.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                  </td>
                  <td style={{width: '66.95pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Marcus</p>
                  </td>
                  <td style={{width: '75.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '145.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If both Marcus &amp; the Princess are on the Mission Team, then Marcus’s final vote power becomes at least +3, ignoring all status effects (except for bless and vanish) and regardless of how he votes.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><br />&nbsp;For example, whether Marcus votes for success or failure or is corrupted, his final vote power will always be at least +3.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Transcendence fails if Marcus’s final voting power is greater than +3.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Status effects will still be used up (flame seal bomb, multiplier, etc.), but the final voting power will always be at least +3.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '78.45pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Berserk</p>
                  </td>
                  <td style={{width: '60.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '66.95pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Marcus</p>
                  </td>
                  <td style={{width: '75.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>+6, -6</p>
                  </td>
                  <td style={{width: '145.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>One time use only.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>By activating Berserk and filling himself with dark energy, Marcus’ final vote power for the current Mission becomes +6 regardless of whether he votes for success or failure and other status effects.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>However, the next time Marcus is on a Mission, his final vote power becomes -6, again, regardless of whether he votes for success or failure and other status effects.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Both times, Marcus is still affected by bless, vanish, and safeguard.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Passive skill Transcendence also works during the second mission and can convert the -6 into a +6.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '78.45pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Counter Espionage</p>
                  </td>
                  <td style={{width: '60.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '66.95pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (excluding self)</p>
                  </td>
                  <td style={{width: '75.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '145.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>As a colonel in the Enlustrian Royal Army, one of Marcus’s duties is weeding out spies &amp; traitors! Could that shifty-eyed fellow be an agent from Landiria?</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Select another player. This power only works if the selected player is chosen for the Mission Team AND Marcus is NOT selected for the Mission Team.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>After the mission has ended, you will receive a list of his/her actions on all missions he/she has participated in, but in randomized order.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Actions that people can take on missions include voting for “Success”, “Fail”, and using a “Power”.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Seer</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Scry</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (including self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose a player to determine his/her role or the status conditions he/she is currently afflicted with.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>For Rounds 1-6, 75% accuracy of divining a player’s role.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the player is afflicted with a status condition(s), the role is hidden but the status condition(s) is displayed.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>For round 7, 100% accuracy AND the status condition(s) are displayed.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Flash</p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>-1 B.V.P.</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Use the “Sight” to unleash a blinding flash of light from your eyes, disorientating your target!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>He/she will be inflicted with “Confusion”, meaning for this current mission, there is a 75% chance his/her base voting power will be reversed!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Has no effect on the Umbra Lord or Saintess.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Aura Knight</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Aura Sense</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (including self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Read the aura of a player to divine their alignment.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the player is afflicted with a status condition(s), the alignment is hidden but the status condition(s) is displayed.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Remember that the Princess &amp; the Umbra Lord have an alignment of “unknown”. Otherwise, all heroes are “good” and all villains are “evil”.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Aura Boost!</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (including self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>0 B.V.P.</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The Aura Knight’s power flares most brightly in the face of evil!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Bless a player with a boost! The next time he/she votes on a mission, his base voting power will be increased! Boost effect is used up after voting. This boost effect is the same as Hecate’s ‘Spell Boost’.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Both you and your target will receive notification of how much ‘Boost’ will increase his/her power the next time he/she votes on the Mission Team.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the ratio of Villains to Heroes of the current Mission Team is greater than or equal to 1, then he/she will receive a ‘Boost’ of +3 B.V.P. next time he/she votes.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If there are more Heroes than Villains on the current Mission Team, then the ‘Boost’ only counts for an increase of +1 B.V.P.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Remember B.V.P. has no mathematical sign.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>i.e. If the target chooses to vote for mission failure, his B.V.P. for that mission will be &nbsp;-1 and then ‘Boost’ will increase that to -2 or -3.5.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>0 is considered to be positive.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>&nbsp;</strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>&nbsp;</strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Oracle</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Luces’ Messenger</p>
                  </td>
                  <td colSpan={4} rowSpan={5} style={{width: '245.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Receive information from the gods <u>one time</u> for each of the choices listed below.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1 and 1</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Returns two random player names: 1 evil and 1 good</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>At Least 1 Good</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Returns two random player names: At least one of the two is good.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>At Least 1 Evil and Good</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Returns three random player names: At least 1 is good and at least 1 is evil. The 3<sup>rd</sup> can be good or evil.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Princess</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Returns three random player names: One of them is the princess.</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Light and Dark</p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose any player to receive his/her true role as well as a random role from the opposite team.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The random, opposite team role could be in the game or not in the game.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Can use this power once for every player.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Messenger</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (excluding self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>-1 B.V.P.</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Convey the messages of the Luces to the lost.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose another player to send him/her a private message! You can send him/her anything!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The message will appear as “Oracle: Hi there!”</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>You can even reveal your true identity to the recipient – just make sure he/she is an ally!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Ascertain</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (including self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>0 B.V.P.</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Gather the strength of your fellow Lucinites. Pray to the Luces for guidance!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Ascertain the total number of Lucinites (Heroes) on the Mission Team, including yourself.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Guess correctly, +2 to the final mission vote sum. Guess wrong, -2 to the Mission Team’s vote sum.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>You will be notified if you guessed correctly or not.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Balancer</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mystical Scales</p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose 2 players to see if their alignments are the same or different. Remember that the Princess &amp; the Umbra Lord have “unknown” alignments and will thus equal each other and be different compared to everyone else.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Equilibrium</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (including self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose two players (including yourself).</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the two players’ final voting power (F.V.P.) are both positive OR both negative, then +1.5 to the Mission Teams’ vote sum total.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the two players’ F.V.P are opposites (0 is considered opposite to + and -), then -2 to the Mission Team’s vote sum total.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If both players’ F.V.P. are 0, then +3 to the vote sum total.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Pear</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Nature Telepathy</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (including self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase (starting Mission 2)</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Princess Pear has some Esper-abilities, which allows her to communicate with plants and animals, who can sense when there is a disturbance, long before humans can.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose any one player who was on the previous Mission Team and ask the plants &amp; animals for their knowledge.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If his/her final voting power was -1, 0, or 1, you will not know the exact final vote.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>However, if the final voting power was NOT -1, 0 or 1, then you will find out exactly what the target’s final voting power was.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Invisible Spy</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team (excluding self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Pear’s power of invisibility allows you to choose another member of the Mission Team to expose their final vote power.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>It will be announced to everyone that an invisible Spectre is spying and will expose someone’s vote.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Vanish</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team (excluding self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose another member of the Mission Team and vanish his/her vote!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>For this mission only, their F.V.P. will be 0.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Detective Chat</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Investigate</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team of previous round (excluding self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase (starting Mission 2)</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose one player who was on the Mission Team for the previous round. See their final vote power (F.V.P.)!</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Interrogate</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;Mission Team (excluding self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Select one player to interrogate. You will discover if he/she voted for “Success”, “Fail”, or used a “Power”.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Note this refers to whether he/she physically clicked the “Success” or “Fail” button, or used a “Power” instead of voting.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>It has nothing to do with voting power.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Cross Examination (<strong>XXN</strong>)</p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Can use this unlimited times UNTIL the target pleads “Not Guilty” AND was selected for the Mission Team.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The suspect will be cross examined and then given a choice to either plead guilty or not guilty.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If he/she pleads “Not Guilty”, add +5 to the mission vote sum. However, If he/she pleads “Guilty”, -5 to the mission vote sum.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The suspect will not know your identity. You, however, will know how he/she pled.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Remember, only a Villain would ever plead ‘Guilty’!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><br />&nbsp;This is a dangerous power. Use it wisely!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Ranger</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Sense</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (including self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Can see if anyone is afflicted with a status condition.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>However, will not know which exactly, just that they are afflicted with one of the below:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                      <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Corruption</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Soul Mark</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Poison</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Zombie</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Bomb</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Burn</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Freeze</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Paralysis</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Confusion</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Entrancement</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Injury</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Bounty/Marked Man</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Slow</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Slow Charge</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Multiplier</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Boost</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Delayer’s Temporal Charge</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Umbra Lord’s Bide Power</li>
                      </ul>
                    </div>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Anti-Mana Ray</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team (excluding self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Blast a teammate with an Anti-Mana ray, a forbidden michaneka.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>This effect cancels out ALL status conditions (positive and negative), except for corruption &amp; shrink.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><br />&nbsp;The target will be notified he/she was hit by the anti-mana ray.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>It also will reset Delayer’s Temporal Charge &amp; the Umbra Lord’s Bide Power back to 0.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Has no effect on the Saintess.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Shrink Ray</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team (excluding self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Starting next mission and for 2 rounds, team vote + mission voting power is halved.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Can be stacked.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>ie: If blasting a teammate on Round 1, then on Round 2 chooses to shrink them again, then for another 3 rounds shrink is applied.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Scientist/Ayesha Williamson</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Analysis</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Constantly</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>For every mission, the Scientist receives the individual final voting power of all the players on the Mission Team (anonymized).</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>This contrasts with all other players who simply see the positive, negative, and total sum of the mission votes.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt', height: '26.5pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Dissertation Defense</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '26.5pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '26.5pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '26.5pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd&nbsp;</sup>Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '26.5pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', height: '26.5pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The Scientist can choose to expose the Mission Team’s anonymized, individual final voting powers to everyone.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Before the mission voting phase, It will be announced to everyone that the individual final votes will be exposed, anonymized.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>You will find out everyone’s F.V.P., but won’t know who each individual F.V.P. belongs to.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt', height: '26.5pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Hypothesis</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '26.5pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '26.5pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '26.5pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '26.5pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>0 B.V.P.</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', height: '26.5pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Guess the number of either +1 or -1 final voting powers of everyone (including self) on the current Mission Team.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If you are correct, +2.5 to the Mission Team’s vote sum.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If you are wrong, -2 to the vote sum.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Example:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>4-person Mission Team’s final, individual votes are:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>-1, +3.5, +2, +1</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If you guessed <strong>one</strong> “-1”, then you would be correct!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><br />If you guessed <strong>two</strong> “+1”s, then you would be wrong, since there’s only one +1.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Note: Remember your B.V.P. for this mission will be 0, but your F.V.P. could be changed by an ability or status effect!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><br /></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Esper</strong></p>
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
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><br />&nbsp;<br /><strong>Jailer</strong></p>
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
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><br />&nbsp;Sensor</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Sense/Scan</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (including self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase (starting Mission 2)</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose a status condition to scan ALL players (including self) to see who is afflicted with it OR scan a single player (including self) to see ALL the status conditions applying to him/her.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Status Conditions To Scan For:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <div style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>
                      <ul style={{marginBottom: '0in', listStyleType: 'disc'}}>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>F.S. Bomb</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Burn</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Soul Mark</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Shrink</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Multiplier</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Boost</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Injury</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Entrancement</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Marked Man/Bounty</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Slow</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Slow Charge</li>
                        <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Zombie</li>
                      </ul>
                    </div>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Note, you cannot “Scan All” for “Corruption”, but scanning an individual player will reveal if he/she is corrupted.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Test Results</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team (excluding self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>-1.5 B.V.P.</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The test results are out!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose a fellow mission teammate and send him/her a report with all of his/her status conditions, including corruption!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The patient will also receive your identity and thus know you are on the side of good!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Be careful not to reveal yourself to the Villains! Remember, Villains sometimes cast status conditions on themselves too!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Lottie Waller</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Therapy</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team (excluding self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose 1 fellow mission teammate and give them a powerful therapeutic energy boost!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>For the next round/mission ONLY, that person’s mission vote power is increased by +3.5.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Group Hug</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team (including self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>For the next round/mission ONLY, every person on the current Mission Team (including the user) has their voting power increased by +1.25, if chosen again for the Mission Team.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Rescue Mission</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Princess</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Start of the game</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If Lottie is in the game, then the Princess role is notified of Lottie’s identity and role at the start of the game.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If Persequor is in the game, then the Princess will be given both of their names, not knowing who is who.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Moral Conscience</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Princess</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Lottie acts as John’s moral conscience!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If both Lottie &amp; the Princess are selected for the Mission Team, the Princess’s final vote power is always converted to a positive number – similar to the Saintess’s safeguard ability.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Gossip</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone NOT on the current Mission Team</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase (not on the Mission Team)</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>This power only works when Lottie is NOT selected for the Mission Team.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Make sure your maids sign a N.D.A.! The Enlustrian Royal maids are a knowledgeable bunch who see the inner workings of the palace.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><br />&nbsp;Select a fellow player who is also NOT selected for the Mission Team.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>You will receive a list of all of his/her final voting powers for all previous missions he/she participated in, in randomized order.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Lan&nbsp;</strong></p>
            <table style={{borderCollapse: 'collapse', border: 'none'}}>
              <tbody>
                <tr>
                  <td colSpan={6} style={{width: '467.5pt', border: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Powers/Abilities</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '53.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Type</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Targets</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Phase Power Can Be Used</p>
                  </td>
                  <td style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Voting Power</p>
                  </td>
                  <td style={{width: '161.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Effect</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '53.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Final Heaven</p>
                  </td>
                  <td style={{width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Depends on charge</p>
                  </td>
                  <td style={{width: '161.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Every time you use Final Heaven, its base vote power increases.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>You can choose to vote with positive or negative power. After activating Final Heaven, you vote normally – success for a positive B.V.P. and failure for a negative B.V.P.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>However, for the very first time Final Heaven is used, its base vote power is always negative, regardless of how you vote.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>1st use: -2 BVP (always negative)</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>2nd use: ±0.5 BVP</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>3rd use: ±3 BVP</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>4th use: ±5 BVP</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>5+ use: ±7 BVP</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '53.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Beat Rush</p>
                  </td>
                  <td style={{width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (excluding self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '161.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose any person and give him/her a beat down, inflicting “Confusion” status for this turn only, where there is a 75% chance his/her mission B.V.P. will be reversed!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Be careful not to hit an ally!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Has no effect on the Umbra Lord or Saintess.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '53.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Intimidate</p>
                  </td>
                  <td style={{width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '58.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '161.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose a fellow mission teammate.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>0 and positive values are higher than negative values.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Success: If your F.V.P. (final voting power) is higher than his/hers, +1.5 to the mission vote sum.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Failure: If your F.V.P. is equal to or lower than your target’s, -2 to the mission vote sum.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>You will be notified if Intimidate succeeded or failed.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><u><span style={{fontSize: '20px', lineHeight: '107%'}}>Character Powers - Villains</span></u></strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>&nbsp;</strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Umbra Lord</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Corruption</p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Can only be used once per game (can be used during any Mission).</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Secretly “corrupts” a player so his/her mission base vote power is permanently reversed.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Ie: clicking “Success” button gives a negative B.V.P., while clicking “Failure” gives a positive B.V.P. for the corrupted player</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Absolute Choice</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Team Vote</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Can absolutely accept or reject a team proposal one time each (accept one time and reject one time).</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Everyone’s true votes will be hidden.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Bide</p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>+1 B.V.P.</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>By using ‘Bide’, you vote with a Base Vote Power of +1, and increase your ‘Bide Charge’ (default 0) by +2.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Meteor</p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Natural B.V.P. ± Bide Charge Amount</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Increase your B.V.P. by ±1 per bide charge.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>After activating Meteor, vote normally.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>After the Mission in which Meteor was activated, Bide Charge gets dropped back down to 0.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Example:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Bide Charge: 4</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Use Meteor</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Vote for Mission Success</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>B.V.P. = +1 + 4 = +5</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If voting for mission failure</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>B.V.P. = -1 - 4 = -5</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>*Remember, Umbra Lord’s natural B.V.P. is ±1</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Shadow Domain</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>All Negative Mission Votes</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Only when the Umbra Lord is on the mission team, then the sum negative votes becomes 1.5xs, rounded up to the nearest integer.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Individual votes are not affected, only the sum of the negative votes is multiplied.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Example:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Final Voting Powers of Team:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>John: +2</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Darien: -1</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Susie: +1</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Sylvia: -2</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Sum of negative votes: -1 + -2 = -3</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>-3 x 1.5 = -4.5</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>-4.5 rounded to -5</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Mission Team Sum: -5 + 2 (John) + 1 (Susie) = -2</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Mission Failed!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Hecate (Medea)</strong></p>
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
                  <td style={{width: '1.0in', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Phase Power Can Be Used</p>
                  </td>
                  <td style={{width: '45.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Voting Power</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Effect</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Multiplication</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (including self)</p>
                  </td>
                  <td style={{width: '1.0in', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '45.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>0 B.V.P.</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Instead of voting during the mission, you can choose to multiply a player’s mission voting power (power takes effect the next time that player is chosen to be on the Mission Team).</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>This power can be stacked and cast multiple times on the same player.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Multiplication power is random.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>10% chance = does nothing</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>50% chance = 2xs</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>30% chance = 3xs</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>10% chance = 4xs</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Spell Boost</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (including self)</p>
                  </td>
                  <td style={{width: '1.0in', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '45.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>0 B.V.P.</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Using your arcane knowledge of mana, you can provide a “Boost” to another player, that will increase his/her B.V.P. the next time he/she is on a mission.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>67% chance: ±3</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>33% chance: ±1</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>This is the same “Boost” as Aura Knight’s “Aura Boost” ability, except the boosted player will NOT be notified he/she received a boost power-up.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Exchange of the Spirits</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (including self)</p>
                  </td>
                  <td style={{width: '1.0in', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>(one time)</p>
                  </td>
                  <td style={{width: '45.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Can only be used once per game.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose any two players and switch ALL of their status conditions (positive, neutral, and negative attributes).</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The move will fail if one of the targets is either the Umbra Lord or the Saintess.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The switch occurs immediately for the current mission round.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>&nbsp;</strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><br />&nbsp;</strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Bomberman (AKA Mr. Fun Sun since Bomberman was copyrighted)</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Flame Seal Bomb</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team (excluding self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;Mission Vote</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>0 B.V.P.</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose anyone on the Mission Team and place a Flame Seal Bomb on him/her.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The next time (not this mission) this person votes on the mission, -3 to his/her vote power.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the bomb explodes, everyone is notified a bomb has exploded, but they don’t know which player the bomb was on.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Has no effect on the Saintess.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Fire Punch</p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose anyone on the Mission Team and Fire Punch him/her, inflicting a ‘Burn’ (which takes effect starting next round).</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Burn Counter starts at 1 and increases by 1 every subsequent round.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Mission voting power is decreased by 0.75 x Burn Counter.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Fire punching a ‘Burned’ player will increase the Burn Counter by 1.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Example:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>John has a Burn Count of 3.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Voting for Mission Success:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>+1 – (3 x 0.75) = -1.25 V.P.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Voting for Mission Failure:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>By voting for “Failure”, Burn Count is reset to 0, and so V.P. is -1.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Has no effect on the Saintess.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><br />&nbsp;</strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Noah</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Hurricane</p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>One time use.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>By activating ‘Hurricane’, at the beginning of the next round, a huge gust of wind will randomly shuffle the order of players/Team Leaders permanently.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Thunder Wave</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team (excluding self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>‘Thunder Wave’ inflicts paralysis status on a fellow mission teammate for the next round/mission.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Only for the next round, the paralyzed player is unable to become the Team Leader. He/she will be skipped.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Has no effect on the Umbra Lord or Saintess.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Ice Punch</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team (excluding self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>‘Ice Punch’ freezes a fellow teammate’s soul sea, preventing them from using their special powers and abilities for the next round only.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Has no effect on the Umbra Lord or Saintess.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Nightmare Syndrome</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team (Heroes Only)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>+1.5 B.V.P.</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>A shadow-elemental based attack that inflicts ‘Zombie’ status on the victim, starting next mission round.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Similar to the Umbra Lord’s ‘Corruption’, ‘Zombie’ status means the victim’s base voting power will be reversed.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>However, unlike ‘Corruption’, ‘Zombie’ is healed by voting for mission failure.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Additionally, if a zombified player votes for mission failure (and thus ‘Zombie’ status is healed), that player enters a “Recovered” status, meaning he/she gets a +2.5 boost to his/her voting power.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Assuming no other status effects, by voting for failure to heal him/herself, B.V.P is -1 and then add +2.5 bonus results in +1.5 voting power for that turn.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>However, if the Saintess is on the mission team, then that +2.5 boost will occur the next time the Saintess is not on the Mission Team.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Does not work on the Saintess.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Lieutenant Blitz</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Power</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Depends on # of Mission People</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Lt. Blitz’s mission voting power is equal to (# of mission players / 2) rounded up.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Example:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If Mission 3 has 5 people on the team (5 / 2) = 2.5, rounded up is 3.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>So for this mission, B.V.P. power of ±3.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>United States of Smash</p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Smash a fellow teammate and inflict an “Injury” status upon them.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Starting the next mission round, for 2 rounds their base mission vote power will be 0.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The injured target is notified he/she was the victim of United States of Smash.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>This power can be stacked.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Example:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Using United States of Smash on Person X during Mission 1 means the injury is healed by the beginning of Mission 4. However, if you smashed Person X again during Mission 2, the injury won’t be healed until beginning of Mission 6.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Does not work on the Umbra Lord or the Saintess.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Delayer</strong></p>
            <table style={{borderCollapse: 'collapse', border: 'none'}}>
              <tbody>
                <tr>
                  <td colSpan={6} style={{width: '467.5pt', border: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Powers/Abilities</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '60.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Type</p>
                  </td>
                  <td style={{width: '66.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Targets</p>
                  </td>
                  <td style={{width: '74.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Phase Power Can Be Used</p>
                  </td>
                  <td style={{width: '50.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Voting Power</p>
                  </td>
                  <td style={{width: '143.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Effect</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Time Disturbance</p>
                  </td>
                  <td style={{width: '60.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                  </td>
                  <td style={{width: '66.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Princess/Eo</p>
                  </td>
                  <td style={{width: '74.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Start of the Game</p>
                  </td>
                  <td style={{width: '50.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '143.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Your powerful time magic creates temporal disturbances that Eo can sense.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>She will alert the Princess/John that Delayer is in the game.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Stall</p>
                  </td>
                  <td style={{width: '60.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '66.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (including self)</p>
                  </td>
                  <td style={{width: '74.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '50.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '143.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose any player and inflict the “Slow” status on him/her, which only lasts for this current mission round.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Cannot choose the same person twice in a row.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The player will be notified that Delayer used the ‘Stall’ spell on him/her.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the player is chosen for the Mission Team, his/her final voting power becomes 0 for this mission round.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>His/her original final voting power is instead stored inside his/her soul sea!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The next time he/she is selected for the Mission Team, the original power x 1.5 is added to his/her voting power.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Example:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Mission 1: John has ‘Slow’ status and final voting power of +3. For Mission 1, John’s F.V.P. becomes 0.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>John is not chosen for Mission 2.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Mission 3: John is chosen and his voting power gets +4.5 added.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>*Note: if John’s final voting power had been -3, then on Mission 3, he would have gotten -4.5 added.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.3pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Delayed Gratification</p>
                  </td>
                  <td style={{width: '60.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                  </td>
                  <td style={{width: '66.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '74.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Team AND Mission Vote Phases</p>
                  </td>
                  <td style={{width: '50.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Depends on Temporal Charge</p>
                  </td>
                  <td style={{width: '143.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Base mission voting power is dependent on Temporal Charge.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Round/Mission 1, Temporal Charge starts off as 0.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>At the end of every round, increment Temporal Charge by +1.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>If Delayer is chosen for the Mission Team, his power is used up and then Temporal Charge gets reset to 0.</strong></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>For Mission Vote, Delayer’s B.V.P. is <span style={{color: 'black', background: 'white'}}>±</span>1 <span style={{color: 'black', background: 'white'}}>±</span> (Temporal Charge x <span style={{color: 'black', background: 'white'}}>±1.5)</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Example:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If Temporal Charge is 2, then Delayer has a B.V.P. of <span style={{color: 'black', background: 'white'}}>±4</span><span style={{fontSize: '14px', fontFamily: 'Roboto', color: 'black', background: 'white'}}>.</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Delayer’s natural B.V.P. is <span style={{fontSize: '14px', fontFamily: 'Roboto', color: '#4D5156', background: 'white'}}>±1 and then add (2 x ±1).</span></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>For Team Vote:</strong></p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If odd number of players, team vote = 1 + (Temporal Charge x 0.333)</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If even number of players, team vote = 1 + (Temporal Charge x 0.666)</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Example:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>9 player game</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Temporal Charge = 3</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Delayer Team Voting Power = 1 + (0.333 x 3) = 2</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Delayer’s true strength lies not in voting on missions, but voting on proposed teams. Remember, 5 failed team proposals in a single round means the villains win!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Once Delayer reaches a vote counter of 4 (beginning of Mission 5 if never selected for the team), then the villains have enough voting power to reject every single team since every single other role has a base team voting power of 1 only.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>That said, powers like the Ranger’s ‘Shrink-Ray’ and the Saintess’s ‘Bless’ also affect team voting power. The Princess role has a base team voting power of ±2 when transformed into Star Practical.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>As Delayer, your goal should be to avoid being selected for the Mission Team!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>&nbsp;</strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><br /></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Persequor</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Copycat</p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose a fellow mission teammate and copy his/her final voting power. Your vote will always be negative except if you are under the effects of ‘Safeguard’.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>You will go through normal vote adjustments, meaning effects like multiplier, flame seal bomb, boost, etc. will be used up on you. However, they won’t have any effect since your F.V.P. is solely determined by the “Copycat” target.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Your vote is still affected by abilities like Pear’s Vanish, Baby Doll’s Perish Song &amp; Lullaby, and ‘Slow’ status.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Example:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>John has a final voting power of +4.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Ogden (Persequor), uses “Copycat” on John.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Ogden’s B.V.P. for using “Copycat” is 0.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><br />&nbsp;A F.S. Bomb explodes on Ogden, giving him a -3 V.P. Then, a Multiplier of 2 on Ogden gives him -3 x 2 = -6 V.P.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>However, after all vote adjustments, Ogden’s -6 V.P. gets replaced by -4, due to copying John.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Identity Theft</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>All Heroes</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase (not on the Mission Team)</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>This power can only be activated when Persequor is NOT selected for the Mission Team.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>For the next round only, steal the identity of a random Hero, gaining all of their powers and abilities. Meanwhile, they will be rendered powerless.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>In addition, the Seer, Aura Knight, Oracle, Balancer, etc. powers will be affected and will view you as good and the player whose identity was stolen as role = ??? and alignment = evil.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Cannot steal the identity of the Saintess.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Metronome</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team (including self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>0 B.V.P.</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Wag your finger back and forth to psychically channel the abilities of another role.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>You can inflict a fellow mission teammate (or yourself) with a status condition that will take effect beginning next round.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>In terms of chance for each of the following status conditions:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>5% (each): Zombie, Slow, Boost, Multiplier, Bless, and Safeguard</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>10% (each): F.S. Bomb, Burn, Injury, Paralysis, Freeze, Confusion, and Shrink</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>&nbsp;</strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><br />&nbsp;</strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Baby Doll</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Sing</p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Each round, Baby Doll can choose a player to put to sleep for that mission round only, as long as the Mission Team size is a minimum of 3 people.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>A player who is asleep will be automatically dropped from the Mission Team if chosen for the team. If the player is dropped, everyone will be notified he/she was asleep.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the player was not chosen for the Mission Team, there is no notification.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Sing fails if you choose the same player twice in a row. Can choose the same person only in non-consecutive mission rounds.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>*Works on the Umbra Lord but not the Saintess</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Lullaby</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team (including self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Baby Doll’s “Lullaby” saps the energy out of all mission teammates by making them tired.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If “Lullaby” is used, everyone is notified that it was used. No individual final vote power can be greater than +2 and no individual end vote power can be less (more negative) than &nbsp; -3.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If individual final votes are greater than +2 or lower than -3, they will be changed to +2 and -3 respectively.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Lullaby fails if the Saintess is on the Mission Team.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Perish Song</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team (including self)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>+2 B.V.P.</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Perish Song marks the current Mission Team for doom!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The next time all current Mission Team members are on the Mission Team again, all of their individual final voting power becomes 0. Then Perish Song resets and all the team members can be on a team together again without any negative effects.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Each time Perish Song is used, it replaces the doomed teammates with the current Mission Team. There can only be one set of doomed teammates at one time.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Perish Song’s effect is skipped when the Saintess is on the Mission Team, meaning it did not reset, simply did not activate with the Saintess on the Mission Team.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Example:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Perish Song was used during Mission 1, which has a team of: John, Harley, and Fiona.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Mission Team 2: John, Harley.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The effect is NOT activated because Fiona was not on the team.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Mission Team 3: John, Harley, Fiona, Amber.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The effect IS activated since all 3 are on the Mission Team together. John, Harley, and Fiona’s F.V.P. is reduced to 0, while Amber’s is not affected.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><br /></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Spiritualist</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Mark the Soul Sea of a fellow heroic teammate; the Hero is planted with a Soul Mark starting next mission round.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Your mission Base Voting Power (B.V.P.) is increased by: (# of soul marks amongst all players) x 1.25</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Example:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Spiritualist naturally has a B.V.P. of ±1.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>2 Heroes have a Soul Mark planted.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>B.V.P. = ±1 + (±1.25 x 2 Soul Marks) =&gt; ±3.5</p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Scan the soul of a fellow mission teammate, and receive two possible roles he/she could be.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the role is Princess, Seer, Oracle, or Aura Knight, then you will receive all 4 of these roles.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the role is Saintess, you will be repelled by her holy light and will thus know it is her.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>&nbsp;</strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Reverser</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mirror World</p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Each Mirror World Type can only be used once per game, meaning Mirror World can only be activated 2 times total.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>When Mirror World is activated, all players’ base voting power is either reversed or kept the same for the current mission round only.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>When Mirror World is used, it is announced to everyone that Mirror World was activated, but players are not aware which type was activated.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><br />&nbsp;Type 1: Reverse Base Voting Power</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Type 2: Do nothing.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>However, since each Type can only be used once per game, players should try to figure out what was used the first time, so they can deduce the effects the second time Mirror World is activated.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Reverse</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Team (except user)</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>During Mission Vote</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>0 B.V.P.</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose a fellow teammate on the mission to reverse their final vote power (F.V.P.).</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>&nbsp;</strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>&nbsp;</strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>&nbsp;</strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Toxiturtle&nbsp;</strong></p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Poison Beak</p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Depends on Poison Count</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Two times per game, you can poison another player, giving them a Poison Count of 3. The Poison Count decreases by 1 at the end of every round.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Cannot choose the same player twice.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Once used, you must wait 1 round before it can be used a second time. (e.g. If used during Mission 1, can be used again starting Mission 3)</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Voting for Mission Failure will not detoxify the poison. Only another ability can purify the poison.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Poison ignores all other Base effects &amp; abilities on a player’s B.V.P. and instead gives them the below B.V.P.:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Poison Count 3: -5 B.V.P.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Poison Count 2: -3 B.V.P.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Poison Count 1: -1 B.V.P.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Poison Count 0: Normal</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Has no effect on the Saintess.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Glare</p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>N/A</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Paralyze the enemy with a terrifying reptilian glare.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Works the same as Noah’s Thunder Wave ability, except with lower accuracy.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Can only choose a Hero on the Mission Team.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>There is a 67% chance your victim will be paralyzed for the next mission round only, meaning he/she cannot become the Team Leader for that round.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>&nbsp;</strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>&nbsp;</strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>&nbsp;</strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>&nbsp;</strong></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Backstabber/Assassin -&nbsp;</strong>Robert “Bob” Jones</p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Backstab</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>All Heroes</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Can be used anytime during Missions 1-4. Can only be used by the original Backstabber.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Allows the user (original Backstabber) to desert the Villains and permanently switch identities with a random Hero (cannot be the Princess or Saintess).</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The original Backstabber does not know the identity of who he/she switched with.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The effect takes place starting the next mission round. (e.g. If used during Mission 2, the switch occurs in Mission 3)</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The original Backstabber is now a Hero, with all his/her powers and abilities.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The new Backstabber cannot use this ability.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The Princess is notified of who the original and the new Backstabber is.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Vengeance</p>
                  </td>
                  <td style={{width: '61.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Passive</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Original Backstabber</p>
                  </td>
                  <td style={{width: '76.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>±3.5 to B.V.P.</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>This ability only works after the original Backstabber has switched identities with a Hero.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the new Backstabber AND the original Backstabber are on the Mission Team together, then the new Backstabber’s base mission voting power is increased by ±3.5, for a total B.V.P. of ±4.5.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Bounty</p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>0 B.V.P.</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Place a bounty on a Hero’s head, turning him/her into a ‘Marked Man’!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The target will be notified that he/she has been marked!</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '73.75pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Assassinate!</p>
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
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>0 B.V.P.</p>
                  </td>
                  <td style={{width: '148.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose a Hero on the Mission Team to assassinate! If he/she is indeed a ‘Marked Man’, then subtract 5 from the Mission Team’s vote sum.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If he/she is not marked, then nothing happens.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the assassination was successful, your victim will be notified it was successful and he/she will no longer be marked.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><br />&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Psychologist, Ph.D.</strong></p>
            <table style={{borderCollapse: 'collapse', border: 'none'}}>
              <tbody>
                <tr>
                  <td colSpan={6} style={{width: '467.5pt', border: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Powers/Abilities</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '94.25pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '.75in', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Type</p>
                  </td>
                  <td style={{width: '63.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Targets</p>
                  </td>
                  <td style={{width: '63.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Phase Power Can Be Used</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Voting Power</p>
                  </td>
                  <td style={{width: '152.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Effect</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '94.25pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Prediction</p>
                  </td>
                  <td style={{width: '.75in', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '63.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone</p>
                  </td>
                  <td style={{width: '63.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '152.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>At the beginning of every mission round, the Psychologist can make a prediction about who will be on the Mission Team.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If he/she correctly guess everyone on the Mission Team for the current round, then the negative vote sum will be increased.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the Psychologist guessed correctly, everyone will be notified. If he/she did not guess correctly, there will be no notification.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&lt;= 7 players</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Team Size: Negative Vote Sum Increase</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>2: -1</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>3: -1.5</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>4: -2</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>5: -3</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&gt;= 8 players</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Team Size: Negative Vote Sum Increase</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>2: -1.5</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>3: -2</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>4: -2.5</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>5: -3</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>6: -3.5</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>7: -4</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>8: -6</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '94.25pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Pistanthrophobia</p>
                  </td>
                  <td style={{width: '.75in', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '63.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (including self)</p>
                  </td>
                  <td style={{width: '63.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '152.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>One time during the game, you can choose one person from your team (the Villains) and one person from the Heroes team and announce the two names together.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Thus, everyone will know that of the two names announced, one person is evil and one person is good, but they don’t know who is who.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '94.25pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>D.I.D. (Dissociative Identity Disorder)</p>
                  </td>
                  <td style={{width: '.75in', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '63.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone (including self)</p>
                  </td>
                  <td style={{width: '63.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>2<sup>nd</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '40.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '152.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>One time usage.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Choose one person from any team. Their real role and a fake, random role from the opposite team will be announced to everyone.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If a Hero, there is a 20% chance of the fake, random role being “Psychologist”. Thus, the Psychologist can choose to reveal him/herself without worries that people think it’s extremely rare for “Psychologist” to be chosen as the fake role.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the Hero is one of: Princess, Seer, Aura Knight, or Oracle, then that role will be announced as part of the set, to ensure the Princess’s identity is not revealed as easily.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Example:</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Steven’s role is Princess</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>By using D.I.D., all players will receive a message saying Steven’s role is either “Princess, Seer, Aura Knight, or Oracle” OR “random bad role”</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><br />&nbsp;</p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong>Kaguya</strong></p>
            <table style={{borderCollapse: 'collapse', border: 'none'}}>
              <tbody>
                <tr>
                  <td colSpan={6} style={{width: '467.5pt', border: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Powers/Abilities</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '88.1pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '46.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Type</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Targets</p>
                  </td>
                  <td style={{width: '78.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Phase Power Can Be Used</p>
                  </td>
                  <td style={{width: '52.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Voting Power</p>
                  </td>
                  <td style={{width: '133.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Effect</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '88.1pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Dark Destiny</p>
                  </td>
                  <td style={{width: '46.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Everyone</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>(including self)</p>
                  </td>
                  <td style={{width: '78.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>1<sup>st</sup> Powers Phase</p>
                  </td>
                  <td style={{width: '52.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '133.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>One time usage (can be used Missions 2-5).</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Kaguya predicts the doom of a certain player. Choose any one player, which can be anyone, including the Umbra Lord, Saintess, and Kaguya herself.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Once the “Dark Destiny” is predicted, it will be announced to everyone that the power was used, although who was chosen will not be specified.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If the chosen player is selected for the Mission Team for 3 consecutive missions, then the game automatically ends in defeat for the Heroes and victory for the Villains.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>“Dark Destiny” takes precedence over Baby Doll’s “Sing” ability.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>The Princess is notified of who was chosen for Dark Destiny.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '88.1pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Sweet Charm</p>
                  </td>
                  <td style={{width: '46.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>All heroes on the mission team</p>
                  </td>
                  <td style={{width: '78.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '52.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>+1 B.V.P.</p>
                  </td>
                  <td style={{width: '133.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Select a fellow mission teammate who must be a Hero and inflict the “Entrancement” status on him/her.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>“Entrancement” status begins the next mission round and lasts until it is healed by another ability or by the Hero voting for Mission Failure.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>If both Kaguya &amp; the entranced Hero are on the Mission Team together, then there is a 67% chance that Hero’s final voting power will be reversed.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>This power does not affect the Saintess.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td style={{width: '88.1pt', border: 'solid windowtext 1.0pt', borderTop: 'none', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Moonblast</p>
                  </td>
                  <td style={{width: '46.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Active</p>
                  </td>
                  <td style={{width: '67.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>&nbsp;</p>
                  </td>
                  <td style={{width: '78.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Mission Vote</p>
                  </td>
                  <td style={{width: '52.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0in 5.4pt 0in 5.4pt'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'center'}}>Depends</p>
                  </td>
                  <td style={{width: '133.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0in 5.4pt', verticalAlign: 'top'}}>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Kaguya’s power waxes and wanes with the phases of the moon.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>Moonblast has a random base voting power.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>20% chance = +2 B.V.P.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>20% chance = 0 B.V.P.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>40% chance = -2 B.V.P.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>10% chance = -3 B.V.P.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>10% chance = -4 B.V.P.</p>
                    <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '0in', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <br></br>

      </div> //end power-info-menu-component-container

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
(Rules);

