let ano

ano = Number(prompt( "digite o ano"))


switch (true){


    case ano < 1945:
    alert ("Sem Geração")
    break

    case ano == 1945 || ano < 1964 :
    alert ("Baby Boomers")  
    break
    
    case ano == 1965 || ano < 1980:  
    alert ("Geração X") 
    break

    case ano == 1981 || ano < 1996:
    alert ("Geração Y ou Millennials")
    break

    case ano == 1997 || ano < 2010:
    alert ("Geração Z")
    break

    case ano >= 2011:
    alert ("Geração Alfa")
    break    

}
© 2022 GitHub, Inc.
Terms
Privacy
Security
