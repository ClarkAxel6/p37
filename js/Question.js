class Question {
  constructor() {
    this.title = createElement('h1');
    this.question = createElement('h2');
    this.option1 = createElement('h3');
    this.option2 = createElement('h3');
    this.input1 = createInput('Enter your name here: ');

    this.button = createButton('Submit');
  }

  /*/hide(){
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
  }
 /*/

  display(){
    this.title.html("My Quiz Game");
    this.title.position(350, 0);
    
    this.question.html('Question: What did the fox say?');
    this.question.position(150, 80);

    this.option1.html('1) nyenyenyenye nyenyenye');
    this.option1.position(150, 120);

    this.option2.html('2) nyanyanyanya nyanyanya');
    this.option2.position(150, 150);

    this.input1.position(150, 230);
    this.button.position(350, 230);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    })

  }
}
