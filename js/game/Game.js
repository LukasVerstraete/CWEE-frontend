/**
 * Created by lukas on 17-5-2017.
 */
function Game()
{
    var player;
    var backgroundColor ="#3A6333";
    var animationFrameID;

    var deck = [];

    var startUp = function()
    {
        gameWindow.canvas.style.background = backgroundColor;

        for(var i = 0; i < 4; i++)
        {
            var suit;
            if(i == 0) suit = "hearts";
            if(i == 1) suit = "spades";
            if(i == 2) suit = "diamonds";
            if(i == 3) suit = "clubs";
            for(var j = 1; j <= 13; j++)
            {
                var card = new Card();
                card.setCard(j, suit);
                deck.push(card);
            }
        }

        animationFrameID = requestAnimationFrame(loop);
    };

    function loop()
    {
        update();
        draw();
        animationFrameID = requestAnimationFrame(loop);
    };

    function update()
    {

    }

    function draw()
    {
        for(var i = 0; i < deck.length; i++)
        {
            deck[i].draw(80 + (i * 10), 80);
        }
    }

    return {
        startUp : startUp
    };
}