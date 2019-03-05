var ActiveElement=null;

function initEvents()
{
    window.onhashchange = function() {
        if ( ActiveElement !== null && window.location.hash == "" )
        {

            hideElements(ActiveElement);
        }
    }
}

function expandElement(id)
{
    var element = document.getElementById(id)
    var idVisible=element.classList.contains("description-visible");
    
    
    if ( !idVisible )
    {
        if ( element.classList.contains("just-hid") ) 
        {
            element.classList.remove("just-hid")
            return
        }   
        
        $('.card-1').hide();
        $('.about-me').hide();
        $("#" + id + "-card").show();
        
        
        element.classList.add("description-visible")

        
        element = document.getElementById(id + "-card")
        element.classList.add("description-visible")
        
        element = document.getElementById(id + "-thumb")
        element.classList.add("description-visible")
        
        element = document.getElementById(id + "-close")
        element.classList.add("description-visible")     
        
	if(window.location.hash != '') {
	  history.back();
	}

        window.scrollTo(0,0);
        
        $("#" + id + "-card").one($.support.transition.end,
            function() {
		window.location.href = "#"+ id + "-card"; 
                ActiveElement=id;
        });
    }
}

function hideElements(id)
{
    ActiveElement=null;

    $('.card-1').show();
    $('.about-me').show();

    var elements = document.getElementsByClassName("description-visible")
    if ( elements &&  elements.length > 0 )
    {
        for (var i=elements.length-1; i >=0; i--) {
            elements[i].classList.remove("description-visible");
        }
    }
    var element = document.getElementById(id);
    element.classList.add("just-hid");
    window.location.href = "#"+ id + "-card"

    $("#" + id + "-card").one($.support.transition.end,
        function() {
            document.getElementById(id + "-card").scrollIntoView({behavior: "smooth"});

    });

}
