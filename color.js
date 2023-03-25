var Body = {
    setBackgroundColor: function (color) {
        document.querySelector('body').style.background = color;
    },
    setColor: function (color) {
        document.querySelector('body').style.color = color;
    }
}
var Links = {
    SetColor: function (color) {
        var links = document.querySelectorAll('a');
        var i = 0;
        while (i < links.length) {
            links[i].style.color = color;
            i = i + 1;
        }
    }
}
function nightDayHandlder(self) {
    if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white')
        self.value = 'day';
        Links.SetColor('powderblue');
    }
    else {
        Body.setBackgroundColor('white');
        Body.setColor('black')
        self.value = 'night';
        Links.SetColor('blue');
    }
}
