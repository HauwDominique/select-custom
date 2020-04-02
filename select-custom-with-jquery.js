$(function () {

    //on crée dans le dom une div de class "select-selected" et une div de class "select-items"
    $('<div class="select-selected">Select car :</div>').insertAfter('select');
    $('<div class="select-items"></div>').insertAfter('.select-selected').hide();

    //BOUCLE : on regard chaque element de la classe custom-select (le select)
    $('select > option').each(function () {
        optionText = $(this).text();

        // pour chaque option du select, on crée une div select-item et on y inject le texte de la balise option
        $('<div>select-item : </div>').appendTo('.select-items').text(optionText).addClass('item');

        //Au click sur un item, on ajoute la class "same-as-selected" et on passe le texte aux parents (select-selected et select>option)
        $('.item').on('click', function () {
            $('.item').removeClass('selected');
            $(this).addClass('same-as-selected');
            itemVal = $(this).text();

            //on affecte le texte selectionné aux 2 parents
            $('.select-selected').text(itemVal);
            optionText = $('select > option').text(itemVal);
        });

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