// --------------- HELPER FUNCTIONS ----------------
//call the maker getter to get the cond variable 
// var xmlHttp = null;
// xmlHttp = new XMLHttpRequest();
// xmlHttp.open( "GET", "http://langcog.stanford.edu/cgi-bin/subject_equalizer/maker_getter.php?conds=0,50;1,50;2,50;3,50&filename=aen_negatronv9_test", false );
// xmlHttp.send( null );
// var cond = xmlHttp.responseText;

function random(a,b) {
    if (typeof b == "undefined") {
	a = a || 2
	return Math.floor(Math.random()*a)
    } else {
	return Math.floor(Math.random()*(b-a+1)) + a
    }
}

function shuffle(array) {
    var tmp, current, top = array.length
    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1))
        tmp = array[current]
        array[current] = array[top]
        array[top] = tmp
    }    
    return array
}

function showSlide(id) {
    $(".slide").hide()
    $("#"+id).show()
}

function makeLinkIm (imname,key) {
    return '<img src=\"images/' + imname + '.jpg\"><p align=\"center\">' + key + '</p>'
}

function makeQuestionText (q_text) {
    return '<p align=\"center\">' + q_text + '</p>'
}

window.onkeydown = function(e) { 
    return !(e.keyCode == 32)
}

//preload images: 
var myimages = new Array();
function preloading(){
    for (x=0; x<preloading.arguments.length; x++){
	myimages[x] = new Image();
	myimages[x].src = preloading.arguments[x];
    }
}
preloading("apples_context1_item.jpg","images/apples_context1_nothing.jpg","images/apples_context2_item.jpg","images/apples_context2_nothing.jpg","images/apples_context3_item.jpg","images/apples_context3_nothing.jpg","images/apples_item.jpg","images/apples_nothing.jpg","images/balloons_context1_item.jpg","images/balloons_context1_nothing.jpg","images/balloons_context2_item.jpg","images/balloons_context2_nothing.jpg","images/balloons_context3_item.jpg","images/balloons_context3_nothing.jpg","images/balloons_item.jpg","images/balloons_nothing.jpg","images/bananas_context1_item.jpg","images/bananas_context1_nothing.jpg","images/bananas_context2_item.jpg","images/bananas_context2_nothing.jpg","images/bananas_context3_item.jpg","images/bananas_context3_nothing.jpg","images/bananas_item.jpg","images/bananas_nothing.jpg","images/beach balls_context1_item.jpg","images/beach balls_context1_nothing.jpg","images/beach balls_context2_item.jpg","images/beach balls_context2_nothing.jpg","images/beach balls_context3_item.jpg","images/beach balls_context3_nothing.jpg","images/beach balls_item.jpg","images/beach balls_nothing.jpg","images/bears_context1_item.jpg","images/bears_context1_nothing.jpg","images/bears_context2_item.jpg","images/bears_context2_nothing.jpg","images/bears_context3_item.jpg","images/bears_context3_nothing.jpg","images/bears_item.jpg","images/bears_nothing.jpg","images/blanket_alternate.jpg","images/blanket_contextC.jpg","images/blanket_contextL.jpg","images/blanket_contextR.jpg","images/blanket_item.jpg","images/book_alternate.jpg","images/book_contextC.jpg","images/book_contextL.jpg","images/book_contextR.jpg","images/book_item.jpg","images/bows_context1_item.jpg","images/bows_context1_nothing.jpg","images/bows_context2_item.jpg","images/bows_context2_nothing.jpg","images/bows_context3_item.jpg","images/bows_context3_nothing.jpg","images/bows_item.jpg","images/bows_nothing.jpg","images/buckets_context1_item.jpg","images/buckets_context1_nothing.jpg","images/buckets_context2_item.jpg","images/buckets_context2_nothing.jpg","images/buckets_context3_item.jpg","images/buckets_context3_nothing.jpg","images/buckets_item.jpg","images/buckets_nothing.jpg","images/cakes_context1_item.jpg","images/cakes_context1_nothing.jpg","images/cakes_context2_item.jpg","images/cakes_context2_nothing.jpg","images/cakes_context3_item.jpg","images/cakes_context3_nothing.jpg","images/cakes_item.jpg","images/cakes_nothing.jpg","images/carrots_context1_item.jpg","images/carrots_context1_nothing.jpg","images/carrots_context2_item.jpg","images/carrots_context2_nothing.jpg","images/carrots_context3_item.jpg","images/carrots_context3_nothing.jpg","images/carrots_item.jpg","images/carrots_nothing.jpg","images/cars_context1_item.jpg","images/cars_context1_nothing.jpg","images/cars_context2_item.jpg","images/cars_context2_nothing.jpg","images/cars_context3_item.jpg","images/cars_context3_nothing.jpg","images/cars_item.jpg","images/cars_nothing.jpg","images/cats_context1_item.jpg","images/cats_context1_nothing.jpg","images/cats_context2_item.jpg","images/cats_context2_nothing.jpg","images/cats_context3_item.jpg","images/cats_context3_nothing.jpg","images/cats_item.jpg","images/cats_nothing.jpg","images/collar_alternate.jpg","images/collar_contextC.jpg","images/collar_contextL.jpg","images/collar_contextR.jpg","images/collar_item.jpg","images/cookies_context1_item.jpg","images/cookies_context1_nothing.jpg","images/cookies_context2_item.jpg","images/cookies_context2_nothing.jpg","images/cookies_context3_item.jpg","images/cookies_context3_nothing.jpg","images/cookies_item.jpg","images/cookies_nothing.jpg","images/crayons_context1_item.jpg","images/crayons_context1_nothing.jpg","images/crayons_context2_item.jpg","images/crayons_context2_nothing.jpg","images/crayons_context3_item.jpg","images/crayons_context3_nothing.jpg","images/crayons_item.jpg","images/crayons_nothing.jpg","images/dogs_context1_item.jpg","images/dogs_context1_nothing.jpg","images/dogs_context2_item.jpg","images/dogs_context2_nothing.jpg","images/dogs_context3_item.jpg","images/dogs_context3_nothing.jpg","images/dogs_item.jpg","images/dogs_nothing.jpg","images/dolls_context1_item.jpg","images/dolls_context1_nothing.jpg","images/dolls_context2_item.jpg","images/dolls_context2_nothing.jpg","images/dolls_context3_item.jpg","images/dolls_context3_nothing.jpg","images/dolls_item.jpg","images/dolls_nothing.jpg","images/donuts_context1_item.jpg","images/donuts_context1_nothing.jpg","images/donuts_context2_item.jpg","images/donuts_context2_nothing.jpg","images/donuts_context3_item.jpg","images/donuts_context3_nothing.jpg","images/donuts_item.jpg","images/donuts_nothing.jpg","images/dress_alternate.jpg","images/dress_contextC.jpg","images/dress_contextL.jpg","images/dress_contextR.jpg","images/dress_item.jpg","images/fish_context1_item.jpg","images/fish_context1_nothing.jpg","images/fish_context2_item.jpg","images/fish_context2_nothing.jpg","images/fish_context3_item.jpg","images/fish_context3_nothing.jpg","images/fish_item.jpg","images/fish_nothing.jpg","images/flowers_context1_item.jpg","images/flowers_context1_nothing.jpg","images/flowers_context2_item.jpg","images/flowers_context2_nothing.jpg","images/flowers_context3_item.jpg","images/flowers_context3_nothing.jpg","images/flowers_item.jpg","images/flowers_nothing.jpg","images/guitars_context1_item.jpg","images/guitars_context1_nothing.jpg","images/guitars_context2_item.jpg","images/guitars_context2_nothing.jpg","images/guitars_context3_item.jpg","images/guitars_context3_nothing.jpg","images/guitars_item.jpg","images/guitars_nothing.jpg","images/hat_alternate.jpg","images/hat_contextC.jpg","images/hat_contextL.jpg","images/hat_contextR.jpg","images/hat_item.jpg","images/house_alternate.jpg","images/house_contextC.jpg","images/house_contextL.jpg","images/house_contextR.jpg","images/house_item.jpg","images/ice cream cones_contex1_item.jpg","images/ice cream cones_context1_nothing.jpg","images/ice cream cones_context2_item.jpg","images/ice cream cones_context2_nothing.jpg","images/ice cream cones_context3_item.jpg","images/ice cream cones_context3_nothing.jpg","images/ice cream cones_item.jpg","images/ice cream cones_nothing.jpg","images/keys_context1_item.jpg","images/keys_context1_nothing.jpg","images/keys_context2_item.jpg","images/keys_context2_nothing.jpg","images/keys_context3_item.jpg","images/keys_context3_nothing.jpg","images/keys_item.jpg","images/keys_nothing.jpg","images/kites_context1_item.jpg","images/kites_context1_nothing.jpg","images/kites_context2_item.jpg","images/kites_context2_nothing.jpg","images/kites_context3_item.jpg","images/kites_context3_nothing.jpg","images/kites_item.jpg","images/kites_nothing.jpg","images/list.txt","images/lollipops_item.jpg","images/lollipops_nothing.jpg","images/mittens_context1_item.jpg","images/mittens_context1_nothing.jpg","images/mittens_context2_item.jpg","images/mittens_context2_nothing.jpg","images/mittens_context3_item.jpg","images/mittens_context3_nothing.jpg","images/mittens_item.jpg","images/mittens_nothing.jpg","images/oranges_item.jpg","images/oranges_nothing.jpg","images/phones_context1_item.jpg","images/phones_context1_nothing.jpg","images/phones_context2_item.jpg","images/phones_context2_nothing.jpg","images/phones_context3_item.jpg","images/phones_context3_nothing.jpg","images/phones_item.jpg","images/phones_nothing.jpg","images/pictures_item.jpg","images/pictures_nothing.jpg","images/pie slices_item.jpg","images/pie slices_nothing.jpg","images/pieces of pizza_item.jpg","images/pieces of pizza_nothing.jpg","images/plants_context1_item.jpg","images/plants_context1_nothing.jpg","images/plants_context2_item.jpg","images/plants_context2_nothing.jpg","images/plants_context3_item.jpg","images/plants_context3_nothing.jpg","images/plants_item.jpg","images/plants_nothing.jpg","images/presents_context1_item.jpg","images/presents_context1_nothing.jpg","images/presents_context2_item.jpg","images/presents_context2_nothing.jpg","images/presents_context3_item.jpg","images/presents_context3_nothing.jpg","images/presents_item.jpg","images/presents_nothing.jpg","images/purses_context1_item.jpg","images/purses_context1_nothing.jpg","images/purses_context2_item.jpg","images/purses_context2_nothing.jpg","images/purses_context3_item.jpg","images/purses_context3_nothing.jpg","images/purses_item.jpg","images/purses_nothing.jpg","images/rainboots_context1_item.jpg","images/rainboots_context1_nothing.jpg","images/rainboots_context2_item.jpg","images/rainboots_context2_nothing.jpg","images/rainboots_context3_item.jpg","images/rainboots_context3_nothing.jpg","images/rainboots_item.jpg","images/rainboots_nothing.jpg","images/sandwiches_item.jpg","images/sandwiches_nothing.jpg","images/scissors_context1_item.jpg","images/scissors_context1_nothing.jpg","images/scissors_context2_item.jpg","images/scissors_context2_nothing.jpg","images/scissors_context3_item.jpg","images/scissors_context3_nothing.jpg","images/scissors_item.jpg","images/scissors_nothing.jpg","images/shovels_context1_item.jpg","images/shovels_context1_nothing.jpg","images/shovels_context2_item.jpg","images/shovels_context2_nothing.jpg","images/shovels_context3_item.jpg","images/shovels_context3_nothing.jpg","images/shovels_item.jpg","images/shovels_nothing.jpg","images/spoons_context1_item.jpg","images/spoons_context1_nothing.jpg","images/spoons_context2_item.jpg","images/spoons_context2_nothing.jpg","images/spoons_context3_item.jpg","images/spoons_context3_nothing.jpg","images/spoons_item.jpg","images/spoons_nothing.jpg","images/spots_alternate.jpg","images/spots_contextC.jpg","images/spots_contextL.jpg","images/spots_contextR.jpg","images/spots_item.jpg","images/stanford.png","images/sweater_alternate.jpg","images/sweater_contextC.jpg","images/sweater_contextL.jpg","images/sweater_contextR.jpg","images/sweater_item.jpg","images/umbrellas_context1_item.jpg","images/umbrellas_context1_nothing.jpg","images/umbrellas_context2_item.jpg","images/umbrellas_context2_nothing.jpg","images/umbrellas_context3_item.jpg","images/umbrellas_context3_nothing.jpg","images/umbrellas_item.jpg","images/umbrellas_nothing.jpg")

function getRadioCheckedValue(formNum, radio_name)
{
    var oRadio = document.forms[formNum].elements[radio_name]
    for(var i = 0; i < oRadio.length; i++)
    {
	if(oRadio[i].checked)
	{
            return oRadio[i].value
	}
    }
    return ''
}

function clearForm(oForm) {
    var elements = oForm.elements
    oForm.reset()
    for(i=0; i<elements.length; i++) {
	field_type = elements[i].type.toLowerCase()
	switch(field_type) {
	case "text": 
	case "password": 
	case "textarea":
	case "hidden":	
	    elements[i].value = ""
	    break
	case "radio":
	case "checkbox":
  	    if (elements[i].checked) {
   		elements[i].checked = false
	    }
	    break
	case "select-one":
	case "select-multi":
            elements[i].selectedIndex = -1
	    break
	default: 
	    break
	}
    }
}

function ValidateForm(form){
    var valid = 0
    for(var i = 0; i < form.elements.length; i++) {
        if (form.elements[i].checked == true ) { 
            valid = 1
            return true
        } 
    } 
    if (valid == 0) {
        alert ( "Please answer this question." )
        return false
    }
}

function ValidateSelect(form) {
    if (form.ageRange.selectedIndex != 0 && form.ageRange.selectedIndex != 1 && form.ageRange.selectedIndex != 2 && form.ageRange.selectedIndex != 3 && form.ageRange.selectedIndex != 4 && form.ageRange.selectedIndex != 5 && form.ageRange.selectedIndex != 6) {
        alert ( "Please answer this question." )
        return false
    }
    return true
}
function ValidateText(field)
{
    valid = true
    if (field.value == "" )
    {
        alert ( "Please answer all the questions." )
        valid = false
    }
    return valid
}
// --------------- PARAMETERS OF THE EXPERIMENT ----------------
var practiceItems = ["dress", "spots", "sweater", "blanket", "book", "collar", "hat", "house"]
var practicePerson = ["Lizzie", "Buddy", "John", "Tom", "Laura", "Sparky", "Olivia", "George"]
var practiceQuestion = ["has an orange dress", "has blue spots", "has a yellow sweater", "has a green blanket", "has a green book", "has a yellow collar", "has a pink hat", "has a blue house"]
var items = ["apples","balloons","bananas","beach balls","bears","bows","buckets","cakes","carrots","cars","cats","cookies","crayons","dogs","dolls","donuts","fish","flowers","ice cream cones","keys","kites","mittens","phones","presents","rainboots","shovels","spoons","umbrellas"]
var person = ["Bob","Nancy","Josh","Natalie","Michael","Abby","Katie","Jeff","Jasmine","Susan","Grace","Daniel","David","Ethan","Lila","Sophie","Alison","Sam","John","Andrew","Jacob","Julia","Lauren","Lizzie","Olivia","Samantha","William","Alex"]
/////NOTE: CHECK THAT THESE PEOPLE ARE CORRECT!!!
var people = ["boys","girls","boys","girls","boys","girls","girls","boys","girls","girls","girls","boys","boys","boys","girls","girls","girls","boys","boys","boys","boys","girls","girls","girls","girls","girls","boys","boys"]
var practicePeople = ["girls","dogs","boys","boys","girls","dogs","girls","boys"]

var text_conditions = {"lexical" : "has no",
		       "plural" : "has"}

var trial_types = shuffle(["lexical","lexical","lexical","lexical","lexical","lexical","lexical","lexical","lexical","lexical","lexical","lexical","lexical","lexical","plural","plural","plural","plural","plural","plural","plural","plural","plural","plural","plural","plural","plural","plural"])

var practiceTrial_order = shuffle([0,1,2,3,4,5,6,7])
var trial_order = shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27])

// --------------- EXPERIMENT ----------------------------------------
showSlide("instructions")
var experiment = {
    practiceTrials: practiceTrial_order,   
    trials: trial_order,
    completed: [],
    data: [],
    gender: [],
    age:"",
    nativeLanguage:"",
    comments:"",
    
    //Show practice trials: 
    practice_start: function() {
	showSlide("practiceStart")
	
	var already_movedon = 0
	
    $(document).keydown(function(event) {
	    if ( event.which == 32 & !already_movedon) {
		experiment.practice_keyLeft()
		already_movedon = 1
	    }	    
	})
    },
    
    practice_keyLeft: function() {
	showSlide("practiceKeyLeft")
	
	var already_movedon = 0
	$(document).keydown(function(event) {
	    if ( event.which == 81 & !already_movedon) { // 81 = event for pressing 'Q'
		experiment.practice_keyRight()
		already_movedon = 1
	    }	    
	})
    },

    practice_keyRight: function() {
	showSlide("practiceKeyRight")

	var already_movedon = 0
	$(document).keydown(function(event) {
	    if ( event.which == 80 & !already_movedon) { // 80 = event for pressing 'P'
		experiment.practice_trial()
		already_movedon = 1
	    }	    
	})
    },

    practice_trial: function() {
    	var n = experiment.practiceTrials.shift()
    	if (typeof n == "undefined") {
    	    return experiment.practice_end()
    	}
    	// clear the questions
    	$("#questionL").html("") 
    	$("#questionR").html("")
    	$("#questionText").html("")
	
    	showSlide("stage")
	$("#context1").html("","") 
	$("#context2").html("+","") 
	$("#context3").html("","")
	
	// var practiceContext_text = "Look at these " + practicePeople[n] + "!"
	
	// $("#questionText").html(makeQuestionText(practiceContext_text))
	
 	$("#instructionsText").html("Please wait .")
	
    	setTimeout(function() { $("#instructionsText").html("Please wait . .")}, 1000)
	setTimeout(function() { $("#instructionsText").html("Please wait . . .")}, 2000)
	setTimeout(function() { experiment.next_practiceQuestion(n) }, 3000)
    },
    
    
    next_practiceQuestion: function(n) {
    	// clear the questions
    	$("#questionL").html("") 
    	$("#questionR").html("")
    	$("#questionText").html("")
	
	showSlide("stage")
	$("#context1").html("") // clear the old context
	$("#context2").html("") // clear the old context
	$("#context3").html("") // clear the old contextt
	$("#instructionsText").html("")
	
	var practiceContext_item = practiceQuestion[n]
	
	var practiceQuestion_text = practicePerson[n] + " " + practiceContext_item + "! "
	+ "Where is " + practicePerson[n] + "?"
	
	$("#questionText").html(makeQuestionText(practiceQuestion_text))
	
	experiment.next_practiceTest(n)
    },
    
   next_practiceTest: function(n) {
	
	//add the new questions
       var practiceTest_images = shuffle([practiceItems[n] + "_item",
					  practiceItems[n] + "_alternate"])
	
       $("#questionL").html(makeLinkIm(practiceTest_images[0],"[Q]")) 
       $("#questionR").html(makeLinkIm(practiceTest_images[1],"[P]")) 
	

//press P or Q to continue; show alert if incorrect
	var already_movedon = 0
	if (practiceTest_images[0] == practiceItems[n] + "_item") {
	    $(document).keydown(function(event) {
		if ( event.which == 80 & !already_movedon) {
		    alert("Incorrect!  Please try again")
		} else if (event.which == 81 & !already_movedon) {
		    already_movedon = 1
		    setTimeout(experiment.practice_trial, 500)  
		} 
	    })
	} else {
	    $(document).keydown(function(event) {
		if ( event.which == 80 & !already_movedon) {
		    already_movedon = 1
		    setTimeout(experiment.practice_trial, 500)  
		} else if (event.which == 81 & !already_movedon) {
		    alert("Incorrect!  Please try again")
		}
	    })
	}
   },
			       
    
    practice_end: function() {
	showSlide("practiceEnd")
	var already_movedon = 0
	$(document).keydown(function(event) {
	    if ( event.which == 32 & !already_movedon) {
		experiment.next_trial()
		already_movedon = 1
	    }	    
	})
    },
    
    next_trial: function() {
	var n = experiment.trials.shift()  // account for the 0 indexing
	if (typeof n == "undefined") {
	    return experiment.background()
	}
	
	experiment.completed.push(n)	
	
	// clear the questions
	$("#questionL").html("") 
	$("#questionR").html("")
	$("#questionText").html("")
	
	// var showContext = showContext
	// if (cond == 0) {
	//     showSlide("stage")
	//     $("#context1").html(makeLinkIm(items[n] + "_context1_nothing","")) 
	//     $("#context2").html(makeLinkIm(items[n] + "_context2_nothing","")) 
	//     $("#context3").html(makeLinkIm(items[n] + "_context3_nothing","")) 
	// } else if (cond == 1) {
	//     showSlide("stage")
	//     $("#context1").html(makeLinkIm(items[n] + "_context1_item","")) 
	//     $("#context2").html(makeLinkIm(items[n] + "_context2_nothing","")) 
	//     $("#context3").html(makeLinkIm(items[n] + "_context3_nothing",""))
	// } else if (cond == 2) {
	//     showSlide("stage")
	//     $("#context1").html(makeLinkIm(items[n] + "_context1_item","")) 
	//     $("#context2").html(makeLinkIm(items[n] + "_context2_item","")) 
	//     $("#context3").html(makeLinkIm(items[n] + "_context3_nothing","")) 
	// } else if (cond == 3) {
	//     showSlide("stage")
	//     $("#context1").html(makeLinkIm(items[n] + "_context1_item","")) 
	//     $("#context2").html(makeLinkIm(items[n] + "_context2_item","")) 
	//     $("#context3").html(makeLinkIm(items[n] + "_context3_item","")) 
	// }
	
	showSlide("stage")
	$("#context1").html("","")
	$("#context2").html("+","")
	$("#context3").html("","") 
	
	// var context_text = "Look at these " + people[n] + "!"
	
	// $("#questionText").html(makeQuestionText(context_text))
	$("#instructionsText").html("Please wait .")
	
	setTimeout(function() { $("#instructionsText").html("Please wait . .")}, 1000)
	setTimeout(function() { $("#instructionsText").html("Please wait . . .")}, 2000)
	setTimeout(function() { experiment.next_question(n) }, 3000)
    },
    
    // show test question
    next_question: function(n) {
	
	showSlide("stage")
	$("#context1").html("") // clear the old context
	$("#context2").html("") // clear the old context
	$("#context3").html("") // clear the old context   
	$("#instructionsText").html("")
	
	var context_item = items[n]
	
	var question_text = person[n] + " "
	    + text_conditions[trial_types[n]]
	    + " " + context_item + ". "
	    + "Where is " + person[n] + "?"
	
	$("#questionText").html(makeQuestionText(question_text))
	//Some options for presenting pictures:
	//To make participants press spacebar before they can see trial pictures:
	//	var already_movedon = 0
	//$(document).keydown(function(event) {
	//	    if ( event.which == 32 & !already_movedon) {
	//		experiment.next_test(n)
	//		already_movedon = 1
	//}	    
	//	})
	//},
	
	//To insert a 1500ms pause before automatically displaying the trial pictures:
	//	setTimeout(function() { experiment.next_test(n) },1500)
	    //	    },
	
	//To automatically display trial pictures simultaneously with text:
	experiment.next_test(n)
    },
    
    // show next test
    next_test: function(n) {
	
	//add the new questions
	var test_images = shuffle([items[n] + "_nothing",
				   items[n] + "_item"])
	
	$("#questionL").html(makeLinkIm(test_images[0],"[Q]")) 
	$("#questionR").html(makeLinkIm(test_images[1],"[P]"))
	
	// collect response and log reaction time and whether it's correct.
	var startTime = (new Date()).getTime()
	$(document).keydown(function(event) {
	    var keyCode = event.which
	    if (keyCode == 81 || keyCode == 80 ) {
		$(document).unbind("keydown")
		var endTime = (new Date()).getTime()
		
		// figure out if they chose true or false
		key = (keyCode == 80) ? "right" : "left"
		image_chosen = (keyCode == 80) ? test_images[1] : test_images[0]
		
		// check accuracy
		// var answer = 0
		// if (trial_types[n][1] =="lexical") {
		//     answer = test_images == items[n] + "_nothing"
		// } else {
		//     answer = test_images == items[n] + "_item"
		// }
		
		// var correct = 0
		// if (answer == key) {
		//     correct = 1
		// }

		var correct = 0
		if (trial_types[n]=="plural") {
		    if (image_chosen == items[n] + "_item") {
			correct = 1 
		    } else {
			correct = 0
		    }
		} else {
		    if (image_chosen != items[n] + "_item") {
			correct = 1
		    } else {
			correct = 0
		    }
		}
		
		var data = {
		    // context_condition: cond,
		    item: items[n],	    
		    response: key,
		    response_image: image_chosen,
		    stimulus: n,
		    images: test_images,
		    // image_condition: trial_types[n][0],
		    text_condition: trial_types[n], 
		    correct: correct,
		    rt: endTime - startTime
		}
		
		experiment.data.push(data)
		$("#question").html("")
		setTimeout(experiment.next_trial, 500)
	    }
	})
    },

    //Ask for background info and comments:
    background: function() {
	window.onkeydown = function(e) {
	}
        clearForm(document.gender);
        clearForm(document.age);
        clearForm(document.comments);
        showSlide("askInfo");
    },
    
    // finish 
    end: function() {
	var gen = getRadioCheckedValue(0, "genderButton")
        var ag = document.age.ageRange.value
        var lan = document.language.nativeLanguage.value
        var comm = document.comments.input.value
	experiment.gender = gen
        experiment.age = ag
        experiment.nativeLanguage = lan
	experiment.comments = comm
	showSlide("finished")

	// var xmlHttp = null;
	// xmlHttp = new XMLHttpRequest();
	// xmlHttp.open("GET", "http://langcog.stanford.edu/cgi-bin/subject_equalizer/decrementer.php?filename=aen_negatronv9_test&to_decrement=" + cond, false );
	// xmlHttp.send( null )
	;
	
	setTimeout(function() { turk.submit(experiment) }, 1500)
    }
}
