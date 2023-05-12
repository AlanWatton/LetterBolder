var article = document.body.getElementsByClassName("article-guts");
var paragraphs = document.getElementsByTagName("p");
var darkMode = document.body.classList.contains("dark");

for(var i = 0; i < paragraphs.length; i++)
{
    MakeStartLettersBold(paragraphs[i]);
}

function MakeStartLettersBold(p)
{
    let text = p.innerText;
    let words = text.split(" ");

    let updatedText = "";

    for(var i = 0; i < words.length; i++)
    {
        if(i > 0)
        {
            updatedText += " ";
        }
        updatedText += SplitWord(words[i]);
    }

    p.innerHTML = updatedText;
}

function SplitWord(word)
{
    word = word.replace(" ");

    let len = word.length;

    let split;

    if(len <= 2)
    {
        split = 0;
    }
    else if(len == 3)
    {
        split = 1;
    }
    else if(len == 4)
    {
        split = 2;
    }
    else if(len == 5)
    {
        split = 3;
    }
    else if(len == 6)
    {
        split = 3;
    }
    else
    {
        split = 4;
    }

    if(split > 0)
    {
        let boldLetters = word.slice(0, split);
        let remainingLetters = word.slice(split);

        let boldWord = AddBoldSpan(boldLetters) + remainingLetters;

        return boldWord;
    }
    return word;
}

function AddBoldSpan(letters)
{
    if(darkMode)
    {
        return "<span style=\"font-weight:bold;color:#d6d6d6;\">" + letters + "</span>";
    }
    else
    {
        return "<span style=\"font-weight:bold;\">" + letters + "</span>";
    }
}