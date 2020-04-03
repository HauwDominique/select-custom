$(function () {

    $option = $('select > option');

    //on crée dans le dom une div de class "select-selected" et une div de class "select-items"
    $('<div class="select-selected">Select car :</div>').insertAfter('select');
    $('<div class="select-items"></div>').insertAfter('.select-selected').hide();


    //BOUCLE : on regard chaque element de la classe custom-select (le select)

    $option.each(function () {
        optionText = $(this).text();

        // pour chaque option du select, on crée une div de classe"item" et on y inject le texte de la balise option
        $('<div class="item"></div>').appendTo('.select-items').text(optionText);
    });

    //Au clic sur l'un de ces items
    $('.item').on('click', function () {
        itemVal = $(this).text();

        //on affecte le texte selectionné au parent ".select-selected"
        $('.select-selected').text(itemVal);

        //on boucle sur les options pour affecter l'attribut "selected" à l'option choisie
        $option.each(function () {
            selectText = $(this).text();
            if(itemVal == selectText) {
                $(this).text(itemVal);
                $(this).prop('selected', true);
            }
        })
    });


    //Au clic sur "select-selected" on affiche les div "select-items"
    $('.select-selected').on('click', function () {
        $(this).addClass('active');
        $('.select-items').show();
    });


    //Au clic sur "select-items" on cache les div "select-items"
    $('.select-items').click(function () {
        $('.select-items').hide();
        $('.select-selected').removeClass('active');
    });

    //  Ferme la div "select-items' si on clic à l'extérieur de celle-ci
    $(document).mouseup(function (e) {
        var container = $('.select-items');
        if(!container.is(e.target) && container.has(e.target).length==0) {
            container.hide();
            $('.select-selected').removeClass('active');
        }
    });

})