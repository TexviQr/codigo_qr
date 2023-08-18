function ponerIdioma(){
  var idioma = navigator.language || navigator.userLanguage;

  // alert(idioma);

        if(idioma === 'es' || idioma === 'es-ES'){
            //Español
            document.getElementById('pdf').href = 'Catálogo Gasa Quirúrgica TEXVI.pdf';
            document.getElementById('pdf1').href = 'Catálogo Gasa Quirúrgica TEXVI.pdf';
        }else if(idioma === 'en' || idioma === 'en-US'){
            //Ingles
            document.getElementById('pdf').href = 'Surgical Gauze Catalog TEXVI.pdf';
            document.getElementById('pdf1').href = 'Surgical Gauze Catalog TEXVI.pdf';
        }else{
            //DEFECTO
            document.getElementById('pdf').href = 'Catálogo Gasa Quirúrgica TEXVI.pdf';
            document.getElementById('pdf1').href = 'Catálogo Gasa Quirúrgica TEXVI.pdf';
        }


}
