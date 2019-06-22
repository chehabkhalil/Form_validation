function  validate(){
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var address = document.getElementById('address').value;
    var mail = document.getElementById('mail').value;
    var password = document.getElementById('password').value;
    var comment = document.getElementById('comment').value;
    var test = true
    var t = []
  if( nom === "")
        {
           t[0] ="le nom est vide.";
            test = false;
        }
  else if (nom.length < 3)
        {
           t[0] ="le nom doit contenir au minimum 3 caractères.";
            test = false;
        }   
  if (prenom === "")
     {
        t[1] ="le prénom est vide.";
        test = false;
     }
 else if (prenom.length < 3)
        {  
            t[1] ="le prénom doit contenir au minimum 3 caractères.";
            test = false;
        }
        
   if (address === "")
    {
        t[2]="l'addresse est vide"; 
        test = false
    }
        else
        if (address.length < 8)
        {
            t[2]="l'adresse doit contenir au min 8 caractères.";
             test = false;
        }
     if (mail === "")
    {
        t[3]="le mail est vide.";
        test = false
    }
        else
        {
        if (mail.length < 3)
        {
            t[3]="le mail doit contenir au min 3 caractères.";
             test = false
        }
            else

           var regexmail= /^[a-z0-9\-_\.]+@[a-z0-9]+\.[a-z]{2,5}$/;
            if (!regexmail.test(mail))
            {
                t[3]="le mail est invalide.";
                 test = false;
            }
        }

    if (password === "")
    {
        t[4]="le password est vide."; 
        test = false;
    }
        else
        {
            if (password.length < 8)
            {
                t[4]="le mot de passe doit contenir au min 8 caractères."; 
                test = false
            }
            else
            {
                var regexpwd = /^.*(?=.{10,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/ ;
                if (!regexpwd.test(password))
                { 
                    t[4]="le mot de passe doit contenir des caracteres alphabétique(au min un caractere majuscule), numerique et caractere(s) speciaux."; 
                    test = false
                }       
            }
        }
        

    if (comment=== "")
    {
        t[5]="le Commentaire est vide.";
        test = false;
    } 
        else
        {
            if (comment.length < 8)
            { 
                t[5]="le commentaire doit contenir au min 8 caractères.";
                 test = false
            }
        } 
       
    
        if (test === true) {
            document.getElementById('nom').value = "";
            document.getElementById('prenom').value = "";
            document.getElementById('address').value = "";
            document.getElementById('mail').value = "";
            document.getElementById('password').value = "";
            document.getElementById('comment').value = "";
            alert("champs valides.") 
        }
        else
        {
            alert ((typeof t[0]==='undefined'?"":t[0]+"\n")+(typeof t[1]==='undefined'?"":t[1]+"\n")+(typeof t[2]==='undefined'?"":t[2]+"\n")+(typeof t[3]==='undefined'?"":t[3]+"\n")+(typeof t[4]==='undefined'?"":t[4]+"\n")+(typeof t[5]==='undefined'?"":t[5]+"\n"));

        }
     
};
