var sTime = 0;
var sDate = 0;
var d = new Date();
var name = "";
var affection = 0;
var picArr = ["<center><img id = 'Sumire' src = 'SumPlain.png' onclick = 'suprise()'></center>","<center><img id = 'Sumire' src = 'SumHappyA0.png' onclick = 'suprise()'></center>","<center><img id = 'Sumire' src = 'SumHappyA1.png' onclick = 'suprise()'></center>","<center><img id = 'Sumire' src = 'SumHurt.png' onclick = 'suprise()'></center>","<center><img id = 'Sumire' src = 'SumSad.png' onclick = 'suprise()'></center>"]
function startUp()
  {
  affection = 0;
  sTime = d.getHours();
  sDate = d.getDate();
  changeBackground(sTime,true);
  fillSpan(0);
  }
function changeBackground(time,setstart)
  {
    if(setstart === true)
    {
      if(time > 21 || time < 5)
      {
        //Set Night background
        document.body.style.backgroundImage = "url('img_tree.png')";
      }
      else if(time >= 5 && time <= 6)
      {
        //sunrise
      }
      else if(time > 6 && time < 20)
      {
        //day time
      }
      else if(time >= 20 && time <= 21)
      {
        //sunset
      }
    }
    else if(setstart === false)
    {
      if(time > 21 || time < 5)
      {
        //Set Night background
      }
      else if(time >= 5 && time <= 6)
      {
        //sunrise
      }
      else if(time > 6 && time < 20)
      {
        //day time
      }
      else if(time >= 20 && time <= 21)
      {
        //sunset
      }
    }
  }
function fillSpan(loader)
  {
    if(loader === 0)
      {
      //load basic sumi img and basic text
      pictureSwaper(0);
      //Fill choices in span
      document.getElementById('out1').innerHTML = "<br><br>Hi there! You're from Class 2D, right? I'm Sumire Yoshizawa!"
      document.getElementById('out2').innerHTML = "<input type = 'button' value = 'Hi There' onclick = 'responses(0g)'>"
      document.getElementById('out3').innerHTML = "<input type = 'button' value = 'Leave me Alone' onclick = 'responses(0b)'>"
      document.getElementById('out4').innerHTML = "<input type = 'button' value = 'Oh ya!' onclick = 'responses(0g)'>"
      document.getElementById('out5').innerHTML = "<input id = 'box1' type = 'text'><input id = 'but1' type = 'button' value = 'Give name' onclick 'sendName()'>"
      }
    if(loader === 1)
      {
        if(name == "")
          {
            //load basic sumi img and basic text
            pictureSwaper(0);
            //Fill choices in span
            document.getElementById('out1').innerHTML = "<br><br>I can tell your a little suprised. I know your not the type of person that stands out especially in that class."
            document.getElementById('out2').innerHTML = "<input type = 'button' value = 'Ya I'm  nothing special' onclick = 'responses(1b)'>"
            document.getElementById('out3').innerHTML = "<input type = 'button' value = 'I'm glad to see I've peaked your interest' onclick = 'responses(1g)'>"
            document.getElementById('out4').innerHTML = "<input type = 'button' value = 'Oh ya' onclick = 'responses(1b)'>"
            document.getElementById('out5').innerHTML = "<input type = 'button' value = 'Excuse me miss popular' onclick = 'responses(1b)'>"
          }
        else if (name !== "")
          {
            //load basic sumi img and basic text
            pictureSwaper(1);
            //Fill choices in span
            document.getElementById('out1').innerHTML = "<br><br>Oh yes "+name+" I have seen you around school ,and I thought I would come say hello."
            document.getElementById('out2').innerHTML = "<input type = 'button' value = 'So what's up?' onclick = 'responses(1g)'>"
            document.getElementById('out3').innerHTML = "<input type = 'button' value = 'I'm glad to see I've peaked your interest' onclick = 'responses(1g)'>"
            document.getElementById('out4').innerHTML = "<input type = 'button' value = 'If it's about school I'd perfer not' + <br> + 'to talk about it' onclick = 'responses(1b)'>"
            document.getElementById('out5').innerHTML = "<input type = 'button' value = 'Yes Yoshizawa-san, it's nice to formally meet you.' onclick = 'responses(1g)'>"
          }
      }
    if(loader === 2)
      {
        //load basic sumi img and basic text
        pictureSwaper(3);
        //Fill choices in span
        document.getElementById('out1').innerHTML = "<br><br>Oh! I'm sorry if I'm bothering you I just wanted to join me this week for the service project the school is requiring."
        document.getElementById('out2').innerHTML = "<input type = 'button' value = 'Ya I'm  nothing special' onclick = 'responses(1b)'>"
        document.getElementById('out3').innerHTML = "<input type = 'button' value = 'I'm glad to see I've peaked your interest' onclick = 'responses(1g)'>"
        document.getElementById('out4').innerHTML = "<input type = 'button' value = 'Oh ya' onclick = 'responses(1b)'>"
        document.getElementById('out5').innerHTML = "<input type = 'button' value = 'Excuse me miss popular' onclick = 'responses(1b)'>"
      }
  }
function getTime()
  {
    var time = getHours();
    var date = getDate();
  }
function getName()
  {
    name = document.getElementById('out5').value;
  }
function respones(question)
  {
    if(question == '0g')
      {
        affection = affection + 5;
        fillSpan(1);
      }
    else if(question == '0b')
      {
        affection = affection - 10;
        fillSpan(2);
        //ranSpan();
      }
    else
      {
        fillSpan(0);
      }
  }
function ranSpan()
  {
    var ranNum = parseInt((Math.random()*z) + 2/*questions.length*/);
  }
function pictureSwaper(sumiPic)
  {
      document.getElementById('out0').innerHTML = picArr[sumiPic];
  }
/*Picture swaper for Wafiu {done}
   picture swaper for back background {done}
   function to present question
   function has a button (maybe start with a text box prompting for name) button then sends respones to 'wafiu response'{done}
   'wafiu response' takes your choice and give a response based on function 'check affection'.
   'check affection' take time on site and number of liked responses to give you more options and more interactions
   */
