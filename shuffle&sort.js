var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var deck = new Array();

function getDeck() {
  deck = [];
  for (var i = 0; i < numbers.length; i++) {
    var card = { Value: numbers[i] };
    deck.push(card);
  }
  return deck;
}

function shuffle() {
  for (var i = 0; i < 100; i++) {
    var loc1 = Math.floor(Math.random() * deck.length);
    var loc2 = Math.floor(Math.random() * deck.length);
    var tmp = deck[loc1];
    deck[loc1] = deck[loc2];
    deck[loc2] = tmp;
  }
  renderDeck();
}

function sorting() {
  getDeck();
  renderDeck();
}

function renderDeck() {
  document.getElementById("deck").innerHTML = "";
  for (var i = 0; i < deck.length; i++) {
    var card = document.createElement("div");
    var value = document.createElement("div");
    card.className = "card";
    value.className = "value";
    value.innerHTML = deck[i].Value;
    value.id = deck[i].Value;
    card.id = deck[i].Value;
    card.appendChild(value);
    document.getElementById("deck").appendChild(card);
  }
  if ($(window).width() <= 500) {
    applyBorderColor();
  } else if ($(window).width() > 500) {
    applyBgColor();
  }
}

function applyBgColor() {
  for (let i = 0; i < deck.length; i++) {
    var content = $("#" + (i + 1)).text();
    if (content == 1 || content == 8) {
      $("#" + (i + 1)).css("background-color", "#6F98A8");
    } else if (content == 2 || content == 4) {
      $("#" + (i + 1)).css("background-color", "#2B8EAD");
    } else if (content == 3 || content == 5 || content == 9) {
      $("#" + (i + 1)).css("background-color", "#333333");
    } else if (content == 6 || content == 7) {
      $("#" + (i + 1)).css("background-color", "#BFBFBF");
    }
  }
}

function applyBorderColor() {
  for (let i = 0; i < deck.length; i++) {
    var content = $("#" + (i + 1)).text();
    if (content == 1 || content == 8) {
      $("#" + (i + 1)).css({
        "border-left": "5px solid #6F98A8",
        "background-color": "#EFEFEF",
      });
    } else if (content == 2 || content == 4) {
      $("#" + (i + 1)).css({
        "border-left": "5px solid #2B8EAD",
        "background-color": "#EFEFEF",
      });
    } else if (content == 3 || content == 5 || content == 9) {
      $("#" + (i + 1)).css({
        "border-left": "5px solid #333333",
        "background-color": "#EFEFEF",
      });
    } else if (content == 6 || content == 7) {
      $("#" + (i + 1)).css({
        "border-left": "5px solid #BFBFBF",
        "background-color": "#EFEFEF",
      });
    }
  }
}

$(window).on("resize", function () {
  if ($(window).width() <= 500) {
    applyBorderColor();
  } else if ($(window).width() > 500) {
    applyBgColor();
  }
});

function load() {
  deck = getDeck();
  renderDeck();
}

window.onload = load;
