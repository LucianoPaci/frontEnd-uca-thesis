
# Users

users

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    name = db.Column(db.String(255))
    surname = db.Column(db.String(255)) 
    email = db.Column(db.String(255))
    creation_date = db.Column(db.DateTime, default=db.func.current_timestamp())
    user_skills = db.relationship("UserSkill",backref="es_de",cascade="delete", lazy="dynamic")
    user_project = db.relationship("UserProject",backref="tiene", lazy="dynamic")


    **Serialize = > lo que me devuelven**

        'id': self.id,
        'username': self.username,
        'name': self.name,
        'surname': self.surname,
        'token': self.generate_auth_token().decode('ascii')  

LOGIN
    -/accounts/log_in por POST
    Requiere [username, password]
SIGNIN
    -/accounts/sign_up por POST
    Requiere [username, password, name, surname, email, passwordcpy]



# Projects

Projects

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255))
    creation_date = db.Column(db.DateTime, default=db.func.current_timestamp())
    is_complete = db.Column(db.Boolean, nullable=False)
    users = db.relationship("UserProject", backref="integrante",cascade="delete", lazy="dynamic")
    skills_required = db.relationship("ProjectSkill",cascade="delete", lazy="dynamic")



    ===
    **Serialize = > lo que me envian a mi**

            'id': self.id,
            'name': self.name,
            'description': self.description,
            'creation_date': self.creation_date,
            'associated_users': self.users.count(),
            'creator': self.creator()


Create Project
      -/project por POST
      Requiere [name, description]

Delete Project
      -/project/<int:project_id> por DELETE
      Solo con el id del project 

Get All Projects
      -/user/project por GET
