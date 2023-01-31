import './App.css';
import { Proyecto } from './components/Proyecto.jsx';
import { Navigation } from './components/Navigation.jsx';
import { Header } from './components/Header.jsx';
import { Card } from './components/Card.jsx';
import { Link, Route, Router, Routes } from 'react-router-dom';

const Home = () => <Header titulo = "Curriculum"></Header>;
const Contact = () => <Header titulo = "Contacto"></Header>;

function App() {
  const jimg = {url : "2DSpaceShip", alt : "Imagen de un proyecto realizado en Unity"};

  

  return (
    
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

      <div className='perfil'></div>

      <div className='flex-container'>

        <Card title="Perfil"
              text={[{ 'extra' : "Programador con 1 año de experiencia en desarrollo web y backend." +
                                "Apasionado por la programacion y en el aprendizaje constante de nuevas tecnologías." +
                                "Busco una plaza donde desarrollar mis actividades de manera concreta y eficiente, " +
                                "teniendo como finalidad el trabajo en equipo y el aprendizaje permanente para poder mejorar mi desempeño diario.",
             
                    }]}
                    icon={false}>

        </Card>
     
        
        <Card title="Estudios"
              text={[{'bold' : 'Bachiller con orientación en tecnología',
                      'italic' : 'Escuela de educación técnica Nº2 "Luciano Fortabat".',
                      'extra': false,
             
                    },
                      
                      {'bold' : 'Técnico superior en análisis de sistemas',
                        'italic' : 'Instituto superior en formación técnica Nº 130 (ISFT 130).',
                        'extra' : 'Carrera de analista de sistemas, 3 años de duración. Primer y segundo año completo, tercero incompleto.',
                 
                      },
                      {'bold' : 'Técnico Universitario en Desarrollo de Aplicaciones Informáticas (TUDAI)',
                      'italic' : 'Facultad de ciencias exactas (En curso).',
                      'extra' : false ,
         
                      },
                      {'bold' : 'Bootcamps / Cursos desarrollador full stack:',
                      'italic' : 'Argentina Programa 4.0 - SoyHenry. (En curso).',
                      'extra' : false,
             
                      }
                    ]
                      
                    }
                    icon={false}>
                  
        </Card>

        <Card title="Experiencia laboral"
              text={[{'bold' : 'Desarrollador web con PHP',
                      'italic' : '2020-2021 SC3 Sistemas.',
                      'extra': 'Desarrollar nuevas funcionalidades a pedido de los clientes, solucionar bugs del sistema y manipular datos utilizando MySQL.'+
                              ' Tecnologías utilizadas: HTML, CSS, PHP, MySQL, JavaScript, Bootstrap.',
                   
                      },
                      
                      {'bold' : 'Servicio de mensajería',
                        'italic' : '2021-Actualidad Cuenta propia.',
                        'extra' : 'Trabajo por cuenta propia brindando un servicio de mensajería a distintos comercios en mi ciudad.',
                        
                      }
                    ]
                      
                    }
                    icon={false}>

        </Card>

        <Card title="Habilidades"
              text={[{'bold' : 'JavaScript',
                      'iconContent': {'type' : 'skill',
                                    'level' : 'w85'
                                    }
                      },
                      {'bold' : 'PHP',
                      'iconContent': {'type' : 'skill',
                                    'level' : 'w85'
                                    }
                      },
                      {'bold' : 'C#',
                      'iconContent': {'type' : 'skill',
                                    'level' : 'w65'
                                    }
                      },
                    ]
                    }
              icon={true}>

        </Card>

     

        <Proyecto img = { jimg }
                  title = "Proyecto N°2"
                  subtitle = 'Proyecto con .NET y C#'
                  description = "CRUD basado en sistema de arbitraje de equipos de futbol, realizado con .NET y C#."
        />
      </div>
      <footer>Este es el footer</footer>
    </div>
  );
}

export default App;