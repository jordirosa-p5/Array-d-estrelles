let estrelles = [];


function setup() {
    createCanvas(windowWidth, windowHeight);
}


function draw() {
    background(20, 12, 60);

    if ( Math.random() > 0.8  ) {  //Només algunes vegades creem una nova estrella
        let novaEstrella = {
//            x: Math.random() * width, //Valors entre 0 i width
//            y: Math.random() * height, //Valors entre 0 i height
            // Amb width/2 i height/2 fem que surtin del centre de la pantalla
            x: width / 2,
            y: height / 2,
            velx: Math.random() - 0.5, //Valors entre -0.5 i 0.5
            vely: Math.random() - 0.5, //Valors entre -0.5 i 0.5
            mida: 0
        }

        //Fiquem la nova estrella dins l'array on les guardem
        estrelles.push(novaEstrella);
    }
    
    //El codi pel moviment i dibuix l'agrupem dins una funció
    mouIDibuixaEstrelles();
}


function mouIDibuixaEstrelles() {
    
    // Fem servir un 'for' per recòrrer l'array i 
    // treballar amb cadascuna de les estrelles
    for ( let i=0; i < estrelles.length; i++) {
        
        //Fem que cada estrella es mogui segons la seva velocitat
        estrelles[i].x = estrelles[i].x + estrelles[i].velx;
        estrelles[i].y += estrelles[i].vely;
        
        //Fem que la velocitat augmenti una fracció cada vegada
        estrelles[i].velx += estrelles[i].velx*0.01;
        estrelles[i].vely += estrelles[i].vely*0.01;
        
        //Augmentem la mida cada vegada una mica
        estrelles[i].mida += 0.1;
        
        //Dibuixem l'estrella a la posició on estigui (la seva x i y)
        // i de la mida que tingui en aquell moment
        circle( estrelles[i].x, estrelles[i].y, estrelles[i].mida );
    }
    
}







