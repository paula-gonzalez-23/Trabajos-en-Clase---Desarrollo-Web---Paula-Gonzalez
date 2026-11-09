// @ts-expect-error CSS imports are handled by the bundler, not TypeScript.
import './Footer.css';

/** Un enlace del footer. */
interface EnlaceFooter {
  texto: string;
  href: string;
}

interface FooterProps {
  nombreSitio: string;
  enlaces: EnlaceFooter[];
  copyright: string;
}

export function Footer({ nombreSitio, enlaces, copyright }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer__contenido">
        <div className="footer__identidad">
          <h2 className="footer__titulo">{nombreSitio}</h2>
            <p className="footer__descripcion">
              Un buen café, un gran momento.
            </p>
        </div>

        <nav aria-label="Navegación del pie de página">
          <ul className="footer__menu">
            {enlaces.map((enlace) => (
              <li key={enlace.href}>
                <a href={enlace.href}>{enlace.texto}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="footer__inferior">
        <p>{copyright}</p>
      </div>
    </footer>
  );
}