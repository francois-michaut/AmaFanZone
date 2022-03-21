const app = {

     apiRootUrl: "http://localhost:8080",

    init: function() 
    {
        console.log( 'app.init' );

        app.loadCategories();
    },

    loadCategories: function()
    {
        const fetchOptions = {
            method : 'GET',
            mode   : 'cors',
            cache  : 'no-cache'
        };

        fetch( app.apiRootUrl , fetchOptions )
        .then( function( response ) { return response.json() ;
                }
         )
        .then( function (response ){

            console.log( response );
        //    const categories =  response;

        //    for( const category of categories )
        //    {
        //        const newDiv = document.createElement( 'div' );

        //        newDiv.textContent = category.name;

        //        const titlePrincipal = document.querySelector( 'h1' );

        //        titlePrincipal.append( newDiv );
        //    }
        } )
    }
}

document.addEventListener( 'DOMContentLoaded', app.init );

