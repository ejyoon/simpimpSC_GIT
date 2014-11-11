// simpimp-SC_mixNum adult Mturk ver.
// Overview: (i) helper (ii) Parameters (iii) Control flow


// ---------------- HELPER ------------------
// SHOWSLIDE FUNCTION
function showSlide(id) {
  $(".slide").hide(); //jquery - all elements with class of slide - hide
  $("#" + id).show(); //jquery - element with given id - show
}

// ---------------- PARAMETERS ------------------


// ---------------- CONTROL FLOW ------------------
showSlide("instructions");