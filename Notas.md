##DEPLOY

#Heroku

- Create New App
- Como tenia un repo creado, tuve que ejecutar esto en bash, existe una opcion que te linkea el repo con la app
    
    'https://git.heroku.com/ucafrontend.git'

    De esa manera, queda configurado otro "remote"

    heroku https://git.heroku.com/ucafrontend.git (fetch)
    heroku https://git.heroku.com/ucafrontend.git (push)
    origin git@github.com:LucianoPaci/frontEnd-uca-thesis.git (fetch)
    origin git@github.com:LucianoPaci/frontEnd-uca-thesis.git (push)

- [Settings > Reveal Config Vars]
        *Ahi se setean las variables de produccion*
        NODE_ENV = production

- [Settings > Buildpacks]
        *Ahi se setea el buildpack (todas las herramientas utilizadas para buildear la app)*
        Se agrego el Buildpack de create-react-app
        'https://github.com/mars/create-react-app-buildpack.git'

        Los cambios se pushean a Heroku asi

       # git add <files>
       # git commit -m "mensaje"
       # git push heroku master

- Si se suben cambios a Heroku, hay que esperar que se buildee. Una vez listo, borrar cache del browser desde el Inspector de Elementos, en la tab de *Application*. Luego, hacer un Refresh.


##*------------------------------------------------------------------------------------------*##

##TIPS

Todos los Routers van en 'index.js'

