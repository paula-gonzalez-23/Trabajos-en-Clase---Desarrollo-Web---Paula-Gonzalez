import { Header } from './components/Header';
import { Footer } from './components/Footer';


const NOMBRE_SITIO = 'Café Andino';
const ANIO_ACTUAL = new Date().getFullYear(); // se calcula una vez, fuera del componente

/**
 * COMPONENTE RAÍZ: define el layout general (encabezado, página y pie)
 * y envía a cada componente sus datos por props.
 */
function App() {
  return (
    // Fragmento <> </>: agrupa varios elementos sin agregar un <div> extra
    <>
      <Header
        nombreSitio={NOMBRE_SITIO}
        version="2.0"
        enlaces={[
          { texto: 'Inicio', href: '#inicio' },
          { texto: 'Menú', href: '#menu' },
          { texto: 'Contacto', href: '#contacto' },
        ]}
      />

      <main>
        {/* Aquí va el contenido principal de tu página */}
      </main>
      
      <Footer
        nombreSitio={NOMBRE_SITIO}
        enlaces={[
          { texto: 'Sobre Nosotros', href: '#nosotros' },
          { texto: 'Preguntas Frecuentes', href: '#preguntas' },
          { texto: 'Política de privacidad', href: '#privacidad' },
        ]}
        copyright={`© ${ANIO_ACTUAL} Café Andino. Todos los derechos reservados.`}
      />


    </>
  );
}

export default App;
