
// Controlador de la web =========================== inicio
(function(){
  "use strict";
  angular.module('JSuarez',[]).
  controller('MainController', function($scope, $interval){

    // OBJETOS DE LA WEB
    //================================================================    
    $scope.obj_skill = {
      start: 0,
      end: 1
    };
    $scope.obj_backend = {
      start: 0,
      end: 4
    };  
    
    $scope.obj_frontend = {
      start: 0,
      end: 4
    };    

    $scope.obj_page = {
      panel: 'education'
    };

    // ARREGLOS DE LA WEB
    //================================================================
    $scope.arr_certificate_edx = [
      {
        id:1, 
        course: 'Guided Project: Web Development w/ HTML & CSS for Beginners',
        school: 'IBM',
        date: '16/7/2025',
        link: 'https://courses.edx.org/certificates/5871a63dad724360befae6302a559211'
      },
      {
        id:2, 
        course: 'Back-end Application Development with Node.js and Express',
        school: 'IBM',
        date: '21/7/2025',
        link: 'https://courses.edx.org/certificates/ed5e288cd6b540aa916097266d7fbda5'
      },
      {
        id:3, 
        course: 'Backend APIs & Microservices',
        school: 'Microsoft',
        date: '31/7/2025',
        link: 'https://courses.edx.org/certificates/b07c622432384249a829222ab5f7c86d'
      },  
      {
        id:4, 
        course: 'HTML5 and CSS Fundamentals',
        school: 'W3Cx',
        date: '4/8/2025',
        link: 'https://courses.edx.org/certificates/57364ade2a624056b75128b0c8c7ebb8'
      },
      {
        id:5, 
        course: 'Introduction to Cloud Native, DevOps, Agile, and NoSQL',
        school: 'IBM',
        date: '12/8/2025',
        link: 'https://courses.edx.org/certificates/b5cbf2dc713643579bd401cad5b857b2'
      },
      {
        id:6, 
        course: 'Introduction to Web Development with HTML5, CSS3, and JavaScript',
        school: 'IBM',
        date: '13/8/2025',
        link: 'https://courses.edx.org/certificates/c4e0cd4b386149e2adec5075cba64907'
      }                                    
    ];

    $scope.arr_learn_microsoft = [
      {
        id:1, 
        course: 'Programación con Transact-SQL',
        school: 'Microsoft',
        date: '30/6/2025',
        link: 'https://learn.microsoft.com/api/achievements/share/es-es/JosephSuarezHuaira-0749/7KWQT6MZ?sharingId=6363F56B0923DBCB',
        trophy: 'transact-sql-program.svg',
        description: [
          {id: 1, description: 'Introducción a la programación con Transact-SQL'},
          {id: 2, description: 'Crear procedimientos almacenados y funciones definidas por el usuario'},
          {id: 3, description: 'Implementación del control de errores con Transact-SQL'},
          {id: 4, description: 'Implementación de transacciones con Transact-SQL'}
        ]
      },
      {
        id:2, 
        course: 'Introducción a las consultas con Transact-SQL',
        school: 'Microsoft',
        date: '05/8/2025',
        link: 'https://learn.microsoft.com/api/achievements/share/es-es/JosephSuarezHuaira-0749/H7LX2YV8?sharingId=6363F56B0923DBCB',
        trophy: 'get-started-querying-with-transact-sql.svg',
        description: [
          {id: 1, description: 'Introducción a Transact-SQL'},
          {id: 2, description: 'Ordenación y filtrado de resultados en T-SQL'},
          {id: 3, description: 'Combinación de varias tablas con JOIN en T-SQL'},
          {id: 4, description: 'Escritura de subconsultas en T-SQL'},
          {id: 5, description: 'Modificación de datos con T-SQL'}
        ]        
      },    
      {
        id:3, 
        course: 'Escritura de consultas Transact-SQL avanzadas',
        school: 'Microsoft',
        date: '05/8/2025',
        link: 'https://learn.microsoft.com/api/achievements/share/es-es/JosephSuarezHuaira-0749/7KWQT6MZ?sharingId=6363F56B0923DBCB',
        trophy: 'transact-sql-write-queries.svg',
        description: [
          {id: 1, description: 'Creación de tablas, vistas y objetos temporales'},
          {id: 2, description: 'Combinación de los resultados de la consulta con operadores de conjuntos'},
          {id: 3, description: 'Escritura de consultas que usan funciones de ventana'},
          {id: 4, description: 'Transformación de datos mediante la implementación de pivot, unpivot, rollup y cube'}        
        ]         
      },
      {
        id:4, 
        course: 'Introducción a C#, parte 1',
        school: 'Microsoft',
        date: '10/8/2025',
        link: 'https://learn.microsoft.com/api/achievements/share/es-es/JosephSuarezHuaira-0749/K62XY6MB?sharingId=6363F56B0923DBCB',
        trophy: 'get-started-c-sharp-part-1.svg',
        description: [
          {id: 1, description: 'Escritura de código de C# por primera vez'},
          {id: 2, description: 'Aplicación de formato de cadena básico en C#'},
          {id: 3, description: 'Operaciones básicas con C#'},
          {id: 4, description: 'Proyecto guiado: cálculo e impresión de calificaciones de los alumnos'},        
          {id: 5, description: 'Proyecto guiado: cálculo del GPA final'}        
        ]         
      },
      {
        id:5, 
        course: 'Introducción a C#, parte 2',
        school: 'Microsoft',
        date: '10/8/2025',
        link: 'https://learn.microsoft.com/api/achievements/share/es-es/JosephSuarezHuaira-0749/2DFUH8DV?sharingId=6363F56B0923DBCB',
        trophy: 'get-started-c-sharp-part-2.svg',
        description: [
          {id: 1, description: 'Instrucciones "if", "else" y "else if" en C#'},
          {id: 2, description: 'Almacenamiento e iteración de secuencias, instrucción “foreach” en C#'},        
          {id: 3, description: 'Creación de código legible con convenciones en C#'},        
          {id: 4, description: 'Desarrollo de estructuras foreach e if-elseif-else, datos de matriz en C#'}
        ]         
      },
      {
        id:6, 
        course: 'Introducción a C#, parte 3',
        school: 'Microsoft',
        date: '14/8/2025',
        link: 'https://learn.microsoft.com/api/achievements/share/es-mx/JosephSuarezHuaira-0749/8Z6Y2G9W?sharingId=6363F56B0923DBCB',
        trophy: 'add-logic-c-sharp-console-applications.svg',
        description: [
          {id: 1, description: 'Expresiones booleanas en C#'},
          {id: 2, description: 'Lógica y ámbito de variables mediante bloques de código en C#'},        
          {id: 3, description: 'Ramificación del flujo mediante Switch Case en C#'},        
          {id: 4, description: 'Iteración mediante la instrucción for en C#'},
          {id: 4, description: 'Bucle mediante instrucciones do-while y while en C#'},
          {id: 4, description: 'Proyecto guiado: estructuras de bucle y bifurcación condicional en C#'},
          {id: 4, description: 'Proyecto desafío: bifurcación y bucle en C#'}
        ]         
      }                                   
    ];

    $scope.arr_skill_frontend = [
      {description: 'HTML5', level: 'Avanzado', range:'s2h-anim-100', score: 100},
      {description: 'CSS3 / Flexbox / Grid- Sass / SCSS', level: 'Avanzado', range:'s2h-anim-100', score: 100},
      {description: 'Angular (v2+ a v15+)', level: 'Avanzado', range:'s2h-anim-90', score: 90},
      {description: 'AngularJS', level: 'Avanzado', range:'s2h-anim-100', score: 100},
      {description: 'TypeScript', level: 'Avanzado', range:'s2h-anim-90', score: 90},
      {description: 'JavaScript (ES6+)', level: 'Avanzado', range:'s2h-anim-100', score: 100},
      {description: 'GitHub / Azure DevOps / GitLab', level: 'Intermedio', range:'s2h-anim-75', score: 75},      
      {description: 'JQuery', level: 'Intermedio', range:'s2h-anim-75', score: 75},
      {description: 'Bootstrap', level: 'Avanzado', range:'s2h-anim-90', score: 90}
    ];

    $scope.arr_skill_backend = [
      {description: 'Node.js + Express.js', level: 'Avanzado', range:'s2h-anim-80', score: 80},
      {description: 'Sequelize (Node.js)', level: 'Intermedio', range:'s2h-anim-75', score: 75},
      {description: 'C# (.NET)', level: 'Avanzado', range:'s2h-anim-90', score: 90},
      {description: '.NET 6 - .NET 8 (Web API, Minimal API, MVC)', level: 'Avanzado', range:'s2h-anim-80', score: 80},
      {description: 'ASP.NET Core', level: 'Avanzado', range:'s2h-anim-80', score: 80},
      {description: 'RESTful APIs (CRUD completo)', level: 'Avanzado', range:'s2h-anim-90', score: 90},
      {description: 'JWT (Autenticación basada en tokens)', level: 'Avanzado', range:'s2h-anim-90', score: 90},
      {description: 'Swagger / OpenAPI (Documentación de APIs)', level: 'Avanzado', range:'s2h-anim-100', score: 100},
      {description: 'SQL Server (T-SQL)', level: 'Avanzado', range:'s2h-anim-90', score: 90},  
      {description: 'PostgreSQL (PL/pgSQL)', level: 'Intermedio', range:'s2h-anim-75', score: 75},
      {description: 'Oracle SQL Developer (PL-SQL)', level: 'Intermedio', range:'s2h-anim-75', score: 75},
      {description: 'MongoDB', level: 'Intermedio', range:'s2h-anim-75', score: 75},
      {description: 'Agile (Scrum, Kanban)', level: 'Intermedio', range:'s2h-anim-75', score: 75},  
      {description: 'CI/CD', level: 'Intermedio', range:'s2h-anim-75', score: 75} 
    ];    
  

    // FUNCIONES DE LA WEB
    //================================================================
    
    $scope.changeSkill = function(parameter) {
      if (parameter == 'previous') {
        if ($scope.obj_skill.start - 2 >= 0) {
          $scope.obj_skill.start = $scope.obj_skill.start - 2;
          $scope.obj_skill.end = $scope.obj_skill.end -2;          
        }
      }
      else if (parameter == 'next') {
        if (($scope.obj_skill.end + 2)  <= $scope.arr_learn_microsoft.length) {
          $scope.obj_skill.start = $scope.obj_skill.start + 2;
          $scope.obj_skill.end = $scope.obj_skill.end + 2;          
        }
      }
    };

    $scope.changeBackend = function(parameter) {
      if (parameter == 'previous') {
        if ($scope.obj_backend.start - 5 >= 0) {
          $scope.obj_backend.start = $scope.obj_backend.start - 5;
          $scope.obj_backend.end = $scope.obj_backend.end - 5;          
        }
      }
      else if (parameter == 'next') {
        if (($scope.obj_backend.end + 1) <= $scope.arr_skill_backend.length) {
          $scope.obj_backend.start = $scope.obj_backend.start + 5;
          $scope.obj_backend.end = $scope.obj_backend.end + 5;          
        }
      }
    };    

    $scope.changeFrontEnd = function(parameter) {
      if (parameter == 'previous') {
        if ($scope.obj_frontend.start - 5 >= 0) {
          $scope.obj_frontend.start = $scope.obj_frontend.start - 5;
          $scope.obj_frontend.end = $scope.obj_frontend.end - 5;          
        }
      }
      else if (parameter == 'next') {

        if (($scope.obj_frontend.end + 1) <= $scope.arr_skill_frontend.length) {
          $scope.obj_frontend.start = $scope.obj_frontend.start + 5;
          $scope.obj_frontend.end = $scope.obj_frontend.end + 5;          
        }
     
      }
    };       

    $scope.changePanel = function(parameter) {
      $scope.obj_page.panel = parameter;      
    };

  });
})();
// Controlador de la web =========================== fin
