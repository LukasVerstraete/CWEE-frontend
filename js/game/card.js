/**
 * Created by lukas on 5-5-2017.
 */
function Card()
{

    var cardDescription;
    var imageName;
    var image;

    var setCard = function(value, suite)
    {
        var stringValue = "" + value;
        if(value < 10)
        {
            stringValue = "0" + stringValue;
        }

        cardDescription = value + " of " + suite;
        imageName = "art/" + stringValue  + suite.charAt(0) + ".gif";
        image = new Image();
        image.src = imageName;
    };

    var draw = function(x, y)
    {
        gameWindow.context.drawImage(image, x, y);
    };

    return {
        setCard : setCard,
        draw : draw
    };
}