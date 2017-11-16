var values = ["\u{2764}", "\u{2764}", "\u{2747}", "\u{2747}", "\u{26C4}", "\u{26C4}",
"\u{267B}", "\u{267B}", "\u{2666}", "\u{2666}", "\u{26A1}", "\u{26A1}", "\u{26BD}", "\u{26BD}", "\u{1F354}", "\u{1F354}"]

var firstVal, secondVal;

var $firstCard, $secondCard;

var matches = 0;

var toggle = 0

var $cards = $('.card')

var $resetButton = $('#restart')

$($resetButton).hide()

$.each($cards, function(index, card) {
  $(card).append("<p class = 'hide' id = '" + index + "'" + " >" + values.splice(Math.floor(Math.random() * values.length), 1) + "</p>")
})

$('.hide').hide()

$cards.on('click', function() {
  var card = $(this).children()
  card.show()
  if (toggle === 0){
    firstVal = card.text()
    $firstCard = card
    toggle++
  } else {
    secondVal = card.text()
    $secondCard = card
    toggle--
  }
  if ((toggle === 0) && (firstVal != secondVal)) {
    setTimeout(function(){
      $($firstCard).hide();
      $($secondCard).hide();
    }, 500)
  } else if (toggle === 0 && firstVal == secondVal) {
    matches++
  }

  if (matches === 8) {
    $(title).text('YOU WIN')
    $($resetButton).show()
  }
})

$resetButton.on('click', function() {
  location.reload()
})
