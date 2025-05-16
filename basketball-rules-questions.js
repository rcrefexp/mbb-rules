// NCAA Men's Basketball Rules Quiz Questions
// This file contains a comprehensive set of questions based on the NCAA Men's Basketball Rules

const questions = [
  {
    question: "When are cheerleaders and mascots permitted on the playing court?",
    options: [
      "At any dead ball situation",
      "Only during a full timeout, an electronic-media timeout or an intermission",
      "Only during halftime or at the end of the game",
      "They are never permitted on the playing court"
    ],
    correctAnswer: 1,
    rule: "Rule 5-14.16"
  },
  {
    question: "The ball shall be awarded out of bounds after:",
    options: [
      "A player-control foul",
      "A team-control foul",
      "A common foul before the bonus rule goes into effect",
      "All of the above"
    ],
    correctAnswer: 3,
    rule: "Rule 7-3.1.e, f, and g"
  },
  {
    question: "When is a team in control of the ball?",
    options: [
      "Only when a player of the team is holding the ball",
      "Only during a team's throw-in opportunity",
      "When a player of the team is holding the ball, dribbling, or passing between teammates",
      "When the ball is crossing midcourt"
    ],
    correctAnswer: 2,
    rule: "Rule 4-9.2"
  },
  {
    question: "The penalty for all technical fouls includes:",
    options: [
      "Two free throws only",
      "Two free throws and loss of possession",
      "Two free throws and the point of interruption",
      "None of the above"
    ],
    correctAnswer: 0,
    rule: "Rule 10-1 Penalty"
  },
  {
    question: "In a game with a 10th-of-a-second game clock display and when an official courtside monitor is used, the reading of zeros on the game clock is to be used to determine whether:",
    options: [
      "A try for goal occurred before the expiration of time",
      "A shot-clock violation occurred before the expiration of time",
      "A foul occurred before the expiration of time",
      "All of the above"
    ],
    correctAnswer: 3,
    rule: "Rule 11-1.2"
  },
  {
    question: "When can an airborne player who receives a pass be called for a traveling violation?",
    options: [
      "When the player lands on both feet simultaneously and pivots",
      "When the player lands on one foot and then jumps to a two-foot landing",
      "When the player returns to the floor in the backcourt after receiving the pass in the frontcourt",
      "It is never a traveling violation when an airborne player receives a pass"
    ],
    correctAnswer: 2,
    rule: "Rule 9-12.4 and 9-5"
  },
  {
    question: "When is it legal for Team A to cause the ball to go into the backcourt?",
    options: [
      "On a throw-in before player control is established in the frontcourt",
      "When a defensive player is the last to touch the ball in the frontcourt",
      "During the jump ball to start the game or any extra period",
      "All of the above"
    ],
    correctAnswer: 3,
    rule: "Rule 9-12.1 through 9-12.10"
  },
  {
    question: "Which of the following is a correctable error?",
    options: [
      "Failing to award a merited free throw",
      "Awarding an unmerited free throw",
      "Permitting a wrong player to attempt a free throw",
      "All of the above"
    ],
    correctAnswer: 3,
    rule: "Rule 2-12.1"
  },
  {
    question: "When a timeout is charged to a team while a successful field goal is in flight:",
    options: [
      "The timeout request shall be ignored and assessed after the try",
      "The timeout shall be granted immediately and the basket shall not count",
      "The timeout shall be granted immediately, but the basket shall count if successful",
      "The timeout shall be granted immediately and the basket shall count if the ball has left the shooter's hand"
    ],
    correctAnswer: 2,
    rule: "Rule 5-14.1.c"
  },
  {
    question: "The alternating-possession procedure is used in which of the following situations?",
    options: [
      "To start the second period",
      "After a double personal foul when neither team is in control",
      "After a simultaneous held ball occurs",
      "All of the above"
    ],
    correctAnswer: 3,
    rule: "Rule 6-3.1"
  },
  {
    question: "Which statement is TRUE regarding a disqualified player?",
    options: [
      "A player must leave the game after being assessed a fifth foul",
      "A player is barred from further participation after receiving three Flagrant 1 fouls",
      "A player is disqualified when they leave the bench area during a fight",
      "All of the above"
    ],
    correctAnswer: 3,
    rule: "Rule 4-12.1 and 4-12.2"
  },
  {
    question: "When a visible shot clock is not available, when must the official use a visible count for 10 seconds in the backcourt?",
    options: [
      "Only in the last minute of each period",
      "When the game clock is stopped",
      "At all times in all periods",
      "Only when requested by a coach"
    ],
    correctAnswer: 2,
    rule: "Rule 9-10"
  },
  {
    question: "When does a secondary defender become subject to the restricted area rule?",
    options: [
      "When any part of either foot is in or above the restricted area",
      "Only when both feet are completely inside the restricted area",
      "Only when defending a dribbler who is attempting a shot",
      "Only when defending an airborne shooter"
    ],
    correctAnswer: 0,
    rule: "Rule 4-31"
  },
  {
    question: "During a free throw, when may players occupying the marked lane spaces enter the lane?",
    options: [
      "When the ball touches the rim",
      "When the ball is released by the free-thrower",
      "When the ball touches the backboard",
      "At no time until the free throw is complete"
    ],
    correctAnswer: 1,
    rule: "Rule 8-5.1.h"
  },
  {
    question: "What is NOT considered a flagrant 1 personal foul?",
    options: [
      "Causing excessive contact with an opponent",
      "Contact that is not a legitimate attempt to play the ball",
      "Pushing or holding a player from behind to prevent a score",
      "Contact with an opponent that is part of a normal basketball play"
    ],
    correctAnswer: 3,
    rule: "Rule 4-15.2.c.1"
  },
  {
    question: "With 5 seconds left in the game, when is a timeout request by a player or head coach granted?",
    options: [
      "Only when the clock is stopped",
      "Only when the team making the request is in control of the ball",
      "When the ball is at the disposal of a player for a throw-in",
      "Both B and C"
    ],
    correctAnswer: 3,
    rule: "Rule 5-14.1.a and b"
  },
  {
    question: "When may an official use instant replay to review whether a shot was released before the shot clock expired?",
    options: [
      "At any time during the game",
      "Only if the shot was successful",
      "Only in the last two minutes of each period",
      "Only when the official has stopped play for this specific reason"
    ],
    correctAnswer: 1,
    rule: "Rule 11-2.1.b.4"
  },
  {
    question: "How long does a player have to shoot a free throw once they receive the ball from the official?",
    options: [
      "3 seconds",
      "5 seconds",
      "10 seconds",
      "15 seconds"
    ],
    correctAnswer: 2,
    rule: "Rule 8-5.1.a"
  },
  {
    question: "When is a team's frontcourt established during a dribble from backcourt to frontcourt?",
    options: [
      "When the ball crosses the division line",
      "When the dribbler has one foot in the frontcourt",
      "When both feet of the dribbler and the ball touch the frontcourt",
      "When the dribbler has both feet in the frontcourt"
    ],
    correctAnswer: 2,
    rule: "Rule 9-12.3.c"
  },
  {
    question: "When does team control end?",
    options: [
      "When the ball is in flight during a try for goal",
      "When an opponent secures control",
      "When the ball becomes dead",
      "All of the above"
    ],
    correctAnswer: 3,
    rule: "Rule 4-9.3"
  },
  {
    question: "What must an official verify before counting a successful goal at the expiration of time in a period?",
    options: [
      "That the shooter's feet were behind the three-point line if it was a three-point attempt",
      "That the try was released before the period-ending horn sounded",
      "That no teammate of the shooter committed basket interference",
      "All of the above"
    ],
    correctAnswer: 1,
    rule: "Rule 5-7.3.a"
  },
  {
    question: "When does a try for goal end?",
    options: [
      "When the try is successful",
      "When it is certain the try is unsuccessful",
      "When the thrown ball touches the floor",
      "All of the above"
    ],
    correctAnswer: 3,
    rule: "Rule 5-1.12"
  },
  {
    question: "What occurs when a player commits a common foul after the bonus rule goes into effect?",
    options: [
      "The offended team is awarded one free throw, and a second free throw if the first is successful",
      "The offended team is awarded two free throws",
      "The offended team is awarded the ball for a throw-in",
      "Either A or B, depending on how many team fouls have been committed"
    ],
    correctAnswer: 3,
    rule: "Rule 8-2.1 and 8-2.2"
  },
  {
    question: "When may a substitute enter the game?",
    options: [
      "At any time during the game",
      "When beckoned by an official",
      "After reporting to the scorers and waiting for the next dead ball",
      "Only during a timeout or after a successful basket"
    ],
    correctAnswer: 1,
    rule: "Rule 3-6.1.c and d"
  },
  {
    question: "Basket interference occurs when:",
    options: [
      "A player touches the ball while it is in the cylinder above the ring",
      "A player touches the net while the ball is in contact with the ring",
      "A player pulls down a movable ring so that it contacts the ball",
      "All of the above"
    ],
    correctAnswer: 3,
    rule: "Rule 9-15.2.a"
  },
  {
    question: "Which is NOT a requirement for a legal screen?",
    options: [
      "The screener must be stationary",
      "The screener's feet must be no wider than shoulder width",
      "The screener must be facing the defender being screened",
      "The screener must be inbounds"
    ],
    correctAnswer: 2,
    rule: "Rule 4-35.2"
  },
  {
    question: "When does a technical foul count toward the team foul total?",
    options: [
      "Always",
      "Never",
      "Only Class A technical fouls",
      "Only when assessed to a player on the court"
    ],
    correctAnswer: 2,
    rule: "Rule 8-2.3"
  },
  {
    question: "During a throw-in, when does the shot clock start?",
    options: [
      "When the ball is at the disposal of the thrower-in",
      "When the ball is legally touched by an inbounds player",
      "When the ball crosses the boundary line",
      "When the throw-in is completed"
    ],
    correctAnswer: 1,
    rule: "Rule 2-11.5.a"
  },
  {
    question: "A double personal foul is called. What is the result?",
    options: [
      "Two free throws for each team",
      "No free throws; play resumes at the point of interruption",
      "Alternating possession throw-in",
      "Jump ball at center court"
    ],
    correctAnswer: 1,
    rule: "Rule 10-1 Penalty f"
  },
  {
    question: "Under what conditions is a 'held ball' declared?",
    options: [
      "When an opponent places hand(s) on the ball and prevents a player from dribbling, passing, or shooting",
      "When a defensive player causes the ball to go out of bounds",
      "When the ball is loose and two players from opposing teams have their hands on the ball",
      "Both A and C"
    ],
    correctAnswer: 3,
    rule: "Rule 6-4.2"
  },
  {
    question: "When is the shot clock reset to 30 seconds?",
    options: [
      "After any change of team control",
      "After a violation by the defense",
      "After a successful goal",
      "All of the above"
    ],
    correctAnswer: 0,
    rule: "Rule 2-11.6.b"
  },
  {
    question: "When is the shot clock reset to 20 seconds?",
    options: [
      "After an offensive rebound of an unsuccessful try that hits the rim",
      "After a personal foul by the defense in their frontcourt",
      "After a kicked ball violation by the defense when the throw-in is in the frontcourt",
      "All of the above"
    ],
    correctAnswer: 3,
    rule: "Rule 2-11.6.c and d"
  },
  {
    question: "Which of the following is NOT a player-control foul?",
    options: [
      "A charging foul by the dribbler",
      "An offensive foul by a player setting a moving screen",
      "A foul by an airborne shooter after the ball is released",
      "A foul by a player while rebounding their own missed shot"
    ],
    correctAnswer: 2,
    rule: "Rule 4-15.2.a.1"
  },
  {
    question: "On a jump ball, when may the non-jumpers enter the center circle?",
    options: [
      "At any time",
      "When the ball is legally tapped by one of the jumpers",
      "When the official releases the ball for the toss",
      "When the ball touches the floor"
    ],
    correctAnswer: 1,
    rule: "Rule 6-2.2"
  },
  {
    question: "What is the result when a contact dead ball technical foul is called?",
    options: [
      "Two free throws plus the ball awarded at the point of interruption",
      "Two free throws plus the ball awarded at a designated spot nearest to where the foul occurred",
      "Two free throws and the game resumes where it was stopped",
      "Immediate ejection of the player plus two free throws"
    ],
    correctAnswer: 1,
    rule: "Rule 10-3.1.e and Penalty"
  },
  {
    question: "What's the correct penalty when a coach is assessed a Class B technical foul?",
    options: [
      "One free throw and the ball at the point of interruption",
      "Two free throws and the ball at the point of interruption",
      "Two free throws and loss of possession",
      "One free throw and loss of possession"
    ],
    correctAnswer: 0,
    rule: "Rule 10-4 Penalty"
  },
  {
    question: "When is a team NOT charged with a timeout?",
    options: [
      "When the timeout is to review a potential correctable error and an error was made",
      "When a player is ready to play immediately after being injured",
      "When a timeout is requested to address a potential shot clock error",
      "All of the above"
    ],
    correctAnswer: 3,
    rule: "Rule 5-16"
  },
  {
    question: "What is a false double foul?",
    options: [
      "When two fouls are called on the same player",
      "When a foul is called on each team at approximately the same time",
      "When there are fouls by both teams, the second occurring before the game clock is restarted after being stopped for the first",
      "When officials call a foul incorrectly"
    ],
    correctAnswer: 2,
    rule: "Rule 4-15.4"
  },
  {
    question: "What action can result in a flagrant 2 technical foul?",
    options: [
      "Disrespectfully addressing an official",
      "Extreme unsportsmanlike conduct",
      "Intentionally striking an opponent with an elbow",
      "All of the above"
    ],
    correctAnswer: 1,
    rule: "Rule 4-15.3.d.2"
  },
  {
    question: "When an injured player is unable to attempt free throws, who selects the substitute to shoot?",
    options: [
      "The injured player's coach",
      "The opposing coach",
      "The team captain",
      "The officials"
    ],
    correctAnswer: 1,
    rule: "Rule 8-3.3"
  },
  {
    question: "When may the shot clock be reset to 20 seconds?",
    options: [
      "After an offensive rebound of a missed free throw",
      "After an offensive rebound of a field goal attempt that hit the ring",
      "After a loose ball foul is called on the defensive team following a missed field goal that hit the ring",
      "Both B and C"
    ],
    correctAnswer: 3,
    rule: "Rule 2-11.6.d.1 and 2"
  },
  {
    question: "For how long is a player who is bleeding required to leave the game?",
    options: [
      "Until the bleeding stops completely",
      "Until the wound is completely bandaged",
      "For at least 20 seconds unless a timeout is granted",
      "Until the beginning of the next period"
    ],
    correctAnswer: 2,
    rule: "Rule 3-6.3.a and 5-11.8"
  },
  {
    question: "What is the penalty for a flagrant 1 personal foul?",
    options: [
      "Ejection plus two free throws and possession",
      "Two free throws only",
      "Two free throws and possession",
      "One free throw and possession"
    ],
    correctAnswer: 2,
    rule: "Rule 10-1 Penalty d.2"
  },
  {
    question: "What action is legal for a thrower-in?",
    options: [
      "Moving along the end line after a successful goal by the opponents",
      "Leaving the designated spot on a frontcourt throw-in",
      "Passing the ball to a teammate who is also out of bounds",
      "Consuming more than 5 seconds before releasing the ball"
    ],
    correctAnswer: 0,
    rule: "Rule 7-4.6.a"
  },
  {
    question: "What is the result when a player leaves the playing court to avoid an offensive screen?",
    options: [
      "Traveling violation on the screener",
      "Illegal screen violation on the screener",
      "No violation, play continues",
      "Technical foul on the player leaving the court"
    ],
    correctAnswer: 2,
    rule: "Rule 10-4.1.j"
  },
  {
    question: "When an official uses instant replay to review a flagrant foul and determines no flagrant foul occurred, what can the official NOT do?",
    options: [
      "Charge a common foul if one occurred",
      "Charge a contact dead ball technical foul if one occurred",
      "Change who the foul was charged to if incorrectly assessed",
      "Call a previously unnoticed violation that occurred during the play"
    ],
    correctAnswer: 3,
    rule: "Rule 11-2.1.d.1"
  },
  {
    question: "The shot clock is reset to 30 seconds when:",
    options: [
      "The defense is called for a personal foul in the offensive team's frontcourt",
      "There is a change of team control",
      "The offense rebounds their own missed shot that hits the rim",
      "The ball is legally touched following a jump ball"
    ],
    correctAnswer: 1,
    rule: "Rule 2-11.6.b.1"
  }
];

// Export the questions array
export default questions;