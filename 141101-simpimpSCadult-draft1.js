// simpimp SC adult MTurk
// Overview: (i) Helper (ii) Parameters (iii) Control Flow

var filename = "EY_simpimpSC";
var condCounts = "1,24;2,24;"; //Example: "cond1,#of ppl20;2,20;3,20" EDIT

//-----------------------------

// FIX
// 
// ***INCLUDE STEPEXPERIMENT FUNCTION to only go on if it's real worker***

// ***CHANGE MAKER GETTER - 1) with actual numbers that I want 2) only decrement for real workers***
// check whether submiterator works if the webpage is empty? (i.e., is the html and js from the directory on my computer or from webpage? if the latter, what's the offline directory specified in the submiterator for?)

// other fixes:
// line 50: what's 'targ'?
// check if directories are designated correctly (e.g., objects folder)
// need to loop through trial 1-24 (picture)
// get diff pictures for list1, list2

// ---------------- HELPER ------------------

// random function
function random(a, b) {
  if (typeof b === "undefined") {
    a = a || 2;
    return Math.floor(Math.random() * a);
  } else {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }
}

// show slide function
function showSlide(id) {
  $(".slide").hide(); //jquery - all elements with class of slide - hide
  $("#"+id).show(); //jquery - element with given id - show
}

//array shuffle function
shuffle = function (o) { //v1.0
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x); //anything you want to randomize
    return o;
}



// ---------------- PARAMETERS ------------------

// *** Maker getter function***
// substitution for picking a random cond for now:
var xmlHttp = null;
xmlHttp = new XMLHttpRequest(); 
xmlHttp.open( "GET", "http://langcog.stanford.edu/cgi-bin/subject_equalizer/maker_getter.php?conds=" + condCounts + "&filename=" + filename, false );
xmlHttp.send( null );
//var cond = xmlHttp.responseText; // For actual experimental runs
var cond = random(2)+1; // (1-6) For testing only (before running actual)


// get condition values (1=list1, 2=list2)
if (cond == 1) {
    targ = 0; // FIX: what's targ?
    condName = 'LIST1'
} else if (cond == 2) {
    targ = 1;
   	condName = 'LIST2'
}



// --IMAGES--

// FIX: add if statement for two lists: if list1, ... if list2, ...
//practice trial: var trialImages_0 = ["trial0_L", "trial0_R"]
var trialImages_1 = ["trial1_L", "trial1_R"]
var trialImages_2 = ["trial2_L", "trial2_R"]
var trialImages_3 = ["trial3_L", "trial3_R"]
var trialImages_4 = ["trial4_L", "trial4_R"]
var trialImages_5 = ["trial5_L", "trial5_R"]
var trialImages_6 = ["trial6_L", "trial6_R"]
var trialImages_7 = ["trial7_L", "trial7_R"]
var trialImages_8 = ["trial8_L", "trial8_R"]
var trialImages_9 = ["trial9_L", "trial9_R"]
var trialImages_10 = ["trial10_L", "trial10_R"]
var trialImages_11 = ["trial11_L", "trial11_R"]
var trialImages_12 = ["trial12_L", "trial12_R"]
var trialImages_13 = ["trial13_L", "trial13_R"]
var trialImages_14 = ["trial14_L", "trial14_R"]
var trialImages_15 = ["trial15_L", "trial15_R"]
var trialImages_16 = ["trial16_L", "trial16_R"]
var trialImages_17 = ["trial17_L", "trial17_R"]
var trialImages_18 = ["trial18_L", "trial18_R"]
var trialImages_19 = ["trial19_L", "trial19_R"]
var trialImages_20 = ["trial20_L", "trial20_R"]
var trialImages_21 = ["trial21_L", "trial21_R"]
var trialImages_22 = ["tria22_L", "trial22_R"]
var trialImages_23 = ["trial23_L", "trial23_R"]
var trialImages_24 = ["trial24_L", "trial24_R"]

// --WORDS--
// FIX: add if statement for two lists: if list1, ... if list2, ...
// FIX: practice trial?

var trialWord_1 = [["table", "tables"],"a teddy bear"]
var trialWord_2 = [["lunchbox", "lunchboxes"],"an apple"]
var trialWord_3 = [["chair", "chairs"],"a dog"]
var trialWord_4 = [["plate", "plates"],"a banana"]
var trialWord_5 = [["house", "houses"],"a car"]
var trialWord_6 = [["lunchbox", "lunchboxes"],"an orange"]
var trialWord_7 = [["chair", "chairs"],"a cat"]
var trialWord_8 = [["friend", "boys"],"a ball"]
var trialWord_9 = [["table", "tables"],"a flower"]
var trialWord_10 = [["friend", "boys"],"a truck"]
var trialWord_11 = [["house", "houses"],"a bicycle"]
var trialWord_12 = [["plate", "plates"],"a carrot"]
var trialWord_13 = [["house", "houses"],"a car"]
var trialWord_14 = [["lunchbox", "lunchboxes"],"an orange"]
var trialWord_15 = [["table", "tables"],"a teddy bear"]
var trialWord_16 = [["friend", "boys"],"a ball"]
var trialWord_17 = [["chair", "chairs"],"a cat"]
var trialWord_18 = [["plate", "plates"],"a banana"]
var trialWord_19 = [["plate", "plates"],"a carrot"]
var trialWord_20 = [["table", "tables"],"a flower"]
var trialWord_21 = [["chair", "chairs"],"a dog"]
var trialWord_22 = [["lunchbox", "lunchboxes"],"an apple"]
var trialWord_23 = [["friend", "boys"],"a truck"]
var trialWord_24 = [["house", "houses"],"a bicycle"]



// ---------------- CONTROL FLOW ------------------
//PRE-LOAD IMAGES
// By creating image object and setting source, images preload
var images = new Array() 
for (i=1;i<25;i++) {//loop through images you want to use
    images[i] = new Image()
    images[i].src =  "objects/trial" + i + "L.png"
    images[i] = new Image()
    images[i].src =  "objects/trial" + i + "R.png"

} 

showSlide("instructions");


// MAIN EXPERIMENT
var experiment = { // end, next, select
    crit_1: [],
    crit_2: [],
    crit_3: [],
    crit_4: [],
    crit_5: [],
    crit_6: [],
    condition: cond,
// fix: other vars?
    experiment: "simpimpSC",
    mainNum: 1,
    
    // INITIAL0 function
  initial0:function() {
    showSlide('initial0')
    
    if (experiment.mainNum == 1) {
        word = trialWord_1
        image = trialImages_1
    } else if (experiment.mainNum == 2) {
        word = trialWord_2
        image = trialImages_2
    } else if (experiment.mainNum == 3) {
        word = trialWord_3
        image = trialImages_3
    } else if (experiment.mainNum == 4) {
        word = trialWord_4
        image = trialImages_4
    } else if (experiment.mainNum == 5) {
        word = trialWord_5
        image = trialImages_5
    } else if (experiment.mainNum == 6) {
        word = trialWord_6
        image = trialImages_6
    }
    
     // Sentential description 1 to scaffold
      var description0_html = '<p align="center">See these ' + word[0][1] + '?</p>' 
      $("#description0").html(description0_html);
      
      // Create the image table (tr=table row; td= table data)
    	var image0_html = '<table align="center" cellspacing="40"><tr>'
        image0_html += '<td align = "center"><img src="objects/' + image[0] + '.png" id="no_elmo" /></td>'    	
        image0_html += '<td align = "center"><img src="objects/' + image[1] + '.png" id="no_elmo" /></td>'
        image0_html += '</tr></table>'
        $("#image0").html(image0_html); //insert dynamically-built html code into html file; 

    },

// INITIAL1 function
  initial1:function() {
    showSlide('initial1')
    
     // Sentential description 1 to scaffold
      var description1_html = '<p align="center">Elmo\'s ' + word[0][0] + ' has ' + word[1] + '.</p>' 
      description1_html += '<p align="center"> Which is Elmo\'s ' + word[0][0] + '? Choose the right answer by clicking the button below it.</p>' 
      $("#description1").html(description1_html);
            
      // Create the image table (tr=table row; td= table data)
    	var image1_html = '<table align="center" cellspacing="40"><tr>'
  		image1_html += '<td align = "center"><img src="objects/' + image[0] + '.png" id="no_elmo" /></td>'    	
        image1_html += '<td align = "center"><img src="objects/' + image[1] + '.png" id="no_elmo" /></td>'
        image1_html += '</tr><tr>'
        image1_html += '<td align="center"><input type="radio" name="container_L" id="item_0"></input></td>'
        image1_html += '<td align="center"><input type="radio" name="container_R" id="item_1"></input></td>'
        image1_html += '</tr></table>'
        $("#image1").html(image1_html); //insert dynamically-built html code into html file; 
      
    var message_html = '<table cellspacing="2" align="center"><tr> <td id="messagesum"></td></tr></table>'
		 $("#message").html(message_html) 
	

  },
  
   // SELECT function
   select: function() {
// fix: add mainNum?
      var left
      var right
    
      if (document.getElementById('item_0').checked) {
			 left = 1
		} else if(document.getElementById('item_1').checked) {
		    right = 1
		}
       
       
       if(left == 1) {
			    answer = 'left'
        } else if (right == 1) {
  		        answer = 'right'
      	} else {
       answer = 'NA' 
      	}
 
       
       if (experiment.mainNum == 1) {
			experiment.crit_1 = answer
		} else if (experiment.mainNum == 2){
			experiment.crit_2 = answer
		} else if (experiment.mainNum == 3){
			experiment.crit_3 = answer
		} else if (experiment.mainNum == 4){
			experiment.crit_4 = answer
		} else if (experiment.mainNum == 5){
			experiment.crit_5 = answer
		} else if (experiment.mainNum == 6){
			experiment.crit_6 = answer
		}
       
       if (document.getElementById('item_0').checked || document.getElementById('item_1').checked) {    
    
           if (experiment.mainNum == 16) {
           setTimeout(experiment.end, 500);
           } else {
               
               experiment.mainNum++
               experiment.initial0();
           
           }
    } else {
     $("#messagesum").html('<font color="red">Please select an object!</font>');
    }

},
    
        end: function () {
        showSlide("finished");
        setTimeout(function () {

            //Decrement  		
            var xmlHttp = null;
            xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "http://langcog.stanford.edu/cgi-bin/subject_equalizer/decrementer.php?filename=" + filename + "&to_decrement=" + cond, false);
            xmlHttp.send(null);

            turk.submit(experiment);
        }, 1500); //function() - anonymous function
    },
}

