// "Hey, Kate, pick a number between ten thousand and five million"
var kittensOnTheInternet = 4221618;

var multiKitten;

exports.index = function(req, res){
  res.sendfile("public/index.html");
};

exports.api = {
  
  kittens: function(req, res) {
    res.json({ kittens: kittensOnTheInternet });
  },
  
  more_kittens: function(req, res) {
    kittensOnTheInternet += parseInt(req.param("more"));
    res.json({ kittens: kittensOnTheInternet });
  },
  
  multikitten: function(req, res) {
    multiKitten = setInterval(function(){
      kittensOnTheInternet++;
    }, 100);
    res.json({ kittens: kittensOnTheInternet, kittens_are: "multiplying" });
  },
  
  unikitten: function(req, res) {
    clearInterval(multiKitten);
    res.json({ kittens: kittensOnTheInternet, kittens_are: "sleeping" });
  }
}